import { useState } from "react";

import Card from "./ProyectCard/ProyectCard";
import ProyectDescription from "./ProyectDescription/ProyectDescription";

import "./Proyects.scss";

interface Proyect {
  id: number;
  name: string;
  description: {
    short: string;
    long: string;
  };
  images: Array<string>;
  url: string;
  urlGithub: string;
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
}

const proyectConfig: Proyect[] = [
  {
    id: 1,
    name: "Witar",
    description: {
      short:
        "Una plataforma como servicio para gestionar tu negocio, agregando turnos, menejando tu propio staff y servicios",
      long: `
        Una plataforma como servicio que te permite gestionar tus turnos,
        proporcionando una solución integral para administrar las reservas y
        citas de tus clientes de manera sencilla. Además, te ofrece
        herramientas para manejar tu propio equipo de trabajo, permitiéndote
        asignar turnos a los miembros de tu staff según sus horarios y
        disponibilidad. También puedes gestionar los diferentes servicios
        que ofreces, configurando la duración, el precio y otros detalles de
        cada servicio para optimizar la experiencia tanto para tu equipo
        como para tus clientes. Esta plataforma está diseñada para mejorar
        la organización, incrementar la productividad y ofrecer un excelente
        servicio al cliente.`,
    },
    images: [
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2Fhome.png?alt=media&token=cce665a5-854d-46d6-b183-da4008ebc3c3",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2Fhome2.png?alt=media&token=aa1635b4-fe2b-42e1-85bb-5e82eeea5bbf",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2Fprofile.png?alt=media&token=7f786756-1a4d-4215-b4cb-4ef081122a7b",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2Fcompany.png?alt=media&token=97881fbe-6c69-4f5e-8729-c272f744ba2a",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2FQR.png?alt=media&token=77f01af7-8aac-4ac3-a6f5-d705a958b51b",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2Fstaff.png?alt=media&token=fe6f2381-49d8-419e-83b5-4fb6949e98e8",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2Fservices.png?alt=media&token=7a3def00-e44f-45e4-afbb-a1be1deb9d85",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2Fstep-1.png?alt=media&token=ca2d5764-e46a-42b4-a836-3b1533004576",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/witar%2Fstep-2.png?alt=media&token=e756b4cd-5966-4b32-a05c-df6b3dce181b",
    ],
    url: "https://witar.es/",
    urlGithub: "",
    skills: {
      javascript: true,
      typescript: true,
      css: true,
      html: true,
      react: true,
      bootstrap: true,
      firebase: true,
      vite: true,
      nodeJS: true,
      expressjs: true,
    },
  },
  {
    id: 2,
    name: "Procesos judiciales",
    description: {
      short:
        "Aplicacion web para la gestion de documentos judiciales para la secretaria de planeacion de Bogotá",
      long: `Aplicación web para la gestión de documentos judiciales de la Secretaría de Planeación de Bogotá. Permite importar y exportar datos en Excel, generar reportes sobre grupos de documentos, facilitar la asignación de abogados y la visualización de listados, mejorando así la organización y eficiencia en la administración de los documentos judiciales.`,
    },
    images: [
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fhome.png?alt=media&token=87b418d1-f0dd-4e04-a722-2f7360ef5547",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fuser-table.png?alt=media&token=442ee2c9-ede2-4aad-b361-a3a8a64eaede",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fuser-form.png?alt=media&token=aaf2c6a9-aab1-491c-a782-743e7563430d",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fprocesses-table.png?alt=media&token=a461787b-93be-47fe-a241-405834e11142",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fprocesses-list.png?alt=media&token=d390c296-fd77-441b-bfca-146179595156",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fdocument-form.png?alt=media&token=84b8b33f-9a53-4d44-bb3f-a91ec6333e49",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fchart-iframes.png?alt=media&token=81a66b4c-ff3e-497b-a73b-a0cd277012f3",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fexcel.png?alt=media&token=fa98f2ef-9743-4cbf-be06-a777260fd1a2",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/procesos%2Fconfig.png?alt=media&token=8a1b4e96-95b2-427f-80f8-7d47e475c7d9",
    ],
    url: "https://procesos-judiciales-83343.web.app",
    urlGithub: "",
    skills: {
      javascript: true,
      typescript: true,
      css: true,
      html: true,
      react: true,
      bootstrap: true,
      firebase: true,
    },
  },
  {
    id: 3,
    name: "Gestopia",
    description: {
      short:
        "Una plataforma para la gestion de propiedades para el mundo inmobiliario",
      long: "",
    },
    images: [
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Flanding-1.png?alt=media&token=c923ba4a-e2b2-4d11-8a3c-fa2b4e380e5c",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Flanding-2.png?alt=media&token=f76d098b-2788-430b-b00a-6f2f96c233e2",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Flanding-3.png?alt=media&token=ab32a33e-1b2f-48d0-803e-154b4fc6e98f",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Flanding-4.png?alt=media&token=73a759fb-f637-49c9-89bf-38a9e5c32ac1",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Fproperties.png?alt=media&token=ace89ca6-2de4-4525-906b-a04810bd2c51",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Fproperties-form.png?alt=media&token=76c827a3-7bfb-4116-9871-a732f734110b",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Ftables.png?alt=media&token=66fec661-240d-4013-a5b7-835ea9497fa5",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Frent-form.png?alt=media&token=3dcf4254-efa4-44a7-abd2-2a8a48ea5dfd",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Fcalendar.png?alt=media&token=1ca6913b-177f-4595-bd72-d8443b49b66b",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Fhistory.png?alt=media&token=837a8beb-ad1d-43c0-86cd-b979caa41b40",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/gestopia%2Fcaja.png?alt=media&token=d4e88c49-951a-47bc-82d6-ff8e6af3efcb",
    ],
    url: "https://gestopia.com/",
    urlGithub: "",
    skills: {
      javascript: true,
      typescript: true,
      css: true,
      html: true,
      react: true,
      bootstrap: true,
      firebase: true,
    },
  },
  {
    id: 4,
    name: "Blenify",
    description: {
      short: "Landing para una aplicacion de turnos",
      long: "",
    },
    images: [
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/blenify%2Fhome-1.png?alt=media&token=85aa51b3-76ca-46b6-9c31-8fbcd6435b5b",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/blenify%2Fhome-2.png?alt=media&token=bfaafd2a-f285-4aa6-87a2-c3a959a93a96",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/blenify%2Fhome-3.png?alt=media&token=0be7adf8-f864-4fe6-865f-a8e1a5f3cefe",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/blenify%2Fhome-4.png?alt=media&token=b04568b7-a1f7-4394-8b2f-2a5d2e5dfbdd",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/blenify%2Fhome-5.png?alt=media&token=08a7ecde-e827-494f-b556-e031ebfd21e3",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/blenify%2Fhome-6.png?alt=media&token=63df2e69-b3ae-4218-af3f-ea2af12b2a8e",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/blenify%2Fhome-7.png?alt=media&token=6d0cc714-63df-49ff-9f14-ebfaf7cc62eb",
    ],
    url: "https://blenify.web.app/",
    urlGithub: "",
    skills: {
      css: true,
      html: true,
      sass: true,
      react: true,
    },
  },
  {
    id: 5,
    name: "En precio",
    description: {
      short:
        "Una plataforma para la publicacion de propiedades para Paraná, Buenos Aires",
      long: "",
    },
    images: [
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/en-precio%2Flanding-1.png?alt=media&token=6f5a84cf-fe0f-4dd1-abf0-cfb0ebae0d48",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/en-precio%2Fabout-us.png?alt=media&token=4fa95613-f8f6-426c-ac97-82947118c524",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/en-precio%2Fcontact.png?alt=media&token=f8ed3001-c492-4fa4-8101-da2d2787e396",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/en-precio%2Fstep-1.png?alt=media&token=f329b108-7813-4326-b8de-7b4f53193039",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/en-precio%2Fstep-2.png?alt=media&token=483b1306-49c2-476f-a512-af990fe929d8",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/en-precio%2Fstep-3.png?alt=media&token=15fa1af6-5f3d-4420-9811-241e2d6ba1eb",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/en-precio%2Fstep-4.png?alt=media&token=bc04fe10-bfdd-4874-8646-36e28c67e9e8",
    ],
    url: "https://enprecio-b64b8.web.app/",
    urlGithub: "",
    skills: {
      javascript: true,
      typescript: true,
      css: true,
      html: true,
      react: true,
      bootstrap: true,
      firebase: true,
      vite: true,
    },
  },
  {
    id: 6,
    name: "Factureo",
    description: {
      short:
        "Aplicacion web como servicio para el manejo de stock con el metodo Kardex y getion de facturas digitales, productos, clientes y establecimientos",
      long: "",
    },
    images: [
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Fstep-1.png?alt=media&token=3fd171a8-e308-4843-a0fb-52796ca23a05",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Fstep-2.png?alt=media&token=ca552be9-408b-4067-b3ff-6c864c99af55",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Fstep-3.png?alt=media&token=b04af32f-21e7-46d1-bc79-c244f59587ce",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Fprofile.png?alt=media&token=106b8f80-88a7-4543-9ea0-9d0f502681b0",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Finvoices.png?alt=media&token=6e83153d-6c08-44c9-8a82-f1c8ac139b5f",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Finvoice-form.png?alt=media&token=08dbf3a0-427a-4ef1-bde5-63aa2070fdd2",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Fproducts.png?alt=media&token=34ae79fa-46bc-4b82-8701-3468d33b9504",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Fclients.png?alt=media&token=920ca0f4-0d96-4ad9-ba85-cb6162cf8a29",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Festablecimiento.png?alt=media&token=ea80b19f-6b07-4359-a72b-4810b56c0a54",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/factureo%2Fkardex-report.png?alt=media&token=deb9f717-8f6a-4dd3-9c71-5de49e9e15d1",
    ],
    url: "https://demofv-a9565.web.app/",
    urlGithub: "",
    skills: {
      javascript: true,
      css: true,
      html: true,
      react: true,
      bootstrap: true,
      firebase: true,
    },
  },
  {
    id: 7,
    name: "Tus abogados",
    description: {
      short:
        "Una plataforma para la generacion de contratos genericos por precio fijo",
      long: "",
    },
    images: [
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Flanding-1.png?alt=media&token=d4f329cb-d292-45c3-9bf0-919e2add7d69",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Flogin.png?alt=media&token=b1c8c730-fa62-4a99-845c-5dc594e52d65",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Fregister.png?alt=media&token=983cd2d4-e2e6-44ee-977f-5b45df368e15",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Fcontracts.png?alt=media&token=53f98131-691d-40f3-9bbc-3bf6316e08f8",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Fpreview-form.png?alt=media&token=188a11bf-4a3e-47a1-a6e5-3e8731748fe7",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Fstep-2.png?alt=media&token=7b0fdca3-599b-42a0-9cec-7c3160235828",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Fstep-1.png?alt=media&token=792d515e-4d72-4a0e-bab7-5463829eaec5",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Fstep-3.png?alt=media&token=6b24759d-f403-4a39-9844-ce71051f80da",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Fstep-4.png?alt=media&token=8ad1a6e6-dfaa-4465-9599-a628f29d2f1a",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/tus-abogados%2Fstep-5.png?alt=media&token=ddadca1c-f141-4a9f-bb0c-495a609fb0ff",
    ],
    url: "https://contratos.tusabogados.mx/",
    urlGithub: "",
    skills: {
      javascript: true,
      typescript: true,
      css: true,
      html: true,
      react: true,
      bootstrap: true,
      vite: true,
      nodeJS: true,
      mysql: true,
      expressjs: true,
    },
  },
  {
    id: 8,
    name: "Visegu",
    description: {
      short:
        "Aplicacion web para la gestion de stock y manejo de reportes para manejar los procesos internos de una empresa de Talleres mecanicos en USA",
      long: "",
    },
    images: [
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Fusers.png?alt=media&token=ae1ca81a-a6ce-48ab-bab9-0acbd518567a",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Fproducts.png?alt=media&token=0394a182-a260-4a60-b850-28b044710f3a",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Fstock.png?alt=media&token=8e3fb322-b45f-491c-90b6-efd34d3ab1ce",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Fstorage.png?alt=media&token=21912636-81d3-4422-844f-1a4f351e224e",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Fcustomer.png?alt=media&token=d5d2b926-7253-4ad0-992c-b7eef0d93f8d",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Fmovements.png?alt=media&token=fb564b6f-eb0e-4ee3-ac5e-425bf675c89d",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Freports.png?alt=media&token=fc3e2ac8-614e-4db7-9c88-48492e04df96",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Finspection-report.png?alt=media&token=6e214fdc-0b41-4c0c-a3e4-e6c7498b0a16",
      "https://firebasestorage.googleapis.com/v0/b/landing-536cc.appspot.com/o/visegu%2Fwork-report.png?alt=media&token=3e2ec575-d19e-4679-b8dd-6b8736e64751",
    ],
    url: "https://dashboard.visegu.com/",
    urlGithub: "",
    skills: {
      javascript: true,
      typescript: true,
      css: true,
      html: true,
      react: true,
      bootstrap: true,
      vite: true,
      nodeJS: true,
      mysql: true,
      expressjs: true,
    },
  },
];

export default function Proyects() {
  const [proyect, setProyect] = useState<number | null>(null);

  function handleClose() {
    setProyect(null);
  }

  return (
    <div id="proyects-container">
      <h2 className="header">Proyectos</h2>
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
            content={proyect.description.short}
            img={proyect.images[0] || ""}
            url={proyect.url}
            onView={() => setProyect(proyect.id)}
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
      {proyect && (
        <ProyectDescription
          title={proyectConfig[proyect - 1]?.name}
          images={proyectConfig[proyect - 1]?.images}
          description={proyectConfig[proyect - 1]?.description?.short}
          skills={proyectConfig[proyect - 1]?.skills}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
