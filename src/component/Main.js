import React from 'react';

import HornedBeast from './HornedBeast';
import data from './assets/data.json';






class Main extends React.Component {
    

    render() {
        return (
            
                    data.map((element) => {
                        return(
                            <HornedBeast image_url={element.image_url} title={element.title}discription={element.discription}/>
                        )
                    }

                    
                    
                    )



               





        )

    }
}

export default Main;