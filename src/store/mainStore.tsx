import React from 'react'
import { action, computed, makeObservable, observable, reaction } from 'mobx'
import { ISettings, IGame, IBase, PreGameSettingsType } from './type'

class MainStore {
    constructor() {
        makeObservable(this);
    }

    @observable settings: ISettings = {
        theme: 'basic',
    }

    @observable game: IGame = {
        current: '',
        preGameSettings: {
            maxPlayers: 0,
            gameMode: '',
            adventure: ''
        },
        log: []
    }

    @observable base: IBase = {
        modal: false
    }

    @computed get currentTheme(): string {
        return this.settings.theme
    }


    @action setTheme(theme: string) {
        this.settings.theme = theme
    }

    @action setModal(state: boolean) {
        this.base.modal = state
    }

    @action setCurrentGame(game: string) {
        this.game.current = game
    }

    @action setPreGameSettings(settings: PreGameSettingsType) {
        this.game.preGameSettings = {
            ...this.game.preGameSettings,
            ...settings
        }
    }

    @action addLog(log: string) {
        this.game.log.push(log)
    }
}

export const mainStore = new MainStore()