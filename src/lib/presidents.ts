import { API_BASE_URL } from '@/constants';
import { President } from '@/types/president';


const BASE_URL = `${API_BASE_URL}/President`

export async function findAllPresidents(): Promise<President[]> {
  try {
    const res: Response = await fetch(BASE_URL)
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json() as President[]
  } catch (err) {
    console.log((err as Error).message)
    return []
  }
}

export async function findOnePresident(id: string): Promise<President | null> {
  try {
    const res: Response = await fetch(`${BASE_URL}/${id}`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json() as President
  } catch (err) {
    console.log((err as Error).message)
    return null
  }
}