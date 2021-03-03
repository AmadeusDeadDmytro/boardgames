import { Actions, AllyCardType, CardTypes, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/descendant_of_thorondor.png'

const DescendantOfThorondor: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Потомок Торондора',
    tags: [Tags.THING, Tags.EAGLE],
    text: [
        `Не может иметь ограниченных довесков. `,
        `${Actions.REACTION}: После того как Потомок Торондора входит в игруили покидает её, нанесите 2 повреждения одному из противниковв районе средоточения`
    ],
    price: 4,
    willpower: 1,
    attack: 2,
    defend: 1,
    health: 2,
    image: ImageBack
}

export default DescendantOfThorondor


