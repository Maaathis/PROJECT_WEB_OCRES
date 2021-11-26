import React from 'react';
import './JoueurStar.css';


export default class JoueurStar extends React.Component {
    
    render() {
        return(           
            <div className="sort">
                
                <img src={this.props.image} className="image" alt="imgJoueur"></img>
                <div className="nomJoueur">
                    {this.props.prenom}<br></br>{this.props.nom}
                </div>
                <div className="mesStats">
                Heigh :<b> {this.props.taille}"{this.props.taille2}</b> <br></br>
                    Weight : <b>{this.props.poids}</b> pounds  <br></br>
                    Position : <b>{this.props.position}</b>
                </div>
                <div className="espace"></div>
                
                
            </div>
        );
    }
}