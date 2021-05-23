import {
    HeroCardType, Tags, CardTypes, Spheres, Actions, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/elanor.png'

const Elanor: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.SPIRIT,
    isUnique: true,
    name: 'Эланор',
    tags: [Tags.GONDOR, Tags.NOBLE_W],
    text: [
        `${Actions.REACTION}: Закройте эту карту, чтобы отменить эффект ${Tags.UPON_APPEARANCE} карты опасности, взятой из колоды столкновения. Затем сбросьте эту карту и замените ее следующей из колоды столкновения`,
    ],
    hazardLevel: 7,
    willpower: 1,
    attack: 1,
    defend: 2,
    health: 3,
    image: ImageBack,
}

export default Elanor
