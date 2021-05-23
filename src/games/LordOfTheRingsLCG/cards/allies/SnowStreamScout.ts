import {
    Actions, AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/snow_stream_scout.png'

const SnowStreamScout: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Скаут Снежного Потока',
    tags: [Tags.ROHAN, Tags.SCOUT],
    text: [
        `${Actions.REACTION}: После того как эта карта входит в игру, выберите локацию и поместите на нее 1 жетон прогреса`,
    ],
    price: 1,
    willpower: 0,
    attack: 0,
    defend: 1,
    health: 1,
    image: ImageBack,
}

export default SnowStreamScout
