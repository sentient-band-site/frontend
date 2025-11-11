# Sentient Site Frontend

A full-stack band website for the band **Sentient**, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This frontend integrates with the backend (Express.js + JWT Authentication) and Supabase's database and bucket storage to manage site content to allow for authenticated users to announce new releases to the band's fans.

---

## Features

- **Dyanmic Releases Display** - fetches album, video and image data via API calls from the backend.
- **Supabase Integration** - Stores and retrieves album artwork in an image bucket as well as users and release data in a PostgreSQL database
- **JWT Authentication** - Enables protected routes to ensure admin-only access to data
- **Optimized Media Display** - Uses Next.js Image Optimization for faster performance.
- **Reponsive UI** - Styled with Tailwind CSS for a clean, mobile first, and modern design
- **Animated Transitions** - Utilizing Framer Motion for smooth visual effects.

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
### **Media Handling**
#### ![Supabase](https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge)
### **Authentication** | JWT (handled via backend API)
### **Build Tool** | Next Build

## Project Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v22.6.0+)
- **npm** (v10.8.2+)

### Installation

1. **Clone the repository**:
    ```bash
    git clone [https://github.com/sentient-band-site/frontend.git]
    cd resume-builder
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
