import { Actions, CardTypes, EventCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/hail_of_stones.png'

const HailOfStones: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Град камней',
    text: [
        `${Actions.REACTION}: Закройте Х персонажей чтобы нанести Х повреждений противнику в районе средоточения`
    ],
    price: 1,
    image: ImageBack
}

export default HailOfStones


