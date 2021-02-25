export interface HeroCardType {
    name: string
    tags?: Array<Tags>
    text?: Array<string>
}

export type ICard = HeroCardType

export interface DealerType {
    type: CardTypes
    card: ICard
}

export interface HeroCardTemplateType {
    name: string
    tags?: Array<Tags>
    text?: Array<string>
}

////////////////////////////////////////////////////////////////////// ENUMS

export enum CardTypes {
    HERO = 'HERO',
    ENEMY = 'ENEMY',
}

export enum Tags {
    GONDOR = 'Гондор',
    WARRIOR = 'Воин',
    WEAPON = 'Оружие',
    ARMOR = 'Броня',
}
