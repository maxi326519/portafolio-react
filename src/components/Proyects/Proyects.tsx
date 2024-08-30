import witarImg from "../../assets/img/proyects/witar.png";
import procesosImg from "../../assets/img/proyects/procesos.png";
import gestopia from "../../assets/img/proyects/gestopia.png";
import blenify from "../../assets/img/proyects/blenify.png";
import enPrecioImg from "../../assets/img/proyects/en-precio.png";
import factureoImg from "../../assets/img/proyects/factureo.png";
import tusAbogadosImg from "../../assets/img/proyects/tus-abogados.png";
import visegu from "../../assets/img/proyects/visegu.png";

import Card from "./ProyectCard/ProyectCard";

import "./Proyects.scss";

interface Proyect {
  id: number;
  name: string;
  content: string;
  img: string;
  url: string;
  urlGithub: string;
}

const proyectConfig: Proyect[] = [
  {
    id: 1,
    name: "Witar - Plataforma",
    content:
      "Una plataforma como servicio para gestionar tu negocio, agregando turnos, menejando tu propio staff y servicios",
    img: witarImg,
    url: "https://witar.es/",
    urlGithub: "",
  },
  {
    id: 2,
    name: "Procesos judiciales",
    content:
      "Aplicacion web para la gestion de documentos judiciales para la secretaria de planeacion de Bogotá",
    img: procesosImg,
    url: "https://procesos-judiciales-83343.web.app",
    urlGithub: "",
  },
  {
    id: 3,
    name: "Gestopia",
    content:
      "Una plataforma para la gestion de propiedades para el mundo inmobiliario",
    img: gestopia,
    url: "https://gestopia.com/",
    urlGithub: "",
  },
  {
    id: 4,
    name: "Blenfy",
    content: "Landing para una aplicacion de turnos",
    img: blenify,
    url: "https://blenify.web.app/",
    urlGithub: "",
  },
  {
    id: 5,
    name: "En precio",
    content:
      "Una plataforma para la publicacion de propiedades para Paraná, Buenos Aires",
    img: enPrecioImg,
    url: "https://enprecio-b64b8.web.app/",
    urlGithub: "",
  },
  {
    id: 6,
    name: "Factureo",
    content:
      "Aplicacion web como servicio para el manejo de stock con el metodo Kardex y getion de facturas digitales, productos, clientes y establecimientos",
    img: factureoImg,
    url: "https://demofv-a9565.web.app/",
    urlGithub: "",
  },
  {
    id: 6,
    name: "Tus abogados",
    content:
      "Una plataforma para la generacion de contratos genericos por precio fijo",
    img: tusAbogadosImg,
    url: "https://contratos.tusabogados.mx/",
    urlGithub: "",
  },
  {
    id: 7,
    name: "Visegu",
    content:
      "Aplicacion web para la gestion de stock y manejo de reportes para manejar los procesos internos de una empresa de Talleres mecanicos en USA",
    img: visegu,
    url: "https://dashboard.visegu.com/",
    urlGithub: "",
  },
];

export default function Proyects() {
  return (
    <div id="proyects-container">
      <h2>Proyects</h2>
      <div className="home-wave">
        <svg
          className="arrow-dowm arrowAnimation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
        <svg
          className="wave"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,128L34.3,160C68.6,192,137,256,206,266.7C274.3,277,343,235,411,224C480,213,549,235,617,250.7C685.7,267,754,277,823,256C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,202.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
        <svg
          className="wave2"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,224L34.3,213.3C68.6,203,137,181,206,165.3C274.3,149,343,139,411,165.3C480,192,549,256,617,250.7C685.7,245,754,171,823,165.3C891.4,160,960,224,1029,245.3C1097.1,267,1166,245,1234,245.3C1302.9,245,1371,267,1406,277.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
      <div className="proyects width-container">
        {proyectConfig.map((proyect) => (
          <Card
            key={proyect.id}
            name={proyect.name}
            content={proyect.content}
            img={proyect.img}
            url={proyect.url}
            urlGitHub={proyect.urlGithub}
          />
        ))}
      </div>
      <svg
        className="wave"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,128L34.3,160C68.6,192,137,256,206,266.7C274.3,277,343,235,411,224C480,213,549,235,617,250.7C685.7,267,754,277,823,256C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,202.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
    </div>
  );
}
