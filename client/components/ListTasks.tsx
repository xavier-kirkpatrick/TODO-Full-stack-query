import { useQuery } from '@tanstack/react-query'
import { getAllPokemon } from '../apis/clientApi'

export default function ListAllTasks() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => getAllPokemon(),
  })
  console.log(data)

  if (isLoading) {
    return (
      <>
        <p>Still loading.....</p>
      </>
    )
  }

  if (isError) {
    return <p>Sorry!! Its not lookin good back here....</p>
  }

  return (
    <>
      <ul className="todo-list">
        <div className="view">
          {data?.map((item) => (
            <>
              <li className={item.completed ? 'completed' : ''}>
                <input
                  className="toggle"
                  type="checkbox"
                  defaultChecked={item.completed}
                />
                <label key={item.id}>{item['task details']}</label>
                <button className="destroy"></button>
              </li>
            </>
          ))}
        </div>
      </ul>
    </>
  )
}
