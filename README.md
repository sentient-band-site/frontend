# Sentient Site - Frontend

A Frontend application for the **Sentient** Band's content management and release platform. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, this client application consumes a REST API provided by the backend and enables authenticated administrators to manage media assets and new music releases. 

---

## Overview
The frontend is responsible for:
- Rendering public-facing release content
- Handling authenticated admin workflows
- Managing client-side route protection
- Integrating with backend APIs for content retrieval and updates
- Displaying media content

For full system architecture, see the backend repository

---

## Features

- **Dyanmic Releases Display** - fetches album, video and image data backend REST endpoints
- **JWT-Based Authentication Flow** - protected admin routes enforced via backend issued-tokens
- **Optimized Media Display** - Uses Next.js Image Optimization for faster performance
- **Reponsive UI** - Tailwind CSS mobile first styling
- **Animated Transitions** - Framer Motion integration

---

## Tech Stack

### **Frontend Framework** 
#### ![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
### **Language**
#### ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
### **Styling**
#### ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
### **Animations** 
#### ![Framer Motion](https://img.shields.io/badge/framer_motion-ffca28?style=for-the-badge&logo=framer&logoColor=%23ffffff&color=%237178f6)
### **Media and Storage**
#### Supabase(PostgreSQL + Storage Buckets via backend API)
### **Authentication** 
#### JWT-based authentication issued and validated by backend service

---
## Architecture Role Winthin System
The frontend operates strictly as a client layer:
- Communicates with the backend via RESTful API endpoints
- Does not directly access the database
- Relies on backend middleware for authorization validation
- Handles UI-level route guarding based on token presence

This separation enforces clear client-server boundaries and prevents exporsure of database credentials or storage logic.
---

## Project Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+ recommended)
- **npm**

### Installation

1. **Clone the repository**:
    ```bash
    git clone [https://github.com/sentient-band-site/frontend.git]
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:3000`.
