import React from 'react';
import { ContainerUser, InfoUser, ContainerPhoto } from './styled';


const User: React.FC = () => {

    return (
        <ContainerUser>
            <ContainerPhoto>
                <img src="https://avatars2.githubusercontent.com/u/41171735?s=460&u=5a307d5d50f636d5e18073c378cda7bd4a9dcd72&v=4" />
                <p>FRONT-END</p>
            </ContainerPhoto>

            <InfoUser>

                <h1>OLÁ, VINICIUS SANTOS</h1>
                <span>Bem-vindo ao WorkFlow</span>

            </InfoUser>

        </ContainerUser>
    );

}


export default User;