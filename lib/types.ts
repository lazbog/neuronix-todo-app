export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

export type TodoFilter = 'all' | 'active' | 'completed'

export interface TodoFormData {
  text: string
}