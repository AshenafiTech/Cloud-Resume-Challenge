import json
import boto3
import os
from decimal import Decimal

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(os.environ['TABLE_NAME'])
    try:
        # Get current count
        response = table.get_item(Key={'id': 'visitor-count'})
        
        if 'Item' in response:
            current_count = int(response['Item']['count'])
        else:
            current_count = 0
        
        # Increment count
        new_count = current_count + 1
        
        # Update count in DynamoDB
        table.put_item(Item={'id': 'visitor-count', 'count': new_count})
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': os.environ.get('CORS_ORIGIN', '*'),
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'count': new_count})
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': os.environ.get('CORS_ORIGIN', '*')
            },
            'body': json.dumps({'error': str(e)})
        }