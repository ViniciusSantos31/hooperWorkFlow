import React, { useContext } from 'react';
import { Container } from './style'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch';
import { shade } from 'polished';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            Hooper Technology | WorkFlow
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secondary}
            />

            
        </Container>
    );
}

export default Header;