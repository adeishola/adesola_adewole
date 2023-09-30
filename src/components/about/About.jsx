import "./about.css";
import portfolio4 from "../../images/portfolio4.jpg";
import portfolio6 from "../../images/certRecrop.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={portfolio4} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that web development is key to IT
          revolution.
        </p>
        <p className="a-desc">
          I have experience in Component-Driven Development using ReactJS in the
          Frontend, and Event-Driven Architecture using NodeJS in the Backend
          coupled with either REST or GRAPHQL. And for the application that I
          build, I can use either NoSQL or SQL Database such as MongoDB or
          Postgres respectively. I have strong proficiency in HTML and CSS.
        </p>
        <div className="a-award">
          <img src={portfolio6} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Google Digital Marketing Certification 2021
            </h4>
            <p className="a-award-desc">
              Web Development and Online Presence are inseperable and the later
              rely on Digital Marketing to achieve its goal. I can put the
              Digital Marketing icing on any web application cake that I
              develop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
