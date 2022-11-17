import React from "react";
import home from "../../images/Home/home.png";
import background from "../../images/Home/back.jpg";

const Home = () => {
  return (
    <section id="home" className="home d-flex align-items-center" style={{ backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("${background}")` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="home-text">
              <h3>WayTips</h3>
              <h1>Ton séjour authentique</h1>
              <p>Tu as déjà passé des heures à organiser ton séjour ?</p>
              <p>Manquer des évènements par manque d'informations ?</p>
              <div className="home-btn">
                <button className="btn btn-2">Organise ton circuit</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="home-img">
              <img src={home} alt="téléphone" />
            </div>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
