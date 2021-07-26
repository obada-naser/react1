import React from 'react';

import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';



class App extends React.Component{
  render(){
    return(

      <>
      {/* We are creating a new instances of the Main class component */}
      <Header/>
      <Main />
      <Footer/>
     

    </>

    )

    
  }

}
export default App;

