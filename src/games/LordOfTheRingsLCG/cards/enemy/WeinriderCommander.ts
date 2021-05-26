import {
    Tags, CardTypes, Actions, Adventures, EnemyCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/weinreider_commander.png';

const WeinriderCommander: EnemyCardType = {
    type: CardTypes.ENEMY,
    isUnique: false,
    name: 'Командующий Райдерами',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.ESTERLING, Tags.GENERAL],
    text: [
        `${Actions.APPEARANCE}: Переместите верхнюю карту с чертой ${Tags.SCOUT} из стопки сброса колоды столкновений в район средоточения(или 2 карты с чертой ${Tags.SCOUT}, если игроки пересекли Андуин)`,
    ],
    shadowEffect: [
        `${Tags.SHADOW_EFFECT}: Если атакующий противник имеет черту ${Tags.SCOUT}, он получает +2${Icons.ATTACK}, если его атаку никто не отражает`,
    ],
    collisionProbability: 40,
    dangerPower: 3,
    attack: 3,
    defend: 3,
    health: 4,
    image: ImageBack,
};

export default WeinriderCommander;
