import React, {Fragment} from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Titulo from './components/titulo/Titulo'
import Heading from './components/heading/Heading'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Pelicula from './components/Pelicula'


function App() {
  return (
    <Fragment>
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">

			  <div id="content">
            
          <Topbar />		

          <div className="container-fluid">
              <Pelicula />
              <Titulo />
              <Heading />
              <Content />		
          </div>
          
          <Footer />

        </div>
      </div>

    </Fragment>
);
}

export default App;
