import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/out_of_sight.png'

const OutOfSight: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Вне поля зрения',
    text: [
        `Скрытность 3`,
        `${Actions.ACTION}: Противники, находящиеся в вашей зоне, не могут атаковать вас в эту фазу`
    ],
    price: 5,
    image: ImageBack
}

export default OutOfSight


