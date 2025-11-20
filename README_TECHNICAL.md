# 🎓 STAB - Study Abroad Budget & Planning Platform

A comprehensive full-stack web application designed to help students plan their entire study abroad journey - from research and budgeting to visa application and departure.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Django](https://img.shields.io/badge/Django-5.2-092E20?logo=django)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation & Setup](#installation--setup)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)

---

## 🌟 Overview

**STAB (Study Abroad Budget)** is a full-stack application that simplifies the complex process of planning international education.

### 🎯 Problem Statement

Planning to study abroad involves:
- Researching multiple cities and universities
- Calculating budgets in different currencies
- Tracking dozens of deadlines and tasks
- Managing numerous documents
- Finding funding opportunities

**STAB consolidates all these needs into one platform.**

---

## ✨ Key Features

### 1. **Interactive City Comparison** 🌍
- Compare 50+ cities side-by-side
- Real-time cost breakdown (housing, food, transport, tuition)
- Visual charts and graphs powered by Recharts
- Metadata including population, climate, currency, timezone
- Smart search with instant results

### 2. **Journey Planner** 🗓️
- **6-phase structured timeline** from research to departure
- **51 pre-filled tasks** with priority levels
- Progress tracking dashboard with visual indicators
- Phase-based unlocking system (gamification)
- Document checklist manager (15 documents)
- Onboarding wizard for personalized setup

### 3. **Scholarship Database** 💰
- Curated list of 20+ scholarships with eligibility criteria
- Advanced filtering (country, degree, amount)
- Direct application links
- Deadline tracking

### 4. **Community Hub** 👥
- Student success stories from 15+ countries
- Discussion forum with filtering
- Upcoming events calendar
- Registration system

### 5. **Backend Integration** 🔌
- RESTful API with Django REST Framework
- PostgreSQL database for data persistence
- User profile management
- Journey progress saved to database

---

## 🛠️ Tech Stack

### **Frontend**

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI framework |
| **TypeScript** | 5.6.2 | Type safety & developer experience |
| **React Router** | 6.28.0 | Client-side routing |
| **Tailwind CSS** | 3.4.15 | Utility-first styling |
| **Axios** | 1.7.8 | HTTP client for API calls |
| **Recharts** | 2.14.1 | Data visualization |
| **Sonner** | 1.7.2 | Toast notifications |

### **Backend**

| Technology | Version | Purpose |
|------------|---------|---------|
| **Django** | 5.2.7 | Python web framework |
| **Django REST Framework** | 3.16.1 | API development |
| **PostgreSQL** | 16.x | Relational database |
| **psycopg2** | 2.9.11 | PostgreSQL adapter |
| **django-cors-headers** | 4.9.0 | CORS handling |

### **Development Tools**

- **Create React App** - React project scaffolding
- **ESLint** - Code linting
- **Git** - Version control
- **VS Code** - IDE

---

## 🏗️ Architecture

### **System Design**

```
┌─────────────────────┐
│   React Frontend    │
│   (localhost:3000)  │
│                     │
│  - Components       │
│  - Pages            │
│  - Services (API)   │
│  - Utils            │
└──────────┬──────────┘
           │
           │ HTTP/REST
           │ (Axios)
           │
┌──────────▼──────────┐
│   Django Backend    │
│   (localhost:8000)  │
│                     │
│  - REST API         │
│  - Models           │
│  - Serializers      │
│  - Views            │
└──────────┬──────────┘
           │
           │ ORM
           │
┌──────────▼──────────┐
│   PostgreSQL DB     │
│   (localhost:5432)  │
│                     │
│  - journey_profile  │
│  - (future tables)  │
└─────────────────────┘
```

### **Frontend Architecture**

- **Component-Based**: 25+ reusable React components
- **Type-Safe**: TypeScript interfaces for all data structures
- **State Management**: React hooks (useState, useEffect)
- **Client-Side Storage**: localStorage for caching
- **Responsive Design**: Mobile-first with Tailwind breakpoints

### **Backend Architecture**

- **RESTful API**: Standard HTTP methods (GET, POST, PUT, DELETE)
- **Model-View-Serializer** pattern
- **Database**: PostgreSQL with Django ORM
- **CORS**: Configured for cross-origin requests

---

## 🚀 Installation & Setup

### **Prerequisites**

- Node.js 18+ and npm
- Python 3.8+
- PostgreSQL 16+

### **Frontend Setup**

```bash
# Navigate to frontend directory
cd STAB

# Install dependencies
npm install

# Start development server
npm start

# App runs at http://localhost:3000
```

### **Backend Setup**

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
.\venv\Scripts\Activate.ps1

# Install dependencies
pip install django djangorestframework psycopg2 django-cors-headers

# Create PostgreSQL database (using psql or pgAdmin)
CREATE DATABASE stab_db;

# Update settings.py with your PostgreSQL password

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start Django server
python manage.py runserver

# API runs at http://127.0.0.1:8000
```

---

## 📡 API Documentation

### **Base URL**: `http://127.0.0.1:8000/api/`

### **Endpoints**

#### **Journey Profiles**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/journey-profiles/` | List all profiles |
| POST | `/journey-profiles/` | Create new profile |
| GET | `/journey-profiles/:id/` | Get specific profile |
| PUT | `/journey-profiles/:id/` | Update profile |
| DELETE | `/journey-profiles/:id/` | Delete profile |

#### **Request/Response Examples**

**POST** `/api/journey-profiles/`

```json
{
  "full_name": "John Doe",
  "destination_country": "United States",
  "intended_start_date": "2025-09-01"
}
```

**Response** (201 Created)

```json
{
  "id": 1,
  "full_name": "John Doe",
  "destination_country": "United States",
  "intended_start_date": "2025-09-01",
  "created_at": "2025-11-12T10:30:00Z",
  "updated_at": "2025-11-12T10:30:00Z"
}
```

---

## 📁 Project Structure

```
STAB/
├── frontend (STAB/)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # 25+ Reusable UI components
│   │   │   ├── Header.tsx     # Fixed navbar
│   │   │   ├── Hero.tsx       # Landing hero with search
│   │   │   ├── CityCard.tsx   # City display card
│   │   │   ├── PhaseCard.tsx  # Journey phase card
│   │   │   ├── OnboardingModal.tsx  # 3-step wizard
│   │   │   └── ...
│   │   ├── pages/             # 6 Route pages
│   │   │   ├── HomePage.tsx
│   │   │   ├── ComparisonPage.tsx
│   │   │   ├── JourneyPlannerPage.tsx
│   │   │   ├── ScholarshipsPage.tsx
│   │   │   ├── CommunityPage.tsx
│   │   │   └── LoginPage.tsx
│   │   ├── services/          # API integration
│   │   │   └── api.ts         # Axios service layer
│   │   ├── types/             # TypeScript interfaces
│   │   │   └── index.ts       # 15+ interfaces
│   │   ├── utils/             # Helper functions & data
│   │   │   ├── data.ts        # 50+ cities data
│   │   │   ├── journeyData.ts # 6 phases, 51 tasks
│   │   │   ├── scholarshipData.ts  # 20+ scholarships
│   │   │   ├── communityData.ts    # Stories, posts, events
│   │   │   └── calculations.ts     # Utility functions
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── .env
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
└── backend/
    ├── api/
    │   ├── models.py          # JourneyProfile model
    │   ├── serializers.py     # DRF serializers
    │   ├── views.py           # API ViewSets
    │   ├── urls.py            # API routes
    │   └── migrations/
    ├── stab_backend/
    │   ├── settings.py        # Django config
    │   ├── urls.py            # Main URL config
    │   └── wsgi.py
    └── manage.py
```

---

## 📊 Data Models

### **TypeScript Interfaces (Frontend)**

```typescript
// Journey Profile
interface JourneyProfile {
  name: string;
  targetCountry: string;
  studyLevel: 'Undergraduate' | 'Masters' | 'PhD' | 'Language Course';
  startDate: Date;
  createdAt: Date;
}

// Journey Phase
interface Phase {
  id: string;
  number: number;
  title: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'locked';
  tasks: Task[];
}

// City
interface City {
  id: string;
  name: string;
  country: string;
  costs: {
    rent: string;
    food: string;
    transport: string;
    tuition: string;
  };
  metadata: {
    population: number;
    climate: string;
    language: string;
    currency: string;
  };
}
```

### **Django Models (Backend)**

```python
class JourneyProfile(models.Model):
    full_name = models.CharField(max_length=200)
    destination_country = models.CharField(max_length=100)
    intended_start_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

---

## 🎯 Key Technical Achievements

### **Frontend**

1. **Type Safety**: Full TypeScript coverage with 15+ interfaces
2. **Component Reusability**: 25+ reusable components following DRY
3. **Responsive Design**: Mobile-first with Tailwind breakpoints
4. **Debounced Search**: Performance optimization (300ms delay)
5. **Client-Side Routing**: SPA with React Router (6 routes)
6. **State Management**: Efficient useState/useEffect patterns
7. **Data Visualization**: Interactive charts with Recharts
8. **Gamification**: Phase unlocking system
9. **Fixed Navbar**: Smooth scrolling with proper spacing

### **Backend**

1. **RESTful API**: Standard HTTP methods with proper status codes
2. **ORM Usage**: Django ORM for database abstraction
3. **CORS Configuration**: Secure cross-origin requests
4. **Serialization**: Data transformation with DRF
5. **ModelViewSet**: Automatic CRUD operations

### **Integration**

1. **API Service Layer**: Centralized Axios configuration
2. **Error Handling**: Try-catch with user-friendly toast notifications
3. **Dual Storage**: localStorage (client) + PostgreSQL (server)
4. **Auto-unlocking Logic**: Phase progression when previous completed

---

## 🎨 Design System

### **Color Palette**

- **Primary**: `#0d98ba` (Cyan Blue)
- **Secondary**: `#13a4ec` (Sky Blue)
- **Dark**: `#0d171b` (Almost Black)
- **Accent**: `#4c809a` (Slate Blue)
- **Background**: `#f8fafc` (Light Gray)

### **Typography**

- **Font Family**: Inter, "Noto Sans", sans-serif
- **Responsive**: Tailwind utility classes

---

## 🔐 Security

- **CORS**: Restricted to `localhost:3000`
- **Input Validation**: Django model validators
- **SQL Injection**: Protected by Django ORM
- **XSS**: React auto-escaping
- **CSRF**: Django middleware

---

## 📈 Performance

1. **Debounced Search**: 300ms delay
2. **Image Optimization**: Pexels CDN
3. **localStorage Caching**: Reduce DB queries
4. **Database Indexes**: PostgreSQL optimization

---

## 🚧 Future Enhancements

- [ ] User Authentication (JWT)
- [ ] Email Notifications
- [ ] File Upload System
- [ ] Real-time Chat
- [ ] Payment Integration
- [ ] Admin Dashboard
- [ ] Unit & Integration Tests
- [ ] Docker Containerization
- [ ] CI/CD Pipeline

---

## 👨‍💻 Development Highlights

### **Challenges Solved**

1. ✅ CORS typo: `CORS_ALOWED_ORIGINS` → `CORS_ALLOWED_ORIGINS`
2. ✅ Type consistency between frontend/backend
3. ✅ Phase auto-unlocking logic
4. ✅ Image loading (Unsplash → Pexels)
5. ✅ Fixed navbar spacing (`pt-[65px]`)

### **Lines of Code**

- **Frontend**: ~3,500 lines (TypeScript/TSX)
- **Backend**: ~150 lines (Python)
- **Total**: ~3,650 lines

---

## 📝 For Technical Interview

### **What to Highlight**

✅ **Full-Stack**: React + Django + PostgreSQL  
✅ **Type Safety**: TypeScript throughout  
✅ **RESTful API**: Proper HTTP methods  
✅ **State Management**: React hooks  
✅ **Database Design**: Normalized schema  
✅ **Responsive**: Mobile-first design  
✅ **User Experience**: Gamification, smooth animations  
✅ **Code Quality**: DRY, SOLID principles  

### **Discussion Points**

- Why React? (Component reusability, virtual DOM)
- Why TypeScript? (Catch errors early, better IDE support)
- Why Django? (Batteries-included, ORM, admin panel)
- Why PostgreSQL? (Relational data, ACID compliance)
- How data flows? (User action → React → Axios → Django → PostgreSQL)

---

**Built with ❤️ for students planning their international education journey**
