import { Actions, AllyCardType, CardTypes, Spheres, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/son_of_arnor.png'

const SonOfArnor: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Сын Арнора',
    tags: [Tags.DUNADAN],
    text: [
        `${Actions.REACTION}: После того как эта карта входит в игру, выберите противника, находящегося в районе средоточения или в зоне другого игрока. Переместите выбранного противника в свою зону`
    ],
    price: 3,
    willpower: 0,
    attack: 2,
    defend: 0,
    health: 2,
    image: ImageBack
}

export default SonOfArnor


