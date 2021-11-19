import React from 'react';
import './Actu.css';
import Nav from './BandeauHaut';
import Match from './Match';

import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import EquipeClassement from './EquipeClassement';

export default class Actu extends React.Component {
    
    render() {
        let matchs= [{
            ville1 : 'Los Angeles',
            equipe1 : 'Lakers',
            score1 : 97,
            ville2 : 'New York',
            equipe2 : 'Knicks',
            score2 : 112
        },
        {
            ville1 : 'Miami',
            equipe1 : 'Heat',
            score1 : 125,
            ville2 : 'Orlando',
            equipe2 : 'Magic',
            score2 : 117
        },
        {
            ville1 : 'Brooklyn',
            equipe1 : 'Net',
            score1 : 108,
            ville2 : 'Detroit',
            equipe2 : 'Pistons',
            score2 : 84
        },
        {
            ville1 : 'Sacramento',
            equipe1 : 'Kings',
            score1 : 106,
            ville2 : 'Phoenix',
            equipe2 : 'Suns',
            score2 : 108
        },
        ];

        let Classement = [{
            number : 1,
            city : "Miami",
            team : "Heat",
            win : 32,
            loose : 21
        }];
        return(
            
            <Container fluid className="championFond">
                <Row>
                    <Nav/>
                </Row>
                <Row className="separer"></Row>
                <Row>
                    <Col  className="mesActus" xs={6}>
                        <Match  ville1={matchs[0].ville1}
                                ville2={matchs[0].ville2}
                                equipe1={matchs[0].equipe1}
                                equipe2={matchs[0].equipe2}
                                score1={matchs[0].score1}
                                score2={matchs[0].score2}/>
                        
                        <Match  ville1={matchs[1].ville1}
                                ville2={matchs[1].ville2}
                                equipe1={matchs[1].equipe1}
                                equipe2={matchs[1].equipe2}
                                score1={matchs[1].score1}
                                score2={matchs[1].score2}/>
                        
                        <Match  ville1={matchs[2].ville1}
                                ville2={matchs[2].ville2}
                                equipe1={matchs[2].equipe1}
                                equipe2={matchs[2].equipe2}
                                score1={matchs[2].score1}
                                score2={matchs[2].score2}/>
                        
                        <Match  ville1={matchs[3].ville1}
                                ville2={matchs[3].ville2}
                                equipe1={matchs[3].equipe1}
                                equipe2={matchs[3].equipe2}
                                score1={matchs[3].score1}
                                score2={matchs[3].score2}/>
                    </Col>
                    <Col className="mesActus" xs={5}>
                        <div className="monTableau">
                            Ici le tableau
                        </div>
                    </Col>
                </Row>
                <Row className="separer2"></Row>
                <Row className="Eastern">
                    <Col xs={12}>Eastern Conference</Col>
                </Row>
                <Row className="classementEst">
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row className="Western">
                    <Col xs={12}>Western Conference</Col>
                </Row>
                <Row className="classementWest">
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row className="separer"></Row>
            </Container>
        );
    }
}