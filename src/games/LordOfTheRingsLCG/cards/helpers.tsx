import React from 'react'
import SwordBlack from '../images/icons/Sword_black.png'
import Axes from '../images/icons/Axes.png'
import Shield from '../images/icons/Shield.png'
import { Actions, Icons, Tags } from '../types/cards'
import JsxParser from 'react-jsx-parser'

export const replaceTextByText = (array: Array<string>, text: string): string => {
    array.forEach(el => {
        text = text.replace(el, `<b><i>${el}</i></b>`)
    })
    return text
}

export const replaceTextByIcon = (array: Array<string>, text: string): string => {
    const iconTactics = `<img src="${SwordBlack}" style="height: 14px; display: inline;" alt=''/>`
    const iconAttack = `<img src="${Axes}" style="height: 14px; display: inline;" alt=''/>`
    const iconShield = `<img src="${Shield}" style="height: 14px; display: inline;" alt=''/>`
    array.forEach(el => {
        if (el === 'Tactics') {
            text = text.replace(el, iconTactics)
        } else if (el === 'Attack') {
            text = text.replace(el, iconAttack)
        } else if (el === 'Shield') {
            text = text.replace(el, iconShield)
        }
    })
    return text
}

export const renderText = (text: string): JSX.Element => {
    const tagsArr: Array<string> = Object.values(Tags)
    const actionsArr: Array<string> = Object.values(Actions)
    const spheresArr: Array<string> = Object.values(Icons)

    text = replaceTextByText(tagsArr, text)
    text = replaceTextByText(actionsArr, text)
    text = replaceTextByIcon(spheresArr, text)

    return <JsxParser jsx={text}/>
}