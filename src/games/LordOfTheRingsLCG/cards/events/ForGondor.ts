import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/for_gondor.png'

const ForGondor: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'За Гондор!',
    text: [
        `${Actions.ACTION}: До конца фазы все персонажи получают +1${Icons.ATTACK}. Все персонажи с чертой ${Tags.GONDOR} также получают +1${Icons.SHIELD} до конца фазы`
    ],
    price: 2,
    image: ImageBack,
}

export default ForGondor
