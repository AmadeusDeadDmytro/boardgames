import {
    Actions, AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/filed_of_the_lord_of_the_wind.png'

const FiledByTheLordOfTheWind: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Слуга Владыки ветра',
    tags: [Tags.THING, Tags.EAGLE],
    text: [
        'Дальнобойный. Не может иметь ограниченных довесков',
        `${Actions.SPECIAL}: После атаки в которой учавствует эта карта сбросьте ее из игры`,
    ],
    price: 1,
    willpower: 0,
    attack: 3,
    defend: 0,
    health: 1,
    image: ImageBack,
}

export default FiledByTheLordOfTheWind
