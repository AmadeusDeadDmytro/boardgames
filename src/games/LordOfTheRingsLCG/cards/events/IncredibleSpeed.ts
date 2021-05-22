import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/incredible_speed.png'

const IncredibleSpeed: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Невероятная скорость',
    text: [
        `${Actions.ACTION}: До конца фазы персонажи с чертой ${Tags.ROHAN} получают +2${Icons.WILLPOWER}`,
    ],
    price: 3,
    image: ImageBack
}

export default IncredibleSpeed


