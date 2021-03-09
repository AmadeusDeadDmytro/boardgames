import { Actions, CardTypes, EventCardType, Icons, Spheres } from '../../types/cards'
import ImageBack from '../../images/cards/vigilance.png'

const Vigilance: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Бдительность',
    text: [
        `${Actions.ACTION}: Откройте 1 выбранного союзника`
    ],
    quote: `"Эта дорога, как и все остальные, отныне небезопасна. Будьте бдительны!" - Гендальф, Возвращение Короля`,
    price: 1,
    image: ImageBack,
}

export default Vigilance
