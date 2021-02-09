import React from 'react'
import axios from "axios";
import { Editor } from '@tinymce/tinymce-react';


class AjoutConcertsMain extends React.Component {


    clear() {

        document.getElementById("myForm").reset();

    }
    handleSubmit = event => {
        event.preventDefault();

        const concert = {
            artist: this.state.artist,
            name: this.state.name,
            date: this.state.date,
            time: this.state.heures,
            timeOpen: this.state.timeOpen,
            concertRoom: this.state.concertRoom,
            maxPrice: this.state.maxPrice,
            priceRate: this.state.priceRate,
            restaurant: this.state.restaurant,
            parking: this.state.parking,
            artistPres: this.state.artistPres.level.content,
            musicType:this.state.musicType
        }

        console.log(concert);

        axios.post('https://127.0.0.1:8000/concert/new', concert).then(res => {
            console.log(res);
            console.log(res.data);
            // window.location.replace = 'domain.dev/';
        })

    }



    handleChangeNom = event => {
        this.setState({ artist: event.target.value });
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }
    handleChangeDate = event => {
        this.setState({ date: event.target.value });
    }
    handleChangeTime = event => {
        this.setState({ heures: event.target.value });
    }
    handleChangeTimeOpen = event => {
        this.setState({ timeOpen: event.target.value });
    }
    handleChangeVille = event => {
        this.setState({ concertRoom: event.target.value });
    }
    handleChangeMaxPrice = event => {
        this.setState({ maxPrice: event.target.value });
    }
    handleChangePriceRate = event => {
        this.setState({ priceRate: event.target.value });
    }
    handleChangeParking = event => {
        this.setState({ parking: event.target.value });
    }
    handleChangeRestaurant = event => {
        this.setState({ restaurant: event.target.value });
    }

    handleEditorChange = (content, editor) => {
        this.setState({ artistPres: content });
      }
    handleChangeCategory = event => {
        this.setState({ musicType: event.target.value });
    }


  

    render() {

        return (
            <div className="contenaireAjout">
                <h1>Ajout Concerts</h1>
                <div className="froma">
                <form id="myForm" onSubmit={this.handleSubmit}>
                    <div className="Lab_i">
                        <label htmlFor="">Nom de l'artiste / groupe :</label>
                        <input type="text" name="artist" onChange={this.handleChangeNom} />
                        <br />
                        <label htmlFor="">Nom du concert :</label>
                        <input type="text" name="nom" onChange={this.handleChangeName} /><br />
                        <label>Date : </label>
                        <input type="date" name="date" onChange={this.handleChangeDate} /><br />
                        <label>Heures  : </label>
                        <input type="time" name="Heures" onChange={this.handleChangeTime} /><br />
                        <label>Heures d'ouverture : </label>
                        <input type="time" name="timeOpen" id="" onChange={this.handleChangeTimeOpen} /><br />
                        <label htmlFor="">Lieu (ville) :</label>
                        <select id="pet-select" onChange={this.handleChangeVille}>
                            <option>---</option>
                            <option value="1">Aix</option>
                            <option value="2">Bourges</option>
                            <option value="3">Cannes</option>
                            <option value="4">Dunkerque</option>
                            <option value="5">Echirolles</option>
                        </select><br />
                        <label htmlFor="">category</label>
                        <select name="category" id="" onChange={this.handleChangeCategory}>
                            <option>---</option>
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="Electro">Electro</option>
                            <option value="Rap/Hip-Hop">Rap/Hip-Hop</option>
                            <option value="Soul/Funk">Soul/Funk</option>
                            <option value="Classique">Classique</option>
                            <option value="Dub/Reggae">Dub/Reggae</option>
                            <option value="World">World</option>
                        </select><br />
                        <label htmlFor=""  >Tarif MAX : </label>
                        <input type="text" name="maxPrice" id="" onChange={this.handleChangeMaxPrice} /><br />
                        <label>Pourcentage tarif dégressif :</label>
                        <input type="text" name="priceRate" id="" onChange={this.handleChangePriceRate} /><br />
                        <label htmlFor="Parking :">Parking :  </label>
                        <input type="radio" name="parking" id="" value="0" onChange={this.handleChangeParking} />
                        <label>oui</label>
                        <input type="radio" name="parking" id="" value="1" onChange={this.handleChangeParking} />
                        <label>non</label><br />
                        <label htmlFor="Restaurant :">Restaurant :  </label>
                        <input type="radio" name="Restaurant" id="" value="0" onChange={this.handleChangeRestaurant} />
                        <label>oui</label>
                        <input type="radio" name="Restaurant" id="" value="1" onChange={this.handleChangeRestaurant} />
                        <label>non</label>
                    </div>
                    <div className="edit">
                        <Editor
                            initialValue=""
                            init={{
                                plugins: 'link image code',
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                            onChange={this.handleEditorChange}
                        />
                    </div>

                  
                    <button  className="btn_pre vert btn_k" > CRÉER LE CONCERT</button>
                </form>
                </div>
                <div className="dep">
                <a href="/"><button className=" btn_pre rouge">ANNULER</button></a>
                <button className="btn_pre effa" onClick={this.clear}>EFFACER</button>
                </div>
            </div>
        );
    }
}

export default AjoutConcertsMain;