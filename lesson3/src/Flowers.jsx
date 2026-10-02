import FlowersCard from './Flowers/Flowers'
import leyer from './img/leyer.png'
import leyer2 from './img/leyer2.png'
import leyer3 from './img/leyer3.png'
import leyer4 from './img/leyer4.png'


const flowers = [
  {
    title: 'Fig. 1 (plant)',
    description: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.',
    img: leyer,
  },
  {
    title: 'Fig. 2 (flower)',
    description: 'Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.',
    img: leyer2,
  },
  {
    title: 'Fig. 3 (leaf)',
    description: 'Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.',
    img: leyer3,
  },
  {
    title: 'Fig. 4 (wood)',
    description: 'Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.',
    img: leyer4 ,
  },
]

export default function Flowers() {
  return (
    <div className="container product_cont">
      {flowers.map((flower) => (
        <FlowersCard key={flower.title} {...flower} />
      ))}
    </div>
  )
}