import { Actions, CardTypes, EventCardType, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/skill_with_blades.png'

const SkillWithBlades: EventCardType = {
    type: CardTypes.EVENT,
    name: 'Мастерство с клинками',
    text: [
        `${Actions.ACTION}: Выберите персонажа. До конца фазы выбранный персонаж получает +1${Icons.ATTACK} и +1${Icons.SHIELD}`],
    price: 1,
    quote: `"Отбросив плащ, он положин руку на эфес меча, дотоле скрывавшегося на его боку. Никто не смел шелохнуться." - Братство кольца`,
    image: ImageBack,
}

export default SkillWithBlades
