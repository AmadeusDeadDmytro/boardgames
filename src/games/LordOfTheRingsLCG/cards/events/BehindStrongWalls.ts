import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/behind_strong_walls.png'

const BehindStrongWalls: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'За крепкими стенами',
    text: [
        `${Actions.ACTION}: Откройте персонажа с чертой ${Tags.GONDOR}, объявленного защищающимся. Этот персонаж получает +1${Icons.SHIELD} до конца фазы`,
    ],
    price: 1,
    image: ImageBack,
}

export default BehindStrongWalls
