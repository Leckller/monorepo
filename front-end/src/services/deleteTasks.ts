async function deleteTaskById(id: number): Promise<{ message: string }> {
  const req = await fetch(`http://localhost:6969/deleteTask/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  });

  const resp = await req.json();

  return resp;
};

export {
  deleteTaskById
}