#!/bin/bash

# Cloud Resume Challenge Deployment Script
set -e

echo "🚀 Starting Cloud Resume Challenge Deployment"

# Check if required tools are installed
command -v sam >/dev/null 2>&1 || { echo "❌ SAM CLI is required but not installed. Aborting." >&2; exit 1; }
command -v aws >/dev/null 2>&1 || { echo "❌ AWS CLI is required but not installed. Aborting." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed. Aborting." >&2; exit 1; }

# Set variables
DOMAIN_NAME=${1:-"ashenafigodana.com"}
STACK_NAME="cloud-resume-challenge"

echo "📋 Domain: $DOMAIN_NAME"
echo "📋 Stack: $STACK_NAME"

# Run tests
echo "🧪 Running tests..."
cd tests
pip install -r requirements.txt
python -m pytest test_visitor_count.py -v
cd ..

# Build and deploy infrastructure
echo "🏗️  Building SAM application..."
cd infrastructure
sam build

echo "🚀 Deploying infrastructure..."
sam deploy --parameter-overrides DomainName=$DOMAIN_NAME
cd ..

# Get outputs
echo "📊 Getting stack outputs..."
API_URL=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query 'Stacks[0].Outputs[?OutputKey==`ApiGatewayUrl`].OutputValue' --output text)
S3_BUCKET=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query 'Stacks[0].Outputs[?OutputKey==`S3BucketName`].OutputValue' --output text)
CLOUDFRONT_ID=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' --output text)

echo "📋 API URL: $API_URL"
echo "📋 S3 Bucket: $S3_BUCKET"
echo "📋 CloudFront ID: $CLOUDFRONT_ID"

# Build frontend
echo "🏗️  Building frontend..."
export VITE_API_URL=$API_URL
npm install
npm run build

# Deploy frontend
echo "🚀 Deploying frontend to S3..."
aws s3 sync dist/ s3://$S3_BUCKET --delete

echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"

echo "✅ Deployment complete!"
echo "🌐 Website URL: https://$DOMAIN_NAME"