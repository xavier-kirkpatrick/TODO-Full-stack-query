export interface Task {
  id: number
  taskDetails: string
  priority: boolean
  completed: boolean
}

export interface NewTask {
  taskDetails: string
  priority: boolean
  completed: boolean
}

export interface doneTask {
  done: boolean
  id: number
}
