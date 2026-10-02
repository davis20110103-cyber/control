
import '../Flowers/flowers.css'


export default function FlowersCard({ title, description, img }) {
  return (
        <article className="flower-card">
            <div className="flower-card__image">
                <img src={img} alt={title} />
            </div>
            <div className="flower-card__content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button type="button">Подробнее</button>
            </div>
        </article>
    )
}

