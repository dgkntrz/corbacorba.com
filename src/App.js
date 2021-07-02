import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <div class="row">
                <Header/>
            </div>
            <div class="row">
                <Main/>
            </div>
            <div class="row">
                <Footer/>
            </div>
        </div>

    );
}

export default App;
