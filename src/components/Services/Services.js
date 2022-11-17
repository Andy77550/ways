import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrailer } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faMonument } from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Services = () => {
  const options = {
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h3>Nos Services</h3>
              <h2>Nos thèmes proposés</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <OwlCarousel className="owl-themes services-carousel" {...options}>
            <div className="services-item">
              <div className="icon">
                <FontAwesomeIcon icon={faTrailer} />
              </div>
              <h3>Attraction</h3>
              <p>
                Lieu ou spectacle, notamment le spectacle de rue, les
                expositions, les manèges ou les montagnes russes.
              </p>
              <br />
            </div>
            <div className="services-item">
              <div className="icon">
                <FontAwesomeIcon icon={faRunning} />
              </div>
              <h3>Sport</h3>
              <p>
                Plusieurs activités physiques exercées dans le sens du jeu et de
                l'effort sont proposées.
              </p>
              <br />
              <br />
            </div>
            <div className="services-item">
              <div className="icon">
                <FontAwesomeIcon icon={faBookOpenReader} />
              </div>
              <h3>Détente</h3>
              <p>
                Des moments de détente et de bien-être pour un repos bien mérité
                !
              </p>
              <br />
              <br />
            </div>
            <div className="services-item">
              <div className="icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Famille</h3>
              <p>
                Les vacances en famille sont l’occasion de se retrouver tous
                ensemble, de se ressourcer et de profiter de ses enfants.
              </p>
              <br />
            </div>
            <div className="services-item">
              <div className="icon">
                <FontAwesomeIcon icon={faLandmark} />
              </div>
              <h3>Musée</h3>
              <p>
                Découvrir de manière ludique le patrimoine en lien direct avec
                la thématique de la visite .
              </p>
              <br />
              <br />
            </div>
            <div className="services-item">
              <div className="icon">
                <FontAwesomeIcon icon={faMonument} />
              </div>
              <h3>Monument</h3>
              <p>
                Aux quatre coins du monde, se trouvent des monuments
                incroyables, de rêve, dont certains sont méconnus par la plupart
                des gens.
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
