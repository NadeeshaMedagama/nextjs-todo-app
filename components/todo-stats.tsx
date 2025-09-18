"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface TodoStatsProps {
  total: number
  completed: number
  onClearCompleted: () => void
}

export function TodoStats({ total, completed, onClearCompleted }: TodoStatsProps) {
  const remaining = total - completed

  return (
    <Card className="p-4 bg-card border-border">
      <div className="flex items-center justify-between">
        <div className="flex gap-6 text-sm text-card-foreground">
          <span>
            <strong>{total}</strong> total
          </span>
          <span>
            <strong>{remaining}</strong> remaining
          </span>
          <span>
            <strong>{completed}</strong> completed
          </span>
        </div>

        {completed > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearCompleted}
            className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
          >
            Clear Completed
          </Button>
        )}
      </div>
    </Card>
  )
}
