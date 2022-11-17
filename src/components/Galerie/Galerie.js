import React from "react";
import galerie1 from "../../images/Galerie/gallery-img-1.jpg";
import galerie2 from "../../images/Galerie/gallery-img-2.jpg";
import galerie3 from "../../images/Galerie/gallery-img-3.jpg";
import galerie4 from "../../images/Galerie/gallery-img-4.jpg";
import galerie5 from "../../images/Galerie/gallery-img-5.jpg";
import galerie6 from "../../images/Galerie/gallery-img-6.jpg";
import galerie7 from "../../images/Galerie/gallery-img-7.png";
import galerie8 from "../../images/Galerie/gallery-img-8.jpg";
import galerie9 from "../../images/Galerie/gallery-img-9.jpg";


const Galerie = () => {
  return (
    <section className="galerie section-padding" id="galerie">
      <div className="container">
        <div className="row">
          <div>
            <div className="section-title">
              <h3>Galerie</h3>
              <h2>Les souvenirs durent pour toujours</h2>
            </div>
            <br /><br />
            <div className="box-container">
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie1} alt="" />
                  <span>Paris</span>
                  <h3>Musée du Louvre</h3>
                </div>
              </div>
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie2} alt="" />
                  <span>Paris</span>
                  <h3>Sacré-Cœur</h3>
                </div>
              </div>
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie3} alt="" />
                  <span>Paris</span>
                  <h3>Cathédrale Notre-Dame</h3>
                </div>
              </div>
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie4} alt="" />
                  <span>Paris</span>
                  <h3>Musée d'Orsay</h3>
                </div>
              </div>
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie5} alt="" />
                  <span>Paris</span>
                  <h3>Arc de Triomphe</h3>
                </div>
              </div>
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie6} alt="" />
                  <span>Paris</span>
                  <h3>Centre Pompidou</h3>
                </div>
              </div>
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie7} alt="" />
                  <span>Paris</span>
                  <h3>Tour Eiffel</h3>
                </div>
              </div>
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie8} alt="" />
                  <span>Paris</span>
                  <h3>Jardin du Luxembourg</h3>
                </div>
              </div>
              <div className="box">
                <div className="galerie-image">
                  <img src={galerie9} alt="" />
                  <span>Paris</span>
                  <h3>Jardin des Plantes</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galerie;
