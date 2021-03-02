import { Actions, CardTypes, EventCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/meneldors_flight.png'

const MeneldorsFlight: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    name: 'Полет Менельдора',
    text: [
        `${Actions.ACTION}: Выберите союзника с чертой ${Tags.EAGLE}. Верните его в руку владельца`],
    price: 0,
    quote: `"Даже орел не разглядел бы хоббитов против солнца - неподвижных, согнувшихся под тяжким бременнем..." - Две Твердыни`,
    image: ImageBack,
}

export default MeneldorsFlight
