import React, { useContext } from 'react';
import SeatsBookingContext from './SeatsBookingContext';
import { NavLink } from 'react-router-dom';
import ConcertContext from './ConcertContext';
import UserContext from './UserContext';

const StepConfirmation = ({ method }) => {

  const context = useContext(SeatsBookingContext);
  const contextConcert = useContext(ConcertContext);
  const contextUser = useContext(UserContext);

  // context.setSeats([]);
  // context.setPurchases(0);

  const resetSeats = () => {
    context.setSeats([]);
  }

  return (

    <section id="sectionConfirmation">

      <div id="panierRecap">
        <h2>MERCI {contextUser.user[0].name.toUpperCase()} POUR VOTRE ACHAT !</h2>
        <p>La référence de cette réservation est le {contextUser.reservation.reference}.</p>
        <p>Vous allez recevoir un e-mail de confirmation.</p>
        {/*<p>Si vous avez choisi pour l'obtention des billets le mode "E-Ticket" vous pouvez le télécharger et
        l'imprimer depuis votre compte (ou sur cette page en cliquant sur VOIR).</p>*/}
        <p>Si vous avez réservé une place de parking et/ou une place au restaurant, vous pouvez saisir la
        référence de la réservation ou présenter le billet pour y accéder.</p>

        <h3>DÉTAIL DES RÉSERVATIONS</h3>

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
              </tr>
            </thead>
            <tbody>
              {context.seats.map((key, index) => {
                return <tr key={index}>
                  <td colSpan={2}>{index + 1}</td>
                  <td colSpan={2}>1 place</td>
                  <td colSpan={2}>{contextConcert.concert ? contextConcert.concert.artist : ""}</td>
                  <td colSpan={2}>{contextConcert.concert.concertRoom ? contextConcert.concert.concertRoom.name : ""}</td>
                  <td colSpan={2}>{contextConcert.concert ? method(contextConcert.concert.time) : ""}</td>
                  <td colSpan={2}>{contextConcert.concert ? contextConcert.concert.category : ""}</td>
                  <td colSpan={2}>{key.price}</td>
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
      <div id="totalPanierPaiement">
        <div className="cont">
          <h4>MONTANT TOTAL DU PANIER</h4>
          <h4 id="totalWithDelivery">{(parseInt(context.prices) + parseFloat(context.deliveryPrice)).toFixed(2)} €</h4>
        </div>
      </div>

      <div id="btnContainer">
        <NavLink exact to="/Programmation" className="cancelStep" onClick={resetSeats}>FAIRE UNE AUTRE COMMANDE</NavLink>
        <NavLink exact to="/" className="nextStep" onClick={resetSeats}>RETOUR A LA PAGE D'ACCUEIL</NavLink>
      </div>

    </section>

  );
}

export default StepConfirmation