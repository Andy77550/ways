import React from "react";
import soleil from "../../images/soleil.jpg";
import froid from "../../images/froid.jpg";

const BlogDestination = () => {
  return (
    <section className="destination section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h3>Plage ou montagne</h3>
              <h2>On vous dévoile les destinations !</h2>
            </div>
          </div>
          <br />
          <div className="destination-text">
            <br />
            <p style={{ textAlign: `center` }}>
              Vous n’arrivez pas à choisir entre montagne ou plage ? On vous
              dévoile les destinations idéales pour cette période ! Cela devrait
              vous aider à vous décider 😉 !
            </p>
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-6 col-md-4">
            <div className="card">
              <div className="card-img">
                <img src={soleil} alt="" />
              </div>
              <div className="card-body">
                <br />
                <h5>Les baléares, une destination pratique</h5>
                <p>
                  Majorque étant très proche de la France (comptez environ 2h de
                  Paris), cela en fait une destination très pratique.{" "}
                </p>
                <br />
                <button className="btn btn-1">En savoir plus</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="card">
              <div className="card-img">
                <img src={froid} alt="" />
              </div>
              <div className="card-body">
                <br />
                <h5>Le Canada: un pays incontournable du grand froid</h5>
                <p>
                  Selon les zones où vous voyagez, vous aurez des climats
                  différents bien entendu.{" "}
                </p>
                <br />
                <button className="btn btn-1">En savoir plus</button>
              </div>
            </div>
          </div>
          
          
        </div>
        <br />
          <br />
        <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3>Petit, moyen ou grand budget, </h3>
                <h2>Pour toutes les bourses 💰</h2>
              </div>
            </div>
            <br />
            <div className="destination-text">
              <br />
              <p style={{ textAlign: `center` }}>
              Que vous ayez une petite ou grosse bourse 💰 il y en a pour tous les goûts ! En effet les destinations Européennes peuvent être visitées grâce aux compagnies low-cost qui proposent parfois des billets inférieurs à 100€. Les destinations comme Majorque (pour le soleil) ou encore l’Autriche (pour les sports d’hiver) seront vos destinations à petits prix favorites, pour ce mois de novembre.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default BlogDestination;
