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
    preGameSettings: PreGameSettingsType,
    log: string[]
}

export interface IBase {
    modal: boolean
}
