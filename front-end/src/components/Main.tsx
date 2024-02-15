import { useEffect, useState } from "react"
import Options from "./Options";
import Table from "./Table";
import { TypeTasks } from "../types/types";

function Main() {
  const [tasks, setTasks] = useState<TypeTasks[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const dale = async () => {
      const req = await fetch(`http://localhost:6969/tasks/${search}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });
      const resp = await req.json();
      if ("message" in resp) {
        setTasks([]);
        return console.log(resp.message);
      };
      console.log(resp);
      setTasks(resp);
    }
    dale();
  }, [search])
  return (
    <main className="flex flex-col items-center justify-center w-[100%] h-[95%]">

      <Options searchState={{ search, setSearch }} />

      <Table tasks={tasks} />
    </main>
  )
}

export default Main;
