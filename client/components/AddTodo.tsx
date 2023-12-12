import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTask } from '../apis/clientApi'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (taskDetails: string) => addTask(taskDetails),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  async function newTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const addNewTask = form.get('newTask')?.valueOf() as string
    mutation.mutate(addNewTask)
    e.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={newTask}>
        <div>
          <label htmlFor="newTask">.</label>
          <input
            id="newTask"
            name="newTask"
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </div>
      </form>
    </>
  )
}

export default AddTodo
