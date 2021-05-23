import {
    AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/citadel_keeper.png'

const CitadelKeeper: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Хранитель цитадели',
    tags: [Tags.GONDOR],
    text: [
        `Уменьшите стоимость розыгрыша этой карты на 1 за каждого союзника с чертой ${Tags.GONDOR} в игре`,
    ],
    price: 5,
    willpower: 1,
    attack: 0,
    defend: 1,
    health: 3,
    image: ImageBack,
}

export default CitadelKeeper
