import React, {Fragment} from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Titulo from './components/titulo/Titulo'
import Heading from './components/heading/Heading'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Fragment>
      <Sidebar />

      <div id="content-wrapper" class="d-flex flex-column">

			  <div id="content">
            
          <Topbar />		

          <div class="container-fluid">
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
