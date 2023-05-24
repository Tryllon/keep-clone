
export const create = async (dataToSave: object): Promise<any> => {
  return await fetch('https://keep-clone-aec55-default-rtdb.europe-west1.firebasedatabase.app/.json', {
    method: 'POST',
    body: JSON.stringify(dataToSave)
  })
    .then((response) => response.json)
}
export default create
