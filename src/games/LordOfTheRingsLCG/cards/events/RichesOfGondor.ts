import {
    Actions, CardTypes, EventCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/riches_of_gondor.png'

const RichesOfGondor: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Богатства Гондора',
    text: [
        `${Actions.ACTION}: Выберите героя с чертой ${Tags.GONDOR}. Добавьте 1 ресурс в запас выбранного героя`,
    ],
    price: 0,
    image: ImageBack,
}

export default RichesOfGondor
