import React from 'react';



class HornedBeast extends React.Component{

    render(){
        return(
            <div>
            <h2>
                {this.props.title}

            </h2>
            <img src= {this.props.image_url} alt = ''/>
            <p>
                {this.props.discription}
            </p>
            <p>
                {this.props.keyword}
            </p>
            <p>
                {this.props.horns}
            </p>
            </div>
        )
    }


}
export default HornedBeast;