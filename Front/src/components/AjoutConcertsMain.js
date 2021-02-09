import React from 'react'
import axios from "axios";
import { Editor } from '@tinymce/tinymce-react';
import { event } from "jquery";


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
            time: this.state.time,
            timeOpen: this.state.timeOpen,
            concertRoom: this.state.concertRoom
            // maxPrice: this.state.maxPrice,
            // priceRate: this.state.priceRate,
            // restaurant: this.state.restaurant,
            // parking: this.state.parking,
            // artistPres: this.state.artistPres,
            // musicType:this.state.musicType
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

    render() {
        return (
            <div className="contenaireAjout">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Nom de l'artiste / groupe :</label>
                        <input type="text" name="artist" onChange={this.handleChangeNom} />
                        <br />
                        <label htmlFor="">Nom du concert :</label>
                        <input type="text" name="nom" onChange={this.handleChangeName} /><br />
                        <label>Date : </label>
                        <input type="date" name="date" onChange={this.handleChangeDate} /><br />
                        <label>Heures  : </label>
                        <input type="time" name="Heures" nChange={this.handleChangeTime} /><br />
                        <label>Heures d'ouverture : </label>
                        <input type="time" name="timeOpen" id="" nChange={this.handleChangeTimeOpen} /><br />
                        <label htmlFor="">Lieu (ville) :</label>
                        <select id="pet-select" nChange={this.handleChangeVille}>
                            <option value="1">Aix</option>
                            <option value="2">Bourges</option>
                            <option value="3">Cannes</option>
                            <option value="4">Dunkerque</option>
                            <option value="5">Echirolles</option>

                        </select><br />
                        <label htmlFor="">category</label>
                        <select name="category" id="" nChange={this.handleChangeCategory}>
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
                        <input type="text" name="maxPrice" id="" nChange={this.handleChangeMaxPrice} /><br />
                        <label>Pourcentage tarif dégressif :</label>
                        <input type="text" name="priceRate" id="" nChange={this.handleChangePriceRate} /><br />
                        <label htmlFor="Parking :">Parking :  </label>
                        <input type="radio" name="parking" id="" value="0" nChange={this.handleChangeParking} />
                        <label>oui</label>
                        <input type="radio" name="parking" id="" value="1" nChange={this.handleChangeParking} />
                        <label>non</label><br />
                        <label htmlFor="Restaurant :">Restaurant :  </label>
                        <input type="radio" name="Restaurant" id="" value="0" nChange={this.handleChangeRestaurant} />
                        <label>oui</label>
                        <input type="radio" name="Restaurant" id="" value="1" nChange={this.handleChangeRestaurant} />
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

                    <a href="/"><button>ANNULER</button></a>
                    <button onClick={this.clear}>EFFACER</button>
                    <button> CRÉER LE CONCERT</button>
                </form>
            </div>
        );
    }
}

export default AjoutConcertsMain;