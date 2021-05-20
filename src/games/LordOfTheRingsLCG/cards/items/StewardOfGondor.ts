import { Actions, CardTypes, ItemCardType, Spheres, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/steward_of_gondor.png'

const StewardOfGondor: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Наместник Гондора',
    tags: [Tags.GONDOR, Tags.TITLE],
    text: [
        `Прикладывается к герою`,
        `Владелец получает черту ${Tags.GONDOR}`,
        `${Actions.ACTION}: Закройте этот довесок, чтобы добавить 2 ресурса в запас владельца`
    ],
    price: 2,
    image: ImageBack,
    quote: `"Все должно быть готово. Я вчера отдал приказ." - Денетор, Возвращение Короля`,
}

export default StewardOfGondor
