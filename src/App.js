import './assets/styles/App.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'

function App({ children }) {
  return (
    <div className="App">
      <Header />
      <body>
        {children}
      </body>
      <Footer />
    </div>
  );
}

export default App;
