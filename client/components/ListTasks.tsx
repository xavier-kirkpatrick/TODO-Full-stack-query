import GetTasks from './GetAllTasks'

export default function ListAllTasks() {
  return (
    <>
      <ul className="todo-list">
        <GetTasks />
      </ul>
    </>
  )
}
