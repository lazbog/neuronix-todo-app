'use client'

import { useState } from 'react'
import TodoItem from '@/components/todo-item'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Todo {
  id: string
  text: string
  completed: boolean
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Buy groceries', completed: false },
    { id: '2', text: 'Walk the dog', completed: true },
    { id: '3', text: 'Finish project', completed: false },
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
      }
      setTodos([...todos, todo])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Todo List</h1>
        <p className="text-gray-600">Manage your daily tasks efficiently</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-2 mb-6">
          <Input
            type="text"
            placeholder="Add a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            className="flex-1"
          />
          <Button onClick={addTodo}>
            Add Todo
          </Button>
        </div>

        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No todos yet. Add one above to get started!
            </p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {todos.filter(t => !t.completed).length} of {todos.length} tasks remaining
            </p>
          </div>
        )}
      </div>
    </div>
  )
}