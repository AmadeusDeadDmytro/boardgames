import { HeroCardType, Tags, CardTypes, Spheres, Actions, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/dwalin.png'

const Dwalin: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.SPIRIT,
    isUnique: true,
    name: 'Двалин',
    tags: [Tags.GNOME],
    text: [
        `${Actions.REACTION}: После того как эта карта атакует и уничтожает противника с чертой ${Tags.ORC}, понизьте свою угрозу на 2`
    ],
    hazardLevel: 9,
    willpower: 1,
    attack: 2,
    defend: 2,
    health: 4,
    image: ImageBack
}

export default Dwalin


