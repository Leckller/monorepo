import { TypeTasks } from "../types/types";

async function getAllTasks(search: string = ''): Promise<TypeTasks[] | void> {
  const req = await fetch(`http://localhost:6969/tasks/${search}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const resp = await req.json();

  if ("message" in resp) {
    return console.log(resp.message);
  };

  return resp;
};

export {
  getAllTasks
}