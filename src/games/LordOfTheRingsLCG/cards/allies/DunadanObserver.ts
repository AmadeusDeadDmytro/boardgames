import { Actions, AllyCardType, CardTypes, Spheres, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/dunadan_observer.png'

const DunadanObserver: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Дунаданский куратор',
    tags: [Tags.DUNADAN],
    text: [
        `${Actions.REACTION}: Сбросьте эту карту, чтобы отменить теневой эффект`
    ],
    price: 3,
    willpower: 1,
    attack: 1,
    defend: 1,
    health: 2,
    image: ImageBack
}

export default DunadanObserver


