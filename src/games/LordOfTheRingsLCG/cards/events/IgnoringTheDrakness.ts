import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/ignoring_the_darkness.png'

const IgnoringTheDarkness: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Игнорируя тьму',
    text: [
        `${Actions.ACTION}: Каждый персонаж с чертой ${Tags.GNOME} получает +1${Icons.WILLPOWER} до конца фазы (или +2${Icons.WILLPOWER}, если активная локация имеет черту ${Tags.DUNGEON} или ${Tags.DARKNESS})`,
    ],
    price: 2,
    image: ImageBack,
}

export default IgnoringTheDarkness
