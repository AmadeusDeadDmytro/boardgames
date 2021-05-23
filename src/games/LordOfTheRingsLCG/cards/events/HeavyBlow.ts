import {
    Actions, CardTypes, EventCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/heavy_blow.png'

const HeavyBlow: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Тяжелый удар',
    text: [
        `${Actions.REACTION}: После того как персонаж с чертой ${Tags.GNOME} нанес Х повреждений противнику, нанесите дополнительно Х повреждений этому противнику (раз в фазу)`,
    ],
    price: 1,
    image: ImageBack,
}

export default HeavyBlow
