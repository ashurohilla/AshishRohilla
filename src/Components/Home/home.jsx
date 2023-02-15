import React from 'react';
import Particle from "../particle"
import { Hero ,styles ,Home2} from "../../Components"
const Home = () => {
    return (
        <div className='home-section'>
            <Particle />
            <div className=' w-full overflow-hidden   '>
              <div className={`${styles.flexCenter}, ${styles.paddingX}`}>
                  <div className={`${styles.boxWidth}`}>
            <Hero/>
            <Home2 />
        </div>
        </div>
        </div>
        </div>
)}

export default Home;
