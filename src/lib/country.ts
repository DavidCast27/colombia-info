import { API_BASE_URL } from "@/constants";
import { Country } from "@/types/country";


const REGION_BASE_URL = `${API_BASE_URL}/Country/Colombia`

export async function findCountryColombia(): Promise<Country> {
  try {
    const res: Response = await fetch(REGION_BASE_URL)
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json() as Country
  } catch (err) {
    console.log((err as Error).message)
    return {} as Country
  }
}