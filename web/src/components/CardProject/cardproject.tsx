import React from 'react';

import { CardContainer, Title, Infoplus } from './styled';
import { ProgressBar } from 'react-bootstrap';

interface Info {
    title:  string,
    progress: number,
}

const CardProject: React.FC<Info> = ({ title, progress }) => {

    return (
        <CardContainer>
            <div className="text">
                <Title>{ title }</Title>
                <Infoplus>+ Detalhes</Infoplus>
            </div>
            <ProgressBar variant="success" striped now={progress} />
        </CardContainer>
    );

}

export default CardProject;