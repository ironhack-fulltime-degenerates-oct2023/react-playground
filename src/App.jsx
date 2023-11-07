import MyContent from "./components/MyContent";
import Header from './components/Header';
import User from "./components/User"
import Footer from './components/Footer';
import './App.css'

function App() {


  return (
    <>

      <Header title="Hello React" />

      <User firstName="Alice" surname="Smith" age={30} />
      <User firstName="Bob" surname="Brown" age={40} />
      <User firstName="Charly" surname="Charls" age={50} />

      
      <Footer>
        <p>© Remote degenerates</p>
        <p>2023</p>
      </Footer>

      {/* <MyContent /> */}
      
    </>
  )
}

export default App
