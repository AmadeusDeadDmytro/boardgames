import { ReactElement } from 'react'

export interface AdventureProps {
    title: string,
	children?: ReactElement,
	theme: string,
	disable?: boolean,
	onClick: () => void
}
