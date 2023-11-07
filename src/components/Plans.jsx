import './Plan.css';
import { plansData } from '../data/plansData';
import whitetick from '../assets/whiteTick.png';
const Plans = () => {
  return (
    <div className="plans-container">
      <div className=" blur plan_blur_1"></div>
      <div className=" blur plan_blur_2"></div>
      <div className="program_header" style={{ gap: '2rem' }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      <div className="plans_data">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whitetick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See More Benefits</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
