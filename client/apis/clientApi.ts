import request from 'superagent'
import { Task } from '../../models/taskModels'

export async function getAllPokemon() {
  const response = await request.get('/api/v1/tasks')

  return response.body as Task[]
}
