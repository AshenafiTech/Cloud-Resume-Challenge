# Ashenafi Godana - Portfolio Website

> Personal portfolio showcasing my journey as a Backend Developer & Cloud Engineer

## 🚀 About This Portfolio

This is my personal portfolio website where I showcase my projects, share my expertise in cloud technologies, and connect with the developer community. As an AWS Cloud Captain and backend developer, I'm passionate about building scalable systems and mentoring others in their tech journey.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Backend**: AWS Lambda (Python)
- **Database**: DynamoDB
- **API**: API Gateway
- **Infrastructure**: AWS SAM
- **Deployment**: S3 + CloudFront + Route 53

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

## 🌟 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Project Showcase**: Detailed project presentations with live demos
- **Blog Integration**: Technical articles and insights
- **Contact Form**: Easy way to get in touch
- **Visitor Counter**: Real-time visitor tracking
- **Performance Optimized**: Fast loading and smooth interactions

## ☁️ Cloud Resume Challenge

This portfolio follows the [Cloud Resume Challenge](https://cloudresumechallenge.dev/) requirements:

- ✅ Static website (S3 + CloudFront)
- ✅ HTTPS (ACM Certificate)
- ✅ Custom domain (Route 53)
- ✅ Visitor counter (DynamoDB + Lambda + API Gateway)
- ✅ Infrastructure as Code (AWS SAM)
- ✅ CI/CD Pipeline (GitHub Actions)
- ✅ Unit tests (pytest)

## 📚 Documentation

- [Deployment Guide](docs/DEPLOYMENT.md) - Complete deployment instructions
- [API Documentation](backend/README.md) - Backend API details

## 📧 Contact

- **Email**: ashenafigodanaj@gmail.com
- **LinkedIn**: [linkedin.com/in/ashenafig](https://linkedin.com/in/ashenafig)
- **GitHub**: [github.com/AshenafiTech](https://github.com/AshenafiTech)

---

*Built with ❤️ by Ashenafi Godana*