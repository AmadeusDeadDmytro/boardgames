import {
    Tags, CardTypes, Adventures, LocationCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/fields_of_pelennor.png'

const RuinsOfOsgiliath: LocationCardType = {
    type: CardTypes.LOCATION,
    isUnique: false,
    name: 'Поля Пеленнора',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.WEST_COAST],
    dangerPower: 1,
    searchDifficult: 7,
    text: [
        `Если игроки пересекли Андуин, эта карта получает текст: "В фазе Путешествия игроки должны отправиться на Поля Пеленнора, либо поднять угрозу каждого игрока на 3"`,
    ],
    shadowEffect: [],
    image: ImageBack,
    victoryText: 'Победа 1'
};

export default RuinsOfOsgiliath;
