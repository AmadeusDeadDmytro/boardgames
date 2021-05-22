import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/elronds_council.png'

const ElrondsCouncil: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Совет Элронда',
    text: [
        `${Actions.ACTION}: Если под вашим контролем есть уникальный персонаж с чертой ${Tags.NOLDOR}, уменьшите свою угрозу на 3 и другой персонаж получает +1${Icons.WILLPOWER} до конца фазы`
    ],
    price: 0,
    image: ImageBack
}

export default ElrondsCouncil


