import { Actions, AllyCardType, CardTypes, Spheres, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/longbearded_oldman.png'

const LongbeardedOldman: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Длиннобородый старец',
    tags: [Tags.GNOME],
    text: [
        `${Actions.REACTION}: После того как этот персонаж отправлен на квест, осмотрите верхнюю карту колоды столкновения. Если это карта локации, поместите 1 жетон прогресса на карту текущего квеста. Иначе этот персонаж получает +1${Icons.WILLPOWER} до конца фазы`
    ],
    price: 3,
    willpower: 2,
    attack: 1,
    defend: 1,
    health: 2,
    image: ImageBack
}

export default LongbeardedOldman


