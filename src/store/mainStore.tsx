import React from 'react'
import { action, computed, makeObservable, observable, reaction } from 'mobx'
import { ISettings, IGame, IBase } from './type'

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
        }
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

    @action.bound setModal(state: boolean) {
        this.base.modal = state
    }
}

export const mainStore = new MainStore()