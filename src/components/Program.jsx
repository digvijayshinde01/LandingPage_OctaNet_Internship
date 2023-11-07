import './program.css';
import { programsData } from '../data/programsData';
import RightArrow from '../assets/rightArrow.png';

const Program = () => {
  return (
    <div className="Programs" id="programs">
      <div className="program_header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">TO Shape you</span>
      </div>
      <div className="program_categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join_now">
              <span>Join now</span> <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
