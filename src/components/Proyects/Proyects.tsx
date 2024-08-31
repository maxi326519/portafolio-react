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
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2Fhome.png?alt=media&token=3fbf9558-b6cb-4cb4-9ec0-bd412b7c5f44",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2Fhome2.png?alt=media&token=327a06aa-7ac5-4f79-b15e-36d449696c5e",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2Fprofile.png?alt=media&token=f22463b0-f24b-4feb-a758-8cfc921742aa",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2Fstaff.png?alt=media&token=12a56871-5376-433b-8182-77b8d1ed11a9",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2Fservices.png?alt=media&token=e8f3ce36-f706-4121-83d8-15120effb1d4",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2Fcompany.png?alt=media&token=391fd5e0-81ac-4195-bad2-015eb0384ef7",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2FQR.png?alt=media&token=6eddb9ab-1326-4c8a-8e0d-27fcb49e6501",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2Fstep-1.png?alt=media&token=c961e592-e576-437a-8fd1-9712b247f4c4",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fwitar%2Fstep-2.png?alt=media&token=8b954866-c6d4-455d-ade0-5731dd8517fb",
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
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fhome.png?alt=media&token=b22ab9bf-9945-486b-a0ce-d370cfff1775",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fuser-table.png?alt=media&token=9e8189ed-868f-4cfc-800b-63c0ecbfaf93",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fuser-form.png?alt=media&token=df4baa51-9dad-4678-9d76-044d7346a242",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fprocesses-table.png?alt=media&token=fc04dde9-a85e-4d26-b10b-e45dd4a7a263",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fprocesses-list.png?alt=media&token=b6a26a12-18f1-4423-8394-b8a59605741d",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fdocument-form.png?alt=media&token=c150962a-dc5c-4ed7-866d-8b3be1616975",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fchart-iframes.png?alt=media&token=df6d5da1-a728-4ee4-9faf-fa3ef0cac767",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fexcel.png?alt=media&token=240837d4-0497-470c-98f0-69923729ebca",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fprocesos%2Fconfig.png?alt=media&token=f13844f9-4870-45b9-80f1-50848c0975dc",
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
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Flanding-1.png?alt=media&token=114c986c-b1b1-4b63-b318-e261fae38ea1",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Flanding-2.png?alt=media&token=d51a0158-ab7d-4aa5-b174-2ec3c7363d91",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Flanding-3.png?alt=media&token=8c246026-ac57-477f-9380-8c706136a633",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Flanding-4.png?alt=media&token=2620c632-83d2-4d5f-8463-8f2cda0981e3",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Fproperties.png?alt=media&token=e1453951-93b1-4121-b475-7b21e620c080",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Fproperties-form.png?alt=media&token=90b3365f-8641-4bbf-b64f-f5f44365338c",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Ftables.png?alt=media&token=8a0e02ea-b475-45d2-bc54-74912df607ff",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Frent-form.png?alt=media&token=eb960dcf-ce7e-41f6-b181-86c5ee6c0af3",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Fcalendar.png?alt=media&token=06331593-ceca-4d06-899a-52daeeadd409",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Fhistory.png?alt=media&token=f3f38bc3-f4e1-4ee1-90f4-e2b6b4f13343",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fgestopia%2Fcaja.png?alt=media&token=da7c166d-b4e0-4eb5-a3db-08e5bdfc334b",
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
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2FBlenify%2Fhome-1.png?alt=media&token=9219d8f3-b105-4139-adcc-5027816a60aa",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2FBlenify%2Fhome-2.png?alt=media&token=f7e20cae-9852-49c2-a740-e19b26aec767",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2FBlenify%2Fhome-3.png?alt=media&token=67603645-88f5-4a4d-9399-da014481585e",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2FBlenify%2Fhome-4.png?alt=media&token=a608a4a9-f24c-43db-82fa-e75ee4a7a223",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2FBlenify%2Fhome-5.png?alt=media&token=95eb9882-cf5f-4b37-8bda-ce0a98ae90c5",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2FBlenify%2Fhome-6.png?alt=media&token=ad4bf4cc-0c6e-4599-85ce-2682065caa9e",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2FBlenify%2Fhome-7.png?alt=media&token=7bfcebb9-e614-4161-89d5-f2d3c2dab023",
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
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fen-precio%2Flanding-1.png?alt=media&token=453e8bfb-2d6d-4ccb-9818-d16ab9d9da7e",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fen-precio%2Fabout-us.png?alt=media&token=b75fd55f-c6cb-46f2-96a0-59794634da31",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fen-precio%2Fcontact.png?alt=media&token=75d6d2f3-3f49-412c-b214-c2dd849728e3",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fen-precio%2Fstep-2.png?alt=media&token=d43c28f5-a491-4747-adf9-d17fd48d2acf",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fen-precio%2Fstep-1.png?alt=media&token=be71b7c8-8fdc-4075-ad09-f75f04361a23",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fen-precio%2Fstep-3.png?alt=media&token=f07f2971-10ee-4289-a2f0-bd121f002918",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fen-precio%2Fstep-4.png?alt=media&token=70b2cbd6-16cf-43e5-97a3-5e05678747e4",
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
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Finvoices.png?alt=media&token=20359b18-f30f-4168-94d4-96cc4d0aaf1a",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Finvoice-form.png?alt=media&token=e6fe2d62-2fcd-43d0-8f73-83b7ed187a4c",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Fprofile.png?alt=media&token=a4d3b406-4af2-4a44-85d6-47e0f8387fd6",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Fproducts.png?alt=media&token=7e68ef30-ae6f-4bf1-bb0f-536b88ed27b1",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Fclients.png?alt=media&token=c4f6899a-2c1d-4bfa-b92d-ce54956746e6",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Festablecimiento.png?alt=media&token=4e4d3763-b85d-4142-9242-22fe0e1be050",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Fkardex-report.png?alt=media&token=089ec31a-6d1b-4b39-b650-13bc54ee26ea",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Fstep-1.png?alt=media&token=86783f5b-ba98-4df1-96a5-a656dadb3079",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Fstep-2.png?alt=media&token=f8723e44-49cb-412d-8425-2b159db7b2aa",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ffactureo%2Fstep-3.png?alt=media&token=e1794fb5-66e7-4272-a929-b9184f70c556",
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
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Flanding-1.png?alt=media&token=2096b210-57e8-4fb8-b343-6098b4f1ef77",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Flogin.png?alt=media&token=16ae832d-b768-4826-a63b-c077c4817cfb",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Fregister.png?alt=media&token=15b7176b-a199-4dc0-8831-6810e90a74c4",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Fcontracts.png?alt=media&token=7e6672c4-fe03-4cc8-9109-ac7eff2f67fa",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Fpreview-form.png?alt=media&token=63a7a41f-f2a2-4ac4-8cd1-196c6d5eb0d9",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Fstep-1.png?alt=media&token=029640fa-f0b2-459e-9b12-fb840abc5b0d",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Fstep-2.png?alt=media&token=9d071368-d633-4c5d-ae54-c79b3c4444b6",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Fstep-3.png?alt=media&token=d983fd38-ba9d-4a7b-b1a2-ad91401f403f",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Fstep-4.png?alt=media&token=69f53dbe-2b73-497b-b8b9-2032be5024ff",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Ftu-abogados%2Fstep-5.png?alt=media&token=aee8f950-7328-4db3-b4c4-8fcdc622a0cf",
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
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Fusers.png?alt=media&token=5e410947-c1c7-4b0f-a11b-c30ad2bad7f4",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Fproducts.png?alt=media&token=404322c3-af7f-4568-a17f-ec54b6ffefca",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Fstock.png?alt=media&token=1c0ca37a-002d-4533-acd0-5827eb3de8c9",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Fstorage.png?alt=media&token=223344d4-e548-489d-834c-4a067baa960a",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Fcustomer.png?alt=media&token=7cdd028a-5b61-413f-ae1f-1316d890ffd2",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Fmovements.png?alt=media&token=a2375287-64c5-40b1-b0ec-6a4ce0f6bd74",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Freports.png?alt=media&token=6a1befbf-878c-487f-89af-80c5cb925b76",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Fwork-report.png?alt=media&token=811d3568-22eb-4972-8acf-44d67bbd2333",
      "https://firebasestorage.googleapis.com/v0/b/prueba-ed322.appspot.com/o/portafolio%2Fvisegu%2Finspection-report.png?alt=media&token=d754c542-d4e1-4dd0-8611-c77147cad4c6",
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
