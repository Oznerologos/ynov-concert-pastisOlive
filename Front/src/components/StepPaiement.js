import React, {useState, useContext, useRef} from 'react';
import PlanSalle from './PlanSalle';
import SeatsBookingContext from './SeatsBookingContext';
import Button from 'react-bootstrap/Button';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Loader from './ProgressCircle';
  
  export default function StepPaiement() {

  const context = useContext(SeatsBookingContext);

  const deleteRow = (dataid, dataprice) => {
    if((context.seats).length == 1) {
      context.setPrices(context.prices - parseInt(dataprice));
      context.setSeats(context.seats.filter(item=> item.id !== dataid))
      context.setDeliveryMode('');
      context.setDeliveryPrice(0);
      context.setPurchases(null);
    } else {
      context.setPrices(context.prices - parseInt(dataprice));
      context.setSeats(context.seats.filter(item=> item.id !== dataid))
      context.setPurchases(context.purchases - 1);
    }
    
  }

  const [loader, setLoader] = useState(false);

  const load = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      context.setActiveStep(4);
    }, 2000);
};

  return (

    <section id="sectionStepPanier">

    <div id="panierRecap">
      <h2>BONJOUR JEAN-BRYAN</h2>
      <h3>Récapitulatif de votre panier</h3>
      <div id="tableContainer">
      <table>
        <thead>
          <tr>
            <th colSpan={2}>N°</th>
            <th colSpan={2}>Nombre de places</th>
            <th colSpan={2}>Artiste / Groupe</th>
            <th colSpan={2}>Lieu</th>
            <th colSpan={2}>Date et heure</th>
            <th colSpan={2}>Catégorie de tarifs</th>
            <th colSpan={2}>Tarif</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {context.seats.map((key, index) => {
        return <tr>
            <td colSpan={2}>{index+1}</td>
            <td colSpan={2}>1 place</td>
            <td colSpan={2}>Artiste</td>
            <td colSpan={2}>Lieu</td>
            <td colSpan={2}>Date et heure</td>
            <td colSpan={2}></td>
            <td colSpan={2}>{key.price}</td>
            <td><Button datadelete={key.id} onClick={() => deleteRow(key.id, key.price)}><i className="fas fa-trash-alt"></i></Button></td>
        </tr>
    })
  }
        </tbody>
      </table>
      </div>
      </div>
      <div id="obtentionRecap">
        <p>Obtention des billets:</p>
        <p>Nom artiste</p>
        <p>{context.deliveryMode}</p>
        <p>{parseFloat(context.deliveryPrice).toFixed(2)} €</p>
      </div>
      <div id="totalPanierPaiement">
        <div className="cont">
      <h4>MONTANT TOTAL DU PANIER</h4>     
      <h4 id="totalWithDelivery">{(parseInt(context.prices) + parseFloat(context.deliveryPrice)).toFixed(2)} €</h4>
      </div>
      </div>

      <h3 id="paiementTitle">Votre paiement</h3>
      <div id="paiementCont">
      <div id="paiement">
        
        <p>Veuillez saisir les informations de votre paiement:</p>
        <form id="billing">
        <div id="creditCardsContainer">
        <FormControl component="fieldset">
          <RadioGroup aria-label="bankCard" name="bankCard">
            <FormControlLabel value="visa" control={<Radio />} label={<i class="fab fa-cc-visa"></i>} />
            <FormControlLabel value="mastercard" control={<Radio />} label={<i class="fab fa-cc-mastercard"></i>} />
            <FormControlLabel value="americanexpress" control={<Radio />} label={<i class="fab fa-cc-amex"></i>} />
          </RadioGroup>
          </FormControl>
        </div>
        <FormControl>
            <TextField id="email" label="Numéro de carte" type="number" variant="filled"/>
          </FormControl>
          <div id="expiration">
            <p>Date d'expiration:</p>
          <FormControl>
            <TextField id="expirationMonth" label="Mois" type="number" variant="filled" InputProps={{
        inputProps: { 
            max: 12, min: 1 
        }
    }}/>
          </FormControl>
          <FormControl>
            <TextField id="expirationYear" label="Année" type="number" variant="filled" InputProps={{
        inputProps: { 
            max: 2025, min: 2021 
        }
    }}/>
          </FormControl>
          </div>
          <FormControl>
            <TextField id="cryptogram" label="Cryptogramme visuel" type="number" variant="filled" InputProps={{
        inputProps: { 
            maxlength: 3
        }
    }}/>
          </FormControl>
        
        </form>

      </div>
      <div id="btnContainer">
      <Button>ANNULER</Button>
      <Button onClick={() => load()}>VALIDER ET PAYER</Button>
      </div>
      </div>
      {
              loader?

              <Loader></Loader>

              :

              <div></div>
            }
    
    </section>

  );
}