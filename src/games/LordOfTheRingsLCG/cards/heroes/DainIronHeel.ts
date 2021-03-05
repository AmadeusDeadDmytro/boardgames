import { HeroCardType, Tags, CardTypes, Spheres, Actions, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/prince_imrahil.png'

const DainIronHeel: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Даин Железная пята',
    tags: [Tags.GNOME],
    text: [
        `Пока Даин Железная пята открыт, персонажи с чертой ${Tags.GNOME} получают +1${Icons.ATTACK} и +1${Icons.WILLPOWER}`
    ],
    hazardLevel: 11,
    willpower: 1,
    attack: 2,
    defend: 3,
    health: 5,
    image: ImageBack
}

export default DainIronHeel


