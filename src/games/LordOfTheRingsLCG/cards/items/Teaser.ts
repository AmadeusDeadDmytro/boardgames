import {
    Actions, CardTypes, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/teaser.png'

const Teaser: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Дразнилка',
    tags: [Tags.SONG],
    text: [
        'Прикладывается к герою',
        `${Actions.ACTION}: Закройте Дразнилку, чтобы выбрать другого героя. До конца фазы владелец получает весь урон, нанесённый выбранному герою`,
    ],
    price: 1,
    image: ImageBack,
}

export default Teaser
