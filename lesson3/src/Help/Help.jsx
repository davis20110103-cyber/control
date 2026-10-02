
import '../Help/help.css'


export default function Help() {
  return (
     <section className="container help_cont">
          <div className="help_text">
            <h1>Помочь проекту</h1>
            <p>
                Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.       
             </p>

            
             <input type="text" placeholder="имя" />
             <br />
             <input type="text" placeholder="Ваш e-mail" />
              <br />
             <button type="button">Отправить</button>
           
          </div>
        </section>
  )
}
