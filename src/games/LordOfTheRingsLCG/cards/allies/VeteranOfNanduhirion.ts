import { AllyCardType, CardTypes, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/veteran_of_nanduhirion.png'

const VeteranOfNanduhirion: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Ветеран Нандухириона',
    tags: [Tags.GNOME, Tags.WARRIOR],
    text: [
        `Ветеран Нандухириона входит в игру с 1 повреждением`,
    ],
    quote: `"Взревев "Мария!" и "Даин, Даин!" гномы Железных Холмов бросились в атаку." - Хоббит`,
    price: 4,
    willpower: 0,
    attack: 3,
    defend: 2,
    health: 3,
    image: ImageBack
}

export default VeteranOfNanduhirion


