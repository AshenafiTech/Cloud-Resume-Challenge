import json
import pytest
import boto3
from moto import mock_dynamodb
import os
import sys

# Add backend directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from app import lambda_handler

@mock_dynamodb
def test_visitor_count_new():
    # Setup mock DynamoDB
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.create_table(
        TableName='test-visitor-count',
        KeySchema=[{'AttributeName': 'id', 'KeyType': 'HASH'}],
        AttributeDefinitions=[{'AttributeName': 'id', 'AttributeType': 'S'}],
        BillingMode='PAY_PER_REQUEST'
    )
    
    os.environ['TABLE_NAME'] = 'test-visitor-count'
    os.environ['CORS_ORIGIN'] = 'https://example.com'
    
    # Test first visit
    response = lambda_handler({}, {})
    
    assert response['statusCode'] == 200
    body = json.loads(response['body'])
    assert body['count'] == 1

@mock_dynamodb
def test_visitor_count_increment():
    # Setup mock DynamoDB with existing count
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.create_table(
        TableName='test-visitor-count',
        KeySchema=[{'AttributeName': 'id', 'KeyType': 'HASH'}],
        AttributeDefinitions=[{'AttributeName': 'id', 'AttributeType': 'S'}],
        BillingMode='PAY_PER_REQUEST'
    )
    
    # Add existing count
    table.put_item(Item={'id': 'visitor-count', 'count': 5})
    
    os.environ['TABLE_NAME'] = 'test-visitor-count'
    
    # Test increment
    response = lambda_handler({}, {})
    
    assert response['statusCode'] == 200
    body = json.loads(response['body'])
    assert body['count'] == 6