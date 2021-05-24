import {
    Tags, CardTypes, Actions, Adventures, DangerCardType, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/dark_pursuit.png'

const RangerIthilien: DangerCardType = {
    type: CardTypes.DANGER,
    isUnique: false,
    name: 'Темная погоня',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [],
    text: [
        `${Actions.APPEARANCE}: Увеличьте общую угрозу района стредоточения на +1${Icons.DANGER_POWER} за каждого противника с чертой ${Tags.SCOUT} в игре. Если таких нет, эта карта вызывает наплыв`
    ],
    shadowEffect: [],
    image: ImageBack,
};

export default RangerIthilien;
