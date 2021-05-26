import {
    Tags, CardTypes, Adventures, LocationCardType, Actions, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/captured_watchtower.png'

const CapturedWatchtower: LocationCardType = {
    type: CardTypes.LOCATION,
    isUnique: false,
    name: 'Потерянная сторожевая башня',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.WEST_COAST],
    dangerPower: 1,
    searchDifficult: 2,
    text: [
        `Если игроки уже пересекли Андуин, эта карта получает +3${Icons.DANGER_POWER}`,
    ],
    shadowEffect: [
        `${Tags.SHADOW_EFFECT}: Все защищающиеся персонажи не участвуют в битве. Эту атаку никто не отражает`
    ],
    image: ImageBack,
};

export default CapturedWatchtower;
