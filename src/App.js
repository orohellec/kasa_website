import './assets/styles/App.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'

import './fonts/Montserrat-Regular.ttf'

function App({ children }) {
  return (
    <div className="App">
      <div className="content-wrap">
        <Header />
        <section className="page-content">
          {children}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
