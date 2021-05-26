import {
    Tags, CardTypes, Actions, Adventures, EnemyCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/uruk__hai_vanguard.png';

const UrukHaiVanguard: EnemyCardType = {
    type: CardTypes.ENEMY,
    isUnique: false,
    name: 'Авангард Урук-Хай',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.URUK_HAI, Tags.ORC],
    text: [
        `Если игроки пересекли Андуин, эта карта получает +3${Icons.ATTACK}`,
    ],
    shadowEffect: [
        `${Tags.SHADOW_EFFECT}: Атакующий противник получает +1${Icons.ATTACK} (или +2${Icons.ATTACK}, если игроки уже пересекли Андуин)`,
    ],
    collisionProbability: 45,
    dangerPower: 2,
    attack: 2,
    defend: 1,
    health: 8,
    image: ImageBack,
};

export default UrukHaiVanguard;
