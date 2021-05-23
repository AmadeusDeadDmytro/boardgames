import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/reach_the_end.png'

const ReachTheEnd: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Дойти до конца',
    text: [
        `${Actions.ACTION}: Откройте всех персонажей с чертой ${Tags.GNOME}`,
    ],
    price: 1,
    image: ImageBack,
}

export default ReachTheEnd
