export interface Task {
  id: number
  title: string
  priority: boolean
  completed: boolean
}

export interface NewTask {
  title: string
  priority: boolean
  completed: boolean
}
