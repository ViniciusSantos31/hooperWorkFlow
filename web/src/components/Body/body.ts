import styled from 'styled-components';

export const Body = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;

`;


export const GridBody = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

`;