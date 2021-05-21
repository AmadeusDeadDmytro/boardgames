import { Actions, AllyCardType, CardTypes, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/archer_of_the_silver_stream.png'

const LongbeardOrcSlayer: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Лучник Потока',
    tags: [Tags.ARCHER, Tags.WOOD_ELF],
    text: [
        `Дальнобойный`
    ],
    price: 3,
    willpower: 1,
    attack: 2,
    defend: 0,
    health: 1,
    image: ImageBack
}

export default LongbeardOrcSlayer


