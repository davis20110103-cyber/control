import './artefact.css'
import artefactImage from '../img/card.png'


export default function Artefact() {
  return (
    <section className="artefact-section container">
      <h2>Новые артефакты</h2>
      <div className="artefact-layout">
        <img
          className="artefact-layout__image"
          src={artefactImage} alt="Artefact"
        />
        <article className="artefact-card">
          <h3>Kurische Nehrung 24</h3>
          <p>
            Вот вам яркий пример современных тенденций - начало повседневной
            работы по формированию позиции выявляет срочную потребность методов
            управления процессами.
          </p>
          <p>
            Есть над чем задуматься: представители современных социальных
            резервов своевременно верифицированы.
          </p>
          <a className="artefact-card__link" href="#">
            Читать далее <span aria-hidden="true">⟶</span>
          </a>
        </article>
      </div>
    </section>
  )
}
