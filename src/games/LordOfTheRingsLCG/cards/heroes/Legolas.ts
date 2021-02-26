import { CardTypes, HeroCardType, Tags, Actions } from '../../types/cards'
import ImageBack from '../../images/cards/legolas.png'

const Legolas: HeroCardType = {
    type: CardTypes.HERO,
    name: 'Леголас',
    tags: [Tags.NOBLE, Tags.WOOD_ELF, Tags.WARRIOR],
    text: [
        `Дальнобойный`,
        `${Actions.REACTION}: После того как Леголас участвует в атаке, уничтожившей противника, увеличьте прогресс на 2 `
    ],
    hazardLevel: 9,
    willpower: 1,
    attack: 3,
    defend: 1,
    health: 4,
    image: ImageBack
}

export default Legolas


