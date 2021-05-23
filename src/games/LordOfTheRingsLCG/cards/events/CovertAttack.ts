import {
    Actions, CardTypes, EventCardType, Icons, Spheres,
} from '../../types/cards'
import ImageBack from '../../images/cards/covert_attack.png'

const CovertAttack: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Скрытая атака',
    text: [
        `${Actions.ACTION}: Положите в игру 1 карту союзника с вашей руки. Если в конце фазы этот союзник все ще в игре, верните его в руку`,
    ],
    price: 1,
    image: ImageBack,
}

export default CovertAttack
