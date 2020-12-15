import React, { useState } from 'react';
import { ContainerNav, LinkNav } from './styled';

const Navigation: React.FC = () => {

    const [ check, setCheck ] = useState<Number>(1);

    function handleSelect( id: Number ) {
        setCheck(Number(id));
    }

    return (
        <ContainerNav>
            <LinkNav>
                <a onClick={() => handleSelect(1)}>NOVOS</a>
                <div className={check == 1 ? "checked" : "notChecked"} ></div>
            </LinkNav>
            <LinkNav>
                <a onClick={() => handleSelect(2)}>EM ANDAMENTO</a>
                <div className={check == 2 ? "checked" : "noChecked"}></div>
            </LinkNav>
            <LinkNav>
                <a onClick={() => handleSelect(3)}>FINALIZADOS</a>
                <div className={check == 3 ? "checked" : "noChecked"}></div>
            </LinkNav>
        </ContainerNav>
    );
}

export default Navigation;