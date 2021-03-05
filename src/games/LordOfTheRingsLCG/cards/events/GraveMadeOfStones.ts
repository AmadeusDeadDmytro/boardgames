import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/grave_made_of_stones.png'

const GraveMadeOfStones: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Могила из камней',
    text: [
        `${Actions.REACTION}: После того как персонаж покидает игру, добавьте его показатель ${Icons.ATTACK} к показателю ${Icons.ATTACK} другого персонажа до конца раунда`
    ],
    price: 1,
    image: ImageBack,
}

export default GraveMadeOfStones
