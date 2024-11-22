import trans from "@/app/locales/translations.et.json";

import style from "./about.module.css";

export default function About() {
  return (
    <div>
      <div className={style.msSection__block}>
        <div className={style.msPageTitle}>
          <h2 className={style.pageHeader}>who am i? {trans.cat.h1}</h2>
          <p className={style.pageDesc}>
            Assertively synthesize state of the art testing procedures via
            sticky niches.
          </p>
        </div>
      </div>
      <div className={style.msSection__block}>
        <div id={style.about} className={style.row}>
          <div className={style.about__img}>
            <p>
              <img />
            </p>
          </div>
          <div className={style.centerBlock}>
            <div className={style.about__info}>
              <p>
                Efficiently morph customer directed internal or organic sources
                before multidisciplinary users. Credibly disseminate resource
                maximizing human capital before revolutionary e-services.
                Collaboratively parallel task resource-leveling markets after
                professional data. Professionally streamline user-centric
                benefits without scalable strategic theme areas. Interactively
                develop backward-compatible expertise through high-payoff supply
                chains.
              </p>
              <p>
                Professionally exploit value-added methodologies with
                bleeding-edge leadership. Professionally actualize bleeding-edge
                partnerships rather than real-time testing procedures.
                Continually maintain state of the art outside the box thinking
                and sustainable services. Distinctively matrix transparent
                resources for resource sucking technology. Continually benchmark
                corporate outside the box thinking via fully tested mindshare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
