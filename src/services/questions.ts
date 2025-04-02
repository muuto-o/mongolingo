import { GetUnitResponse, GetUnitWithExercisesResponse } from "@/constants/types";
import api from "@/lib/api";


export async function getUnits() {
  const { data } = await api.get<GetUnitResponse>('/api/units');
  return data;
}

export async function getUnitsWithExercises(){
    const { data } = await api.get<GetUnitWithExercisesResponse>('/api/units/exercises');
    console.log(data)
    return data;
    
}
