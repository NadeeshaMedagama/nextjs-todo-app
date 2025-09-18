import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'todos.json')

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(DATA_FILE)
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Read todos from file
async function readTodos() {
  try {
    await ensureDataDir()
    const data = await fs.readFile(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

// Write todos to file
async function writeTodos(todos: any[]) {
  await ensureDataDir()
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2))
}

// GET /api/todos - Fetch all todos
export async function GET() {
  try {
    const todos = await readTodos()
    return NextResponse.json(todos)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 })
  }
}

// POST /api/todos - Create a new todo
export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()
    
    if (!text || !text.trim()) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }

    const todos = await readTodos()
    const newTodo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    }

    todos.unshift(newTodo) // Add to beginning
    await writeTodos(todos)

    return NextResponse.json(newTodo, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create todo' }, { status: 500 })
  }
}

// PUT /api/todos - Update a todo
export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json()
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    const todos = await readTodos()
    const todoIndex = todos.findIndex((todo: any) => todo.id === id)
    
    if (todoIndex === -1) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 })
    }

    todos[todoIndex] = { ...todos[todoIndex], ...updates }
    await writeTodos(todos)

    return NextResponse.json(todos[todoIndex])
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update todo' }, { status: 500 })
  }
}

// DELETE /api/todos - Delete a todo
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    const todos = await readTodos()
    const filteredTodos = todos.filter((todo: any) => todo.id !== id)
    
    if (todos.length === filteredTodos.length) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 })
    }

    await writeTodos(filteredTodos)
    return NextResponse.json({ message: 'Todo deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete todo' }, { status: 500 })
  }
}
