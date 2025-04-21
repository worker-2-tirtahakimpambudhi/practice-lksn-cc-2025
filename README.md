# LKS Nasional Cloud Computing - Learning Repository

This project is a learning repository for preparing for the **LKS National Cloud Computing Competition**.  
It contains examples and templates for understanding AWS services such as Amplify, CloudFormation, IoT Core, and Lambda.

## Project Structure

```
├── amplify
│   └── (Files or configurations for AWS Amplify Project)
├── cloudformation
│   ├── example-template-deploy-ec2.yaml   # Template to deploy an EC2 instance
│   ├── example-template-ec2-vpc.yaml      # Template to deploy an EC2 instance with VPC configuration
│   └── example-template-vpc.yaml          # Template to create a basic VPC
├── iot
│   └── (Scripts or configurations for AWS IoT Core)
├── lambda
│   └── (Source code for AWS Lambda functions)
└── README.md
```

## Folder Descriptions

- **amplify/**  
  Contains configuration and files related to AWS Amplify projects for serverless fullstack deployments.

- **cloudformation/**  
  Contains CloudFormation YAML templates for deploying AWS infrastructure using Infrastructure as Code (IaC) practices.

- **iot/**  
  Contains scripts and configurations for AWS IoT services such as device communication and MQTT messaging.

- **lambda/**  
  Contains AWS Lambda function source codes for serverless computing.

## Project Objectives

- Learn Infrastructure as Code (IaC) with AWS CloudFormation.
- Build and manage serverless applications using AWS Amplify and Lambda.
- Understand AWS IoT Core service and device communication.
- Prepare for the LKS National Cloud Computing Competition.

## Requirements

- AWS Account
- AWS CLI installed
- Rain CLI installed (for CloudFormation template deployment)  
  > Rain CLI is a tool to simplify working with AWS CloudFormation templates.  
  > [Install Rain CLI](https://github.com/aws-cloudformation/rain)

- Git installed (optional)
- Code editor (e.g., VSCode)

## How to Use

1. **CloudFormation**
   - Ensure Rain CLI is installed.
   - Deploy CloudFormation templates using Rain CLI:
     ```bash
     rain deploy cloudformation/example-template-deploy-ec2.yaml
     ```
   - Alternatively, upload the YAML templates manually via AWS Management Console → CloudFormation → Create Stack.

2. **Amplify**
   - Go to AWS Amplify Console.
   - Follow the instructions to deploy the project located in the `amplify/` directory.

3. **Lambda**
   - Upload the function code to AWS Lambda Console.
   - Alternatively, deploy using AWS CLI or CI/CD pipelines.

4. **IoT**
   - Set up devices and certificates through AWS IoT Core.
   - Use the provided configuration or scripts in the `iot/` folder.

## Notes

- This project is for learning and practice purposes only, not intended for production environments.
- Always follow the latest rules and guidelines of the LKS National Cloud Computing competition.

---

Would you also like me to add a **"Setup Example"** section so beginners can quickly start from installing Rain CLI to deploying templates? 🚀  
(If yes, I can make it right after this!)Oke! Ini aku buatkan versi bahasa Inggris sekaligus aku tambahkan bagian *requirements* terkait **Rain CLI** untuk CloudFormation:  

---

# LKS Nasional Cloud Computing - Learning Project

This project is a learning repository for preparing for the **LKS National Cloud Computing Competition**.  
It contains examples and templates for understanding AWS services such as Amplify, CloudFormation, IoT Core, and Lambda.

## Project Structure

```
├── amplify
│   └── (Files or configurations for AWS Amplify Project)
├── cloudformation
│   ├── example-template-deploy-ec2.yaml   # Template to deploy an EC2 instance
│   ├── example-template-ec2-vpc.yaml      # Template to deploy an EC2 instance with VPC configuration
│   └── example-template-vpc.yaml          # Template to create a basic VPC
├── iot
│   └── (Scripts or configurations for AWS IoT Core)
├── lambda
│   └── (Source code for AWS Lambda functions)
└── README.md
```

## Folder Descriptions

- **amplify/**  
  Contains configuration and files related to AWS Amplify projects for serverless fullstack deployments.

- **cloudformation/**  
  Contains CloudFormation YAML templates for deploying AWS infrastructure using Infrastructure as Code (IaC) practices.

- **iot/**  
  Contains scripts and configurations for AWS IoT services such as device communication and MQTT messaging.

- **lambda/**  
  Contains AWS Lambda function source codes for serverless computing.

## Project Objectives

- Learn Infrastructure as Code (IaC) with AWS CloudFormation.
- Build and manage serverless applications using AWS Amplify and Lambda.
- Understand AWS IoT Core service and device communication.
- Prepare for the LKS National Cloud Computing Competition.

## Requirements

- AWS Account
- AWS CLI installed
- Rain CLI installed (for CloudFormation template deployment)  
  > Rain CLI is a tool to simplify working with AWS CloudFormation templates.  
  > [Install Rain CLI](https://github.com/aws-cloudformation/rain)

- Git installed (optional)
- Code editor (e.g., VSCode)

## How to Use

1. **CloudFormation**
   - Ensure Rain CLI is installed.
   - Deploy CloudFormation templates using Rain CLI:
     ```bash
     rain deploy cloudformation/example-template-deploy-ec2.yaml
     ```
   - Alternatively, upload the YAML templates manually via AWS Management Console → CloudFormation → Create Stack.

2. **Amplify**
   - Go to AWS Amplify Console.
   - Follow the instructions to deploy the project located in the `amplify/` directory.

3. **Lambda**
   - Upload the function code to AWS Lambda Console.
   - Alternatively, deploy using AWS CLI or CI/CD pipelines.

4. **IoT**
   - Set up devices and certificates through AWS IoT Core.
   - Use the provided configuration or scripts in the `iot/` folder.

