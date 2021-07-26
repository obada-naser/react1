import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noOfRate: 0
        }
    }

    incrementedNumOfRate = () => {
        this.setState({
            noOfRate: this.state.noOfRate + 1

        })
    }

    render() {
        return (


            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Img onClick={this.incrementedNumOfRate} variant="top" src={this.props.image_url} />
                    <Card.Text>
                        {this.props.discription}
                    </Card.Text>
                Rating of the image 🦄 : {this.state.noOfRate}
                   
                </Card.Body>
                <Button variant="primary">Go Somewhere</Button>{' '}
            </Card>

            // <div>
            // <h2>
            //     {this.props.title}

            // </h2>
            // <img src= {this.props.image_url} alt = ''/>
            // <p>
            //     {this.props.discription}
            // </p>
            // <p>
            //     {this.props.keyword}
            // </p>
            // <p>
            //     {this.props.horns}
            // </p>
            // </div>

        )
    }


}
export default HornedBeast;