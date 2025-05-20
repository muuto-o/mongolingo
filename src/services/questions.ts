import { GetQuestionsByExerciseResponse, GetUnitResponse, GetUnitWithExercisesResponse, MatchingExercise, MultipleChoiceExercise } from "@/constants/types";
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

export async function GetYearlyActivity(id : string){
  const {data} = await api.get(`/api/users/${id}/activity`);
  return data;
}


export async function registerQuestion(body : MultipleChoiceExercise | MatchingExercise){
  const {data} = await api.post("/api/questions", body);
  return data;
}