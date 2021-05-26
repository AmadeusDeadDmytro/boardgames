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

export type AdventureCardType = {
    type: CardTypes
    title: string
    adventure: string
    description: string
    text: string[]
    image: string
}

export type TargetCardType = {
    type: CardTypes
    isUnique: boolean
    name: string
    adventure: string
    willpower: number
    attack: number
    defend: number
    health: number
    image: string
    tags?: Array<Tags>
    text?: Array<string>
    shadowEffect: Array<string>
}

export type DangerCardType = {
    type: CardTypes
    isUnique: boolean
    name: string
    adventure: string
    image: string
    tags?: Array<Tags>
    text?: Array<string>
    shadowEffect: Array<string>
}

export type LocationCardType = {
    type: CardTypes
    isUnique: boolean
    name: string
    adventure: string
    image: string
    tags?: Array<Tags>
    text?: Array<string>
    shadowEffect: Array<string>
    dangerPower: number
    searchDifficult: number
    quote?: string
    victoryText?: string
}

export type EnemyCardType = {
    type: CardTypes
    isUnique: boolean
    name: string
    adventure: string
    attack: number
    defend: number
    health: number
    image: string
    tags?: Array<Tags>
    text?: Array<string>
    shadowEffect: Array<string>
    dangerPower: number
    collisionProbability: number
    quote?: string
}

export type ICard = HeroCardType | EventCardType | ItemCardType | AllyCardType | AdventureCardType | TargetCardType | DangerCardType | LocationCardType | EnemyCardType

export type AdventureCardsType = {
    [key: string]: {
        adventureCards: Array<ICard>,
        cards: Array<ICard>
    }
}

export type PlayerCardsType = {
    [key: string]: Array<ICard>
}

/// /////////////////////////////////////////////////////////////////// ENUMS

export enum Spheres {
    LEADERSHIP = 'Лидерство',
    TACTICS = 'Тактика',
    SPIRIT = 'Дух'
}

export enum CardTypes {
    ADVENTURE = 'Приключение',
    ALLY = 'Союзник',
    DANGER = 'Опасность',
    ENEMY = 'Противник',
    EVENT = 'Событие',
    HERO = 'Герой',
    ITEM = 'Предмет',
    LOCATION = 'Локация',
    TARGET = 'Цель'
}

export enum Tags {
    ALLY = 'Союзник',
    ARCHER = 'Лучник',
    ARTIFACT = 'Артефакт',
    ARMOR = 'Броня',
    BEORNING = 'Беорнинг',
    DAIL = 'Дэйл',
    DARKNESS = 'Тьма',
    DESECRATED = 'Оскверненный',
    DUNADAN = 'Дунадан',
    DUNGEON = 'Подземелье',
    EAGLE = 'Орел',
    EAST_COAST = 'Восточный берег',
    ESTERLING = 'Истерлинг',
    GENERAL = 'Полководец',
    GIFT = 'Дар',
    GNOME = 'Гном',
    GONDOR = 'Гондор',
    HIGHLANDS = 'Высокогорье',
    HOBBIT = 'Хоббит',
    ITEM = 'Предмет',
    NAZGUL = 'Назгул',
    NOBLE = 'Благородный',
    NOBLE_W = 'Благородная',
    NOLDOR = 'Нолдор',
    ORC = 'Орк',
    PREPARATION = 'Подготовка',
    RANGER = 'Рейнджер',
    ROHAN = 'Рохан',
    SCOUT = 'Скаут',
    SHADOW_EFFECT = 'Теневой эффект',
    SIGNAL = 'Сигнал',
    SONG = 'Песня',
    STATUS = 'Состояние',
    THING = 'Существо',
    TITLE = 'Титул',
    UPON_APPEARANCE = 'При появлении',
    URUK_HAI = 'Урук-Хай',
    WARRIOR = 'Воин',
    WEAPON = 'Оружие',
    WEST_COAST = 'Западный берег',
    WOOD_ELF = 'Лесной эльф'
}

export enum Actions {
    APPEARANCE = 'При появлении',
    ACTION = 'Действие',
    ACTION_IN_BATTLE = 'Боевое действие',
    REACTION = 'Реакция',
    SPECIAL = 'Особый эффект'
}

export enum Icons {
    ATTACK = 'Attack',
    DANGER_POWER = 'Danger Power',
    LEADERSHIP = 'Leadership',
    LORE = 'Lore',
    SHIELD = 'Shield',
    SPIRIT = 'Spirit',
    TACTICS = 'Tactics',
    WILLPOWER = 'Willpower'
}

export enum Adventures {
    CONCENTRATION_IN_OSGILIATH= 'Сосредоточение в Осгилиате'
}