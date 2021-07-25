import React from 'react';

import HornedBeast from './component/HornedBeast'





class Main extends React.component{

    render(){
        return(
            <main>
            {/* new HornedBeasts("Dragon") */}
            <HornedBeast
                title="unicorn"
                discriptopn="a horned horse"
            />

            <HornedBeast

                title="Dinasor"
                discriptopn="a flying dragon"
                img="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q"
            />


        </main>
        )
        }
}

export default Main;