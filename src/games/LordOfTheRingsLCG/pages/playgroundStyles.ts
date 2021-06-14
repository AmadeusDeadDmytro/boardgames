import styled from "styled-components";
import Theme from '../../../styles/theme'

export const LogContainer = styled.div<{ theme: string }>`
    position: absolute;
    bottom: 0;
    transition: all .2s linear;
    width: 400px;
    height: 100px;
    border-top: 1px solid ${({ theme }) => Theme[theme].medium};
    border-left: 1px solid ${({ theme }) => Theme[theme].medium};
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px;

    .log {
        color: ${({ theme }) => Theme[theme].medium};
        margin: 2px 0;
        font-size: 12px;
    }
`

export const LogButton = styled.div<{ theme: string }>`
    position: absolute;
    transform: rotate(-90deg);
    right: -30px;
    bottom: 55px;
    border: 1px solid ${({ theme }) => Theme[theme].medium};
    padding: 4px 10px;
    border-bottom-width: 0;
    color: ${({ theme }) => Theme[theme].medium};
    cursor: pointer;
    border-left: 1px solid ${({ theme }) => Theme[theme].medium};
    background-color: ${({ theme }) => Theme[theme].dark};
    z-index: 3;
`