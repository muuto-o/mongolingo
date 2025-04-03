import { GetQuestionsByExerciseResponse, GetUnitResponse, GetUnitWithExercisesResponse } from "@/constants/types";
import api from "@/lib/api";


export async function getUnits() {
  const { data } = await api.get<GetUnitResponse>('/api/units');
  return data;
}

export async function getUnitsWithExercises(level : number){
    const { data } = await api.get<GetUnitWithExercisesResponse>(`/api/units/exercises?exerciseLevel=${level}`);
    console.log(data)
    return data;
  }
  
  export async function GetQuestionsByExercise(id : string){
    const { data } = await api.get<GetQuestionsByExerciseResponse>(`/api/questions/exercise/${id}`);
    console.log("questions")
    console.log(data)
    return data;
    
}
