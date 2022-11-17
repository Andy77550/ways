import React from "react";
import about from "../../images/About/about.png";

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 d-flex align-items-center justify-content-center">
            <div className="about-img">
              <div className="circle"></div>
              <img src={about} alt="à propos" />
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="section-title-2">
              <h3>À propos</h3>
              <h2>Road Trip ou petit voyage,</h2>
            </div>
            <br />
            <div className="about-text">
              <p>
                WayTips te propose des circuits sur-mesure, adaptés à tes
                envies, ton budget et prend en compte les festivités locales.
                Nous te proposons une expérience unique et hyper-personnalisée.
              </p>
              <p>
                Partage-nous les dates de ton séjour à Paris et nous t'aiderons
                à créer ta propre aventure. Tu recevras sous 24 heures ton
                circuit sur mesure !
              </p>
              <br />
            </div>
            <div className="home-btn">
              <button className="btn btn-2">En savoir plus</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
