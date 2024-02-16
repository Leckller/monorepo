import { useEffect, useState } from "react"
import Options from "./Options";
import Table from "./Table";
import { TypeTasks } from "../types/types";
import { getAllTasks } from "../services/getTasks";

function Main() {
  const [tasks, setTasks] = useState<TypeTasks[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllTasks(search).then(resp => setTasks(resp as TypeTasks[]));
  }, [search]);

  return (
    <main className="flex flex-col items-center justify-center w-[100%] h-[95%]">

      <Options setTasks={setTasks} searchState={{ search, setSearch }} />

      <Table setTasks={setTasks} tasks={tasks} />

    </main>
  )
}

export default Main;
