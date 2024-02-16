import { deleteTaskById } from '../services/deleteTasks'
import { getAllTasks } from '../services/getTasks';
import { TypeTasks } from '../types/types'

function Table({ tasks, setTasks }: { tasks: TypeTasks[], setTasks: (p: TypeTasks[]) => void, }) {
  return (
    <table className="bg-blue-300 flex flex-col w-[80%] h-[80%] overflow-auto">
      {tasks && tasks.map((task, position) => (
        <tr key={task.id} className="flex flex-row justify-between p-2">
          <td className='w-4'>{position + 1}</td>
          <td className='w-1/2'>{task.task_name}</td>
          <td className='w-1/3'>{task.started}</td>
          <td className=''>
            <button onClick={async () => {
              const resp = await deleteTaskById(task.id);
              console.log(resp);
              setTimeout(() => {
                getAllTasks().then(resp => setTasks(resp as TypeTasks[]));
              }, 200);
            }}>
              delete
            </button>
          </td>
        </tr>
      ))}
    </table>
  )
}

export default Table
