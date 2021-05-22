import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/cavalty_throw.png'

const CavalryThrow: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Бросок кавалерии',
    text: [
        `${Actions.ACTION}: Сбросьте союзника с чертой ${Tags.ROHAN}, чтобы выбрать локацию и поместить на неё 3 жетона прогресса`,
    ],
    price: 1,
    image: ImageBack
}

export default CavalryThrow


