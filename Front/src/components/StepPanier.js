import React, { useContext } from 'react';
import PlanSalle from './PlanSalle';
import SeatsBookingContext from './SeatsBookingContext';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import ConcertContext from './ConcertContext';

export default function StepReservation({method}) {

  const context = useContext(SeatsBookingContext);
  const contextConcert = useContext(ConcertContext);

  const deleteRow = (dataid, dataprice) => {
    console.log("dataid: ", dataid, "dataprice: ", dataprice);
    console.log(persistantContext);
    console.log(context.seats);
    if ((persistantContext).length === 1) {
      context.setPrices(context.prices - parseInt(dataprice));
      context.setSeats(context.seats.filter(item => item.id !== dataid))
      localStorage.setItem("reactContext", JSON.stringify([]));
      context.setDeliveryMode('');
      context.setDeliveryPrice(0);
      context.setPurchases(null);
    } else {
      context.setPrices(context.prices - parseInt(dataprice));
      context.setSeats(context.seats.filter(item => item.id !== dataid))
      context.setPurchases(context.purchases - 1);
      localStorage.setItem("reactContext", JSON.stringify(persistantContext.filter(item => item.id !== dataid)));
    }

  }

  const stepButton = () => {
    context.setActiveStep(2);
  }

  const persistantContext = JSON.parse(localStorage.getItem("reactContext"));

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
          <PlanSalle nbplaces={contextConcert.concert.concertRoom ? contextConcert.concert.concertRoom.placeNumber : 100} maxprice={contextConcert.concert.concertRoom ? contextConcert.concert.maxPrice : 100} selectedPlaces={persistantContext} viewonly={1} />
        </div>
        <div className="artistHead">
          <div>
            <h3>{contextConcert.concert ? contextConcert.concert.artist : ""}</h3>
            <p>{contextConcert.concert ? contextConcert.concert.name : ""}</p>
            <p>{contextConcert.concert.concertRoom ? contextConcert.concert.concertRoom.name : ""}</p>
          </div>
          <div>
            {persistantContext.map((key, index) => {
              return <div className="resaLine">
                <p>Place {parseInt(key.id.slice(1))+1}, Rang {key.id.slice(0, 1)}</p>
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
              {persistantContext.map((key, index) => {
                return <tr>
                  <td colSpan={2}>{index + 1}</td>
                  <td colSpan={2}>1 place</td>
                  <td colSpan={2}>{contextConcert.concert ? contextConcert.concert.artist : ""}</td>
                  <td colSpan={2}>{contextConcert.concert.concertRoom ? contextConcert.concert.concertRoom.name : ""}</td>
                  <td colSpan={2}>{contextConcert.concert ? method(contextConcert.concert.time) : ""}</td>
                  <td colSpan={2}>{contextConcert.concert ? contextConcert.concert.category : ""}</td>
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
        <p>{contextConcert.concert ? contextConcert.concert.artist : ""}</p>
        <p>{context.deliveryMode}</p>
        <p>{parseFloat(context.deliveryPrice).toFixed(2)} €</p>
      </div>
      <div id="totalPanier">
        <h4>MONTANT TOTAL DU PANIER</h4>
        <h4 id="totalWithDelivery">{(parseInt(context.prices) + parseFloat(context.deliveryPrice)).toFixed(2)} €</h4>
      </div>

      <div id="stepperButtonsCont">
        <NavLink exact to={`/Concert?artist=${contextConcert.concert.artist}`} className="cancelStep">ANNULER</NavLink>
        <NavLink exact to="/Programmation" className="otherCommand">AUTRE COMMANDE</NavLink>
        <Button onClick={stepButton} className="nextStep">VALIDER</Button>
      </div>

    </section>

  );
}