import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';


class TheForms extends React.Component {
    submitting = (event) => {

        event.preventDefault();
        this.props.filtering(parseInt(event.target.value));




    }



    
    

    
render(){
    
 
    return(
        <>
        <Form>
            <Form.Group className='mb-3 d-flex'>
                <Form.Label className='w-25  align-self-center text-md-end mx-md-3'>Number of Horns</Form.Label>
                <Form.Select
                 
                    onChange={this.submitting}
                    
                    className='w-150 justify-self-center'
                >

                    <option value='-5'>All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">Wow</option>

                </Form.Select>
            </Form.Group>
        </Form>
        </>
            );
           
            
            
        }
        
    };
        export default TheForms;