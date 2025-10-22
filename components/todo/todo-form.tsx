'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoFormData } from '@/lib/types'

interface TodoFormProps {
  onSubmit: (data: TodoFormData) => void
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onSubmit({ text: text.trim() })
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1"
      />
      <Button type="submit" disabled={!text.trim()}>
        Add
      </Button>
    </form>
  )
}