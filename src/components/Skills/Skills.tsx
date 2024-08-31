import Icon from "./Icon";

import "./Skills.scss";
import LogoHtml from "../../assets/svg/skills/html.svg";
import LogoCss from "../../assets/svg/skills/css.svg";
import LogoJS from "../../assets/svg/skills/javascript.svg";
import LogoNodeJS from "../../assets/svg/skills/nodejs.svg";
import LogoSass from "../../assets/svg/skills/sass.svg";
import LogoReact from "../../assets/svg/skills/react.svg";
import LogoBootstrap from "../../assets/svg/skills/bootstrap-4.svg";
import LogoTailwind from "../../assets/svg/skills/tailwind-css-2.svg";
import LogoTypescript from "../../assets/svg/skills/typescript.svg";
import LogoFirebase from "../../assets/svg/skills/firebase-1.svg";
import LogoVite from "../../assets/svg/skills/vitejs.svg";
import LogoExpress from "../../assets/svg/skills/express-109.svg";
import LogoGoogle from "../../assets/svg/skills/google-cloud-2.svg";
import LogoMysql from "../../assets/svg/skills/mysql_n2ykn3ccmp76.svg";
import LogoPostgresql from "../../assets/svg/skills/postgre_33r3vujbdeg1.svg";

export default function Skills() {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="skills__container width-container">
        <Icon className="icon-js" svg={LogoJS} />
        <Icon className="icon-typescript" svg={LogoTypescript} />
        <Icon className="icon-css" svg={LogoCss} />
        <Icon className="icon-html" svg={LogoHtml} />
        <Icon className="icon-sass" svg={LogoSass} />
        <Icon className="icon-react" svg={LogoReact} />
        <Icon className="icon-tailwind" svg={LogoTailwind} />
        <Icon className="icon-bootstrap" svg={LogoBootstrap} />
        <Icon className="icon-firebase" svg={LogoFirebase} />
        <Icon className="icon-vite" svg={LogoVite} />
        <Icon className="icon-node" svg={LogoNodeJS} />
        <Icon className="icon-Mysql" svg={LogoMysql} />
        <Icon className="icon-Google" svg={LogoGoogle} />
        <Icon className="icon-Postgresql" svg={LogoPostgresql} />
        <Icon className="icon-Express" svg={LogoExpress} />
      </div>
    </div>
  );
}
