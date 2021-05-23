import {
    Actions, CardTypes, EventCardType, Icons, Spheres,
} from '../../types/cards'
import ImageBack from '../../images/cards/rearhuard.png'

const Rearguard: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Арьергард',
    text: [
        'Играется в квесте',
        `${Actions.ACTION}: Сбросьте ${Icons.LEADERSHIP} союзника, чтобы каждый герой, отправляемый на квест, получил +1${Icons.WILLPOWER} до кнца фазы`,
    ],
    quote: '"Во тьме позади, мрачный и молчаливый, шёл Арагорн" - Братство кольца',
    price: 1,
    image: ImageBack,
}

export default Rearguard
