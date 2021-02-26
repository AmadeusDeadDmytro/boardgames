import { CardTypes, HeroCardType, Tags, Actions } from '../../types/cards'
import ImageBack from '../../images/cards/gimli.png'

const BrandSonBain: HeroCardType = {
    type: CardTypes.HERO,
    name: 'Бранд сын Бэйна',
    tags: [Tags.DAIL],
    text: [
        `Дальнобойный`,
        `${Actions.REACTION}: После того как Бранд сын Бэйна атаковал и уничтожил врага в зоне другого игрока, выберите и откройте одного из персонажей этого игрока`
    ],
    hazardLevel: 11,
    willpower: 2,
    attack: 2,
    defend: 2,
    health: 5,
    image: ImageBack
}

export default BrandSonBain


