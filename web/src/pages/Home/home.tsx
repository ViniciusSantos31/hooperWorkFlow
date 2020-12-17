import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../styles/global'
import Header from '../../components/Header/header';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import usePersistedState from '../../utils/usePersistedState';

import User from '../../components/User/user';
import { Body, GridBody } from '../../components/Body/body';
import Navigation from '../../components/Navigation/navigation';
import CardProject from '../../components/CardProject/cardproject';

interface Project {

    id: number,
    title: string,
    progress: number,
    status: string,
  
  }
  
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

const Home: React.FC = () => {

    const [ projects, setProjects ] = useState<Project[]>([]);
    const [ lastid, setLastId ] = useState<string>();
    useEffect(() => {

        const storage = localStorage.getItem('nav');

        if (storage){
          handleList(storage);
        } else {
          handleList('new');
        }

    }, [])

    function handleList(status: string){

        setProjects([])
    
        for (let i = 0; i < pj.length; i++){
    
          if (pj[i].status == status){
            setProjects(projects => [...projects, pj[i]])
          }
          localStorage.setItem("nav", status);
        }
    
      }

    const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <div>
            <User />
            <Navigation handleList={handleList} />
            
                <Body>
                <GridBody>
                    {projects.map(project => (
                    <CardProject status={project.status} progress={project.progress} title={project.title} id={project.id} />
                    ))}

                </GridBody>
                </Body>
        </div>
    );
}

export default Home;