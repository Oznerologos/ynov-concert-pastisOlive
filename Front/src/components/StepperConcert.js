import React, { useContext, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepReservation from './StepReservation';
import StepPanier from './StepPanier';
import StepCoordonnees from './StepCoordonnees';
import SeatsBookingContext from './SeatsBookingContext';
import StepPaiement from './StepPaiement';
import StepConfirmation from './StepConfirmation';
import { NavLink, useLocation } from 'react-router-dom';
import ConcertContext from './ConcertContext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Réservation', 'Panier d\'achat', 'Coordonnées', 'Paiement', 'Confirmation'];
}

function getStepContent(step) {

  switch (step) {
    case 0:
      return <StepReservation />;
    case 1:
      return <StepPanier />;
    case 2:
      return <StepCoordonnees />;
    case 3:
      return <StepPaiement />;
    case 4:
      return <StepConfirmation />;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  {/*const [activeStep, setActiveStep] = React.useState(0);*/ }
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const context = useContext(SeatsBookingContext);

  const isStepOptional = (step) => {
    return false; //step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(context.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(context.activeStep);
    }

    context.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    context.setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(context.activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    context.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(context.activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    context.setActiveStep(0);
  };

  const [refreshKey] = useState(0);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  let paramId = "";
  paramId = query.get("id");

  const getSalle = async () => {
    let result = await axios(
      'https://localhost:8000/concert/' + paramId,
    );
    // return the result
    return result;
  };

  const [data, setData] = React.useState([])

  React.useEffect(() => {

    getSalle().then(res => {
      setData(res.data)
    })
  }, [refreshKey]);

  const contextConcert = useContext(ConcertContext);

  contextConcert.setConcert(data);

  return (
    <div className={classes.root}>
      <Stepper activeStep={context.activeStep} className="titleCont">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/*  <div>
        
        {context.activeStep === steps.length ? (
          <div className="stepBody">
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (*/}
      <div className="stepBody">
        <div className={classes.instructions}>{getStepContent(context.activeStep)}</div>
        {/* <div>
          <NavLink exact to={"/Concert?artist=" + data.artist} onClick={handleBack} className="cancelStep">
            ANNULER
          </NavLink>
          {isStepOptional(context.activeStep) && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSkip}
              className={classes.button}
            >
              Passer
            </Button>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {context.activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
          </Button>
        </div> */}
      </div>
          )
    </div>
  );
}