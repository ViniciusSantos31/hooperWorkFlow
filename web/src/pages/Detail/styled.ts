import styled from 'styled-components';

export const ContainerDetail = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const HeaderDetail = styled.header`

    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.title === 'dark' ? props.theme.colors.secondary : props.theme.colors.background};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    padding-top: 43px;

    .text {
        margin-left: 40px;
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 43px;
    }

    .text svg {
        color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.primary};
        cursor: pointer;
    }

    .progress-bar{
        position: relative;
        height: 6px;
        width: 100%;
        background: ${props => props.theme.colors.progress};
        border-radius: 0 8px 8px 0;
        transition: all 0.5s ease-in;
    }

`;

export const Title = styled.h1`

    color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.primary};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;

`;