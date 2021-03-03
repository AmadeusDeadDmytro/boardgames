export type HeroCardType = {
    type: CardTypes
    sphere: Spheres
    isUnique: boolean
    name: string
    hazardLevel: number
    willpower: number
    attack: number
    defend: number
    health: number
    image: string
    tags?: Array<Tags>
    text?: Array<string>
    quote?: string
}

export type EventCardType = {
    type: CardTypes
    sphere: Spheres
    isUnique: boolean
    name: string
    tags?: Array<string>
    text?: Array<string>
    image: string
    price: number
    quote?: string
}

export type ItemCardType = {
    type: CardTypes
    sphere: Spheres
    isUnique: boolean
    name: string
    tags?: Array<string>
    text?: Array<string>
    image: string
    price: number
    quote?: string
}

export type AllyCardType = {
    type: CardTypes
    sphere: Spheres
    isUnique: boolean
    name: string
    price: number
    willpower: number
    attack: number
    defend: number
    health: number
    image: string
    tags?: Array<Tags>
    text?: Array<string>
    quote?: string
}

export type ICard = HeroCardType | EventCardType | ItemCardType | AllyCardType

////////////////////////////////////////////////////////////////////// ENUMS

export enum Spheres {
    TACTICS = 'Tactics',
}

export enum CardTypes {
    ALLY = 'Союзник',
    HERO = 'Герой',
    EVENT = 'Событие',
    ITEM = 'Предмет'
}

export enum Tags {
    ARCHER = 'Лучник',
    ARTIFACT = 'Артефакт',
    ARMOR = 'Броня',
    BEORNING = 'Беорнинг',
    DAIL = 'Дэйл',
    EAGLE = 'Орел',
    GIFT = 'Дар',
    GNOME = 'Гном',
    GONDOR = 'Гондор',
    HOBBIT = 'Хоббит',
    ITEM = 'Предмет',
    NOBLE = 'Благородный',
    NOLDOR = 'Нолдор',
    ORC = 'Орк',
    Ranger = 'Рейнджер',
    ROHAN = 'Рохан',
    SCOUT = 'Скаут',
    SONG = 'Песня',
    STATUS = 'Состояние',
    THING = 'Существо',
    WARRIOR = 'Воин',
    WEAPON = 'Оружие',
    WOOD_ELF = 'Лесной эльф'
}

export enum Actions {
    ACTION = 'Действие',
    ACTION_IN_BATTLE = 'Боевое действие',
    REACTION = 'Реакция',
    SPECIAL = 'Особый эффект'
}

export enum Icons {
    ATTACK = 'Attack',
    SHIELD = 'Shield',
    TACTICS = 'Tactics'
}