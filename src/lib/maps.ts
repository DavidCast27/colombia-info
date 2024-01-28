import { API_BASE_URL } from '@/constants';
import { Map } from '@/types/map';


const BASE_URL = `${API_BASE_URL}/Map`

export async function findAllMaps(): Promise<Map[]> {
  try {
    const res: Response = await fetch(BASE_URL)
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json() as Map[]
  } catch (err) {
    console.log((err as Error).message)
    return []
  }
}

export async function findOneMap(id: string): Promise<Map | null> {
  try {
    const res: Response = await fetch(`${BASE_URL}/${id}`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json() as Map
  } catch (err) {
    console.log((err as Error).message)
    return null
  }
}