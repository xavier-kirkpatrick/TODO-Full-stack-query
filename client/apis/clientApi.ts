import request from 'superagent'

export async function getAllTasks() {
  const res = await request
    .get('/api/v1/tasks')
    .set('Content-Type', 'application/json')
  return res.body
}

export async function taskDone(done: boolean, task_id: number) {
  const res = await request
    .patch('/api/v1/tasks')
    .set('Content-Type', 'application/json')
    .send({ done, task_id })
  return res.body
}

export async function taskDelete(id: number) {
  return await request.delete('/api/v1/tasks').send({ id })
}

export async function addTask(taskDetails: string) {
  const res = await request
    .post('/api/v1/tasks')
    .set('Content-Type', 'application/json')
    .send({ taskDetails })
  return res.body
}
