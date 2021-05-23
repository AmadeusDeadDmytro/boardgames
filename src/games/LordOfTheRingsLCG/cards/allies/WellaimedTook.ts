import {
    Actions, AllyCardType, CardTypes, Spheres, Tags, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/wellaimed_took.png'

const WellaimedTook: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Меткий Тук',
    tags: [Tags.HOBBIT],
    text: [
        `${Actions.REACTION}: Когда эта карта входит в игру, переверните верхние карты колод каждого игрока`,
        `${Actions.ACTION}: Верните эту карту в руку, чтобы сбросить верхние карты колод каждого игрока`,
    ],
    price: 2,
    willpower: 1,
    attack: 0,
    defend: 0,
    health: 2,
    image: ImageBack,
}

export default WellaimedTook
