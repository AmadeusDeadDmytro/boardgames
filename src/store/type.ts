export interface ISettings {
    theme: string
}

type PreGameSettings = {
    maxPlayers: number,
    gameMode: string,
    adventure: string
}

export interface IGame {
    current: string,
    preGameSettings: PreGameSettings
}

export interface IBase {
    modal: boolean
}
