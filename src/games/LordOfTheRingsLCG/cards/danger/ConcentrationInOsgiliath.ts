import {
    CardTypes, Actions, Adventures, DangerCardType,
} from '../../types/cards'
import ImageBack from '../../images/cards/concentration_in_osgiliath.png'

const RangerIthilien: DangerCardType = {
    type: CardTypes.DANGER,
    isUnique: false,
    name: 'Враг в Осгилиате',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [],
    text: [
        `Наплыв`,
        `${Actions.APPEARANCE}: До конца фазы, каждая взятая карта из колоды столкновения, получает ключевое слово Обречённый 1 (или Обречённый 3, если игроки уже пересекли андуин)`
    ],
    shadowEffect: [],
    image: ImageBack,
};

export default RangerIthilien;
