import {
    Tags, CardTypes, Actions, Adventures, EnemyCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/snag_scouts.png';

const SnagScouts: EnemyCardType = {
    type: CardTypes.ENEMY,
    isUnique: false,
    name: 'Снаги скауты',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.ORC, Tags.SCOUT],
    text: [
        `${Actions.SPECIAL}: В фазу Столкновения все Снаги скауты в игре перемещаются в зону игрока с наименьшей угрозой. (При равной угрозе - на выбор первого игрока)`,
    ],
    shadowEffect: [],
    collisionProbability: 1,
    dangerPower: 1,
    attack: 1,
    defend: 0,
    health: 2,
    image: ImageBack,
};

export default SnagScouts;
