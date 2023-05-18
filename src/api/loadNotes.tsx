import objectToArray from './objectToArray'
const loadNotes = async (): Promise<any> => {
  const result = await fetch('https://keep-clone-aec55-default-rtdb.europe-west1.firebasedatabase.app/.json')
  const data = await result.json()
  return objectToArray(data)
}

export default loadNotes
