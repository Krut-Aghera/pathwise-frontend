# PATHWISE Frontend

Frontend application for the **PATHWISE LMS**, built with React and Vite.

PATHWISE is an online learning management system with support for students, instructors, and administrators.

The frontend follows a **feature-based architecture**, where feature-specific code is grouped together while application-wide code remains in shared/global folders.

---

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS 4.3
- React Router
- Redux Toolkit
- Axios

---

## Project Structure

```text
src/
│
├── app/
│   └── router/
│       └── AppRouter.jsx
│
├── components/
│
├── features/
│   ├── auth/
│   ├── user/
│   ├── course/
│   │   └── pages/
│   │       └── CoursesPage.jsx
│   ├── section/
│   ├── lecture/
│   ├── order/
│   ├── enrollment/
│   ├── payment/
│   └── progress/
│
├── layouts/
│   └── AppLayout.jsx
│
├── pages/
│   └── HomePage.jsx
│
├── services/
├── hooks/
├── utils/
├── constants/
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```
