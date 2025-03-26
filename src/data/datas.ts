import ABegin from "@/assets/a_ehend.svg"
import EBegin from "@/assets/e_ehend.png"
import ADund from "@/assets/a_dund.png"
import OBegin from "@/assets/ou_ehend.png"
import UBegin from "@/assets/өү_ehend.png"
import ODund from "@/assets/o_dund.png"
import IBegin from "@/assets/IBegin.png"
import IDund from "@/assets/IDund.png"

import a_sound from "../assets/a.mp3"
import e_sound from "../assets/э.mp3"
import o_sound from "../assets/о.mp3"
import u_sound from "../assets/ө.mp3"
import i_sound from "../assets/и.mp3"
import { MatchingExercise, MultipleChoiceExercise } from "@/pages/exercises"

export const users = [
    {
        firstName : 'John',
        lastName : 'Doe',
        email : 'john@example.com',
        password : 'password'
    }
]

export const letters = [
    {letter: 'а', script : 'ᠠ', desc : ['А үсэг нь үгийн ᠑ ᠠ᠋ ᠨ᠋ ᠤ᠋ ᠣ᠋ эхэнд ᠠ‍', ' үгийн ᠣ᠋ дунд ', ' хэлбэрээр орно.'], img : [ABegin, ADund]},
    {letter: 'э', script : 'ᠡ', desc : ['Э үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.'], img : [EBegin, ADund]},
    {letter: 'и', script : 'ᠢᠢ', desc : ['И үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.'], img : [IBegin, IDund]},
    {letter: 'о, у', script : 'ᠥ', desc : ['О, У үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.'], img : [OBegin, ODund]},
    {letter: 'ө, ү', script : '᠋ᠥᠥ', desc : ['Ө, Ү үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.'], img : [UBegin, ODund]},
    // {letter: 'б', script : 'ᠪ'}
]
export const consonants = [
    {letter: 'н', script : 'ᠨ'},
    {letter: 'м', script : 'ᠮ'},
    {letter: 'л', script : 'ᠯ'},
    {letter: 'б', script : 'ᠪ'},
    {letter: 'с', script : '᠋ᠰ'},
    {letter: 'д', script : '᠋ᠳ'},
    {letter: 'г', script : '᠋ᠭ'},
]


export const lessons = [
    {

    }
]


export const lessonExercises: (MultipleChoiceExercise | MatchingExercise)[][] = [
  [
    {
      type: "multiple_choice",
      question: "(Э) Энэ ямар үсэг вэ?",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      answer: "ᠡ",
      audio: e_sound,
    },
    {
      type: "matching",
      question: "Үг бүрийг утгатай нь тохируул.",
      pairs: [
        { word: "ном", meaning: "book" },
        { word: "ус", meaning: "water" },
        { word: "гал", meaning: "fire" },
        { word: "агаар", meaning: "air" },
        { word: "үүл", meaning: "cloud" },
        { word: "чулуу", meaning: "stone" },
      ],
      answer: {
        ном: "book",
        ус: "water",
        гал: "fire",
        агаар: "air",
        үүл: "cloud",
        чулуу: "stone",
      },
    },
    {
      type: "multiple_choice",
      question: "Энэ үсэг ямар дуу гаргадаг вэ?",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      answer: "ᠢ",
      audio: i_sound,
    },
    {
      type: "matching",
      question: "Амьтан бүрийг нэртэй нь тохируул.",
      pairs: [
        { word: "морь", meaning: "horse" },
        { word: "үхэр", meaning: "cow" },
        { word: "тэмээ", meaning: "camel" },
        { word: "хонь", meaning: "sheep" },
      ],
      answer: {
        морь: "horse",
        үхэр: "cow",
        тэмээ: "camel",
        хонь: "sheep",
      },
    },
    {
      type: "multiple_choice",
      question: "Энэ үсэг ямар дуу гаргадаг вэ?",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      answer: "ᠠ",
      audio: a_sound,
    },
    {
      type: "matching",
      question: "Өнгө бүрийг нэртэй нь тохируул.",
      pairs: [
        { word: "улаан", meaning: "red" },
        { word: "хар", meaning: "black" },
        { word: "шар", meaning: "yellow" },
        { word: "цэнхэр", meaning: "blue" },
      ],
      answer: {
        улаан: "red",
        хар: "black",
        шар: "yellow",
        цэнхэр: "blue",
      },
    },
    {
      type: "multiple_choice",
      question: "Энэ үсэг ямар дуу гаргадаг вэ?",
      options: ["ᠠ", "ᠡ", "ᠢ", "ᠣ"],
      answer: "ᠣ",
      audio: o_sound,
    },
    {
      type: "matching",
      question: "Тоо бүрийг нэртэй нь тохируул.",
      pairs: [
        { word: "нэг", meaning: "one" },
        { word: "хоёр", meaning: "two" },
        { word: "гурван", meaning: "three" },
        { word: "дөрөв", meaning: "four" },
      ],
      answer: {
        нэг: "one",
        хоёр: "two",
        гурван: "three",
        дөрөв: "four",
      },
    },
    {
      type: "multiple_choice",
      question: "Энэ үсэг ямар дуу гаргадаг вэ?",
      options: ["ᠤ", "ᠡ", "ᠢ", "ᠣ"],
      answer: "ᠤ",
      audio: u_sound,
    },
  ],
  //add more arrays here for other lessons.
];

export const exercises2 = {
    unit_one : [
        {
            type : "test",
            question : "Дараах үсгийн галигийг сонго.",
            image : ABegin,
            answers : ["э (үгийн эхэнд)", "а (үгийн эхэнд)", "о (үгийн эхэнд)", "а (үгийн дунд)"],
            correctAnswer : "а (үгийн эхэнд)",
            desc : [
                "Үгийн эхэнд а үсэг нь ", " хэлбэрээр бичигдэнэ.",
            ],
            explain : "монгол бичгийн үсэг нь үгийн эхэнл, дунд, болон, адагт өөр өөр хэлбэрээр ордог.",
            detail : false,
        },
        {
            type : "test",
            question : "Дараах үсгийн галигийг сонго.",
            image : EBegin,
            answers : ["а (үгийн эхэнд)", "э (үгийн эхэнд)", "о (үгийн эхэнд)","а (үгийн дунд)"],
            correctAnswer : "э (үгийн эхэнд)",
            desc : [
                "Үгийн эхэнд э үсэг нь ", " хэлбэрээр бичигдэнэ.",
            ],
            explain : "монгол бичгийн үсэг нь үгийн эхэнл, дунд, болон, адагт өөр өөр хэлбэрээр ордог.",
            detail : false,

        },
         {
            type : "test",
             question : "Дараах үсгийн галигийг сонго.",
            image : ADund,
            answers : ["а (үгийн эхэнд)", "э (үгийн эхэнд)", "о (үгийн эхэнд)","а (үгийн дунд)"],
            correctAnswer : "а (үгийн дунд)",
            desc : [
                "Үгийн дунд а үсэг нь ", " хэлбэрээр бичигдэнэ.",
            ],
            explain : "монгол бичгийн үсэг нь үгийн эхэнл, дунд, болон, адагт өөр өөр хэлбэрээр ордог.",
            detail : false,
        },
        {
            type : "test",
            question : "Дараах үсгийн галигийг сонго.",
            image : ADund,
            answers : ["а (үгийн эхэнд)", "э (үгийн эхэнд)", "о (үгийн эхэнд)","э (үгийн дунд)"],
            correctAnswer : "э (үгийн дунд)",
            desc : [
                "Үгийн дунд э үсэг нь ", " хэлбэрээр бичигдэнэ.",
            ],
            explain : "монгол бичгийн үсэг нь үгийн эхэнл, дунд, болон, адагт өөр өөр хэлбэрээр ордог.",
            detail : false,
        },
        // {
        //     type : "match",
        //     question : "Дараах үсгүүдийг тохирох галигтай холбо.",
        //     image : [ADund, ABegin, EBegin],
        //     answers : ["а (үгийн эхэнд)", "э (үгийн эхэнд)","э (үгийн дунд)"],
        //     correctAnswer : [[0, 2], [1, 0], [2, 1]],
        //     desc : [
        //         "Үгийн дунд э үсэг нь ", " хэлбэрээр бичигдэнэ.",
        //     ],
        //     explain : "монгол бичгийн үсэг нь үгийн эхэнл, дунд, болон, адагт өөр өөр хэлбэрээр ордог.",
        //     detail : false,
        // }


    ]
}