import ABegin from "@/assets/a_ehend.png"
import EBegin from "@/assets/e_ehend.png"
import ADund from "@/assets/a_dund.png"
import OBegin from "@/assets/ou_ehend.png"
import UBegin from "@/assets/өү_ehend.png"
import ODund from "@/assets/o_dund.png"
import IBegin from "@/assets/IBegin.png"
import IDund from "@/assets/IDund.png"

export const users = [
    {
        firstName : 'John',
        lastName : 'Doe',
        email : 'john@example.com',
        password : 'password'
    }
]

export const letters = [
    {letter: 'а', script : 'ᠠ', desc : ['А үсэг нь үгийн эхэнд ', ' үгийн дунд ', ' хэлбэрээр орно.'], img : [ABegin, ADund]},
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

export const exercises = {
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