import { HeroCardType, Tags, CardTypes, Spheres, Actions } from '../../types/cards'
import ImageBack from '../../images/cards/prince_imrahil.png'

const PrinceImrahil: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Принц Имрахил',
    tags: [Tags.GONDOR, Tags.NOBLE],
    text: [
        `${Actions.REACTION}: После того как персонаж покидает игру, откройте Принца Имрахила (раз за раунд)`
    ],
    hazardLevel: 11,
    willpower: 2,
    attack: 3,
    defend: 2,
    health: 4,
    image: ImageBack
}

export default PrinceImrahil


