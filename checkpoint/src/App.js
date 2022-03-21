import'./style.css'
import './App.css';
import myImg from'./assets/téléchargement (1).jpg'

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100px'}}>

      <h1 className="titleRed">the best nature</h1>
      <br/>
      <img src="/téléchargement.jpg" alt="image"/> 
      <br/>
       
      < img src={myImg} alt="image"style={{marginLeft:'auto',
    marginRight:'auto'}} /> 
   
      <br/>  
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9fs-9D2eZoE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>



     
  </div>
  );
}

export default App;
