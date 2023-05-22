
export const remove = async (taskKey: string): Promise<any> => {
  return await fetch(`https://keep-clone-aec55-default-rtdb.europe-west1.firebasedatabase.app/${taskKey}.json`, {
    method: 'DELETE'
  })
    .then(async (response) => await response.json())
}
export default remove
