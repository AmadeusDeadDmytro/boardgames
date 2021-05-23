import {
    Actions, CardTypes, EventCardType, Icons, Spheres,
} from '../../types/cards'
import ImageBack from '../../images/cards/hidden_flow.png'

const HiddenFlow: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Скрытый удар',
    text: [
        `${Actions.ACTION}: Выберите персонажа под своим контролем. До конца фазы выбранный персонаж получает +3${Icons.ATTACK}, когда атакует противника с большим показателем столкновения, чем ваша угроза`,
    ],
    price: 0,
    image: ImageBack,
}

export default HiddenFlow
