import { Actions, CardTypes, EventCardType } from '../../types/cards'
import ImageBack from '../../images/cards/circular_defense.png'

const CircularDefense: EventCardType = {
    type: CardTypes.EVENT,
    name: 'Круговая оборона',
    text: [
        `${Actions.ACTION}: Выберите игрока. Выбранный игрок может объявить любое количество своих персонажей защищающимися против атакующих его противников`],
    price: 0,
    quote: `"... и даже если им удасться осуществить задуманное, это будет последнее, что они сделают. Голодные, бесприютные и одинокие, они останутся посреди этой выжженой равнины. И возврата уже не будет." - Возвращение Короля`,
    image: ImageBack,
}

export default CircularDefense
