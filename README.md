# 🖥️ Virtual Multi-Processor for Microservices (VMPM)

---

## 🌐 Project Overview

**VMPM** is a production-grade backend system that simulates **virtual processors** for microservices. It allows:

- Microservices to **register themselves**  
- Requests to be **routed to assigned virtual processors**  
- CPU & memory **load to be monitored and tracked**  
- Metrics to be collected for optional **dashboard or logging**  

**Key Philosophy:** Minimal, scalable, cloud-agnostic backend showcasing **real-world microservice orchestration and concurrent processing**, making it **portfolio-ready**.

---

## 🎯 Core Objectives

- Centralized **microservice registration & request routing**  
- **Virtual processor simulation** with CPU & memory load  
- **Metrics collection** for monitoring  
- **Swagger documentation** for all endpoints  
- **Docker + Kubernetes deployment** for platform-agnostic operation  

---

## 🧰 Technology Stack

- **Node.js Cluster API / Python AsyncIO** — Backend runtime & concurrency  
- **MongoDB + Mongoose** — NoSQL database  
- **Express.js** — REST API framework  
- **Docker** — Containerized deployment  
- **Kubernetes** — Orchestration & scaling  
- **Swagger** — API documentation  
- **GitHub Actions** — CI/CD automation  

---

## 📂 Folder Structure

```text
vmpm/
│
├── src/
│   ├── config/          # Environment, DB, and cluster configs
│   ├── controllers/     # Service, Request, Processor controllers
│   ├── models/          # Service & Processor schemas
│   ├── routes/          # API routes
│   ├── processors/      # Virtual processor logic & load simulation
│   └── utils/           # Helpers (load balancing, metrics, API response)
│
├── docs/                # Swagger configuration
├── k8s/                 # Kubernetes deployment files (Deployment, Service, ConfigMap)
├── .github/             # CI/CD pipelines
│
├── Dockerfile
├── .dockerignore
├── package.json
├── .env
├── info.md              # This documentation
└── server.js
