async function postTask(taskName: string): Promise<{ message: string }> {
  const req = await fetch(`http://localhost:6969/addTask`, {
    method: 'POST',
    body: JSON.stringify({
      task_name: taskName.replace(' ', '_')
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });
  const resp = await req.json();

  return resp;
};

export {
  postTask
}