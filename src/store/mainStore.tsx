import React from 'react'
import { action, computed, observable, reaction } from 'mobx'
import { ISettings, IGame } from './type'

class MainStore {
    @observable settings: ISettings = {
        theme: 'basic'
    }

    @observable game: IGame = {
        current: '',
        maxPlayers: 1
    }

    @computed get currentTheme(): string {
        return this.settings.theme
    }

    @action setGameMaxPlayers(count: number) {
        this.game.maxPlayers = count
    }

    @action setTheme(theme: string) {
        this.settings.theme = theme
    }
}

export const mainStore = new MainStore()