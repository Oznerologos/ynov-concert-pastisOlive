import React, {useState, useContext} from 'react'  
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import contactTitle from '../media/img/contact2.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomSelect from './citiesSelect'
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ProgrammationMain() {

        const [categories, setCategories] = useState({
          toutes: true,
          pop: true,
          rock: true,
          electro: true,
          rapHiphop: true,
          soulFunk: true,
          classique: true,
          dubReggae: true,
          world: true,
        });

    const handleChange = (event) => {
        setCategories({ ...categories, [event.target.name]: event.target.checked });
      };

        return(
        <main id="programmation">
            <h1>PROGRAMMATION</h1>
            <div id="filtresContainer">
                <div id="cityContainer">
                    <p>Lieu:</p>
                    <Button>TOUS</Button>
                    <Button>AIX-EN-PROVENCE</Button>
                    <Button>BOURGES</Button>
                    <Button>CANNES</Button>
                    <Button>DUNKERQUE</Button>
                    <Button>ECHIROLLES</Button>
                </div>
                <div id="categoriesContainer">
                    <p>Catégorie de musique:</p>
                    <FormGroup row>
                        {/*
                    <FormControlLabel control={<Checkbox defaultChecked checked={categories.toutes} onChange={handleChange} name="toutes" color="primary"/>} label="Primary"/>
                    <FormControlLabel control={<Checkbox checked={categories.checkedB} onChange={handleChange} name="checkedB" color="primary"/>} label="Primary"/>
                    <FormControlLabel control={<Checkbox checked={categories.checkedC} onChange={handleChange} name="checkedC" color="primary"/>} label="Primary"/>
                    <FormControlLabel control={<Checkbox checked={categories.checkedD} onChange={handleChange} name="checkedD" color="primary"/>} label="Primary"/>
                    <FormControlLabel control={<Checkbox checked={categories.checkedE} onChange={handleChange} name="checkedE" color="primary"/>} label="Primary"/>
                    <FormControlLabel control={<Checkbox checked={categories.soulFunk} onChange={handleChange} name="soulFunk" color="primary"/>} label="Primary"/>
                    <FormControlLabel control={<Checkbox checked={categories.classique} onChange={handleChange} name="classique" color="primary"/>} label="Primary"/>
                    <FormControlLabel control={<Checkbox checked={categories.dubReggae} onChange={handleChange} name="dubReggae" color="primary"/>} label="Primary"/>
                        <FormControlLabel control={<Checkbox checked={categories.world} onChange={handleChange} name="world" color="primary"/>} label="Primary"/>*/}
                    </FormGroup>
                </div>
            </div>
        </main>);
    }
