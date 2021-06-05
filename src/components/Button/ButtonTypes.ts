import { ReactElement } from 'react'

export interface ButtonProps {
    onClick: () => void,
    children?: string,
    className?: string,
    loading?: boolean
}
