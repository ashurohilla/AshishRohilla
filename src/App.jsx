import { NavBar , Footer ,  Home,  Project , About, Resume } from './Components';
import styles from './Style';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
const App = () => (
    <Router>
    <div className='bg-primary w-full overflow-hidden '>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <NavBar />
          <Routes>
            
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/"/>} />   
            </Routes>
            </div>  
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer /> 
            </div>
        </div>
    </div> 
    </Router>
    );

export default App;