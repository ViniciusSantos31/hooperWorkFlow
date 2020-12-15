import styled from 'styled-components';

export const ContainerUser = styled.div`
    height: 225px;
    width: 100%;
    padding: 20px;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    border: none;
    font-size: 14px;

    

    h1 {
        font-size: 42px;
    }
`;

export const InfoUser = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h1 {
        font-size: 42px;
        font-weight: bold;
    }

    span {
        background: none;
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
    }

`;

export const ContainerPhoto = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: ${props => props.theme.colors.secondary};
        background: ${props => props.theme.colors.text};
        position: relative;
        bottom: 20px;
        padding: 5px 10px;
        border-radius: 50px;
        font-weight: bold;
    }

    img {
        height: 168px;
        width: 168px;
        align-self: center;
        border-radius: 50%;
        border: 3px solid ${props => props.theme.colors.text}
    }
`;