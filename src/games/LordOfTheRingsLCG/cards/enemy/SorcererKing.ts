import {
    Tags, CardTypes, Actions, Adventures, EnemyCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/sorcerer_wizard.png';

const SorcererKing: EnemyCardType = {
    type: CardTypes.ENEMY,
    isUnique: true,
    name: 'Король колдун',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.NAZGUL, Tags.GENERAL],
    text: [
        `Игроки не могут играть предметы на эту карту`,
        `Когда эта карта находится в районе средоточения, каждый персонаж получает -1${Icons.WILLPOWER}`,
        `${Actions.SPECIAL}: После своей атаки, эта карта возвращается в район средоточения, если защищающийся игрок не поднимет свою угрозу на 3`
    ],
    shadowEffect: [],
    collisionProbability: 40,
    dangerPower: 6,
    attack: 6,
    defend: 6,
    health: 11,
    image: ImageBack,
};

export default SorcererKing;
