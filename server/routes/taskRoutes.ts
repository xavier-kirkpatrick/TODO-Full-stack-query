import express from 'express'
import * as db from '../db/dbFunctions'
import { Task } from '../../models/taskModels'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const tasks = await db.showTasks()
    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).send('Taks not found')
  }
})

router.post('/:id', async (req, res) => {
  try {
    const newTask = req.body
    await db.addTask(newTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'server not found' })
  }
})

router.patch('/', async (req, res) => {
  const form = req.body

  if (!form) {
    return res.status(400).json({ message: 'Please provide a form' })
  }

  const { done, task_id } = form
  try {
    await db.taskComplete(done, task_id)
  } catch (error) {
    console.error(error)
    return res.status(500).send('server not found')
  }
})

router.delete('/', async (req, res) => {
  const deleteTask = req.body
  const { id } = deleteTask
  try {
    await db.deleteTask(id)
  } catch (error) {
    console.error(error)
    return res.status(500).send('server not found')
  }
})

export default router
