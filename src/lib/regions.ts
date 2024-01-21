import {API_BASE_URL} from "@/constants";
import {Region} from "@/types/region";


const REGION_BASE_URL = `${API_BASE_URL}/Region`

export async function findAllRegions():Promise<Region[]>{
    try {
        const res: Response = await fetch(REGION_BASE_URL)
        if (!res.ok) throw new Error('Failed to fetch data')
        return await res.json() as Region[]
    }
    catch (err){
        console.log((err as Error).message)
        return []
    }
}


export async function findOneRegion(id:string):Promise<Region| null>{
    try {
        const res: Response = await fetch(`${REGION_BASE_URL}/${id}`)
        if (!res.ok) throw new Error('Failed to fetch data')
        return await res.json() as Region
    }
    catch (err){
        console.log((err as Error).message)
        return null
    }
}