import styled from 'styled-components';

export const ContainerNav = styled.div`

    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.background};
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.50);

`;

export const LinkNav = styled.div`

    height: 100%;
    overflow: hidden;
    color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.primary};

    @keyframes mymove {
        from {width: 0%;}
        to {width: 100%;}
    }

    div {
        width: 0;
        height: 5px;
        background: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.primary};
        position: relative;
        bottom: 5px;
    }

    a {
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        height: 100%;
        padding: 0 10px;
        display: flex;
        align-items: center;
    }
    
    a:hover {
        background: ${props => props.theme.colors.hover};
    }

    .box {
        width: 0px;
        height: 5px;
        background: ${props => props.theme.colors.primary};
        position: relative;
        bottom: 5px;
        /* transition: width 0.5s ease-in-out;  */
    }


    .checked {
        animation: mymove 0.2s;
        width: 100%;
    }

`;