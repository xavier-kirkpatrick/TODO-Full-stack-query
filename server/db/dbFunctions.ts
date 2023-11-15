import connection from './connection'
import { Task } from '../../models/taskModels'

export async function showTasks(db = connection) {
  return db<Task[]>('myTasks').select()
}
