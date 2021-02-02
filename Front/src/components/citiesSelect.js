import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {

  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    ville: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple" className="selectLabel">Lieu concerné</InputLabel>
        <Select
          value={state.ville}
          onChange={handleChange}
          inputProps={{
            name: 'ville',
          }}
        >
          <option aria-label="None" value="" />
          <option value="Aix-en-Provence">Aix-en-Provence</option>
          <option value="Bourges">Bourges</option>
          <option value="Cannes">Cannes</option>
          <option value="Dunkerque">Dunkerque</option>
          <option value="Echirolles">Echirolles</option>
        </Select>
      </FormControl>
     
    </div>
  );
}