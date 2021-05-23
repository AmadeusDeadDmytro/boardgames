import {
    AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/sword_fighting_veteran.png'

const SwordFightingVeteran: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Ветеран боя на мечах',
    tags: [Tags.GNOME, Tags.WARRIOR],
    quote: '"Мне отрадно, что рядом стоишь ты, на крепких ногах и с острым боевым топором." - Леголас, Две Твердыни',
    price: 2,
    willpower: 0,
    attack: 2,
    defend: 1,
    health: 2,
    image: ImageBack,
}

export default SwordFightingVeteran
