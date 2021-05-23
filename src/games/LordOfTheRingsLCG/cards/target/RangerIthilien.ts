import {
    Tags, CardTypes, Spheres, TargetCardType, Actions,
} from '../../types/cards';
import ImageBack from '../../images/cards/beregond.png';

const RangerIthilien: TargetCardType = {
    type: CardTypes.TARGET,
    isUnique: false,
    name: 'Рейнджер Итилиена',
    adventure: '',
    tags: [Tags.GONDOR, Tags.RANGER, Tags.ALLY],
    text: [
        `${Actions.APPEARANCE}: Первый игрок берет под свой контроль эту карту, закрывает её и отправляет на квест. Затем эта карта вызывает наплыв`,
    ],
    shadowEffect: [
        'Нанесите 2 повреждения атакующему противнику. Защищающийся игрок может закрыть одного из своих персонажей, чтобы взять под контроль эту карту',
    ],
    willpower: 0,
    attack: 1,
    defend: 4,
    health: 4,
    image: ImageBack,
};

export default RangerIthilien;
