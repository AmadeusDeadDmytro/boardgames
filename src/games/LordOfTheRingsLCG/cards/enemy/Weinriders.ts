import {
    Tags, CardTypes, Actions, Adventures, EnemyCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/weinriders.png';

const Weinriders: EnemyCardType = {
    type: CardTypes.ENEMY,
    isUnique: false,
    name: 'Вайнрайдеры',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.ESTERLING, Tags.SCOUT],
    text: [
        `Каждое повреждение, полученное защищающимся персонажем от этой карты, повышает угрозу контролирующего этого персонажа на 1`,
    ],
    quote: '"...Истерлинги были сильными, закалёнными в боях людьми и не просили пощады". - Возвращение Короля',
    shadowEffect: [],
    collisionProbability: 35,
    dangerPower: 2,
    attack: 3,
    defend: 1,
    health: 4,
    image: ImageBack,
};

export default Weinriders;
