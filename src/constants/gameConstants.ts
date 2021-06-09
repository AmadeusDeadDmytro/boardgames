import LordOfTheRingImage from '../assets/images/gameCards/the-lord-of-the-rings-lcg-f.jpg'

type GamesType = {
    [key: string]: {
        modes: string[],
        parts: string[],
        image: string
    }
}

type ModesType = {
    [key: string]: {
        name: string,
        description: string,
        players: number,
        disabled: boolean
    }
}

export const GAMES: GamesType = {
    lord_of_the_ring: {
        modes: ['solo', 'for_two', 'with_ai'],
        parts: ['Сосредоточение в Осгилиате'],
        image: LordOfTheRingImage
    }
}

export const MODES: ModesType = {
    solo: {
        name: "Соло игра",
        description: "Играть в одиночку",
        players: 1,
        disabled: false
    },
    for_two: {
        name: "Игра с другом",
        description: "Играть вместе с другом",
        players: 2,
        disabled: true
    },
    with_ai: {
        name: "Игра с ИскИном",
        description: "Играть с ИИ в качестве напарника",
        players: 2,
        disabled: true
    }
}