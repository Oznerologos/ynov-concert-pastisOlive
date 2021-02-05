import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import CarouselConcert from './CarouselConcert';
import affiche from '../media/img/affiche-rammstein.jpg';
import ReactPlayer from 'react-player';

export default function ConcertMain() {

    return (
        <main id="concert">
            <div id="topArtist">
                <img src={affiche} alt="affiche-concert" height={300}/>
                <ul>
                    <li className="bold">Nom de l'artiste</li>
                    <li>Nom de la tournée</li>
                    <li>Date et heure</li>
                    <li>Lieu</li>
                    <li>Catégorie de musique</li>
                </ul>
            </div>
            <section>
                <div id="concertsTab">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>Date</th>
                                <th colSpan={2}>Lieu</th>
                                <th colSpan={2}>Heure</th>
                                <th colSpan={2}>Ouverture</th>
                                <th colSpan={2}>Catégorie de tarifs</th>
                                <th colSpan={2}>Tarifs</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2}>Ven. 05 Février 2021</td>
                                <td colSpan={2}>Aix-en-Provence</td>
                                <td colSpan={2}>20:30</td>
                                <td colSpan={2}>18:30</td>
                                <td colSpan={2}>CAT 1, CAT 2, CAT 3</td>
                                <td colSpan={2}>De ..€ à .. €</td>
                                <td><NavLink exact to="/FakePage" className="bookingLink">Réserver</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="artistPresentation">
                    <div id="leftPrez">
                        <h3>Présentation de l'artiste / groupe</h3>
                        <p>Lorem ipsum dolor sit, amet consonsectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro.</p>
                    </div>
                    <div id="rightPrez">
                        <ReactPlayer url='https://www.youtube.com/watch?v=vjTQqTGa3dQ' height={200}/>
                    </div>
                </div>

                <div id="bookingCards">
                    <div className="bookingCard">
                        <h4>Réserver une place de Parking</h4>
                        <p>Réservez votre place de parking dès à présent et facilitez-vous l'accès à nos salles de concert.</p>
                        <NavLink exact to="/FakePage" className="bookingLink">Réserver</NavLink>
                    </div>
                    <div className="bookingCard">
                        <h4>Réserver au Restaurant</h4>
                        <p>Réservez votre place dans nos restaurants pour profiter de nos mets préparés par nos grands chefs.</p>
                        <NavLink exact to="/FakePage" className="bookingLink">Réserver</NavLink>
                    </div>
                </div>

                <div id="sliderContainer">
                    <h3>A NE PAS MANQUER</h3>
                    <CarouselConcert/>
                </div>

            </section>
        </main>);
}
