import {
    AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/horse_archer.png'

const HorseArcher: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Конный лучник',
    tags: [Tags.ROHAN, Tags.ARCHER],
    text: [
        'Дальнобойный',
    ],
    quote: '"Среди всадников были и лучники, обученные срелять на скаку." - Две Твердыни',
    price: 3,
    willpower: 0,
    attack: 2,
    defend: 1,
    health: 2,
    image: ImageBack,
}

export default HorseArcher
