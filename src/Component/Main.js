import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeasts from './HornedBeasts';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

import TheForms from './TheForms';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterhorns: -5

        }
    }



    filtering = (filterhorns) => {
        this.setState({
            filterhorns:filterhorns,
        });
    }






    render(){
        return(
            <>
                <TheForms filtering={this.filtering}/>
                <Container>
                    <Row xs={1} md={3} className='justify-content-center'>
                        {
                            this.props.beastList.filter(bestObj => 
                                this.state.filterhorns === -5
                                ? true
                                : bestObj.horns === this.state.filterhorns)
                            .map(element => {
                                return <HornedBeasts 
                                            image_Url={element.image_url}
                                            title={element.title}
                                            description={element.description}
                                            modalHandler={this.props.modalHandler}
                                        />
                            })
                        }
                    </Row>
                </Container>
            </>
        );
    }
}


export default Main;