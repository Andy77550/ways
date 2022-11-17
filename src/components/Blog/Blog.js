import React from "react";
import baleares from "../../images/Blog/baleares.jpg";
import canada from "../../images/Blog/canada.jpg";
import cap from "../../images/Blog/cap.jpg";
import grece from "../../images/Blog/grece.jpg";
import suisse from "../../images/Blog/suisse.jpg";
import autriche from "../../images/Blog/autriche.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Blog = () => {
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
    <section className="blog section-padding" id="blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h3>Blog</h3>
              <h2>Où partir en novembre ?</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="text-blog">
            <p>
              Vous voulez partir en vacances cet hiver, mais vous n’avez pas
              encore préparé vos vacances et vous ne savez pas où partir ? Vous
              n’arrivez pas à choisir entre montagne ou plage ? Quelles sont{" "}
              <span className="yellow-text">
                les meilleures destinations pour le mois de novembre ?
              </span>{" "}
              On vous dit tout dans cet article ! 👇
            </p>
            <br />
            <br />
          </div>
          <br />
          <br />
          <OwlCarousel className="owl-themes services-carousel" {...options}>
            <div className="card">
              <div className="card-img">
                <img src={baleares} alt="" />
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Les baléares, une destination pratique
                </h5>
                <br />
                <p class="card-text">
                  Majorque étant très proche de la France (à environ 2h de
                  Paris), cela en fait une destination très pratique.
                </p>
                <br />
                <br />
                <a href="/" className="btn btn-1">
                  En savoir plus
                </a>
                <br />
                <br />
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={cap} alt="" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Cap-Vert : Une nature authentique </h5>
                <br />
                <p class="card-text">
                  {" "}
                  Les températures varient entre 20 et 25 degrés, ce qui vous
                  assure un agréable moment.
                </p>
                <br />
                <br />
                <a href="#" className="btn btn-1">
                  En savoir plus
                </a>
                <br />
                <br />
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={grece} alt="" />
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Grèce : Conservatoire de ruines antiques
                </h5>
                <br />
                <p class="card-text">
                  Le mois de novembre est parfait pour visiter ce merveilleux
                  pays !
                </p>
                <br />
                <br />
                <br />
                <a href="#" className="btn btn-1">
                  En savoir plus
                </a>
                <br />
                <br />
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={canada} alt="" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Le Canada: un pays incontournable</h5>
                <br />
                <p class="card-text">
                  {" "}
                  Selon les zones où vous voyagez, vous aurez des climats
                  différents bien entendu.
                </p>
                <br />
                <br />
                <a href="#" className="btn btn-1">
                  En savoir plus
                </a>
                <br />
                <br />
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={suisse} alt="" />
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  La Suisse: Un pays offrant de beau reliefs
                </h5>
                <br />
                <p class="card-text">
                  Pour les amateurs de ski, il vous sera possible de faire
                  quelques descentes.
                </p>
                <br />
                <br />
                <br />
                <a href="#" className="btn btn-1">
                  En savoir plus
                </a>
                <br />
                <br />
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={autriche} alt="" />
              </div>
              <div class="card-body">
                <h5 class="card-title">L'Autriche: Un pays à beau relief</h5>
                <br />
                <p class="card-text">
                  {" "}
                  Le glacier de Pitztal vous offre une altitude suffisante pour
                  espérer des chutes de neige en ce début de saison.
                </p>
                <br />
                <br />
                <a href="#" className="btn btn-1">
                  En savoir plus
                </a>
                <br />
                <br />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Blog;
