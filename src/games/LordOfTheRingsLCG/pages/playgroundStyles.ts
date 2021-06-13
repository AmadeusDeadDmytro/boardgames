import styled from "styled-components";
import Theme from '../../../styles/theme'

export const LogContainer = styled.div<{ theme: string }>`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 400px;
    height: 100px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px;

    .log {
        color: ${({ theme }) => Theme[theme].medium};
        margin: 2px 0;
        font-size: 12px;
    }
`