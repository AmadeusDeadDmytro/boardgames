import { Actions, CardTypes, EventCardType } from '../../types/cards'
import ImageBack from '../../images/cards/forest_of_spears.png'

const ForestOfSpears: EventCardType = {
    type: CardTypes.EVENT,
    name: 'Лес копий',
    text: [
        `Вы должны использовать ресурсы из запасов 3 различных героев, чтобы сыграть эту карту`,
        `${Actions.ACTION}: Выберите игрока. Противники в зоне выбранного игрока не атакуют его в текущую фазу`],
    price: 3,
    quote: `"Колона мгновенно, без команды и окриков, развернулась в кольцо, сомкнувшееся вокруг них. Отряд ощетинился лесом копий." - Две Твердыни`,
    image: ImageBack,
}

export default ForestOfSpears
