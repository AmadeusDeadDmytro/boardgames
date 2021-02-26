import { CardTypes, HeroCardType, Tags, Actions } from '../../types/cards'
import ImageBack from '../../images/cards/brandsonbain.png'

const BrandSonBain: HeroCardType = {
    type: CardTypes.HERO,
    name: 'Бранд сын Бэйна',
    tags: [Tags.DAIL],
    text: [
        `Дальнобойный`,
        `${Actions.REACTION}: После того как Бранд сын Бэйна атаковал и уничтожил врага в зоне другого игрока, выберите и откройте одного из персонажей этого игрока`
    ],
    hazardLevel: 10,
    willpower: 2,
    attack: 3,
    defend: 2,
    health: 3,
    image: ImageBack
}

export default BrandSonBain


