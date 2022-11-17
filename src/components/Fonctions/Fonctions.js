import React from "react";

const Fonctions = () => {
  return (
    <section className="work section-padding" id="fonctions">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h3>Fonctionnalités</h3>
              <h2>Comment ça fonctionne ?</h2>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="work-item line-right">
              <div className="step">1</div>
              <h3>Télécharge l'application</h3>
              <p>L'application sera disponible prochainement sur Google Play.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="work-item line-right">
              <div className="step">2</div>
              <h3>Choisis tes centres d'intérêts</h3>
              <p>Choisis parmis nos propositions que l'on vous propose vos thèmes préférés. </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="work-item line-right">
              <div className="step">3</div>
              <h3>Paramètre ton voyage</h3>
              <p>Mets ta destination, tes dates, le nombre de personnes présentes puis ton budget.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="work-item">
              <div className="step">4</div>
              <h3>
                Obtiens ton <br />
                circuit
              </h3>
              <p>Sur un map sur-mesure avec la liste de vos activités que WayTips va vous proposez.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fonctions;
