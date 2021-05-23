import {
    Actions, CardTypes, EventCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/teamwork.png'

const Teamwork: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Работа в команде',
    text: [
        `${Actions.ACTION}: Закройте Х персонажей с чертой ${Tags.GNOME}, чтобы добавить Х ресурсов в запас героя и взять 1 карту`,
    ],
    price: 0,
    image: ImageBack,
}

export default Teamwork
