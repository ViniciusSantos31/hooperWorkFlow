import styled from 'styled-components';

export const CardContainer = styled.div`

    display: flex;
    flex-direction: column;
    min-width: 370px;
    background: ${props => props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.background};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding-top: 40px;
    

    .text {
        margin-bottom: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .progress-bar{
        position: relative;
        height: 5px;
        width: 100%;
        background-color: ${props => props.theme.colors.progress};
    }

`;

export const Title = styled.h1`

    color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : "#000"};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;

`;

export const Infoplus = styled.a`

    color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : "#000"};
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;

`;