# 📝 Modern Todo App

A sleek, responsive todo application built with Next.js 14, TypeScript, and Tailwind CSS. Features persistent data storage, dark/light theme support, and a clean, intuitive interface.

![Next.js](https://img.shields.io/badge/Next.js-14.2.32-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

- **🎯 Task Management**: Add, edit, complete, and delete todos
- **💾 Persistent Storage**: Data persists across browser sessions using localStorage
- **🌙 Dark/Light Theme**: Built-in theme switching with system preference detection
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Real-time Updates**: Instant UI updates with React state management
- **🎨 Modern UI**: Clean, professional interface built with shadcn/ui components
- **♿ Accessible**: WCAG compliant with keyboard navigation support
- **🔧 TypeScript**: Full type safety and enhanced developer experience

## 🚀 Live Demo

[View Live Demo](https://your-demo-url.com) <!-- Replace with your actual demo URL -->

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Geist Font** - Modern typography

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-todo-app.git
   cd nextjs-todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
todo-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── todos/         # Todo CRUD endpoints
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── todo-header.tsx    # App header
│   ├── todo-input.tsx     # Add todo form
│   ├── todo-item.tsx      # Individual todo item
│   ├── todo-list.tsx      # Todo list container
│   ├── todo-stats.tsx     # Statistics display
│   └── theme-provider.tsx # Theme context
├── hooks/                  # Custom React hooks
│   ├── use-todos.ts       # Todo management hook
│   └── use-toast.ts       # Toast notifications
├── lib/                    # Utility functions
│   └── utils.ts           # Helper functions
└── public/                 # Static assets
```

## 🎮 Usage

### Adding Todos
1. Type your task in the input field
2. Press Enter or click the "Add" button
3. Your todo will appear at the top of the list

### Managing Todos
- **Complete**: Click the checkbox to mark as done
- **Delete**: Click the trash icon to remove a todo
- **Clear Completed**: Use the "Clear Completed" button to remove all finished tasks

### Theme Switching
- The app automatically detects your system theme preference
- Toggle between light and dark modes using your browser's theme settings

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 API Endpoints

The application includes RESTful API endpoints for todo management:

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos` - Update a todo
- `DELETE /api/todos?id={id}` - Delete a todo

## 🎨 Customization

### Styling
The app uses Tailwind CSS with custom CSS variables for theming. Modify `app/globals.css` to customize colors and styling.

### Components
All components are built with shadcn/ui and can be customized by modifying the component files in `components/ui/`.

### Data Storage
Currently uses localStorage for persistence. The API routes are set up for easy integration with external databases.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📞 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - email@example.com

Project Link: [https://github.com/yourusername/nextjs-todo-app](https://github.com/yourusername/nextjs-todo-app)

---

⭐ If you found this project helpful, please give it a star!
