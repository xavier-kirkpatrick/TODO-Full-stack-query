import AddTodo from './AddTodo.tsx'
import ListAllTasks from './ListTasks.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main"></section>
      <ListAllTasks />
      <footer className="footer"></footer>
    </>
  )
}

export default App
