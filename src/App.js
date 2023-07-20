import './assets/styles/App.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'

import './fonts/Montserrat-Regular.ttf'

function App({ children }) {
  return (
    <div className="App">
      <Header />
      <section className="page-content">
        {children}
      </section>
      <Footer />
    </div>
  );
}

export default App;
