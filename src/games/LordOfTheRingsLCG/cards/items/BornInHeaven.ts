import { Actions, CardTypes, ItemCardType, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/born_in_heaven.png'

const BornInHeaven: ItemCardType = {
    type: CardTypes.ITEM,
    name: 'Рожденный в небесах',
    tags: [Tags.STATUS],
    text: [
        `Прикладывается к союзнику`,
        `${Actions.ACTION}: Сбросьте Рожденного в небесах, чтобы вернуть владельца в руку`
    ],
    quote: `"Что ж, хорошо, - сказал Гендальф, - отнесите нас, куда пожелаете, но как можно дальше от гор." - Хоббит`,
    price: 0,
    image: ImageBack,
}

export default BornInHeaven
