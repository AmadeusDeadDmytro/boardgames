import React, { ReactNode } from 'react'
import { action, computed, observable, reaction } from 'mobx'
import { ISettings } from './type'

class MainStore {
    @observable settings: ISettings = {
        theme: 'basic'
    }

    @computed get currentTheme(): string {
        return this.settings.theme
    }

    @action setTheme(theme: string) {
        this.settings.theme = theme
    }
}

export const mainStore = new MainStore()