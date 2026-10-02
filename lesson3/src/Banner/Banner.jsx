import '../Banner/banner.css'
import arrow from '../img/arrow.png';




export default function Banner() {
  return (
     <section className="container banner_cont">
      <div className="banner_text">
        <h1>Крупнейшая коллекция <br /> природных артефактов</h1>
        <p>
            Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.       
         </p>
        <a href="#">
          Исследовать
           <img src={arrow} alt="arrow" />    
        </a>
      </div>
    </section>
  )
}
