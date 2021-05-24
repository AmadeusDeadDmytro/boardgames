import {
    Tags, CardTypes, Actions, Adventures, DangerCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/cut_off.png'

const CutOff: DangerCardType = {
    type: CardTypes.DANGER,
    isUnique: false,
    name: 'Отрезан',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [],
    text: [
        `Обречённый 1`,
        `${Actions.APPEARANCE}: Каждый игрок должен сбросить все карты союзников из руки`
    ],
    shadowEffect: [
        `${Tags.SHADOW_EFFECT}: Защищающийся игрок должен сбросить 1 карту союзника из руки, либо атакующий противник получает +3${Icons.ATTACK}(или 2 карты союзников, если эту атаку никто не отражает)`
    ],
    image: ImageBack,
};

export default CutOff;
