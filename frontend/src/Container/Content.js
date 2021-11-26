import React from 'react';
import './Content.css';
import Nav from '../Content/BandeauHaut';
import JoueurStar from '../Content/JoueurStar';
import axios from 'axios';

import Giannis from '../images/Giannis.png';
import Lillard from '../images/Lillard.png';
import Luka from '../images/Luka.png';
import Stephen from '../images/Stephen.png';

import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class Content extends React.Component {

        constructor(props){
        super(props)
        this.state={
            giannis:[],
            lilliard:[],
            doncic:[],
            curry:[],
                          }
                  }
    async componentDidMount() {
        const url_giannis = " https://www.balldontlie.io/api/v1/players/15"
        const url_lilliard = " https://www.balldontlie.io/api/v1/players/278"
        const url_doncic = " https://www.balldontlie.io/api/v1/players/132"
        const url_curry = " https://www.balldontlie.io/api/v1/players/115"
    
        let result_giannis = null;
        let result_lilliard = null;
        let result_doncic = null;
        let result_curry = null;
    
        try{
                result_giannis= await axios(url_giannis, {
                headers: {
                Accept: "application/json"
                        }
                                           })
    
                result_lilliard= await axios(url_lilliard, {
                headers: {
                Accept: "application/json"
                        }
                                           })
    
                result_doncic= await axios(url_doncic, {
                headers: {
                Accept: "application/json"
                        }
                                           })
    
                result_curry= await axios(url_curry, {
                headers: {
                Accept: "application/json"
                        }
                                           })
                                           
    
    
        } catch(e) {
                console.log(e)
                    }
                this.setState({giannis: result_giannis.data})
                this.setState({lilliard: result_lilliard.data})
                this.setState({doncic: result_doncic.data})
                this.setState({curry: result_curry.data})
                                }
    
    
        render() {
    
            const{giannis} = this.state;
            console.log({giannis})
            var Giannis_name = giannis.first_name
            var Giannis_lastname = giannis.last_name
            var Giannis_heigh = giannis.height_feet
            var Giannis_height2 = giannis.height_inches
            var Giannis_weight = giannis.weight_pounds
            var Giannis_position = giannis.position
    
            const{lilliard} = this.state;
            console.log({lilliard})
            var Lilliard_name = lilliard.first_name
            var Lilliard_lastname = lilliard.last_name
            var Lilliard_heigh = lilliard.height_feet
            var Lilliard_height2 = lilliard.height_inches
            var Lilliard_weight = lilliard.weight_pounds
            var Lilliard_position = lilliard.position
    
            const{doncic} = this.state;
            console.log({doncic})
            var Doncic_name = doncic.first_name
            var Doncic_lastname = doncic.last_name
            var Doncic_heigh = doncic.height_feet
            var Doncic_height2 = doncic.height_inches
            var Doncic_weight = doncic.weight_pounds
            var Doncic_position = doncic.position
    
            const{curry} = this.state;
            console.log({curry})
            var Curry_name = curry.first_name
            var Curry_lastname = curry.last_name
            var Curry_heigh = curry.height_feet
            var Curry_height2 = curry.height_inches
            var Curry_weight = curry.weight_pounds
            var Curry_position = curry.position
    
    
     
    
            let Joueurs= [{
                nom : Giannis_name,
                prenom : Giannis_lastname,
                taille : Giannis_heigh,
                taille2 : Giannis_height2,
                poids : Giannis_weight,
                position : Giannis_position,
    
            },
            {
                nom : Lilliard_name,
                prenom : Lilliard_lastname,
                taille : Lilliard_heigh,
                taille2 : Lilliard_height2,
                poids : Lilliard_weight,
                position : Lilliard_position
            },
            {
                nom : Doncic_name,
                prenom : Doncic_lastname,
                taille : Doncic_heigh,
                taille2 : Doncic_height2,
                poids : Doncic_weight,
                position : Doncic_position
            },
            {
                nom : Curry_name,
                prenom : Curry_lastname,
                taille : Curry_heigh,
                taille2 : Curry_height2,
                poids : Curry_weight,
                position : Curry_position
            },
            ];
            return(           
                <Container fluid className="kobefond">
                    <Row>
                        <Nav/>
                    </Row>
                    <Row className="Hero">
                        <Col xs={1}>
                        </Col>
                        <Col xs={4}>
                            <div className="espaceTitre">
                                <div className="NBAtitre"><b>NBA</b></div>
                                <div className="Stattitre"><b>STATISTICS</b></div>
                            </div>
                            <div className="description">Made by React API developped by Mathis PONCET and Jules Ekmekdjian</div>
                        </Col>
                        <Col xs={7}></Col>
    
                    </Row>
                    <Row className="separer"></Row>
                    <Row className="players">
                        <Col xs={6} md={3}>
                                <JoueurStar nom={Joueurs[0].nom}
                                            prenom={Joueurs[0].prenom}
                                            taille={Joueurs[0].taille}
                                            taille2={Joueurs[0].taille2}
                                            poids={Joueurs[0].poids}
                                            position={Joueurs[0].position}
                                            image={Giannis}/>  
                                <br></br>   
                        </Col>
                        <Col xs={6} md={3}>
                                <JoueurStar nom={Joueurs[1].nom}
                                            prenom={Joueurs[1].prenom}
                                            taille={Joueurs[1].taille}
                                            taille2={Joueurs[1].taille2}
                                            poids={Joueurs[1].poids}
                                            position={Joueurs[1].position}
                                            image={Lillard}/> 
                                <br></br> 
                        </Col>
                        <Col xs={6} md={3}>
                                <JoueurStar nom={Joueurs[2].nom}
                                            prenom={Joueurs[2].prenom}
                                            taille={Joueurs[2].taille}
                                            taille2={Joueurs[2].taille2}
                                            poids={Joueurs[2].poids}
                                            position={Joueurs[2].position}
                                            image={Luka}/>
                                <br></br>
                        </Col>
                        <Col xs={6} md={3}>
                                <JoueurStar nom={Joueurs[3].nom}
                                            prenom={Joueurs[3].prenom}
                                            taille={Joueurs[3].taille}
                                            taille2={Joueurs[3].taille2}
                                            poids={Joueurs[3].poids}
                                            position={Joueurs[3].position}
                                            image={Stephen}/>  
                                <br></br>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }