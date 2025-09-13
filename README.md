# Cloud Resume Challenge - Ashenafi Godana

> A serverless portfolio website built following the Cloud Resume Challenge requirements

## ☁️ About This Project

This is my implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/) - a hands-on project that demonstrates cloud skills by building a resume website using AWS services. The challenge combines frontend development, cloud infrastructure, APIs, databases, and DevOps practices.

## 🏗️ Architecture

**Frontend (Static Website)**
- React 18 + TypeScript + Tailwind CSS
- Hosted on S3 with CloudFront CDN
- HTTPS via ACM Certificate
- Custom domain with Route 53

**Backend (Serverless API)**
- Python Lambda function for visitor counter
- API Gateway for REST endpoints
- DynamoDB for data persistence
- CORS enabled for cross-origin requests

**Infrastructure & DevOps**
- AWS SAM for Infrastructure as Code
- GitHub Actions for CI/CD pipeline
- pytest for unit testing
- Automated deployment and testing

## 📁 Project Structure

```
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   └── assets/            # Static assets
├── backend/               # Lambda function code
├── infrastructure/        # AWS SAM templates
├── scripts/              # Deployment and utility scripts
├── tests/                # Unit tests
├── docs/                 # Documentation
└── .github/workflows/    # CI/CD pipelines
```

## 🏃♂️ Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start local API (requires SAM CLI)
./scripts/local-dev.sh
```

### Cloud Deployment
```bash
# Deploy to AWS (requires AWS CLI + SAM CLI)
./scripts/deploy.sh your-domain.com
```

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint

# Custom scripts
./scripts/deploy.sh        # Deploy to AWS
./scripts/local-dev.sh     # Local development with API
```

## 🎯 Cloud Resume Challenge Requirements

| Requirement | Implementation | Status |
|-------------|----------------|--------|
| **Certification** | AWS Certified Cloud Practitioner & Solutions Architect | ✅ |
| **HTML/CSS/JS** | React TypeScript application | ✅ |
| **Static Website** | S3 bucket with static website hosting | ✅ |
| **HTTPS** | CloudFront distribution with ACM certificate | ✅ |
| **DNS** | Route 53 hosted zone and domain | ✅ |
| **Database** | DynamoDB table for visitor counter | ✅ |
| **API** | API Gateway + Lambda function | ✅ |
| **Python** | Lambda function written in Python | ✅ |
| **Tests** | Unit tests with pytest and moto | ✅ |
| **Infrastructure as Code** | AWS SAM (CloudFormation) | ✅ |
| **Source Control** | Git repository on GitHub | ✅ |
| **CI/CD** | GitHub Actions workflow | ✅ |

## 🚀 Key Features

**Visitor Counter**
- Real-time visitor tracking using DynamoDB
- Serverless API with Lambda and API Gateway
- CORS-enabled for secure cross-origin requests

**Performance & Security**
- Global CDN with CloudFront
- SSL/TLS encryption
- Optimized static asset delivery

**DevOps Best Practices**
- Automated testing and deployment
- Infrastructure as Code
- Environment-specific configurations

## 💰 Cost Analysis

**Monthly AWS Costs (estimated)**
- S3 Static Hosting: ~$0.50
- CloudFront CDN: Free tier covers most traffic
- Lambda Functions: Free tier (1M requests/month)
- DynamoDB: Free tier (25GB storage)
- Route 53: $0.50/hosted zone
- **Total: ~$1-5/month**

## 📚 Documentation

- [Complete Deployment Guide](docs/DEPLOYMENT.md)
- [Architecture Deep Dive](docs/ARCHITECTURE.md)
- [API Documentation](backend/README.md)

## 🎓 Skills Demonstrated

- **Cloud Architecture**: Serverless design patterns
- **Infrastructure as Code**: AWS SAM/CloudFormation
- **DevOps**: CI/CD pipelines, automated testing
- **Frontend Development**: Modern React with TypeScript
- **Backend Development**: Python Lambda functions
- **Database Design**: NoSQL with DynamoDB
- **Security**: HTTPS, CORS, IAM policies

## 📧 Connect

- **Portfolio**: [ashenafigodana.com](https://ashenafigodana.com)
- **LinkedIn**: [linkedin.com/in/ashenafig](https://linkedin.com/in/ashenafig)
- **GitHub**: [github.com/AshenafiTech](https://github.com/AshenafiTech)
- **Email**: ashenafigodanaj@gmail.com

---

*Cloud Resume Challenge Implementation by Ashenafi Godana*