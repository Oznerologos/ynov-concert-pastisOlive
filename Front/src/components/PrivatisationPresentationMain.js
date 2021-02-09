import React from 'react';
import ImageGallery from 'react-image-gallery';
import { NavLink } from 'react-router-dom';
 
const images = [
  {
    original: 'https://www.byblos.com/wp-content/uploads/Restaurant-Cucina-Byblos_Ambiance_Hotel-Byblos-Saint-Tropez-14-1600x1000.jpg',
    thumbnail: 'https://www.byblos.com/wp-content/uploads/Restaurant-Cucina-Byblos_Ambiance_Hotel-Byblos-Saint-Tropez-14-1600x1000.jpg',
  },
  {
    original: 'https://www.byblos.com/wp-content/uploads/Restaurant-Cucina-Byblos_Ambiance_Hotel-Byblos-Saint-Tropez-12-1600x1000.jpg',
    thumbnail: 'https://www.byblos.com/wp-content/uploads/Restaurant-Cucina-Byblos_Ambiance_Hotel-Byblos-Saint-Tropez-12-1600x1000.jpg',
  },
  {
    original: 'https://www.byblos.com/wp-content/uploads/Cucina-Byblos_Hotel-Byblos-Saint-Tropez_Adrien-Daste-5-1600x1000.jpg',
    thumbnail: 'https://www.byblos.com/wp-content/uploads/Cucina-Byblos_Hotel-Byblos-Saint-Tropez_Adrien-Daste-5-1600x1000.jpg',
  },
  {
    original: 'https://www.byblos.com/wp-content/uploads/Cucina-Byblos-Saint-Tropez-alain-ducasse-1-1600x1000.jpg',
    thumbnail: 'https://www.byblos.com/wp-content/uploads/Cucina-Byblos-Saint-Tropez-alain-ducasse-1-1600x1000.jpg',
  },
];



class Privatisation_presentation  extends React.Component{
    render(){
        
    
        return(
            <div>
                <h1 className="titre">PRIVATISATION - PRÉSENTATION</h1>
                <section>
                    <div>
                        <ImageGallery  items={images} showFullscreenButton={false} showPlayButton={false} showNav={false} autoPlay={true} />
                    </div>
               </section>
               <section>
                   <article className="section_desc">
                       <p>Vous avez toujours rêvé d'organiser des évènements dans l'un de nos lieux mythiques ? Nous vous mettons à <br/>
                            disposition l'une de nos salles pour réaliser vos évènements privés ! 
                        </p>
                   </article>
                   <article className="section_desc desca">
                       <p>Pour réserver l'une de nos salles, cliquez sur le bouton ci-dessous et remplissez ce formulaire de pré-réservation.<br/>
                            Nous vous rappellerons afin d'échanger sur votre projet.</p>
                   </article>
                   <NavLink exact to="/FakePage" className="section_desc">PRÉ-RÉSERVER</NavLink>
                </section>
            </div>
        );
    }

}

export default Privatisation_presentation;