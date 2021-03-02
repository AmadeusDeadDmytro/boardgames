import { Actions, CardTypes, EventCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/eagles_fly.png'

const EaglesFly: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    name: 'Орлы летят!',
    text: [
        `${Actions.ACTION}: Посмотрите 5 верхних карт своей колоды и возьмите из них в руку любое количество карт с чертой ${Tags.EAGLE}. Остальные карты замешайте обратно в колоду`
    ],
    tags: [Tags.EAGLE],
    price: 0,
    quote: `"Орлы! Орлы!" - Бильбо Беггинс, Хоббит`,
    image: ImageBack
}

export default EaglesFly


