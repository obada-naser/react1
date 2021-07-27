import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeasts from './HornedBeasts';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';



class Main extends React.Component{
    render(){
        return(
            <>
                <Container>
                    <Row xs={1} md={4} className='justify-content-center'>
                        {
                            this.props.beastList.map(element => {
                                return <HornedBeasts 
            
                                            image_Url={element.image_url} title={element.title}description={element.description}modalHandler={this.props.modalHandler}
                                            
                                            
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