export interface TextFieldProps {
    onChange: (e: any) => void,
    label?: string,
    type: 'text' | 'email' | 'password',
    width?: number,
    className?: string
}