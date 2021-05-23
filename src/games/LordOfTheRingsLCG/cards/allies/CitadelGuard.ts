import {
    Actions, AllyCardType, CardTypes, Spheres, Tags, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/citadel_guard.png'

const CitadelGuard: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Страж цитадели',
    tags: [Tags.GONDOR, Tags.WARRIOR],
    text: [],
    price: 2,
    willpower: 1,
    attack: 1,
    defend: 0,
    health: 2,
    image: ImageBack,
}

export default CitadelGuard
