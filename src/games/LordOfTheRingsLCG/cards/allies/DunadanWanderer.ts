import {
    Actions, AllyCardType, CardTypes, Spheres, Tags, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/dunadan_wanderer.png'

const DunadanWanderer: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Дунаданский странник',
    tags: [Tags.DUNADAN, Tags.RANGER],
    text: [
        'Дальнобойный. Защитник. Скрытность 3',
    ],
    price: 5,
    willpower: 1,
    attack: 2,
    defend: 2,
    health: 2,
    image: ImageBack,
}

export default DunadanWanderer
