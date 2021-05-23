import {
    Actions, AllyCardType, CardTypes, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/eagles_of_the_misty_mountains.png'

const EaglesOfTheMountains: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Орлы с Мглистых гор',
    tags: [Tags.THING, Tags.EAGLE],
    text: [
        `Не может иметь ограниченных довесков. Получает +1${Icons.ATTACK} и +1${Icons.SHIELD} за каждый предмет приложенный лицом вниз`,
        `${Actions.REACTION}: Когда другой персонаж с чертой ${Tags.EAGLE} покидает игру, можете приложеть его к этой карте лицом вниз, как довесок`,
    ],
    price: 4,
    willpower: 2,
    attack: 2,
    defend: 2,
    health: 4,
    image: ImageBack,
}

export default EaglesOfTheMountains
