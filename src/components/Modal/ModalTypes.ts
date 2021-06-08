import { ReactElement } from 'react'

export interface ModalProps {
    theme: string,
    children: ReactElement,
    title: string,
    backClick: () => void | null,
    onClose?: () => void
}