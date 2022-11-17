import React from "react";

const BlogRaison = () => {
  return (
    <section className="raison section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title-2">
              <h3 style={{textAlign: `center`}}>3 raisons </h3>
              <h2>De partir en novembre</h2>
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
                  <h3><span className="sun">☀</span> Au soleil</h3>
                </div>
                <div className="prix-body">
                  <ul>
                    <li>
                      <span className="sun">☀</span> Les jours se
                      raccourcissent, la météo devient monotone et ça vous
                      déprime ? Une bonne cure de vitamine D s’impose ! Partir
                      au soleil permet de prolonger votre été, et de profiter
                      plus longuement de ces belles journées ensoleillées que
                      nous offrent les pays du sud.
                    </li>
                    <li>
                      <span className="sun">☀</span> Si vous êtes un
                      inconditionnel de la plage et du farniente, voici une
                      bonne raison de plus pour partir au soleil ☀ Boire des
                      cocktails et bronzer sur la plage, pendant que vos
                      collègues partent au travail en doudoune.… On adore ! Mais
                      surtout, quoi de mieux que de se reposer avant d’affronter
                      cette dure période qu’est l’hiver ? De plus, si vous êtes
                      un amateur de surf ou de plongée, certaines plages
                      d’Europe vous permettent encore de vous amuser à cette
                      période de l’année.
                    </li>
                    <li>
                      <span className="sun">☀</span> Raccourcir le nombre de
                      semaines qu’il vous reste à passer dans le froid ! Eh oui,
                      l’hiver est dur, parfois déprimant. Partir au soleil
                      permet de s’évader et nous motiver à supporter le reste de
                      l’année.
                    </li>
                  </ul>
                </div>
                <br />
                <div className="prix-footer">
                  {/* <button class="btn btn-1">C'est parti</button> */}
                </div>
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
                  <h3><span className="ice">❄</span> Partir au grand froid</h3>
                </div>
                <div className="prix-body">
                  <ul>
                    <li>
                      <span className="ice">❄</span> Pour toutes celles et ceux
                      qui souhaitent faire attention à leur image, le grand
                      froid à certaines vertus qu’on ne peut négliger, puisque,
                      en effet, le froid donne bonne mine, il resserre les pores
                      et apporte de la fermeté à la peau. L’hiver et le froid,
                      de manière générale, forcent le corps à puiser dans ses
                      réserves de graisse et il brûle ainsi plus de calories.
                      Combiné aux sports d’hiver, à vous le corps de rêve ! (Si
                      vous ne mangez pas de raclette pendant toutes les
                      vacances, bien sûr !). Le froid permet également
                      d’améliorer votre circulation sanguine 😉 c’est toujours
                      bon à prendre pour celles et ceux qui ont les jambes
                      lourdes.
                    </li>
                    <li>
                      <span className="ice">❄</span> L’hiver rend heureux ! Eh
                      oui, le ciel bleu des journées hivernales stimule
                      l’humeur, en influant directement sur l’endorphine,
                      l’hormone du bonheur.
                    </li>
                    <li>
                      <span className="ice">❄</span> Passer une journée à se
                      dépenser dans la neige, favorise l’endormissement. Pour
                      les personnes hyperactives, c’est l’endroit idéal où
                      passer des vacances en novembre !
                    </li>
                  </ul>
                </div>
                <br />
                <div className="prix-footer">
                  {/* <button class="btn btn-1">C'est parti</button> */}
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogRaison;
