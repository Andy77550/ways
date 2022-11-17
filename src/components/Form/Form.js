import React from "react";

const Form = () => {
  return (
    <section className="form section-padding" id="form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title-2">
              <h3>Ton circuit</h3>
              <h2>Organise Le Dès Maintenant</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card">
              <div className="card-body">
                <form action="">
                  <label ClassName="title-form" htmlFor="title">
                    <br />
                    1- Informations personnelles
                  </label>
                  <br />
                  <br /><br />
                  <div>
                    <input
                      className="form-control mb-3"
                      type="text"
                      name="nom"
                      placeholder="Nom"
                      width={30} required
                    />
                    <input
                      class="form-control mb-3"
                      type="text"
                      name="prenom"
                      placeholder="Prénom" required
                    />
                    <input
                      class="form-control mb-3"
                      type="mail"
                      name="mail"
                      placeholder="Email" required
                    />
                    <input
                      class="form-control mb-3"
                      type="text"
                      name="destination"
                      placeholder="Destination" required
                    />
                  </div>
                  <br />
                  <label ClassName="title-form" htmlFor="title">
                    <br />
                    2- Séléctionne tes thèmes préférés
                  </label>
                  <br /><br /><br />
                  <div ClassName="btn-check">
                    <br />
                    <a ClassName="btn btn-themes" href="/">Attraction</a>
                    <a ClassName="btn btn-1" href="/">Sport</a>
                    <a ClassName="btn btn-1" href="/">Détente</a>
                    <a ClassName="btn btn-1" href="/">Famille</a>
                    <a ClassName="btn btn-1" href="/">Musée</a>
                    <a ClassName="btn btn-1" href="/">Monument</a>

                  </div>
                  <br /><br />
                  <label ClassName="title-form" htmlFor="title">
                    <br />
                    3- Dates, budget et nombre de voyageurs
                  </label>
                  <br /><br /><br />

                  <div>
                    <input
                      class="form-control mb-3"
                      type="date"
                      name="date"
                      placeholder="Date de début" required
                    />
                    <input
                      class="form-control mb-3"
                      type="date"
                      name="date"
                      placeholder="Date de fin" required
                    />
                    <input
                      class="form-control mb-3"
                      type="text"
                      name="budget"
                      placeholder="Budget Maximum" required
                    />
                    <input
                      class="form-control mb-3"
                      type="text"
                      name="nombre"
                      placeholder="Nombre de voyageur" required
                    />
                  </div>
                  <br /><br />
                  <div className="btn-form">
                    <button className="btn btn-1">Envoyer</button>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
