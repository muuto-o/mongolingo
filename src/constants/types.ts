export interface MultipleChoiceExercise {
  title: string;
  type: "multiple_choice";
  exerciseId : string;
  options: string[];
  correctAnswer: string;
  audioPath: string;
}

export interface MatchingExercise {
  title: string;
  type: "matching";
  exerciseId : string;
  pairs: { word: string; meaning: string }[];
  correctAnswer: { [word: string]: string };
}


export type User = {
  id: string
  email: string
  username: string
  points: number
  experience: number
  accuracy: number
  exerciseLevel: number
  createdAt: string
  updatedAt: string
}

export type LoginRequest = {
    email : string;
    password: string;
}

export type LoginResponse = User

export type RegisterRequest = {
    username : string;
    email : string;
    password : string;
    repeat_password : string;
}

export type RegisterResponse = {
    message : string;
}

export type EditProfileRequest = {
    username: string;
    email : string;
}

export type EditProfileResponse = User

export type CompleteExerciseRequest = {
    email : string;
    username: string;
    points: number;
    experience: number;
    exerciseId: string;
}

export type CompleteExerciseResponse = User

export type GetMeRequest = {
    id : string
}

export type GetMeResponse = User

export type GetUnitResponse = Array<{
  name: string
  id: string
}>

export type GetUnitWithExercisesResponse = Array<{
  name: string
  exercises: Array<{
    iconPath: string
    level: number
    id: string
    unlocked : boolean
  }>
}>

export type GetQuestionsByExerciseResponse = Array<{
  title: string
  type: string
  exerciseId: string
  options: Array<string>
  correctAnswer: string
  audioPath: string
  id: string
}>
