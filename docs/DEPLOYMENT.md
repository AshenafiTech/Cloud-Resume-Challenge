# Cloud Resume Challenge Deployment Guide

This guide walks you through deploying your portfolio website following the Cloud Resume Challenge requirements.

## 🏗️ Architecture

- **Frontend**: React app hosted on S3 + CloudFront
- **Backend**: Lambda function with API Gateway
- **Database**: DynamoDB for visitor counter
- **DNS**: Route 53 (manual setup required)
- **SSL**: ACM Certificate
- **IaC**: AWS SAM (CloudFormation)
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

1. **AWS Account** with appropriate permissions
2. **Domain name** (purchase from Route 53 or external registrar)
3. **AWS CLI** configured with credentials
4. **SAM CLI** installed
5. **Node.js 18+** and npm
6. **Python 3.9+** for Lambda function

### Install Required Tools

```bash
# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Install SAM CLI
pip install aws-sam-cli

# Configure AWS credentials
aws configure
```

## 🚀 Deployment Steps

### 1. Manual Setup (One-time)

#### Domain Setup
1. Purchase domain from Route 53 or configure external domain
2. Create hosted zone in Route 53 if using external registrar
3. Note your domain name for deployment

### 2. Local Deployment

```bash
# Clone and navigate to project
git clone <your-repo>
cd learn-shine-showcase

# Deploy everything with one command
./deploy.sh your-domain.com
```

### 3. GitHub Actions Setup

#### Required Secrets
Add these secrets to your GitHub repository:

```
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
DOMAIN_NAME=your-domain.com
API_GATEWAY_URL=https://api-id.execute-api.us-east-1.amazonaws.com/prod
S3_BUCKET_NAME=your-domain.com-website
CLOUDFRONT_DISTRIBUTION_ID=E1234567890ABC
```

#### Get Values After First Deployment
```bash
# Get API Gateway URL
aws cloudformation describe-stacks --stack-name cloud-resume-challenge \
  --query 'Stacks[0].Outputs[?OutputKey==`ApiGatewayUrl`].OutputValue' --output text

# Get S3 Bucket Name
aws cloudformation describe-stacks --stack-name cloud-resume-challenge \
  --query 'Stacks[0].Outputs[?OutputKey==`S3BucketName`].OutputValue' --output text

# Get CloudFront Distribution ID
aws cloudformation describe-stacks --stack-name cloud-resume-challenge \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' --output text
```

### 4. DNS Configuration

After deployment, configure DNS:

```bash
# Get CloudFront domain name
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID \
  --query 'Distribution.DomainName' --output text

# Create Route 53 records (replace with your values)
aws route53 change-resource-record-sets --hosted-zone-id YOUR_ZONE_ID --change-batch '{
  "Changes": [{
    "Action": "CREATE",
    "ResourceRecordSet": {
      "Name": "your-domain.com",
      "Type": "A",
      "AliasTarget": {
        "DNSName": "d123456789.cloudfront.net",
        "EvaluateTargetHealth": false,
        "HostedZoneId": "Z2FDTNDATAQYW2"
      }
    }
  }]
}'
```

## 🧪 Testing

### Run Tests Locally
```bash
cd tests
pip install -r requirements.txt
python -m pytest test_visitor_count.py -v
```

### Test API Endpoint
```bash
curl https://your-api-url/prod/visitor-count
```

## 📊 Monitoring

### CloudWatch Logs
- Lambda function logs: `/aws/lambda/prod-visitor-count`
- API Gateway logs: Enable in API Gateway console

### DynamoDB
- Table name: `prod-visitor-count`
- Monitor read/write capacity and throttling

## 🔧 Troubleshooting

### Common Issues

1. **Certificate validation hanging**
   - Ensure DNS records are properly configured
   - Check Route 53 hosted zone settings

2. **CORS errors**
   - Verify API Gateway CORS configuration
   - Check Lambda function CORS headers

3. **404 errors on refresh**
   - CloudFront custom error responses configured for SPA

4. **Lambda timeout**
   - Check DynamoDB permissions
   - Verify environment variables

### Debug Commands
```bash
# Check stack status
aws cloudformation describe-stacks --stack-name cloud-resume-challenge

# View Lambda logs
aws logs tail /aws/lambda/prod-visitor-count --follow

# Test Lambda locally
sam local start-api
curl http://localhost:3000/visitor-count
```

## 💰 Cost Optimization

- S3: ~$0.50/month for static hosting
- CloudFront: Free tier covers most personal sites
- Lambda: Free tier covers 1M requests/month
- DynamoDB: Free tier covers 25GB storage
- Route 53: $0.50/month per hosted zone

**Estimated monthly cost: $1-5 for personal portfolio**

## 🔄 Updates

### Frontend Updates
Push to main branch - GitHub Actions will automatically:
1. Build the React app
2. Deploy to S3
3. Invalidate CloudFront cache

### Backend Updates
Push to main branch - GitHub Actions will automatically:
1. Run tests
2. Deploy Lambda function via SAM

## 📚 Cloud Resume Challenge Requirements ✅

- [x] **HTML/CSS/JS**: React TypeScript application
- [x] **Static Website**: S3 + CloudFront
- [x] **HTTPS**: CloudFront + ACM certificate
- [x] **DNS**: Route 53 (manual setup)
- [x] **Visitor Counter**: DynamoDB + Lambda + API Gateway
- [x] **Database**: DynamoDB
- [x] **API**: API Gateway + Lambda
- [x] **Python**: Lambda function in Python
- [x] **Tests**: pytest with moto for mocking
- [x] **Infrastructure as Code**: AWS SAM
- [x] **Source Control**: Git + GitHub
- [x] **CI/CD**: GitHub Actions

## 🎯 Next Steps

1. Add monitoring and alerting
2. Implement caching strategies
3. Add more API endpoints
4. Set up staging environment
5. Add performance monitoring
6. Implement security headers