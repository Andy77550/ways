import React from "react";
import map from "../../images/Prix/map.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Prix = () => {
  return (
    <section
      className="prix section-padding"
      style={{
        backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("${map}")`,
      }}
      id="prix"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h3>Prix</h3>
              <h2>Nos formules</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-6 col-md-4">
            <div className="card">
              <div className="prix-plan">
                <div className="prix-header">
                  <h3>Basique</h3>
                </div>
                <div className="prix-price">
                  <span className="currency">€</span>
                  <span className="price">5.99</span>
                  <span className="period">/mois</span>
                </div>
                <div className="prix-body">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" />{" "}
                      Proposition de circuit sur mesure
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" />{" "}
                      Possibilité d'ajuster les centres d'intérêts après
                      téléchargement de la map
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" />{" "}
                      Possibilité d'augmenter la durée du voyage à 7 jours
                      maximum
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" /> 1 map
                      offerte au bout de 3 achats de maps
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTimes} className="red" />{" "}
                      Disponibilité de la map en hors-ligne
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTimes} className="red" /> Une
                      nouvelle catégorie disponible pour la map offerte
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTimes} className="red" />{" "}
                      Téléchargement des mises à jour des maps
                    </li>
                  </ul>
                </div>
                {/* <div className="prix-footer"> */}
                  {/* <button class="btn btn-1">C'est parti</button> */}
                {/* </div> */}
                <br />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="col-lg-6 col-md-4">
            <div className="card">
              <div className="prix-plan">
                <div className="prix-header">
                  <h3>Premium</h3>
                </div>
                <div className="prix-price">
                  <span className="currency">€</span>
                  <span className="price">7.99</span>
                  <span className="period">/mois</span>
                </div>
                <div className="prix-body">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" />{" "}
                      Proposition de circuit sur mesure
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" />{" "}
                      Possibilité d'ajuster les centres d'intérêts après
                      téléchargement de la map
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" />{" "}
                      Possibilité d'augmenter la durée du voyage à 7 jours
                      maximum
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" /> 1 map
                      offerte au bout de 3 achats de maps
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" />{" "}
                      Disponibilité de la map en hors-ligne
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" /> Une
                      nouvelle catégorie disponible pour la map offerte
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="green" />{" "}
                      Téléchargement des mises à jour des maps
                    </li>
                  </ul>
                </div>
                {/* <div className="prix-footer">
                  <button class="btn btn-1">C'est parti</button>
                </div> */}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prix;
