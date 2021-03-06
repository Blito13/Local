
import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading.jsx";
//import axios from "axios";
import Infobox from "../InfoBox/Infobox.jsx";
import style from "./Home.module.css";
import qr from "../../media/qr-code.svg";
import EN from "./resume_EN.json";
import ES from "./resume_ES.json";

//const URL = process.env.REACT_APP_URL || process.env.REACT_APP_VERCEL_URL;

const resume = { EN, ES };

const Home = ({ lang }) => {
  const [itsLoading, setItsLoading] = useState(false);
   //const [resume, setResume] = useState(null);

  /*   useEffect(() => {
    setItsLoading(true);
    axios
      .get(`${URL}/api/lang/?query=${lang}`)
      .then((res) => {
        console.log(res)
        setResume(res);
        setItsLoading(false);
      })
      .catch((err) => {
        console.log("Something was grong : ", err);
      });
  }, [lang]); */

  return (
    <section>
      {itsLoading && <Loading />}
      <article>
        <div className={style.containerResume}>
          <div className={style.column}>
            {resume &&
              resume[lang].data.map((e) => {
                if (e.side === "left") {
                  return (
                    <Infobox
                      key={e.id}
                      color={e.id}
                      subtitle={e.subtitle}
                      text={e.text}
                    />
                  );
                } else {
                  return false;
                }
              })}
          </div>
          <div className={style.column}>
            <div className={style.photo}>
              <div>
                <div
                  className={style.pixelFront}
                  alt={
                    lang === "EN"
                      ? "pixelart selfportrait"
                      : "retrato en pixelart"
                  }
                >
                  {" "}
                </div>
                <div
                  className={style.pixelBack}
                  alt={
                    lang === "EN"
                      ? "pixelart selfportrait"
                      : "retrato en pixelart"
                  }
                >
                  {" "}
                </div>
              </div>
            </div>
            {resume &&
              resume[lang].data.map((e) => {
                if (e.side === "right") {
                  return (
                    <Infobox
                      key={e.id}
                      color={"Right"}
                      subtitle={e.subtitle}
                      text={e.text}
                    />
                  );
                } else {
                  return false;
                }
              })}
          
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
