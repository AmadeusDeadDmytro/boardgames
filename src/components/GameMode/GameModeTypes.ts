import { ReactElement } from 'react'

export interface GameModeProps {
    title: string,
	description: string,
	children?: ReactElement,
	theme: string,
	disable?: boolean
}
