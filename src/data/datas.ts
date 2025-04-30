
import a_sound from "@/assets/а1745938944.wav"
import e_sound from "../assets/э.mp3"
import o_sound from "../assets/о1745939194.wav"
import u_sound from "../assets/ө1745939191.wav"
import ou_sound from "../assets/у1745938553.wav"
import i_sound from "../assets/и1745939184.wav"
import uu_sound from "../assets/ү1745939198.wav"
import { Consonant, Letter, MatchingExercise, MultipleChoiceExercise } from "@/constants/types"

export const vowels :Letter[] =[
  {name : "А", script : "ᠠ", start: "ᠠ‍", mid : "᠊ᠠ‍", end : "᠊ᠠ ᠡ᠋", desc : a_sound},
  {name : "Э", script : "ᠡ", start: "ᠡ‍", mid : "᠊ᠠ‍", end : "᠊ᠠ ᠡ᠋", desc : e_sound},
  {name : "И", script : "ᠢ", start: "ᠢ‍", mid : "᠊ᠢ‍", end : "᠊ᠢ", desc : i_sound},
  {name : "О", script : "ᠣ‍", start: "ᠣ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : o_sound},
  {name : "У", script : "ᠣ‍", start: "ᠣ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : ou_sound},
  {name : "Ө", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : u_sound},
  {name : "Ү", script : "ᠦ‍", start: "ᠦ‍", mid : "᠊ᠣ‍", end : "᠊ᠣ", desc : uu_sound}
]
export const consonants1 : Letter[] = [
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

export const consonants : Consonant[]= [
  {name : "Н", script : "ᠨ", start: "ᠨ", mid : "᠊ᠨ‍", end : "᠊ᠠ", desc : a_sound, letters : [
    {name : "Н", script : "ᠨ", start: "ᠨ", mid : "᠊ᠨ‍", end : "᠊ᠠ", desc : a_sound},
    { name : "НА", script : "ᠨᠠ‍", start: "ᠨᠡ‍", mid : "᠊ᠨᠠ‍", end : "᠊ᠨᠠ", desc : a_sound},
    { name : "НЭ", script : "ᠨᠡ‍", start: "ᠨᠡ‍", mid : "᠊ᠨᠠ‍", end : "᠊ᠨ ᠡ᠋", desc : e_sound},
    { name : "НИ", script : "ᠨᠢ‍", start: "ᠨᠢ‍", mid : "᠊ᠨᠢ‍", end : "᠊ᠨᠢ", desc : i_sound},
    { name : "НО", script : "ᠨᠣ‍", start: "ᠨᠣ‍", mid : "᠊ᠨ‍ᠥ‍", end : "᠊ᠨᠥ", desc : o_sound},
    { name : "НУ", script : "ᠨᠣ‍", start: "ᠨᠣ‍", mid : "᠊ᠨ‍ᠥ‍", end : "᠊ᠨᠥ", desc : ou_sound},
    { name : "НӨ", script : "ᠨᠥ‍", start: "ᠨᠥ‍", mid : "᠊ᠨ‍ᠥ‍", end : "᠊ᠨᠥ", desc : u_sound},
    { name : "НҮ", script : "ᠨᠥ‍", start: "ᠨᠥ‍", mid : "᠊ᠨ‍ᠥ‍", end : "᠊ᠨᠥ", desc : uu_sound}
  ]},
  {name : "М", script : "ᠮ", start: "ᠮ", mid : "‍᠊ᠮ‍", end : "᠊ᠮ", desc : a_sound, letters : [
    {name : "М", script : "ᠮ", start: "ᠮ", mid : "‍᠊ᠮ‍", end : "᠊ᠮ", desc : a_sound},
    { name : "МА", script : "ᠮᠠ‍", start: "ᠮᠠ‍", mid : "᠊ᠮᠠ‍", end : "᠊ᠮᠠ", desc : a_sound},
    { name : "МЭ", script : "ᠮᠠ‍", start: "ᠮᠠ‍", mid : "᠊ᠮᠠ‍", end : "᠊ᠮ ᠡ᠋", desc : e_sound},
    { name : "МИ", script : "ᠮᠢ‍", start: "ᠮᠢ‍", mid : "᠊ᠮᠢ‍", end : "᠊ᠮᠢ", desc : i_sound},
    { name : "МО", script : "ᠮᠣ‍", start: "ᠮᠣ‍", mid : "᠊ᠮ‍ᠥ‍", end : "᠊ᠮᠥ", desc : o_sound},
    { name : "МУ", script : "ᠮᠣ‍", start: "ᠮᠣ‍", mid : "᠊ᠮ‍ᠥ‍", end : "᠊ᠮᠥ", desc : ou_sound},
    { name : "МӨ", script : "ᠮᠥ‍", start: "ᠮᠥ‍", mid : "᠊ᠮ‍ᠥ‍", end : "᠊ᠮᠥ", desc : u_sound},
    { name : "МҮ", script : "ᠮᠥ‍", start: "ᠮᠥ‍", mid : "᠊ᠮ‍ᠥ‍", end : "᠊ᠮᠥ", desc : uu_sound}
  ]},
  {name : "Л", script : "ᠯ", start: "ᠯ", mid : "᠊ᠯ‍", end : "᠊ᠯ", desc : a_sound, letters : [
    {name : "Л", script : "ᠯ", start: "ᠯ", mid : "᠊ᠯ‍", end : "᠊ᠯ", desc : a_sound},
    { name : "ЛА", script : "ᠯᠠ‍", start: "ᠯᠠ‍", mid : "᠊ᠯᠠ‍", end : "᠊ᠮᠠ᠂ ᠊ᠮ ᠡ᠋", desc : a_sound},
    { name : "ЛЭ", script : "ᠯᠠ‍", start: "ᠯᠠ‍", mid : "᠊ᠯᠠ‍", end : "᠊ᠮ ᠡ᠋", desc : e_sound},
    { name : "ЛИ", script : "ᠯᠢ‍", start: "ᠯᠢ‍", mid : "᠊ᠯᠢ‍", end : "᠊ᠮᠢ", desc : i_sound},
    { name : "ЛО", script : "ᠯᠣ‍", start: "ᠯᠣ‍", mid : "᠊ᠯ‍ᠥ‍", end : "᠊ᠯᠥ", desc : o_sound},
    { name : "ЛУ", script : "ᠯᠣ‍", start: "ᠯᠣ‍", mid : "᠊ᠯᠥ‍", end : "᠊ᠯᠥ", desc : ou_sound},
    { name : "ЛӨ", script : "ᠯᠥ‍", start: "ᠯᠥ‍", mid : "᠊ᠯ‍ᠥ‍", end : "᠊ᠯᠥ", desc : u_sound},
    { name : "ЛҮ", script : "ᠯᠥ‍", start: "ᠯᠥ‍", mid : "᠊ᠯᠥ‍", end : "᠊ᠯᠥ", desc : uu_sound}
  ]},
  
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
