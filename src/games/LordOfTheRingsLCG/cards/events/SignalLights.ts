import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/signla_lights.png'

const SignalLights: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Сигнальные огни',
    text: [
        `${Actions.ACTION}: Все персонажи получают +2${Icons.SHIELD} и не закрываются будучи объявленными защищающимися до конца этого раунда`,
    ],
    price: 5,
    image: ImageBack,
}

export default SignalLights
