import "./ProyectCard.scss";
import linkSvg from "../../../assets/svg/link-solid.svg";
import viewSvg from "../../../assets/svg/view.svg";

interface Props {
  name: string;
  content: string;
  img: string;
  url: string;
  onView: () => void;
}

export default function Card({ name, content, img, url, onView }: Props) {
  return (
    <div className="proyect-card width-container">
      <div className="card__img">
        <img src={img} alt="proyect" />
      </div>
      <div className="card__links">
        <a rel="noreferrer" target="_blank" href={url}>
          <img src={linkSvg} alt="link"></img>
        </a>
        <a onClick={onView}>
          <img src={viewSvg} alt="link"></img>
        </a>
      </div>
      <div className="card__text">
        <h3 className="card__name">{name}</h3>
        <p className="card__description">{content}</p>
        {/*                 <a className='card__btn-more'>Read more</a> */}
      </div>
    </div>
  );
}
