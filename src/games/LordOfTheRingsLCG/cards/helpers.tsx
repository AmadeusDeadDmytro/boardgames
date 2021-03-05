import React from 'react'
import SwordBlack from '../images/icons/Sword_black.png'
import Axes from '../images/icons/Axes.png'
import Shield from '../images/icons/Shield.png'
import Willpower from '../images/icons/Willpower.png'
import { Actions, Icons, Spheres, Tags } from '../types/cards'
import JsxParser from 'react-jsx-parser'
import TacticsIcon from '../images/icons/Sword.png'
import TacticsIconTransparent from '../images/icons/Sword-transparent.png'
import LeadershipIcon from '../images/icons/Leadership.png'
import LeadershipIconTransparent from '../images/icons/Leadership_transparent.png'

export const replaceTextByText = (array: Array<string>, text: string): string => {
    array.forEach(el => {
        text = text.replaceAll(el, `<b><i>${el}</i></b>`)
    })
    return text
}

export const replaceTextByIcon = (text: string): string => {
    const iconTactics = `<img src="${SwordBlack}" style="height: 14px; display: inline;" alt=''/>`
    const iconAttack = `<img src="${Axes}" style="height: 14px; display: inline;" alt=''/>`
    const iconShield = `<img src="${Shield}" style="height: 14px; display: inline;" alt=''/>`
    const iconWillpower = `<img src="${Willpower}" style="height: 14px; display: inline;" alt=''/>`

    return text
        .replaceAll('Tactics', iconTactics)
        .replaceAll('Attack', iconAttack)
        .replaceAll('Shield', iconShield)
        .replaceAll('Willpower', iconWillpower)
}

export const renderText = (text: string): JSX.Element => {
    const tagsArr: Array<string> = Object.values(Tags)
    const actionsArr: Array<string> = Object.values(Actions)
    const spheresArr: Array<string> = Object.values(Icons)

    text = replaceTextByText(tagsArr, text)
    text = replaceTextByText(actionsArr, text)
    text = replaceTextByIcon(text)

    return <JsxParser jsx={text}/>
}

export const getSphereIcon = (text: string): Array<string> => {
    switch (text) {
        case Spheres.TACTICS:
            return [TacticsIcon, TacticsIconTransparent]
        case Spheres.LEADERSHIP:
            return [LeadershipIcon, LeadershipIconTransparent]
    }
    return []
}