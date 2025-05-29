
import a_sound from "@/assets/а1745938944.wav"
import e_sound from "../assets/э.mp3"
import o_sound from "../assets/о1745939194.wav"
import u_sound from "../assets/ө1745939191.wav"
import ou_sound from "../assets/у1745938553.wav"
import i_sound from "../assets/и1745939184.wav"
import uu_sound from "../assets/ү1745939198.wav"
import titem_zurlaga from "@/assets/titem_zurlaga.png"
import shud_zurlaga from "@/assets/shud_zurlaga.png"
import gedes_zurlaga from "@/assets/gedes_zurlaga.png"
import shilbe_zurlaga from "@/assets/shilbe_zurlaga.png"
import num_zurlaga from "@/assets/num_zurlaga.png"
import suul_zurlaga from "@/assets/suul_zurlaga.png"
import orhits_zurlaga from "@/assets/orhits_zurlaga.png"
import { Consonant, Drawing, Letter, MatchingExercise, MultipleChoiceExercise } from "@/constants/types"

export const drawings : Drawing[] = [
  {  name : "Титэм", image : titem_zurlaga  },
  {  name : "Шүд", image : shud_zurlaga  },
  {  name : "Шилбэ", image : shilbe_zurlaga  },
  {  name : "Гэдэс", image : gedes_zurlaga  },
  {  name : "Нум", image : num_zurlaga  },
  {  name : "Орхиц", image : orhits_zurlaga  },
  {  name : "Сүүл", image : suul_zurlaga  },
]

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




export const foreignConsonants : Consonant[]= [
   
  {name : "В", script : "ᠸ", start: "ᠸ", mid : "᠊ᠸ‍", end : "᠊ᠸ", desc : a_sound, letters : [
    {name : "В", script : "ᠸ", start: "ᠸ", mid : "᠊ᠸ‍", end : "᠊ᠸ", desc : a_sound},
    { name : "ВА", script : "ᠸᠠ‍", start: "ᠸᠠ‍", mid : "᠊ᠸᠠ‍", end : "᠊ᠸᠠ", desc : a_sound},
    { name : "ВЭ(ВЕ)", script : "ᠸᠸ‍", start: "ᠸᠸ‍", mid : "᠊ᠸᠸ‍", end : "᠊ᠸᠸ", desc : e_sound},
    { name : "ВИ", script : "ᠸᠢ‍", start: "ᠸᠢ‍", mid : "᠊ᠸᠢ‍", end : "᠊ᠸᠢ", desc : i_sound},
    { name : "ВО", script : "ᠸᠣ‍", start: "ᠸᠣ‍", mid : "᠊ᠸ‍ᠥ‍", end : "᠊ᠸᠣ", desc : o_sound},
    { name : "ВУ", script : "ᠸᠥ‍", start: "ᠸᠣ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : ou_sound},
    { name : "ВӨ", script : "ᠸᠥ‍", start: "ᠸᠥ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : u_sound},
    { name : "ВҮ", script : "ᠸᠥ‍", start: "ᠸᠥ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : uu_sound}
  ]},

  {name : "П", script : "ᠫ", start: "ᠫ", mid : "᠊ᠫ‍", end : "᠊ᠫ", desc : a_sound, letters : [
    {name : "П", script : "ᠸ", start: "ᠸ", mid : "᠊ᠸ‍", end : "᠊ᠸ", desc : a_sound},
    { name : "ПА", script : "ᠸᠠ‍", start: "ᠸᠠ‍", mid : "᠊ᠸᠠ‍", end : "᠊ᠸᠠ", desc : a_sound},
    { name : "ПЭ(ПЕ)", script : "ᠸᠸ‍", start: "ᠸᠸ‍", mid : "᠊ᠸᠸ‍", end : "᠊ᠸᠸ", desc : e_sound},
    { name : "ПИ", script : "ᠸᠢ‍", start: "ᠸᠢ‍", mid : "᠊ᠸᠢ‍", end : "᠊ᠸᠢ", desc : i_sound},
    { name : "ПО", script : "ᠸᠣ‍", start: "ᠸᠣ‍", mid : "᠊ᠸ‍ᠥ‍", end : "᠊ᠸᠣ", desc : o_sound},
    { name : "ПУ", script : "ᠸᠥ‍", start: "ᠸᠣ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : ou_sound},
    { name : "ПӨ", script : "ᠸᠥ‍", start: "ᠸᠥ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : u_sound},
    { name : "ПҮ", script : "ᠸᠥ‍", start: "ᠸᠥ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : uu_sound}
  ]},

  {name : "К", script : "ᠻ", start: "ᠻ", mid : "᠊ᠻ‍", end : "᠊ᠺ", desc : a_sound, letters : [
    {name : "К", script : "ᠸ", start: "ᠸ", mid : "᠊ᠸ‍", end : "᠊ᠸ", desc : a_sound},
    { name : "КА", script : "ᠸᠠ‍", start: "ᠸᠠ‍", mid : "᠊ᠸᠠ‍", end : "᠊ᠸᠠ", desc : a_sound},
    { name : "КЭ(КЕ)", script : "ᠸᠸ‍", start: "ᠸᠸ‍", mid : "᠊ᠸᠸ‍", end : "᠊ᠸᠸ", desc : e_sound},
    { name : "КИ", script : "ᠸᠢ‍", start: "ᠸᠢ‍", mid : "᠊ᠸᠢ‍", end : "᠊ᠸᠢ", desc : i_sound},
    { name : "КО", script : "ᠸᠣ‍", start: "ᠸᠣ‍", mid : "᠊ᠸ‍ᠥ‍", end : "᠊ᠸᠣ", desc : o_sound},
    { name : "КУ", script : "ᠸᠥ‍", start: "ᠸᠣ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : ou_sound},
    { name : "КӨ", script : "ᠸᠥ‍", start: "ᠸᠥ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : u_sound},
    { name : "КҮ", script : "ᠸᠥ‍", start: "ᠸᠥ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : uu_sound}
  ]},

  {name : "Ф", script : "ᠹ", start: "ᠹ", mid : "᠊ᠹ‍", end : "᠊ᠹ", desc : a_sound, letters : [
    {name : "Ф", script : "ᠸ", start: "ᠸ", mid : "᠊ᠸ‍", end : "᠊ᠸ", desc : a_sound},
    { name : "ФА", script : "ᠸᠠ‍", start: "ᠸᠠ‍", mid : "᠊ᠸᠠ‍", end : "᠊ᠸᠠ", desc : a_sound},
    { name : "ФЭ(ФЕ)", script : "ᠸᠸ‍", start: "ᠸᠸ‍", mid : "᠊ᠸᠸ‍", end : "᠊ᠸᠸ", desc : e_sound},
    { name : "ФИ", script : "ᠸᠢ‍", start: "ᠸᠢ‍", mid : "᠊ᠸᠢ‍", end : "᠊ᠸᠢ", desc : i_sound},
    { name : "ФО", script : "ᠸᠣ‍", start: "ᠸᠣ‍", mid : "᠊ᠸ‍ᠥ‍", end : "᠊ᠸᠣ", desc : o_sound},
    { name : "ФУ", script : "ᠸᠥ‍", start: "ᠸᠣ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : ou_sound},
    { name : "ФӨ", script : "ᠸᠥ‍", start: "ᠸᠥ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : u_sound},
    { name : "ФҮ", script : "ᠸᠥ‍", start: "ᠸᠥ‍", mid : "᠊ᠸᠥ‍", end : "᠊ᠸᠣ", desc : uu_sound}
  ]},

  {name : "Ц", script : "ᠼ", start: "ᠼ", mid : "᠊ᠼ‍", end : "᠊ᠼ", desc : a_sound, letters : [
    {name : "Ц", script : "ᠼ", start: "ᠼ", mid : "᠊ᠼ‍", end : "᠊ᠼ", desc : a_sound},
    { name : "ЦА", script : "ᠼᠠ‍", start: "ᠼᠠ‍", mid : "᠊ᠼᠠ‍", end : "᠊ᠼᠠ", desc : a_sound},
    { name : "ЦЭ(ЦЕ)", script : "ᠼᠸ‍", start: "ᠼᠸ‍", mid : "᠊ᠼᠸ‍", end : "᠊ᠼᠸ", desc : e_sound},
    { name : "ЦИ", script : "ᠼᠢ‍", start: "ᠴᠢ‍", mid : "᠊ᠴᠢ‍", end : "᠊ᠴᠢ", desc : i_sound},
    { name : "ЦО", script : "ᠼᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : o_sound},
    { name : "ЦУ", script : "ᠼᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : ou_sound},
    { name : "ЦӨ", script : "ᠼᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : u_sound},
    { name : "ЦҮ", script : "ᠼᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : uu_sound}
  ]},

  {name : "З", script : "ᠼ", start: "ᠼ", mid : "᠊ᠼ‍", end : "᠊ᠼ", desc : a_sound, letters : [
    {name : "З", script : "ᠼ", start: "ᠼ", mid : "᠊ᠼ‍", end : "᠊ᠼ", desc : a_sound},
    { name : "ЗА", script : "ᠼᠠ‍", start: "ᠼᠠ‍", mid : "᠊ᠼᠠ‍", end : "᠊ᠼᠠ", desc : a_sound},
    { name : "ЗЭ(ЗЕ)", script : "ᠼᠸ‍", start: "ᠼᠸ‍", mid : "᠊ᠼᠸ‍", end : "᠊ᠼᠸ", desc : e_sound},
    { name : "ЗИ", script : "ᠼᠢ‍", start: "ᠴᠢ‍", mid : "᠊ᠴᠢ‍", end : "᠊ᠴᠢ", desc : i_sound},
    { name : "ЗО", script : "ᠼᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : o_sound},
    { name : "ЗУ", script : "ᠼᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : ou_sound},
    { name : "ЗӨ", script : "ᠼᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : u_sound},
    { name : "ЗҮ", script : "ᠼᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : uu_sound}
  ]},
  {name : "Х", script : "ᠡᡁ", start: "ᠡᡁ", mid : "᠊ᡁ", end : "᠊ᡁ", desc : a_sound, letters : [
    {name : "Х", script : "ᠡᡁ", start: "ᠡᡁ", mid : "᠊ᡁ‍", end : "᠊ᡁ", desc : a_sound},
    { name : "ХА", script : "ᠡᡁᠠ‍", start: "ᠡᡁᠠ‍", mid : "᠊ᡁᠠ‍", end : "᠊ᡁᠠ", desc : a_sound},
    { name : "ХЭ(ХЕ)", script : "ᠼᠠ‍", start: "ᠼᠠ‍", mid : "᠊ᠼ‍", end : "᠊ᠼᠡ", desc : e_sound},
    { name : "ХИ", script : "ᠼᠢ‍", start: "ᠴᠢ‍", mid : "᠊ᠴᠢ‍", end : "᠊ᠴᠢ", desc : i_sound},
    { name : "ХО", script : "ᠼᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : o_sound},
    { name : "ХУ", script : "ᠼᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : ou_sound},
    { name : "ХӨ", script : "ᠼᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : u_sound},
    { name : "ХҮ", script : "ᠼᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : uu_sound}
  ]},
  {name : "ЛХ", script : "ᠯᡁ", start: "ᠯᡁ", mid : "᠊ᠯᡁ‍", end : "᠊ᠯᡁ", desc : a_sound, letters : [
    {name : "ЛХ", script : "ᠯᡁ", start: "ᠯᡁ", mid : "᠊ᠯᡁ‍", end : "᠊ᠯᡁ", desc : a_sound},
    { name : "А", script : "ᠯᡁᠠ‍", start: "ᠯᡁᠠ‍", mid : "᠊ᠯᡁᠠ‍", end : "᠊ᠯᡁᠠ", desc : a_sound},
    { name : "Э(Е)", script : "ᠯᡁᠸ‍", start: "ᠯᡁᠸ‍", mid : "᠊ᠯᡁᠸ‍", end : "᠊ᠯᡁᠸ", desc : e_sound},
    { name : "И", script : "ᠼᠢ‍", start: "ᠴᠢ‍", mid : "᠊ᠴᠢ‍", end : "᠊ᠴᠢ", desc : i_sound},
    { name : "О", script : "ᠼᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : o_sound},
    { name : "У", script : "ᠼᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : ou_sound},
    { name : "Ө", script : "ᠼᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : u_sound},
    { name : "Ү", script : "ᠼᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : uu_sound}
  ]},
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

  {name : "Б", script : "ᠪ‍", start: "ᠪ‍", mid : "᠊ᠪ᠊", end : "᠊ᠪ", desc : a_sound, letters : [
    {name : "Б", script : "ᠪ‍", start: "ᠪ‍", mid : "᠊ᠪ᠊", end : "᠊ᠪ", desc : a_sound},
    { name : "БА", script : "ᠪᠠ‍", start: "ᠪᠠ‍", mid : "᠊ᠪᠠ‍", end : "᠊ᠪᠠ", desc : a_sound},
    { name : "БЭ", script : "ᠪᠠ‍", start: "ᠪᠠ‍", mid : "᠊ᠪᠠ‍", end : "᠊ᠪᠠ", desc : e_sound},
    { name : "БИ", script : "ᠪᠢ‍", start: "ᠪᠢ‍", mid : "᠊ᠪᠢ‍", end : "᠊ᠪᠢ", desc : i_sound},
    { name : "БО", script : "ᠪᠣ‍", start: "ᠪᠣ‍", mid : "᠊ᠪ‍ᠥ‍", end : "᠊ᠪᠥ", desc : o_sound},
    { name : "БУ", script : "ᠪᠣ‍", start: "ᠪᠣ‍", mid : "᠊ᠪ‍ᠥ‍", end : "᠊ᠪᠥ", desc : ou_sound},
    { name : "БӨ", script : "ᠪᠥ‍", start: "ᠪᠥ‍", mid : "᠊ᠪ‍ᠥ‍", end : "᠊ᠪᠥ", desc : u_sound},
    { name : "БҮ", script : "ᠪᠥ‍", start: "ᠪᠥ‍", mid : "᠊ᠪ‍ᠥ‍", end : "᠊ᠪᠥ", desc : uu_sound}
  ]},

  {name : "Р", script : "ᠷ", start: "ᠷ", mid : "᠊ᠷ‍", end : "᠊ᠷ", desc : a_sound, letters : [
    {name : "Р", script : "ᠷ", start: "ᠷ", mid : "᠊ᠷ‍", end : "᠊ᠷ", desc : a_sound},
    { name : "РА", script : "ᠷᠠ‍", start: "ᠷᠠ‍", mid : "᠊ᠷᠠ‍", end : "᠊ᠷᠠ᠂ ᠊ᠷ ᠡ᠋", desc : a_sound},
    { name : "РЭ", script : "ᠷᠠ‍", start: "ᠷᠠ‍", mid : "᠊ᠷᠠ‍", end : "᠊ᠷᠠ᠂ ᠊ᠷ ᠡ᠋", desc : e_sound},
    { name : "РИ", script : "ᠷᠢ‍", start: "ᠷᠢ‍", mid : "᠊ᠷᠢ‍", end : "᠊ᠷᠢ", desc : i_sound},
    { name : "РО", script : "ᠷᠣ‍", start: "ᠷᠣ‍", mid : "᠊ᠷ‍ᠥ‍", end : "᠊ᠷᠣ", desc : o_sound},
    { name : "РУ", script : "ᠷᠣ‍", start: "ᠷᠣ‍", mid : "᠊ᠷ‍ᠥ‍", end : "᠊ᠷᠣ", desc : ou_sound},
    { name : "РӨ", script : "ᠷᠥ‍", start: "ᠷᠥ‍", mid : "᠊ᠷ‍ᠥ‍", end : "᠊ᠷᠣ", desc : u_sound},
    { name : "РҮ", script : "ᠷᠥ‍", start: "ᠷᠥ‍", mid : "᠊ᠷ‍ᠥ‍", end : "᠊ᠷᠣ", desc : uu_sound}
  ]},

  {name : "С", script : "ᠰ", start: "ᠰ", mid : "᠊ᠰ‍", end : "᠊ᠰ", desc : a_sound, letters : [
    {name : "С", script : "ᠰ", start: "ᠰ", mid : "᠊ᠰ‍", end : "᠊ᠰ", desc : a_sound},
    { name : "СА", script : "ᠰᠠ‍", start: "ᠰᠠ‍", mid : "᠊ᠰᠠ‍", end : "᠊ᠰᠠ", desc : a_sound},
    { name : "СЭ", script : "ᠰᠠ‍", start: "ᠰᠠ‍", mid : "᠊ᠰᠠ‍", end : "᠊ᠰᠠ", desc : e_sound},
    { name : "СИ", script : "ᠰᠢ‍", start: "ᠰᠢ‍", mid : "᠊ᠰᠢ‍", end : "᠊ᠰᠢ", desc : i_sound},
    { name : "СО", script : "ᠰᠣ‍", start: "ᠰᠣ‍", mid : "᠊ᠰ‍ᠥ‍", end : "᠊ᠰᠣ", desc : o_sound},
    { name : "СУ", script : "ᠰᠣ‍", start: "ᠰᠣ‍", mid : "᠊ᠰ‍ᠥ‍", end : "᠊ᠰᠣ", desc : ou_sound},
    { name : "СӨ", script : "ᠰᠥ‍", start: "ᠰᠥ‍", mid : "᠊ᠰ‍ᠥ‍", end : "᠊ᠰᠣ", desc : u_sound},
    { name : "СҮ", script : "ᠰᠥ‍", start: "ᠰᠥ‍", mid : "᠊ᠰ‍ᠥ‍", end : "᠊ᠰᠣ", desc : uu_sound}
  ]},

  {name : "Д", script : "ᠳ‍", start: "ᠳ‍", mid : "᠊ᠳ‍᠂ ᠊ᠲ‍", end : "᠊ᠳ᠂ ᠊ᠲ", desc : a_sound, letters : [
    {name : "Д", script : "ᠳ‍", start: "ᠳ‍", mid : "᠊ᠳ‍᠂ ᠊ᠲ‍", end : "᠊ᠳ᠂ ᠊ᠲ", desc : a_sound},
    { name : "ДА", script : "ᠳᠠ‍", start: "ᠳᠠ‍", mid : "᠊ᠲᠠ‍", end : "᠊ᠲᠠ", desc : a_sound},
    { name : "ДЭ", script : "ᠳᠠ‍", start: "ᠳᠠ‍", mid : "᠊ᠲᠠ‍", end : "᠊ᠲᠠ", desc : e_sound},
    { name : "ДИ", script : "ᠲᠢ‍", start: "ᠳᠢ‍", mid : "᠊ᠲᠢ‍", end : "᠊ᠲᠢ", desc : i_sound},
    { name : "ДО", script : "ᠳᠣ‍", start: "ᠳᠣ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : o_sound},
    { name : "ДУ", script : "ᠳᠣ‍", start: "ᠳᠣ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : ou_sound},
    { name : "ДӨ", script : "ᠲᠥ‍", start: "ᠲᠥ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : u_sound},
    { name : "ДҮ", script : "ᠲᠥ‍", start: "ᠲᠥ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : uu_sound}
  ]},

  {name : "Г", script : "ᠭ᠂ ᠭ‍", start: "ᠭ᠂ ᠭ‍", mid : "᠊ᠭ‍᠂ ᠊ᠭᠡ‍‍‍‍", end : "᠊ᠭ᠂ ᠊ᠭ᠌", desc : a_sound, letters : [
    {name : "Г", script : "ᠭ᠂ ᠭ‍", start: "ᠭ᠂ ᠭ‍", mid : "᠊ᠭ‍᠂ ᠊ᠭᠡ‍‍‍‍", end : "᠊ᠭ᠂ ᠊ᠭ᠌", desc : a_sound},
    { name : "ГА", script : "ᠭᠠ‍", start: "ᠭᠠ‍", mid : "᠊ᠭᠠ‍", end : "᠊ᠭᠠ ᠡ᠋", desc : a_sound},
    { name : "ГЭ", script : "ᠭᠡ‍", start: "ᠭᠡ‍", mid : "᠊ᠭᠡ‍", end : "᠊ᠭᠡ", desc : e_sound},
    { name : "ГИ", script : "ᠭᠢ‍", start: "ᠭᠢ‍", mid : "᠊ᠭᠢ‍", end : "᠊ᠭᠢ", desc : i_sound},
    { name : "ГО", script : "ᠭᠣ‍", start: "ᠭᠣ‍", mid : "᠊ᠭᠣ‍", end : "᠊ᠭᠣ", desc : o_sound},
    { name : "ГУ", script : "ᠭᠣ‍", start: "ᠭᠣ‍", mid : "᠊ᠭᠣ‍", end : "᠊ᠭᠣ", desc : ou_sound},
    { name : "ГӨ", script : "ᠭᠥ‍", start: "ᠭᠥ‍", mid : "᠊ᠭᠥ‍", end : "᠊ᠭᠥ", desc : u_sound},
    { name : "ГҮ", script : "ᠭᠥ‍", start: "ᠭᠥ‍", mid : "᠊ᠭᠥ‍", end : "᠊ᠭᠥ", desc : uu_sound}
  ]},

  {name : "Х", script : "ᠬᠠ‍", start: "ᠬᠠ‍", mid : "᠊ᠭ‍", end : "᠊ᠭ ᠡ᠋", desc : a_sound, letters : [
    // {name : "Х", script : "ᠭ᠂ ᠭ‍", start: "ᠭ᠂ ᠭ‍", mid : "᠊ᠭ‍᠂ ᠊ᠭᠡ‍‍‍‍", end : "᠊ᠭ᠂ ᠊ᠭ᠌", desc : a_sound},
    { name : "ХА", script : "ᠬᠠ‍", start: "ᠬᠠ‍", mid : "᠊ᠬᠠ‍", end : "᠊ᠬᠠ ᠡ᠋", desc : a_sound},
    { name : "ХЭ", script : "ᠭᠡ‍", start: "ᠭᠡ‍", mid : "᠊ᠭᠡ‍", end : "᠊ᠭᠡ", desc : e_sound},
    { name : "ХИ", script : "ᠭᠢ‍", start: "ᠭᠢ‍", mid : "᠊ᠭᠢ‍", end : "᠊ᠭᠢ", desc : i_sound},
    { name : "ХО", script : "ᠭᠣ‍", start: "ᠭᠣ‍", mid : "᠊ᠭᠣ‍", end : "᠊ᠭᠣ", desc : o_sound},
    { name : "ХУ", script : "ᠭᠣ‍", start: "ᠭᠣ‍", mid : "᠊ᠭᠣ‍", end : "᠊ᠭᠣ", desc : ou_sound},
    { name : "ХӨ", script : "ᠭᠥ‍", start: "ᠭᠥ‍", mid : "᠊ᠭᠥ‍", end : "᠊ᠭᠥ", desc : u_sound},
    { name : "ХҮ", script : "ᠭᠥ‍", start: "ᠭᠥ‍", mid : "᠊ᠭᠥ‍", end : "᠊ᠭᠥ", desc : uu_sound}
  ]},

  {name : "Т", script : "ᠳ‍", start: "ᠳ‍", mid : "᠊ᠲ‍", end : "᠊ᠲ", desc : a_sound, letters : [
    // {name : "Д", script : "ᠳ‍", start: "ᠳ‍", mid : "᠊ᠳ‍᠂ ᠊ᠲ‍", end : "᠊ᠳ᠂ ᠊ᠲ", desc : a_sound},
    { name : "ТА", script : "ᠳᠠ‍", start: "ᠳᠠ‍", mid : "᠊ᠲᠠ‍", end : "᠊ᠲᠠ", desc : a_sound},
    { name : "ТЭ", script : "ᠳᠠ‍", start: "ᠳᠠ‍", mid : "᠊ᠲᠠ‍", end : "᠊ᠲᠠ", desc : e_sound},
    { name : "ТИ", script : "ᠲᠢ‍", start: "ᠳᠢ‍", mid : "᠊ᠲᠢ‍", end : "᠊ᠲᠢ", desc : i_sound},
    { name : "ТО", script : "ᠳᠣ‍", start: "ᠳᠣ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : o_sound},
    { name : "ТУ", script : "ᠳᠣ‍", start: "ᠳᠣ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : ou_sound},
    { name : "ТӨ", script : "ᠲᠥ‍", start: "ᠲᠥ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : u_sound},
    { name : "ТҮ", script : "ᠲᠥ‍", start: "ᠲᠥ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : uu_sound}
  ]},

  {name : "Т", script : "ᠳ‍", start: "ᠳ‍", mid : "᠊ᠲ‍", end : "᠊ᠲ", desc : a_sound, letters : [
    // {name : "Д", script : "ᠳ‍", start: "ᠳ‍", mid : "᠊ᠳ‍᠂ ᠊ᠲ‍", end : "᠊ᠳ᠂ ᠊ᠲ", desc : a_sound},
    { name : "ТА", script : "ᠳᠠ‍", start: "ᠳᠠ‍", mid : "᠊ᠲᠠ‍", end : "᠊ᠲᠠ", desc : a_sound},
    { name : "ТЭ", script : "ᠳᠠ‍", start: "ᠳᠠ‍", mid : "᠊ᠲᠠ‍", end : "᠊ᠲᠠ", desc : e_sound},
    { name : "ТИ", script : "ᠲᠢ‍", start: "ᠳᠢ‍", mid : "᠊ᠲᠢ‍", end : "᠊ᠲᠢ", desc : i_sound},
    { name : "ТО", script : "ᠳᠣ‍", start: "ᠳᠣ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : o_sound},
    { name : "ТУ", script : "ᠳᠣ‍", start: "ᠳᠣ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : ou_sound},
    { name : "ТӨ", script : "ᠲᠥ‍", start: "ᠲᠥ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : u_sound},
    { name : "ТҮ", script : "ᠲᠥ‍", start: "ᠲᠥ‍", mid : "᠊ᠲ‍ᠥ‍", end : "᠊ᠲᠣ", desc : uu_sound}
  ]},

  {name : "Ц, Ч", script : "ᠴᠭ‍", start: "ᠴᠭ‍", mid : "᠊ᠴᠠ‍", end : "᠊ᠴᠠ", desc : a_sound, letters : [
    { name : "ЦА, ЧА", script : "ᠴ‍ᠠ‍", start: "ᠴ‍ᠠ‍", mid : "᠊ᠴᠠ‍", end : "᠊ᠴᠠ", desc : a_sound},
    { name : "ЦЭ, ЧЭ", script : "ᠴ‍ᠠ‍", start: "ᠴ‍ᠠ‍", mid : "᠊ᠴᠠ‍", end : "᠊ᠴᠠ", desc : e_sound},
    { name : "ЦИ, ЧИ", script : "ᠴᠢ‍", start: "ᠴᠢ‍", mid : "᠊ᠴᠢ‍", end : "᠊ᠴᠢ", desc : i_sound},
    { name : "ЦО, ЧО", script : "ᠴᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : o_sound},
    { name : "ЦУ, ЧУ", script : "ᠴᠣ‍", start: "ᠴᠣ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : ou_sound},
    { name : "ЦӨ, ЧӨ", script : "ᠴᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴᠥ‍", end : "᠊ᠴᠣ", desc : u_sound},
    { name : "ЦҮ, ЧҮ", script : "ᠴᠥ‍", start: "ᠴᠥ‍", mid : "᠊ᠴ‍ᠥ‍", end : "᠊ᠴᠣ", desc : uu_sound}
  ]},

  {name : "З, Ж", script : "ᠵᠠ‍", start: "ᠵᠠ‍", mid : "᠊ᠵᠠ‍", end : "᠊ᠵᠠ", desc : a_sound, letters : [
    // {name : "Д", script : "ᠳ‍", start: "ᠳ‍", mid : "᠊ᠳ‍᠂ ᠊ᠲ‍", end : "᠊ᠳ᠂ ᠊ᠲ", desc : a_sound},
    { name : "ЗА, ЖА", script : "ᠵᠠ‍", start: "ᠵᠠ‍", mid : "᠊ᠵᠠ‍", end : "᠊ᠵᠠ", desc : a_sound},
    { name : "ЗЭ, ЖЭ", script : "ᠵᠠ‍", start: "ᠵᠠ‍", mid : "᠊ᠵᠠ‍", end : "᠊ᠵᠠ", desc : e_sound},
    { name : "ЗИ, ЖИ", script : "ᠴᠢ‍", start: "ᠴᠢ‍", mid : "᠊ᠴᠵ‍", end : "᠊ᠵᠢ", desc : i_sound},
    { name : "ЗО, ЖО", script : "ᠵᠣ‍", start: "ᠵᠣ‍", mid : "᠊ᠵᠥ‍", end : "᠊ᠵᠣ", desc : o_sound},
    { name : "ЗУ, ЖУ", script : "ᠵᠣ‍", start: "ᠵᠣ‍", mid : "᠊ᠵᠥ‍", end : "᠊ᠵᠣ", desc : ou_sound},
    { name : "ЗӨ, ЖӨ", script : "ᠵᠥ‍", start: "ᠵᠥ‍", mid : "᠊ᠵᠥ‍", end : "᠊ᠵᠣ", desc : u_sound},
    { name : "ЗҮ, ЖҮ", script : "ᠵᠥ‍", start: "ᠵᠥ‍", mid : "᠊ᠵᠥ‍", end : "᠊ᠵᠣ", desc : uu_sound}
  ]},
  {name : "Ш", script : "ᠱᠠ‍", start: "ᠱᠠ‍", mid : "᠊ᠲ‍", end : "᠊ᠲ", desc : a_sound, letters : [
    // {name : "Д", script : "ᠳ‍", start: "ᠳ‍", mid : "᠊ᠳ‍᠂ ᠊ᠲ‍", end : "᠊ᠳ᠂ ᠊ᠲ", desc : a_sound},
    { name : "ША", script : "ᠱᠠ‍", start: "ᠱᠠ‍", mid : "᠊ᠱᠠ‍", end : "᠊ᠱᠠ", desc : a_sound},
    { name : "ШЭ", script : "ᠱᠠ‍", start: "ᠱᠠ‍", mid : "᠊ᠱᠠ‍", end : "᠊ᠱᠠ", desc : e_sound},
    { name : "ШИ", script : "ᠱᠢ‍", start: "ᠱᠢ‍", mid : "᠊ᠱᠢ‍", end : "᠊ᠱᠢ", desc : i_sound},
    { name : "ШО", script : "ᠱᠣ‍", start: "ᠱᠣ‍", mid : "᠊ᠱ‍ᠥ‍", end : "᠊ᠱᠣ", desc : o_sound},
    { name : "ШУ", script : "ᠱᠣ‍", start: "ᠱᠣ‍", mid : "᠊ᠱᠥ‍", end : "᠊ᠱᠣ", desc : ou_sound},
    { name : "ШӨ", script : "ᠱᠥ‍", start: "ᠱᠥ‍", mid : "᠊ᠱᠥ‍", end : "᠊ᠱᠣ", desc : u_sound},
    { name : "ШҮ", script : "ᠱᠥ‍", start: "ᠱᠥ‍", mid : "᠊ᠱᠥ‍", end : "᠊ᠱᠣ", desc : uu_sound}
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
