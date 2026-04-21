<!-- Add banner here -->

![Project Preview](docs/aurapan-shop-banner-1.jpg)

# Aurapan

<!-- Describe your project in brief -->

<!-- [![deploy-manifests](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-manifests.yaml/badge.svg)](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-manifests.yaml) -->

[![deploy-client](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-client.yaml/badge.svg)](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-client.yaml)
[![deploy-user](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-user.yml/badge.svg)](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-user.yml)
[![deploy-product](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-product.yaml/badge.svg)](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-product.yaml)
[![deploy-order](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-order.yaml/badge.svg)](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-order.yaml)
[![deploy-payment](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-payment.yaml/badge.svg)](https://github.com/thasup/microservices-ecommerce/actions/workflows/deploy-payment.yaml)

Aurapan is a women's clothing e-commerce website that features a fully operational **microservices architecture**. Built on the **Next.js** framework for the client-side, while the server-side is developed with **TypeScript and Express** framework, the website is developed on the **Google Cloud Platform** environment and integrated with automation testing through **GitHub Action** workflows. Deployed on a **DigitalOcean** cluster with a Let's Encrypt certificate, Aurapan delivers a secure and seamless shopping experience.

# Table of contents

- [Aurapan](#aurapan)
- [Table of contents](#table-of-contents)
- [Demo](#demo)
- [Features](#features)
- [Usage](#usage)
  - [Sign up for an account](#sign-up-for-an-account)
  - [Purchase products](#purchase-products)
    - [Pay with Stripe method (recommended)](#pay-with-stripe-method-recommended)
    - [Pay with the PayPal method](#pay-with-the-paypal-method)
  - [Receive an order](#receive-an-order)
  - [Access the admin dashboard](#access-the-admin-dashboard)
  - [Add a product to your wishlist](#add-a-product-to-your-wishlist)
  - [Perform CRUD operations on the product database (create, update, delete)](#perform-crud-operations-on-the-product-database-create-update-delete)
- [Installation](#installation)
  - [Running on Google Cloud Platform](#running-on-google-cloud-platform)
  - [Running on Docker Desktop](#running-on-docker-desktop)
- [Setup Kubernetes Secret](#setup-kubernetes-secret)
- [Deployment](#deployment)
  - [Deploy on DigitalOcean](#deploy-on-digitalocean)
- [Technology](#technology)
- [Disclaimer](#disclaimer)

# Demo

# 🛍️ Aurapan E-Commerce — Cloud Native Microservices on Azure

> A production-grade, cloud-native e-commerce platform built with a microservices architecture, deployed on **Microsoft Azure** using **AKS**, **Terraform IaC**, **Azure Pipelines CI/CD**, **Azure Container Registry**, and **Azure Key Vault**.

---

## 📌 Project Overview

Aurapan is a full-stack e-commerce web application for women's clothing. The project was originally built by [thasup](https://github.com/thasup/microservices-ecommerce) and re-architected and deployed to **Azure** as a DevOps engineering practice project.

The deployment demonstrates real-world production DevOps skills including:

- Infrastructure as Code with **Terraform**
- Container orchestration with **Azure Kubernetes Service (AKS)**
- CI/CD automation with **Azure DevOps Pipelines**
- Secrets management with **Azure Key Vault + External Secrets Operator**
- TLS termination with **cert-manager + Let's Encrypt**
- Autoscaling with **Horizontal Pod Autoscalers (HPA)**
- Observability with **Azure Monitor + Prometheus + Grafana**

---

## 🏗️ Architecture

```
                        ┌─────────────────────────────────────┐
                        │         Azure Kubernetes Service      │
                        │                                       │
  User Browser  ──────► │  Ingress-NGINX (Load Balancer)       │
                        │         │                             │
                        │   ┌─────┴──────────────────────┐     │
                        │   │         Services            │     │
                        │   ├─────────────────────────────┤     │
                        │   │  client-srv   (Next.js)     │     │
                        │   │  user-srv     (Node/TS)     │     │
                        │   │  product-srv  (Node/TS)     │     │
                        │   │  order-srv    (Node/TS)     │     │
                        │   │  payment-srv  (Node/TS)     │     │
                        │   │  expiration-srv (Node/TS)   │     │
                        │   └─────────────────────────────┘     │
                        │         │           │                  │
                        │   ┌─────┴───┐  ┌───┴──────┐          │
                        │   │  NATS   │  │ MongoDB  │          │
                        │   │Streaming│  │ (x4 DBs) │          │
                        │   └─────────┘  └──────────┘          │
                        └─────────────────────────────────────── ┘
                                         │
                        ┌────────────────▼───────────────────────┐
                        │           Azure Services                │
                        │  ACR │ Key Vault │ Monitor │ DNS │ LB  │
                        └────────────────────────────────────────┘
```

---

## 🧱 Tech Stack

### Application

| Layer            | Technology                   |
| ---------------- | ---------------------------- |
| Frontend         | Next.js, React, TailwindCSS  |
| Backend Services | Node.js, Express, TypeScript |
| Database         | MongoDB (per service)        |
| Cache            | Redis                        |
| Message Bus      | NATS Streaming Server        |
| Payment          | Flutterwave                  |
| Auth             | JWT + Cookies                |

### DevOps & Infrastructure

| Tool                               | Purpose                             |
| ---------------------------------- | ----------------------------------- |
| **Azure Kubernetes Service (AKS)** | Container orchestration             |
| **Azure Container Registry (ACR)** | Docker image storage                |
| **Azure Pipelines**                | CI/CD automation                    |
| **Terraform**                      | Infrastructure as Code              |
| **Azure Key Vault**                | Secrets management                  |
| **External Secrets Operator**      | Key Vault → K8s secret sync         |
| **Ingress-NGINX**                  | Ingress controller + load balancing |
| **cert-manager**                   | TLS certificate automation          |
| **Helm**                           | Kubernetes package management       |
| **Azure Monitor**                  | Metrics and alerting                |
| **Log Analytics Workspace**        | Centralized logging                 |
| **Prometheus + Grafana**           | Application monitoring              |
| **HPA**                            | Horizontal Pod Autoscaling          |

---

## 📁 Directory Structure

```
aurapan-ecommerce/
│
├── azure-pipelines.yml                  ← Master CI/CD pipeline definition
├── .gitignore
├── README.md
│
├── .azure/                              ← Reusable Azure Pipeline templates
│   └── templates/
│       ├── build-service.yml            ← Build + test + push one service to ACR
│       ├── deploy-manifests.yml         ← kubectl apply all K8s manifests
│       └── terraform-apply.yml          ← Terraform init + apply
│
├── infra/                               ← All infrastructure code
│   │
│   ├── terraform/                       ← Azure IaC (Terraform)
│   │   ├── main.tf                      ← Provider config + remote state backend
│   │   ├── variables.tf                 ← Input variables
│   │   ├── outputs.tf                   ← Output values (AKS name, ACR URL etc.)
│   │   ├── acr.tf                       ← Azure Container Registry
│   │   ├── aks.tf                       ← AKS cluster + ACR role assignment
│   │   ├── keyvault.tf                  ← Azure Key Vault + secrets
│   │   ├── monitoring.tf                ← Log Analytics + diagnostic settings
│   │   ├── dns.tf                       ← Azure DNS zone
│   │   ├── storage.tf                   ← Terraform remote state storage
│   │   └── terraform.tfvars.example     ← Example variable values
│   │
│   ├── k8s/                             ← Base Kubernetes manifests (shared)
│   │   ├── client-depl.yaml
│   │   ├── expiration-depl.yaml
│   │   ├── expiration-redis-depl.yaml
│   │   ├── nats-depl.yaml
│   │   ├── order-depl.yaml
│   │   ├── order-mongo-depl.yaml
│   │   ├── payment-depl.yaml
│   │   ├── payment-mongo-depl.yaml
│   │   ├── product-depl.yaml
│   │   ├── product-mongo-depl.yaml
│   │   ├── user-depl.yaml
│   │   └── user-mongo-depl.yaml
│   │
│   ├── k8s-dev/                         ← Local development manifests
│   │   └── ingress-srv.yaml
│   │
│   ├── k8s-prod/                        ← Production manifests (Azure)
│   │   ├── ingress-srv.yaml             ← Ingress routing rules (Azure annotated)
│   │   ├── secret-store.yaml            ← ExternalSecrets → Azure Key Vault
│   │   ├── external-secret.yaml         ← Pulls JWT + Flutter keys from Key Vault
│   │   └── hpa/                         ← Horizontal Pod Autoscalers
│   │       ├── auth-hpa.yaml
│   │       ├── client-hpa.yaml
│   │       ├── order-hpa.yaml
│   │       └── product-hpa.yaml
│   │
│   └── issuer/                          ← cert-manager ClusterIssuers
│       ├── staging_issuer.yaml          ← Let's Encrypt staging
│       └── production_issuer.yaml       ← Let's Encrypt production
│
├── client/                              ← Next.js frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── next.config.js
│   └── src/
│       ├── pages/
│       ├── components/
│       └── api/
│           └── build-client.js          ← Axios instance (SSR vs browser)
│
├── auth/ (user/)                        ← Auth/User microservice
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
├── product/                             ← Product microservice
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
├── order/                               ← Order microservice
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
├── payment/                             ← Payment microservice (Flutterwave)
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
└── expiration/                          ← Order expiration microservice
    ├── Dockerfile
    ├── package.json
    └── src/
```

---

## ☁️ Azure Services Used

| Azure Service                 | Role in This Project                                       |
| ----------------------------- | ---------------------------------------------------------- |
| **AKS**                       | Hosts all microservices, databases, and NATS in Kubernetes |
| **ACR**                       | Stores Docker images for all 6 services                    |
| **Azure Pipelines**           | CI/CD — builds, tests, and deploys on every push to main   |
| **Terraform**                 | Provisions every Azure resource declaratively              |
| **Azure Key Vault**           | Stores JWT and Flutterwave secrets securely                |
| **Log Analytics Workspace**   | Aggregates all cluster and application logs                |
| **Azure Monitor**             | Metrics, alerts, and dashboards                            |
| **Azure Load Balancer**       | Auto-created by AKS for ingress traffic                    |
| **Azure Managed Disks (CSI)** | PersistentVolumes for MongoDB and Redis pods               |
| **Azure DNS**                 | Routes custom domain to Load Balancer                      |
| **Azure Blob Storage**        | Stores Terraform remote state                              |
| **Azure DevOps**              | Hosts pipeline, environments, approvals, and secrets       |

---

## 🚀 Deployment Pipeline

The Azure Pipeline runs automatically on every push to `main` and has 3 stages:

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────────┐
│  STAGE 1        │     │  STAGE 2         │     │  STAGE 3            │
│  Terraform      │────►│  Build & Test    │────►│  Deploy to AKS      │
│                 │     │                  │     │                     │
│ - terraform init│     │ - npm ci         │     │ - kubectl apply     │
│ - terraform plan│     │ - npm test       │     │ - rolling update    │
│ - terraform apply     │ - docker build   │     │ - rollout verify    │
│                 │     │ - docker push    │     │ - approval gate     │
└─────────────────┘     │   (to ACR)       │     └─────────────────────┘
  Only runs on          └──────────────────┘       Requires manual
  [infra] commits         All 6 services            approval in
  or manual trigger       run in parallel           Azure DevOps
```

---

## 🔐 Secrets Management

Secrets flow from Azure Key Vault into Kubernetes automatically via the **External Secrets Operator**:

```
Azure Key Vault
  └── JWT-KEY
  └── FLUTTER-KEY
        │
        ▼  (External Secrets Operator syncs every 1h)
Kubernetes Secret (aurapan-secrets)
  └── jwt-key
  └── flutter-key
        │
        ▼  (mounted as env vars)
Microservice Pods
```

---

## 📦 Microservices Overview

| Service        | Port | Database | Responsibilities                                      |
| -------------- | ---- | -------- | ----------------------------------------------------- |
| **client**     | 3000 | —        | Next.js SSR frontend, product listing, cart, checkout |
| **user**       | 3000 | MongoDB  | Signup, signin, JWT auth, user profile                |
| **product**    | 3000 | MongoDB  | Product CRUD, image management, inventory             |
| **order**      | 3000 | MongoDB  | Order creation, status management                     |
| **payment**    | 3000 | MongoDB  | Flutterwave + PayPal payment processing               |
| **expiration** | —    | Redis    | Order expiration countdown via Bull queue             |

All services communicate asynchronously via **NATS Streaming Server** using event-driven patterns (publishers and listeners).

---

## ⚙️ Local Development Setup

### Prerequisites

- Docker Desktop with Kubernetes enabled
- Node.js 18+
- kubectl
- helm

### Run locally

```bash
# Clone the repo
git clone https://github.com/yourusername/aurapan-ecommerce.git
cd aurapan-ecommerce

# Create required secrets
kubectl create secret generic jwt-secret \
  --from-literal=JWT_KEY=your_jwt_secret

kubectl create secret generic mongo-secret \
  --from-literal=MONGO_URI_USER=mongodb://user-mongo-srv:27017/users \
  --from-literal=MONGO_URI_PRODUCT=mongodb://product-mongo-srv:27017/products \
  --from-literal=MONGO_URI_ORDER=mongodb://order-mongo-srv:27017/orders \
  --from-literal=MONGO_URI_PAYMENT=mongodb://payment-mongo-srv:27017/payments

kubectl create secret generic stripe-secret \
  --from-literal=STRIPE_KEY=your_flutter_key

kubectl create secret generic paypal-secret \
  --from-literal=PAYPAL_CLIENT_ID=not_used

# Apply manifests
kubectl apply -f infra/k8s/
kubectl apply -f infra/k8s-dev/

# Access the app
# Add 127.0.0.1 aurapan.dev to your /etc/hosts
# Open http://aurapan.dev
```

---

## 🌐 Production Deployment (Azure)

### Prerequisites

- Azure CLI installed and logged in
- Terraform installed
- Docker installed
- Azure DevOps account

### Step 1 — Bootstrap Terraform remote state

```bash
az group create --name tfstate-rg --location eastus
az storage account create --name aurapantfstate \
  --resource-group tfstate-rg --sku Standard_LRS
az storage container create --name tfstate \
  --account-name aurapantfstate
```

### Step 2 — Provision Azure infrastructure

```bash
cd infra/terraform
terraform init
terraform apply \
  -var="jwt_key=your_secret" \
  -var="stripe_key=your_flutter_key"
```

### Step 3 — Connect to AKS

```bash
az aks get-credentials \
  --resource-group aurapan-rg \
  --name aurapan-aks
```

### Step 4 — Install Helm charts

```bash
# Ingress NGINX
helm install ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx --create-namespace

# cert-manager
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager --create-namespace \
  --set installCRDs=true

# External Secrets Operator
helm install external-secrets external-secrets/external-secrets \
  --namespace external-secrets --create-namespace

# Prometheus + Grafana
helm install kube-prometheus-stack \
  prometheus-community/kube-prometheus-stack \
  --namespace monitoring --create-namespace
```

### Step 5 — Deploy application

```bash
kubectl apply -f infra/k8s/
kubectl apply -f infra/k8s-prod/
kubectl apply -f infra/issuer/
```

### Step 6 — Set up Azure DevOps Pipeline

1. Create project in Azure DevOps
2. Add service connections (Azure RM + Kubernetes)
3. Create pipeline from `azure-pipelines.yml`
4. Add `production` environment with approval gate
5. Add variable group with `JWT_KEY` and `STRIPE_KEY`

---

## 📊 Monitoring

| Tool              | Access                                        |
| ----------------- | --------------------------------------------- |
| **Azure Monitor** | Azure Portal → Monitor                        |
| **Grafana**       | `kubectl get svc -n monitoring` → external IP |
| **Prometheus**    | Internal cluster access                       |
| **Pod logs**      | `kubectl logs -l app=<service> -n default`    |

---

## 🔄 CI/CD Flow

```
Developer pushes to main
        │
        ▼
Azure Pipelines triggers
        │
        ├── Terraform stage (if [infra] in commit message)
        │     └── Provisions/updates Azure infrastructure
        │
        ├── Build stage (always)
        │     ├── Runs tests for all 6 services in parallel
        │     └── Builds and pushes Docker images to ACR
        │
        └── Deploy stage (on main branch only)
              ├── Requires manual approval in Azure DevOps
              ├── Gets AKS credentials
              ├── Applies all K8s manifests
              └── Verifies rolling deployment
```

---

## 🛡️ Security

- All secrets stored in **Azure Key Vault** — never in code or environment files
- **External Secrets Operator** syncs secrets into K8s automatically
- **RBAC** enabled on AKS cluster
- **TLS** via cert-manager + Let's Encrypt
- **JWT** authentication on all protected API routes
- **ACR** integrated with AKS via managed identity (no passwords)
- `.gitignore` excludes all `.env` and `tfvars` files

---

## 📝 Key Learnings & Challenges

- Migrating DigitalOcean-specific Kubernetes annotations to Azure equivalents
- Configuring External Secrets Operator with Azure Key Vault using Service Principal auth
- Resolving Next.js SSR server-side HTTP routing through internal cluster DNS
- Managing Terraform remote state with Azure Blob Storage
- Debugging `CreateContainerConfigError` caused by missing Kubernetes secrets
- Fixing Let's Encrypt HTTP-01 challenges behind an ingress controller

---

## 👤 Author

**Emmanuel** — DevOps / Cloud Engineer  
Deployed and maintained the Azure infrastructure, CI/CD pipeline, and Kubernetes manifests for this project.

