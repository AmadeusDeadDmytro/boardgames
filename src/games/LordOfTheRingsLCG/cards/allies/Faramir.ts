import { Actions, AllyCardType, CardTypes, Spheres, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/faramir.png'

const Faramir: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Фарамир',
    tags: [Tags.GONDOR, Tags.NOBLE, Tags.RANGER],
    text: [
        `${Actions.ACTION}: Закройте эту карту, чтобы выбрать игрока. Каждый персонаж под контролем выбранного игрока получает +1${Icons.WILLPOWER} до конца фазы `
    ],
    price: 4,
    willpower: 2,
    attack: 1,
    defend: 2,
    health: 3,
    image: ImageBack
}

export default Faramir


