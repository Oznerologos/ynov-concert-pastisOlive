import React, {useState, useContext} from 'react';
import PlanSalle from './PlanSalle';
import SeatsBookingContext from './SeatsBookingContext';
import Button from 'react-bootstrap/Button';
  
  export default function StepReservation() {

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

  return (

    <section id="sectionStepPanier">
      <div id="panierTop">
      <div id="categories">
        <p>CAT 1</p>
        <p>CAT 2</p>
        <p>CAT 3</p>
      </div>
      <div id="planSalleContainer">
            <div id="scene">
              <h4>scène</h4>
            </div>
      <PlanSalle nbplaces={132} maxprice={87} selectedPlaces={context.seats} viewonly={"true"}/>
      </div>
      <div className="artistHead">
        <div>
          <h3>Nom de l'artiste</h3>
          <p>Nom du concert</p>
          <p>Lieu</p>
        </div>
        <div>
        {context.seats.map((key, index) => {
        return <div className="resaLine">
          <p>Place {key.id.slice(1)}, Rang {key.id.slice(0,1)}</p>
        </div>
    })
  }
        </div>
    </div>
    </div>

    <div id="panierRecap">
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
      <div id="totalPanier">
      <h4>MONTANT TOTAL DU PANIER</h4>
      <h4 id="totalWithDelivery">{(parseInt(context.prices) + parseFloat(context.deliveryPrice)).toFixed(2)} €</h4>
      </div>
    
    </section>

  );
}