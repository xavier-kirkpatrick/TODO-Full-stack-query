import connection from './connection'
import { Task, NewTask, doneTask } from '../../models/taskModels'

export async function showTasks(db = connection): Promise<Task[]> {
  return db('myTasks').select()
}

export async function addTask(task: NewTask, db = connection) {
  return db<Task>('myTasks').insert(task)
}

export async function taskComplete(
  done: boolean,
  task_id: number,
  db = connection
): Promise<doneTask[]> {
  return db('myTasks').where('id', task_id).update('completed', done)
}

export async function deleteTask(id: Task, db = connection) {
  return db<Task>('myTasks').where('id', id).del()
}
