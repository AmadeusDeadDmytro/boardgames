import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/giltoniel.png'

const Giltoniel: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Эльберет! Гилтониэль!',
    text: [
        `Скрытность 4`,
        `${Actions.REACTION}: После того как неуникальный противник атаковал вас, положите этого противника под низ колоды столкновения. Если ваша угроза ниже показателя этого противника, значей вашей угрозы становится равно значению показателя столкновения этого противника`
    ],
    price: 4,
    image: ImageBack
}

export default Giltoniel


