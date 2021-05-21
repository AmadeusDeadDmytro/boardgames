import { Actions, AllyCardType, CardTypes, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/brock_iron_fist.png'

const BrockIronFist: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Брок Железный Кулак',
    tags: [Tags.GNOME, Tags.WARRIOR],
    text: [
        `${Actions.REACTION}: Если герой с чертой ${Tags.GNOME} под вашим контролем покидает игру, положите эту карту с руки в игру`
    ],
    price: 6,
    willpower: 2,
    attack: 2,
    defend: 1,
    health: 4,
    image: ImageBack
}

export default BrockIronFist


