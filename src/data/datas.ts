
// import a_sound from "../assets/a.mp3"
import e_sound from "../assets/э.mp3"
import o_sound from "../assets/о.mp3"
// import u_sound from "../assets/ө.mp3"
import i_sound from "../assets/и.mp3"
import { Letter, MatchingExercise, MultipleChoiceExercise } from "@/constants/types"

export const vowels :Letter[] =[
  {name : "А", script : "ᠠ", start: "ᠠ‍", mid : "᠊ᠠ‍", end : "᠊ᠠ ᠡ᠋", desc : ""},
  {name : "Э", script : "ᠡ", start: "ᠡ‍", mid : "᠊ᠠ‍", end : "᠊ᠠ ᠡ᠋", desc : ""},
  {name : "И", script : "ᠢ", start: "ᠢ‍", mid : "᠊ᠢ‍", end : "᠊ᠢ", desc : ""},
  {name : "О, у", script : "ᠣ‍", start: "ᠣ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
  {name : "Ө, ү", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""}
]

export const consonants : Letter[] = [
  {name : "Н", script : "ᠨ", start: "ᠨ", mid : "᠊ᠨ‍", end : "᠊ᠠ", desc : ""},
  {name : "М", script : "ᠮ", start: "ᠮ", mid : "‍᠊ᠮ‍", end : "᠊ᠮ", desc : ""},
  {name : "Л", script : "ᠯ", start: "ᠯ", mid : "᠊ᠯ‍", end : "᠊ᠯ", desc : ""},
  {name : "Б", script : "ᠪ", start: "ᠪ", mid : "᠊ᠪ᠊", end : "᠊ᠪ", desc : ""},
  {name : "Р", script : "ᠷ", start: "ᠷ", mid : "᠊ᠷ‍", end : "᠊ᠷ", desc : ""},
  {name : "С", script : "ᠰ", start: "ᠰ", mid : "᠊ᠰ‍", end : "᠊ᠰ", desc : ""},
  {name : "Д", script : "ᠲ", start: "ᠲ", mid : "‍᠊ᠣᠠ‍᠂‍‍ ᠊ᠳ᠋", end : "᠊ᠳ᠂ ᠊ᠳ᠋", desc : ""},
  {name : "Г", script : "ᠭ", start: "ᠭ", mid : "᠊ᠭ‍᠋", end : "᠊ᠭ", desc : ""},
  {name : "Х", script : "ᠬ", start: "ᠬ", mid : "᠊ᠬ‍", end : "᠊ᠬ", desc : ""},
  {name : "Т", script : "ᠲ", start: "ᠲ", mid : "᠊ᠲ‍", end : "᠊ᠲᠡ", desc : ""},
  {name : "Ц, Ч", script : "ᠴ", start: "ᠴ", mid : "‍‍ᠴ᠊", end : "᠊ᠴ", desc : ""},
  {name : "З, Ж", script : "ᠵ", start: "ᠵ", mid : "᠊ᠵ‍", end : "᠊ᠵᠠ", desc : ""},
  {name : "Й", script : "ᠶ", start: "ᠶ", mid : "᠊ᠶ‍", end : "᠊ᠶᠠ᠂᠊ᠶ᠋ ᠡ᠋", desc : ""},
  {name : "Ш", script : "ᠱ", start: "ᠱ", mid : "᠊ᠱ‍", end : "᠊ᠱ", desc : ""},
]

export const foreignConsonants : Letter[]= [
  {name : "В", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
  {name : "П", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
  {name : "К", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
  {name : "Ф", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
  {name : "Ц", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
  {name : "З", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
  {name : "Х", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
  {name : "ЛХ", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ""},
]

export const letters = [
    {letter: 'а', script : 'ᠠ', desc : ['А үсэг нь үгийн эхэнд', ' үгийн дунд ', ' хэлбэрээр орно.']},
    {letter: 'э', script : 'ᠡ', desc : ['Э үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.']},
    {letter: 'и', script : 'ᠢᠢ', desc : ['И үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.']},
    {letter: 'о, у', script : 'ᠥ', desc : ['О, У үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.']},
    {letter: 'ө, ү', script : '᠋ᠥᠥ', desc : ['Ө, Ү үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.']},
    // {letter: 'б', script : 'ᠪ'}
]
export const consonants1 = [
    {letter: 'н', script : 'ᠨ'},
    {letter: 'м', script : 'ᠮ'},
    {letter: 'л', script : 'ᠯ'},
    {letter: 'б', script : 'ᠪ'},
    {letter: 'с', script : '᠋ᠰ'},
    {letter: 'д', script : '᠋ᠳ'},
    {letter: 'г', script : '᠋ᠭ'},
]

export const questions: (MultipleChoiceExercise | MatchingExercise)[] = 
  [
    {
      title: "(Э) Энэ ямар үсэг вэ?",
      type: "multiple_choice",
      exerciseId : "1",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      correctAnswer: "ᠡ",
      audioPath: e_sound,
    },
    {
      title: "Энэ үсэг ямар дуу гаргадаг вэ?",
      type: "multiple_choice",
      exerciseId : "1",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      correctAnswer: "ᠣ",
      audioPath: o_sound,
    },
    {
      type: "multiple_choice",
      title: "(И) Энэ ямар үсэг вэ?",
      exerciseId : "1",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      correctAnswer: "ᠢ",
      audioPath: i_sound,
    },
    {
      title: "(Э) Энэ ямар үсэг вэ?",
      type: "multiple_choice",
      exerciseId : "2",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      correctAnswer: "ᠡ",
      audioPath: e_sound,
    },
    {
      title: "Энэ үсэг ямар дуу гаргадаг вэ?",
      type: "multiple_choice",
      exerciseId : "2",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      correctAnswer: "ᠣ",
      audioPath: o_sound,
    },
    {
      type: "multiple_choice",
      title: "(И) Энэ ямар үсэг вэ?",
      exerciseId : "3",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      correctAnswer: "ᠢ",
      audioPath: i_sound,
    },
    // {
    //   title: "Тоо бүрийг нэртэй нь тохируул.",
    //   type: "matching",
    //    exerciseId : "1",
    //   pairs: [
    //     { word: "нэг", meaning: "one" },
    //     { word: "хоёр", meaning: "two" },
    //     { word: "гурван", meaning: "three" },
    //     { word: "дөрөв", meaning: "four" },
    //   ],
    //   correctAnswer: {
    //     нэг: "one",
    //     хоёр: "two",
    //     гурван: "three",
    //     дөрөв: "four",
    //   },
    // },
    // {
    //   type: "matching",
    //   title: "Өнгө бүрийг нэртэй нь тохируул.",
    //    exerciseId : "1",
    //   pairs: [
    //     { word: "улаан", meaning: "red" },
    //     { word: "хар", meaning: "black" },
    //     { word: "шар", meaning: "yellow" },
    //     { word: "цэнхэр", meaning: "blue" },
    //   ],
    //   correctAnswer: {
    //     улаан: "red",
    //     хар: "black",
    //     шар: "yellow",
    //     цэнхэр: "blue",
    //   },
    // },
    //  {
    //   type: "multiple_choice",
    //   title: "Энэ үсэг ямар дуу гаргадаг вэ?",
    //    exerciseId : "1",
    //   options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
    //   correctAnswer: "ᠢ",
    //   audioPath: i_sound,
    // },
    //   {
  //     type: "multiple_choice",
  //     title: "Энэ үсэг ямар дуу гаргадаг вэ?",
  //     options: ["ᠤ", "ᠡ", "ᠢ", "ᠣ"],
  //     correctAnswer: "ᠤ",
  //     audioPath: u_sound,
  //   },
    //  {
  //     type: "matching",
  //     title: "Үг бүрийг утгатай нь тохируул.",
  //     pairs: [
  //       { word: "ном", meaning: "book" },
  //       { word: "ус", meaning: "water" },
  //       { word: "гал", meaning: "fire" },
  //       { word: "агаар", meaning: "air" },
  //       { word: "үүл", meaning: "cloud" },
  //       { word: "чулуу", meaning: "stone" },
  //     ],
  //     correctAnswer: {
  //       ном: "book",
  //       ус: "water",
  //       гал: "fire",
  //       агаар: "air",
  //       үүл: "cloud",
  //       чулуу: "stone",
  //     },
  //   },
  //   {
  //     type: "multiple_choice",
  //     title: "Энэ үсэг ямар дуу гаргадаг вэ?",
  //     options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
  //     correctAnswer: "ᠢ",
  //     audioPath: i_sound,
  //   },
  //   {
  //     type: "matching",
  //     title: "Амьтан бүрийг нэртэй нь тохируул.",
  //     pairs: [
  //       { word: "морь", meaning: "horse" },
  //       { word: "үхэр", meaning: "cow" },
  //       { word: "тэмээ", meaning: "camel" },
  //       { word: "хонь", meaning: "sheep" },
  //     ],
  //     correctAnswer: {
  //       морь: "horse",
  //       үхэр: "cow",
  //       тэмээ: "camel",
  //       хонь: "sheep",
  //     },
  //   },
  //   {
  //     type: "multiple_choice",
  //     title: "Энэ үсэг ямар дуу гаргадаг вэ?",
  //     options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
  //     correctAnswer: "ᠠ",
  //     audioPath: a_sound,
  //   },
  //   {
  //     type: "matching",
  //     title: "Өнгө бүрийг нэртэй нь тохируул.",
  //     pairs: [
  //       { word: "улаан", meaning: "red" },
  //       { word: "хар", meaning: "black" },
  //       { word: "шар", meaning: "yellow" },
  //       { word: "цэнхэр", meaning: "blue" },
  //     ],
  //     correctAnswer: {
  //       улаан: "red",
  //       хар: "black",
  //       шар: "yellow",
  //       цэнхэр: "blue",
  //     },
  //   },
  ];
