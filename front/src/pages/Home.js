import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import CarouselActu from '../components/CarouselActu';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import affiche from '../media/img/affiche-rammstein.jpg';
import salleConcert from '../media/img/salle-concert.jpg';

const Home = () => {

    return (
        <div>
            <HeaderNav/>
            <main id="homeMain">
            <CarouselActu></CarouselActu>
            <section id="homeSection">
                <div id="homeSectionCont">
            <h3>PROCHAINEMENT DANS NOS SALLES</h3>

            <div id="programmationContainer">
            <NavLink exact to="/fakePage" className="cardProgrammation">
                <div className="programmationPicture">
                    <img src={affiche} width={150}/>
                </div>
                <div className="programmationDetail">
                    <p>NOM DE L'ARTISTE</p>
                    <p>Le 28 Avril à 21h</p>
                    <p>Aix en Provence</p>
                    <p>Catégorie de musique</p>
                    <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                </div>
            </NavLink>

            <NavLink exact to="/fakePage" className="cardProgrammation">
                <div className="programmationPicture">
                    <img src={affiche} width={150}/>
                </div>
                <div className="programmationDetail">
                    <p>NOM DE L'ARTISTE</p>
                    <p>Le 28 Avril à 21h</p>
                    <p>Aix en Provence</p>
                    <p>Catégorie de musique</p>
                    <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                </div>
            </NavLink>

            <NavLink exact to="/fakePage" className="cardProgrammation">
                <div className="programmationPicture">
                    <img src={affiche} width={150}/>
                </div>
                <div className="programmationDetail">
                    <p>NOM DE L'ARTISTE</p>
                    <p>Le 28 Avril à 21h</p>
                    <p>Aix en Provence</p>
                    <p>Catégorie de musique</p>
                    <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                </div>
            </NavLink>

            <NavLink exact to="/fakePage" className="cardProgrammation">
                <div className="programmationPicture">
                    <img src={affiche} width={150}/>
                </div>
                <div className="programmationDetail">
                    <p>NOM DE L'ARTISTE</p>
                    <p>Le 28 Avril à 21h</p>
                    <p>Aix en Provence</p>
                    <p>Catégorie de musique</p>
                    <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                </div>
            </NavLink>

            <NavLink exact to="/fakePage" className="cardProgrammation">
                <div className="programmationPicture">
                    <img src={affiche} width={150}/>
                </div>
                <div className="programmationDetail">
                    <p>NOM DE L'ARTISTE</p>
                    <p>Le 28 Avril à 21h</p>
                    <p>Aix en Provence</p>
                    <p>Catégorie de musique</p>
                    <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                </div>
            </NavLink>

            <NavLink exact to="/fakePage" className="cardProgrammation">
                <div className="programmationPicture">
                    <img src={affiche} width={150}/>
                </div>
                <div className="programmationDetail">
                    <p>NOM DE L'ARTISTE</p>
                    <p>Le 28 Avril à 21h</p>
                    <p>Aix en Provence</p>
                    <p>Catégorie de musique</p>
                    <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                </div>
            </NavLink>

            <NavLink exact to="/fakePage" className="cardProgrammation">
                <div className="programmationPicture">
                    <img src={affiche} width={150}/>
                </div>
                <div className="programmationDetail">
                    <p>NOM DE L'ARTISTE</p>
                    <p>Le 28 Avril à 21h</p>
                    <p>Aix en Provence</p>
                    <p>Catégorie de musique</p>
                    <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                </div>
            </NavLink>

            <NavLink exact to="/fakePage" className="cardProgrammation">
                <div className="programmationPicture">
                    <img src={affiche} width={150}/>
                </div>
                <div className="programmationDetail">
                    <p>NOM DE L'ARTISTE</p>
                    <p>Le 28 Avril à 21h</p>
                    <p>Aix en Provence</p>
                    <p>Catégorie de musique</p>
                    <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                </div>
            </NavLink>
            </div>

            <NavLink exact to="/Programmation" className="sectionBtn">VOIR TOUTE LA PROGRAMMATION</NavLink>

            <h3>ACTUALITÉS</h3>
            <div id="actualiteContainer">

            <NavLink exact to="/fakePage" className="cardActu">
                <div className="actualitePicture">
                    <img src={affiche} height={150}/>
                </div>
                <div className="actualiteDetail">
                    <p>TITRE DE L'ACTU</p>
                    <p>Ici il y a une super description de l'actualité</p>
                    <NavLink exact to="/fakePage" className="cardBtn">En savoir plus</NavLink>
                </div>
            </NavLink>
            <NavLink exact to="/fakePage" className="cardActu">
                <div className="actualitePicture">
                    <img src={affiche} height={150}/>
                </div>
                <div className="actualiteDetail">
                    <p>TITRE DE L'ACTU</p>
                    <p>Ici il y a une super description de l'actualité</p>
                    <NavLink exact to="/fakePage" className="cardBtn">En savoir plus</NavLink>
                </div>
            </NavLink>
            <NavLink exact to="/fakePage" className="cardActu">
                <div className="actualitePicture">
                    <img src={affiche} height={150}/>
                </div>
                <div className="actualiteDetail">
                    <p>TITRE DE L'ACTU</p>
                    <p>Ici il y a une super description de l'actualité</p>
                    <NavLink exact to="/fakePage" className="cardBtn">En savoir plus</NavLink>
                </div>
            </NavLink>
            <NavLink exact to="/fakePage" className="cardActu">
                <div className="actualitePicture">
                    <img src={affiche} height={150}/>
                </div>
                <div className="actualiteDetail">
                    <p>TITRE DE L'ACTU</p>
                    <p>Ici il y a une super description de l'actualité</p>
                    <NavLink exact to="/fakePage" className="cardBtn">En savoir plus</NavLink>
                </div>
            </NavLink>

            </div>

            <NavLink exact to="/fakePage" className="sectionBtn">VOIR TOUTES LES ACTUALITÉS</NavLink>

            <h3>DES SALLES A VOTRE DISPOSITION</h3>
            <div id="privatisationContainer">
                <img src={salleConcert} alt="salleconcert"/>
                <div id="privatisationRightCont">
                <div id="privatisationDescription">
                <p>Lorem ipsum dolor sit, amet consectetur ur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro.
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro.</p>
                </div>
                <NavLink exact to="/PrivatisationPresentation" className="sectionBtn">PRIVATISER</NavLink>
                </div>
            </div>
            </div>
            </section>

            </main>
            <FooterNav/>
        </div>
    );
};

export default Home;