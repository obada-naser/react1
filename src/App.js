import React from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Beasts from './Component/assets/Beasts.json';
import SelectedBeast from './Component/SelectedBeast';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      imageUrl: '',
      description: '',
      modalState: false,
    };
  }


  modalHandler = (title, imageUrl, description, modalState) => {
      this.setState({
        title: title,
        imageUrl: imageUrl,
        description: description,
        modalState: modalState,
      });
  };

  handelModalShow = modalState =>{
      this.setState({
        modalState: modalState
      });
  }


  render(){
    return(
      <>
        <SelectedBeast 
          title={this.state.title}
          imageUrl={this.state.imageUrl}
          description={this.state.description}
          showModal={this.state.modalState}
          hideModal={this.handelModalShow}

        />
        <Header />
        <Main 
          beastList={Beasts}
          modalHandler={this.modalHandler}/>
        <Footer />
      </>
    );
  }
}

export default App;





// import React from 'react';

// import Header from './component/Header';
// import Main from './component/Main';
// import Footer from './component/Footer';
// import beastData from './component/assets/data.json';
// import SelectedBeast from './component/SelectedBeast';
// import './App.css'




// class App extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       title: ' ',
//       discription: ' ',
//       image_Url: ' ',
//       showing: false,
//     };
//   }
//   Data=(title,image_Url,discription,showing)=>{
//     this.setState({
//       title:title,
//       image_Url:image_Url,
//       discription:discription,
//       showing:showing,
  
//     });
  
  
//   }
  
//   handlingShow=showing=>{
  
//     this.setState({
//       showing:showing
  
//     })
  
//   }
  
  
  
  
//   render(){
//     return(

//       <>
//       {/* We are creating a new instances of the Main class component */}
//       <SelectedBeast>
//       title={
//           this.state.title
//         }
//         image_Url={this.state.image_Url}
//         discription={this.state.discription}
//         showin={this.state.showing}
//         hidin={this.handlingHide}
        
//       </SelectedBeast>
//       <Header/>
//       <Main />

//       beast={beastData}
//       data={this.data}


//       <Footer/>
     

//     </>

//     )

    
//   }

// }
// export default App;

