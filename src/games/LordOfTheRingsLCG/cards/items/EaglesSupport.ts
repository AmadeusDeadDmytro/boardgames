import { Actions, CardTypes, Icons, ItemCardType, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/eagles_support.png'

const EaglesSupport: ItemCardType = {
    type: CardTypes.ITEM,
    name: 'Поддержка орлов',
    tags: [Tags.GIFT],
    text: [
        `Прикладывается к ${Icons.TACTICS} герою`,
        `${Actions.ACTION}: Закройте Поддержку орлов, чтобы выбрать союзника с чертой ${Tags.EAGLE}. До конца фазы владелец добавляет показатель ${Icons.ATTACK} или ${Icons.SHIELD} выбранного союзника к своим параметрам`
    ],
    price: 3,
    image: ImageBack,
}

export default EaglesSupport
