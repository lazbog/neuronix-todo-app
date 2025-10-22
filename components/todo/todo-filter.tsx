'use client'

import { Button } from '@/components/ui/button'
import { TodoFilter } from '@/lib/types'

interface TodoFilterProps {
  filter: TodoFilter
  onFilterChange: (filter: TodoFilter) => void
  activeCount: number
  completedCount: number
}

export default function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
}: TodoFilterProps) {
  const filters: { value: TodoFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ]

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
      <div className="text-sm text-muted-foreground">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </div>
      <div className="flex gap-2">
        {filters.map(({ value, label }) => (
          <Button
            key={value}
            variant={filter === value ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onFilterChange(value)}
          >
            {label}
          </Button>
        ))}
      </div>
      {completedCount > 0 && (
        <div className="text-sm text-muted-foreground">
          {completedCount} {completedCount === 1 ? 'item' : 'items'} completed
        </div>
      )}
    </div>
  )
}