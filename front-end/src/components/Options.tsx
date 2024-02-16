import { useState } from "react"
import { postTask } from "../services/postTasks";
import { TypeTasks } from "../types/types";
import { getAllTasks } from "../services/getTasks";

function Options({ searchState, setTasks }:
  {
    setTasks: (p: TypeTasks[]) => void,
    searchState: { search: string, setSearch: (p: string) => void }
  }) {

  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState('');

  return (
    <div className="bg-blue-200 w-[80%] flex flex-row justify-between p-2 relative">

      <button onClick={() => setAddTask((prev) => !prev)}>+</button>

      <input
        type="text"
        value={searchState.search}
        onChange={({ target: { value } }) => searchState.setSearch(value)} placeholder="search" />

      <button>del</button>

      {addTask && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTimeout(() => {
              getAllTasks().then(resp => setTasks(resp as TypeTasks[]));
            }, 200);
          }}
          className="absolute w-[300px] h-[300px] left-[25px] top-1/2
        bg-white flex flex-col justify-between p-5">

          <div className="flex flex-row justify-between">
            <h2>Nova Tarefa</h2>
            <button onClick={() => setAddTask((prev) => !prev)}>X</button>
          </div>

          <input className="bg-gray-600"
            type="text"
            value={task}
            onChange={({ target: { value } }) => setTask(value)} />

          <button onClick={async () => {
            const post = await postTask(task);
            console.log(post);
            setAddTask(false);
          }}>Adicionar tarefa</button>
        </form>
      )}

    </div>
  )
}

export default Options
