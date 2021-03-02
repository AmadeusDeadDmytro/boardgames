import { Actions, CardTypes, ItemCardType, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/teaser.png'

const Teaser: ItemCardType = {
    type: CardTypes.ITEM,
    name: 'Дразнилка',
    tags: [Tags.SONG],
    text: [
        `Прикладывается к герою`,
        `${Actions.ACTION}: Закройте Дразнилку, чтобы выбрать другого героя. До конца фазы владелец получает весь урон, нанесённый выбранному герою`
    ],
    price: 1,
    image: ImageBack,
}

export default Teaser
