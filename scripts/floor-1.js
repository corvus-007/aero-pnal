import {
  category,
  forWho
} from './filter-options.js';

export default {
  areas: [{
      id: 1,
      title: `KARI`,
      synonyms: [`кари`, `kari`],
      description: `Обувной магазин`,
      path: `M-284.7,179.1h-72.7v28 h-91.1l-0.2-95.2l163.7,0L-284.7,179.1z`,
      category: new Set([category[`Обувь`]])
    },
    {
      id: 2,
      title: `ZARA`,
      logoSrc: `zara.svg`,
      synonyms: [`zara`, `зара`],
      description: `Одежда для современных людей`,
      category: new Set([category[`Одежда`]]),
      'for-who': new Set([forWho[`Мужская одежда`], forWho[`Женская одежда`]]),
      path: `M312.6,25.4l0.6,240.6 c-3,4.8-5.4,10.1-6.9,15.7H125.1V25.4H312.6z`,
    },
    {
      id: 3,
      title: `Bershka`,
      logoSrc: `bershka.svg`,
      synonyms: [`bershka`, `бершка`],
      description: `Трендовая одежда, обувь и аксессуары`,
      path: `M486.6,256.3v25.1 h-62.4c-5.7-20.9-22.2-37.2-43.2-42.6l36.4-18v-33.7v-33.6v-0.1v-128h69.1V256.3z`,
      category: new Set([category[`Одежда`]])
    },
    {
      id: 4,
      title: `H&M`,
      logoSrc: `h&m.svg`,
      synonyms: [`h&m`, `hm`, `ейч эм`],
      description: `Модная одежда для женщин, мужчин, подростков и детей`,
      path: `M-284.5,179.6v28.9v173 h-163.4l-0.5-173.8h91.7l0-28.1H-284.5z`,
      category: new Set([category[`Одежда`]])
    },
    {
      id: 5,
      title: `Лента`,
      logoSrc: `lenta.svg`,
      synonyms: [`Лента`, `lenta`],
      description: `Гипермаркет`,
      path: `M782.7,25.4h317.1 v510.1H782.7v-25.6v-24.9V25.4z`,
      category: new Set([category[`Продукты питания`]])
    },
    {
      id: 50,
      title: `TELE2`,
      logoSrc: `tele2.svg`,
      synonyms: [`tele2`, `теле2`],
      description: `Оператор сотовой связи`,
      path: `M690.5,431.4 712.9,431.4 712.9,453.7 690.5,453.7z`,
      category: new Set([category[`Сотовая связь`], category[`Бытовая техника и электроника`]])
    }
  ],
  markers: [{
      symbolId: `elevator`,
      points: [{
          title: `Лифт`,
          position: [746.5, 75.5]
        },
        {
          title: `Лифт`,
          position: [446.5, 75.5]
        }
      ]
    },
    {
      symbolId: `parking`,
      points: [{
          title: `Парковка`,
          position: [841.5, 498.5]
        },
        {
          title: `Парковка`,
          position: [541.5, 498.5]
        }
      ]
    }
  ]
};
