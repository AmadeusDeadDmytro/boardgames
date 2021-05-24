import {
    Tags, CardTypes, TargetCardType, Actions, Adventures,
} from '../../types/cards'
import ImageBack from '../../images/cards/ranger_of_ithilian.png';

const RangerIthilien: TargetCardType = {
    type: CardTypes.TARGET,
    isUnique: false,
    name: 'Рейнджер Итилиена',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.GONDOR, Tags.RANGER, Tags.ALLY],
    text: [
        `${Actions.APPEARANCE}: Первый игрок берет под свой контроль эту карту, закрывает её и отправляет на квест. Затем эта карта вызывает наплыв`,
    ],
    shadowEffect: [
        `${Tags.SHADOW_EFFECT}: Нанесите 2 повреждения атакующему противнику. Защищающийся игрок может закрыть одного из своих персонажей, чтобы взять под контроль эту карту`,
    ],
    willpower: 2,
    attack: 2,
    defend: 1,
    health: 2,
    image: ImageBack,
};

export default RangerIthilien;
