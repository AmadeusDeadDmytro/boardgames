import { Actions, AllyCardType, CardTypes, Spheres, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/erestor.png'

const Erestor: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Ерестор',
    tags: [Tags.NOLDOR],
    text: [
        `${Actions.ACTION}: Выберите и сбросьте 1 карту с руки чтобы взять 1 карту(раз в раунд)`
    ],
    price: 4,
    willpower: 2,
    attack: 0,
    defend: 1,
    health: 3,
    image: ImageBack
}

export default Erestor


