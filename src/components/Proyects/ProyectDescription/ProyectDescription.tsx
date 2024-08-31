import { useState } from "react";

import Icon from "../../Skills/Icon";

import "./ProyectDescription.scss";
import LogoHtml from "../../../assets/svg/skills/html.svg";
import LogoCss from "../../../assets/svg/skills/css.svg";
import LogoJS from "../../../assets/svg/skills/javascript.svg";
import LogoNodeJS from "../../../assets/svg/skills/nodejs.svg";
import LogoSass from "../../../assets/svg/skills/sass.svg";
import LogoReact from "../../../assets/svg/skills/react.svg";
import LogoBootstrap from "../../../assets/svg/skills/bootstrap-4.svg";
import LogoTailwind from "../../../assets/svg/skills/tailwind-css-2.svg";
import LogoTypescript from "../../../assets/svg/skills/typescript.svg";
import LogoFirebase from "../../../assets/svg/skills/firebase-1.svg";
import LogoVite from "../../../assets/svg/skills/vitejs.svg";
import LogoExpress from "../../../assets/svg/skills/express-109.svg";
import LogoGoogle from "../../../assets/svg/skills/google-cloud-2.svg";
import LogoMysql from "../../../assets/svg/skills/mysql_n2ykn3ccmp76.svg";
import LogoPostgresql from "../../../assets/svg/skills/postgre_33r3vujbdeg1.svg";
// import checkSvg from "../../../assets/svg/check-solid.svg";

interface Props {
  title: string;
  images: Array<string>;
  description: string;
  skills?: {
    javascript?: boolean;
    typescript?: boolean;
    css?: boolean;
    html?: boolean;
    sass?: boolean;
    react?: boolean;
    tailwind?: boolean;
    bootstrap?: boolean;
    firebase?: boolean;
    vite?: boolean;
    nodeJS?: boolean;
    mysql?: boolean;
    googleCloud?: boolean;
    postgresql?: boolean;
    expressjs?: boolean;
  };
  onClose: () => void;
}

export default function ProyectDescription({
  title,
  images,
  description,
  onClose,
  skills,
}: Props) {
  const [index, setIndex] = useState<string | null>(null);

  return (
    <div className="proyect-description">
      <div className="container">
        <header>
          <h2>{title}</h2>
          <button className="close" onClick={onClose}>
            X
          </button>
        </header>
        <div className="box img-container">
          {images.map((image, index) => (
            <img
              key={index}
              className="img-item"
              src={image}
              alt="imagen"
              onClick={() => setIndex(`${index}`)}
            />
          ))}
          {index && (
            <div className="showImage">
              <button className="close" onClick={() => setIndex(null)}>
                X
              </button>
              <img src={images[Number(index)]} alt="" />
            </div>
          )}
        </div>
        <div className="box skill">
          <h3>Habilidades utilizadas para el desarrollo</h3>
          <div className="skills__container">
            {skills?.javascript && (
              <ItemIcon title="Javascript" className="icon-js" svg={LogoJS} />
            )}
            {skills?.typescript && (
              <ItemIcon
                title="Typescript"
                className="icon-typescript"
                svg={LogoTypescript}
              />
            )}
            {skills?.css && (
              <ItemIcon title="CSS" className="icon-css" svg={LogoCss} />
            )}
            {skills?.html && (
              <ItemIcon title="HTML" className="icon-html" svg={LogoHtml} />
            )}
            {skills?.sass && (
              <ItemIcon title="Sass" className="icon-sass" svg={LogoSass} />
            )}
            {skills?.react && (
              <ItemIcon title="React" className="icon-react" svg={LogoReact} />
            )}
            {skills?.tailwind && (
              <ItemIcon
                title="Tailwind"
                className="icon-tailwind"
                svg={LogoTailwind}
              />
            )}
            {skills?.bootstrap && (
              <ItemIcon
                title="Bootstrap"
                className="icon-bootstrap"
                svg={LogoBootstrap}
              />
            )}
            {skills?.firebase && (
              <ItemIcon
                title="Firebase"
                className="icon-firebase"
                svg={LogoFirebase}
              />
            )}
            {skills?.vite && (
              <ItemIcon title="Vite" className="icon-vite" svg={LogoVite} />
            )}
            {skills?.nodeJS && (
              <ItemIcon
                title="Node JS"
                className="icon-node"
                svg={LogoNodeJS}
              />
            )}
            {skills?.mysql && (
              <ItemIcon title="My SQL" className="icon-Mysql" svg={LogoMysql} />
            )}
            {skills?.googleCloud && (
              <ItemIcon
                title="Google Cloud"
                className="icon-Google"
                svg={LogoGoogle}
              />
            )}
            {skills?.postgresql && (
              <ItemIcon
                title="Postgre SQL"
                className="icon-Postgresql"
                svg={LogoPostgresql}
              />
            )}
            {skills?.expressjs && (
              <ItemIcon
                title="Express JS"
                className="icon-Express"
                svg={LogoExpress}
              />
            )}
          </div>
        </div>
        <div className="box descripcion">
          <h3>Descripcion</h3>
          <p>{description}</p>
        </div>
        {/*  <div className="box implementation">
          <h3>Implementaciones mas importantes</h3>
          <div className="flex">
            <div>
              <h4>Frontend</h4>
              <ul>
                <li>
                  <img src={checkSvg} alt="check" />
                  React Router
                </li>
                <li>
                  <img src={checkSvg} alt="check" />
                  Firebase como Hosting y Autentificacion
                </li>
              </ul>
            </div>
            <div>
              <h4>Backend</h4>
              <ul>
                <li>
                  <img src={checkSvg} alt="check" />
                  React Router
                </li>
                <li>
                  <img src={checkSvg} alt="check" />
                  Firebase como Hosting y Autentificacion
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

interface ItemIconProps {
  className: string;
  svg: string;
  title: string;
}

function ItemIcon({ className, svg, title }: ItemIconProps) {
  return (
    <div className="item">
      <Icon className={className} svg={svg} />
      <span>{title}</span>
    </div>
  );
}
