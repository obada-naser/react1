import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            noOfvotes : 0
        };
    }

    ratingModal = () =>{
        this.setState({
            noOfvotes: this.state.noOfvotes + 1
        })
    }

    sendToModal = () => {
        this.props.modalHandler(this.props.title, this.props.image_Url, this.props.description, true);
    }

    render(){
        return(
            <>
                <Col>
                    <Card 
                        style={{ width: '18rem', height: '32rem' , marginBottom: '1.5rem'}}
                        onClick={this.ratingModal}
                        >
                        <Card.Img 
                            style={{width: '100%', height: '50%'}}
                            onClick={this.sendToModal}
                            variant="top" 
                            src={this.props.image_Url} 
                        />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                            ❤ {this.state.noOfvotes}
                            </Card.Text>
                            <Card.Footer>{this.props.description}</Card.Footer>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>      
                </Col>        
            </>
        );
    }
}

export default HornedBeasts;