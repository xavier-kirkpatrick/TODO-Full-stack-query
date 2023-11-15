import express from 'express'
import * as db from '../db/dbFunctions'

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

export default router
