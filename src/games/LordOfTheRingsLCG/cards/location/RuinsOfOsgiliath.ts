import {
    Tags, CardTypes, Adventures, LocationCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/ruins_of_osgiliath.png'

const RuinsOfOsgiliath: LocationCardType = {
    type: CardTypes.LOCATION,
    isUnique: false,
    name: 'Руины Осгилиата',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.EAST_COAST],
    dangerPower: 1,
    searchDifficult: 2,
    text: [
        `Если игроки ещё не пересекли Андуин, эта карта получает +3${Icons.DANGER_POWER}`,
    ],
    shadowEffect: [],
    image: ImageBack,
    quote: '"...но Осгилиат, оказавшйися посередине, опустел и только тени бродили по нему". - Братство кольца'
};

export default RuinsOfOsgiliath;
