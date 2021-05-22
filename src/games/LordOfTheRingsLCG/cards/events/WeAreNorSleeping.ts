import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/we_are_not_sleeping.png'

const WeAreNotSleeping: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Мы не спим',
    text: [
        `${Actions.ACTION}: До конца фазы персонажи с чертой ${Tags.ROHAN} не закрываются, когда отправляются на квест`,
    ],
    price: 5,
    image: ImageBack
}

export default WeAreNotSleeping


