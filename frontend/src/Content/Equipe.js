import React from 'react';
import './Equipe.css';


export default class Equipe extends React.Component {
    
    render() {
        return(            
            <button className="bout" onClick={this.props.onClick}>
                <img className="monEquipe" alt="logoEquipe" src={this.props.photo}></img>
            </button>
                
        );
    }
}