import React from 'react';
import { ContainerDetail, HeaderDetail, Title } from './styled';

import { FiArrowLeft } from 'react-icons/fi'
import { ProgressBar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const pj = [{
    "id": 1,
    "title": "WorkFlow",
    "progress": 40,
    "status": "in_progress"
  },{
    "id": 2,
    "title": "Site Pizzaria",
    "progress": 0,
    "status": "new"
  },{
    "id": 3,
    "title": "Hooper Food",
    "progress": 100,
    "status": "finished"
  },{
    "id": 4,
    "title": "Hooper Food",
    "progress": 10,
    "status": "in_progress"
  }];


const Detail:  React.FC = () => {

    const id = localStorage.getItem(`detail`);
    const history = useHistory();

    function Goback() {
        history.goBack();
    }

    return (
        <ContainerDetail>
            <HeaderDetail>
                <div className="text">
                    <FiArrowLeft size="25" onClick={Goback}/>
                    <Title>{ pj[Number(id)-1].title }</Title>
                </div>
                <ProgressBar now={pj[Number(id)-1].progress} />
            </HeaderDetail>
        </ContainerDetail>
    );

}

export default Detail;