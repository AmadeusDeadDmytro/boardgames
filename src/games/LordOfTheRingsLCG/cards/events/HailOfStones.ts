import { Actions, CardTypes, EventCardType, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/hail_of_stones.png'

const HailOfStones: EventCardType = {
    type: CardTypes.EVENT,
    name: 'Град камней',
    text: [
        `${Actions.REACTION}: Закройте Х персонажей чтобы нанести Х повреждений противнику в районе средоточения`
    ],
    price: 1,
    image: ImageBack
}

export default HailOfStones


