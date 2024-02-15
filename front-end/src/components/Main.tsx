import { useEffect, useState } from "react"
import Options from "./Options";
import Table from "./Table";
import { TypeTasks } from "../types/types";

function Main() {
  const [tasks, setTasks] = useState<TypeTasks[]>([]);

  useEffect(() => {
    const dale = async () => {
      const req = await fetch('http://localhost:6969/tasks/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });
      const resp = await req.json();
      console.log(resp);
      setTasks(resp);
    }
    dale();
  }, [])
  return (
    <main className="flex flex-col items-center justify-center w-[100%] h-[95%]">

      <Options />

      <Table tasks={tasks} />
    </main>
  )
}

export default Main;
