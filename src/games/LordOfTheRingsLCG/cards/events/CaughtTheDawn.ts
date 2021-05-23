import {
    Actions, CardTypes, EventCardType, Icons, Spheres,
} from '../../types/cards'
import ImageBack from '../../images/cards/caught_the_dawn.png'

const CaughtTheDawn: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Застали рассвет',
    text: [
        'Играется в битве',
        'Играйте после того, как теневые карты уже получены, но атаки не совершенны',
        `${Actions.ACTION}: Каждый игрок может выбрать и сбросить одну невскрытую теневую карту с атакующего его противника`,
    ],
    price: 2,
    image: ImageBack,
}

export default CaughtTheDawn
