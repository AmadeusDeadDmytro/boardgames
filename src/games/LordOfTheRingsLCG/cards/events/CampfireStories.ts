import { Actions, CardTypes, EventCardType, Icons, Spheres } from '../../types/cards'
import ImageBack from '../../images/cards/campfire_stories.png'

const CampfireStories: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Истории у костра',
    text: [
        `${Actions.ACTION}: Каждый игрок берет 1 карту из своей колоды`
    ],
    quote: `"Это красивая история, хотя и печальная, как все легенды Средиземья, но посмотрим, может быть, услышав ее, вы немного приободритесь." - Бродяжник, Братство кольца`,
    price: 1,
    image: ImageBack,
}

export default CampfireStories
