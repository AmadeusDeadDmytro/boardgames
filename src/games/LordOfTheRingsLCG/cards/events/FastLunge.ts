import { Actions, CardTypes, EventCardType, Spheres } from '../../types/cards'
import ImageBack from '../../images/cards/fast_lunge.png'

const FastLunge: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Быстрый выпад',
    text: [
        `${Actions.ACTION}: Закройте персонажа под вашим контролем, чтобы немедленно совершить им атаку по любому противнику, которого можете атаковать`
    ],
    price: 1,
    quote: `"Ибо на войне всегда тот, кто наносит удар первым, надеется, что этот удар и будет последним" - Гендальф, Две Твердыни`,
    image: ImageBack
}

export default FastLunge


