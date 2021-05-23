import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/only_forward.png'

const OnlyForward: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Только вперед',
    text: [
        `${Actions.REACTION}: После неудачи в фазе Квеста, выберите игрока. Уровень угрозы выбранного игрока не повышается`,
    ],
    price: 3,
    image: ImageBack,
}

export default OnlyForward
