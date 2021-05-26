import {
    Tags, CardTypes, Actions, Adventures, EnemyCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/mordor_wolves.png';

const MordorWolves: EnemyCardType = {
    type: CardTypes.ENEMY,
    isUnique: false,
    name: 'Мордорские волки',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.THING, Tags.SCOUT],
    text: [
        `${Actions.SPECIAL}: После того как эта Мордорские волки атаковали и убили персонажа, замешайте их назад в колоду столкновения`,
    ],
    shadowEffect: [
        `${Tags.SHADOW_EFFECT}: Защищающийся персонаж получает 2 повреждения`,
    ],
    collisionProbability: 27,
    dangerPower: 1,
    attack: 4,
    defend: 1,
    health: 3,
    image: ImageBack,
};

export default MordorWolves;
