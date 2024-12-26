# Task Tracker - Modern Todo List Application

A full-stack todo list application built with React, TypeScript, and Node.js. Features a modern UI with dark mode support, real-time updates, and a responsive design.

## 🌟 Features

- **Task Management**
  - Create, edit, and delete tasks
  - Mark tasks as completed/pending
  - Set due dates for tasks
  - Add detailed descriptions

- **Advanced Filtering**
  - Filter tasks by status (completed/pending)
  - Search tasks by name
  - Sort tasks by due date

- **User Experience**
  - Dark/Light mode toggle
  - Responsive design for all devices
  - Real-time updates using React Query
  - Toast notifications for actions
  - Smooth animations and transitions

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **React Query** - Server State Management
- **Axios** - HTTP Client
- **Zustand** - Client State Management
- **date-fns** - Date Formatting
- **react-hot-toast** - Notifications
- **Vite** - Build Tool

### Backend
- **Node.js** - Runtime
- **Express** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment Variables

## 📁 Project Structure

```
project/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── lib/               # Utilities and API client
│   └── stores/            # Zustand state stores
├── server/                # Backend source code
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Mongoose models
│   │   └── routes/       # API routes
│   └── .env              # Environment variables
└── package.json          # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- MongoDB 5.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd task-tracker
   ```

2. **Install Frontend Dependencies**
   ```bash
   # In the project root
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Configure Environment Variables**
   ```bash
   # In the server directory
   cp .env.example .env
   ```
   Edit `.env` with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

5. **Start Development Servers**

   Backend:
   ```bash
   # In server directory
   npm run dev
   ```

   Frontend:
   ```bash
   # In project root
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server

## 📝 API Endpoints

### Tasks

- `GET /api/tasks` - Get all tasks
  - Query params: `status`, `search`
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Query](https://tanstack.com/query/latest) for excellent server state management
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) for beautiful icons
