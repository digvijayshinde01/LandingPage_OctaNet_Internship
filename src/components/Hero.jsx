import './Hero.css';
import hero_image from '../assets/hero_image.png';
import hero_img_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import Header from './Header';
const Hero = () => {
  const transition = { type: 'string', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero_blur"></div>
      <div className="leftside">
        <Header />
        {/* the best add */}
        <div className="the_best_club">
          <motion.div
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>

          <span>The best fitness club in the town</span>
        </div>

        {/* hero heading */}

        <div className="hero_text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              IN here we will help you to shape and build your ideas live up
              your life to fullest
            </span>
          </div>
        </div>

        {/* figures- */}
        <div className="figures">
          <div>
            <span>
              {' '}
              <NumberCounter end={140} start={100} delay="4" prefix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" prefix="+" />
            </span>
            <span>Member Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay="2" prefix="+" />
            </span>
            <span>Fitness Program</span>
          </div>
        </div>

        <div className="hero_btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="rightside">
        <button className="btn">Join Now</button>

        {/* heart rate-- */}
        <motion.div
          transition={transition}
          whileInView={{ right: '4rem' }}
          initial={{ right: '-1rem' }}
          className="heart_rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>

        {/* hero img---  */}
        <img src={hero_image} alt="" className="heroImg" />
        <motion.img
          initial={{ right: '11rem' }}
          transition={transition}
          whileInView={{ right: '20rem' }}
          src={hero_img_back}
          alt=""
          className="heroimgback"
        />

        {/* calories---- */}

        <motion.div
          transition={transition}
          whileInView={{ right: '28rem' }}
          initial={{ right: '37rem' }}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 KCAL</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
