import { Actions, AllyCardType, CardTypes, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/messenger.png'

const Messenger: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Посланник',
    tags: [Tags.GONDOR],
    text: [
        `${Actions.ACTION}: Закройте эту карту, чтобы переместить 1 ресурс из запаса героя под вашим контролем в запас другого героя`
    ],
    price: 1,
    willpower: 0,
    attack: 0,
    defend: 0,
    health: 2,
    image: ImageBack
}

export default Messenger


