import { HeroCardType, Tags, CardTypes, Actions, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/hama.png'

const Hama: HeroCardType = {
    type: CardTypes.HERO,
    name: 'Хама',
    tags: [Tags.ROHAN, Tags.WARRIOR],
    text: [
        `${Actions.REACTION}: После того как Хама объявлен атакующим, верните ${Icons.TACTICS} событие из сброса в руку. Затем сбросьте 1 карту с руки.`,
    ],
    hazardLevel: 9,
    willpower: 1,
    attack: 3,
    defend: 1,
    health: 4,
    image: ImageBack
}

export default Hama


