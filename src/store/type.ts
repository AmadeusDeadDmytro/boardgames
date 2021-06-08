export interface ISettings {
    theme: string
}

export type PreGameSettingsType = {
    maxPlayers?: number,
    gameMode?: string,
    adventure?: string
}

export interface IGame {
    current: string,
    preGameSettings: PreGameSettingsType
}

export interface IBase {
    modal: boolean
}
