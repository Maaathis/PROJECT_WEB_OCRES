import React from 'react';
import './Team.css';
import Nav from '../Content/BandeauHaut';
import Equipe from '../Content/Equipe';
import DescriptionEquipe from '../Content/DescriptionEquipe';
import axios from 'axios';

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

import Atlanta from '../images/LogoEquipe/Atlanta.png';
import Boston from '../images/LogoEquipe/Boston.png';
import Brooklyn from '../images/LogoEquipe/Brooklyn.png';
import Charlotte from '../images/LogoEquipe/Charlotte.png';
import Chicago from '../images/LogoEquipe/Chicago.png';
import Cleveland from '../images/LogoEquipe/Cleveland.png';

import Dallas from '../images/LogoEquipe/Dallas.png';
import Denver from '../images/LogoEquipe/Denver.png';
import Detroit from '../images/LogoEquipe/Detroit.png';
import GoldenState from '../images/LogoEquipe/GoldenState.png';
import Houston from '../images/LogoEquipe/Houston.png';
import Indiana from '../images/LogoEquipe/Indiana.png';

import LosAngelesC from '../images/LogoEquipe/LosAngelesC.png';
import LosAngelesL from '../images/LogoEquipe/LosAngelesL.png';
import Memphis from '../images/LogoEquipe/Memphis.png';
import Miami from '../images/LogoEquipe/Miami.png';
import Milwaukee from '../images/LogoEquipe/Milwaukee.png';
import Minnesota from '../images/LogoEquipe/Minnesota.png';

import NewOrleans from '../images/LogoEquipe/NewOrleans.png';
import NewYork from '../images/LogoEquipe/NewYork.png';
import Oklahoma from '../images/LogoEquipe/Oklahoma.png';
import Orlando from '../images/LogoEquipe/Orlando.png';
import Philly from '../images/LogoEquipe/Philly.png';
import Phoenix from '../images/LogoEquipe/Phoenix.png';

import Portland from '../images/LogoEquipe/Portland.png';
import Sacramento from '../images/LogoEquipe/Sacramento.png';
import SanAntonio from '../images/LogoEquipe/SanAntonio.png';
import Toronto from '../images/LogoEquipe/Toronto.png';
import Utah from '../images/LogoEquipe/Utah.png';
import Washington from '../images/LogoEquipe/Washington.png';

const elements = [{ville: Atlanta, id: 1}, {ville: Boston, id: 2}, {ville: Brooklyn, id: 3}, {ville: Charlotte, id: 4}, {ville: Chicago, id: 5}, {ville: Cleveland, id: 6},
    {ville: Dallas, id: 7}, {ville: Denver, id: 8}, {ville: Detroit, id: 9}, {ville: GoldenState, id: 10}, {ville: Houston, id: 11}, {ville: Indiana, id: 12},
    {ville: LosAngelesC, id: 13}, {ville: LosAngelesL, id: 14}, {ville: Memphis, id: 15}, {ville: Miami, id: 16}, {ville: Milwaukee, id: 17}, {ville: Minnesota, id: 18},
    {ville: NewOrleans, id: 19}, {ville: NewYork, id: 20}, {ville: Oklahoma, id: 21}, {ville: Orlando, id: 22}, {ville: Philly, id: 23}, {ville: Phoenix, id: 24},
    {ville: Portland, id: 25}, {ville: Sacramento, id: 26}, {ville: SanAntonio, id: 27}, {ville: Toronto, id: 28}, {ville: Utah, id: 29}, {ville: Washington, id: 30}];



export default class Team extends React.Component {
    constructor(props){
        super(props);
        this.handleClick(1);
        this.state = {
            logo: Atlanta,
            equipe: [],
            back: ["la"]
        }
    }

    

    async handleClick(i)
        {
            var ville = elements[i-1].ville;
            this.setState({logo : ville});

            const url_equipe= "https://www.balldontlie.io/api/v1/teams/" + i;


            let result_equipe = null;
            try
            {
                result_equipe= await axios(url_equipe, {
                headers: {
                Accept: "application/json"
                        }
                })
            } 
            catch(e) 
            {
                console.log(e)
            }
            this.setState({equipe: result_equipe.data}); 
        }


    async autre() {
        await axios.get("http://localhost:4000/players")
        .then(({data}) => {
        
            const {nom} = data;
            alert(nom);
            /* this.setState({back : back_message}); */
            }
        )}
      
        

    render() {


        return(           
            <Container className="ballon" fluid>
                <Row>
                    <Nav/>
                </Row>
                
                <Row className="separer"></Row>
                <Row>
                    <Col xs={7}>
                        <Row>
                            {elements.map(item => {
                                return <Col xl={2} md={3} sm={4} xs={6}><Equipe  onClick={() => this.handleClick(item.id)} photo={item.ville}/></Col>
                            })}
                        </Row>
                        
                    </Col>
                    <Col xs={5}>
                            <DescriptionEquipe logo={this.state.logo}
                                                ville={this.state.equipe.city}
                                                name={this.state.equipe.name}
                                                conf={this.state.equipe.conference}
                                                div={this.state.equipe.division}
                                                onClick={() => this.autre()}/>
                            {this.state.back}
                    </Col>
                </Row>
                
                
            </Container>
        );
    }
}