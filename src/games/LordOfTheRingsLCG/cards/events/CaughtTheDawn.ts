import { Actions, CardTypes, EventCardType, Icons, Spheres } from '../../types/cards'
import ImageBack from '../../images/cards/parting_gifts.png'

const CaughtTheDawn: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Застали рассвет',
    text: [
        `Играется в битве`,
        ``,
        `${Actions.ACTION}: Переместите любое количество ресурсов из запаса ${Icons.LEADERSHIP} героя в запас любого другого героя`
    ],
    price: 2,
    image: ImageBack,
}

export default CaughtTheDawn
