import React from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import SelectedBeast from './Component/SelectedBeast';
import Data from './Component/assets/Data.json';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'o',
      image_Url: 'n',
      description: 'dis',
      showing: false,
    };
  }


  modalHandler = (title, image_Url, description, showing) => {
      this.setState({
        description: description,
        title: title,
        image_Url: image_Url,
        showing: showing,
      });
  };

  showHandler= showing =>{
      this.setState({
        showing: showing
      });
  }


  render(){
    return(
      <>
        <SelectedBeast 
          title={this.state.title}
          image_Url={this.state.image_Url}
          description={this.state.description}
          showModal={this.state.showing}
          hiding={this.showHandler}

        />
        <Header />
        <Main 
          beastList={Data}
          modalHandler={this.modalHandler}/>
        <Footer />
      </>
    );
  }
}

export default App;





