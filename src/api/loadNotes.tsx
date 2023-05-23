import objectToArray from './objectToArray'
export const loadNotes = async (): Promise<any> => {
  const result = await fetch('https://keep-clone-aec55-default-rtdb.europe-west1.firebasedatabase.app/.json')
  const data = await result.json()
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return objectToArray(data || [])
}

export default loadNotes
