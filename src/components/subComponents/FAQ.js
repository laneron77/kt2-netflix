import { useState } from 'react'
import '../../styles/faq.scss'
import Form from './Form';

function FAQ()  {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected (i)
    }

    return (
    <div className="wrapper1">
        <div className="faqtitle"><h1>Поширені запитання</h1></div>
        <div className="accordion">
            {data.map((item, i)=> (
                <div className="item">
                    <div className="title" onClick={() => toggle(i)  }> 
                        {item.question}
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                <div className={selected === i ? 'content show' : 'content'}>
            {item.answer}
        </div>
    </div>
            ))}
        </div>
        <br></br>
        <Form />
    </div>
    )
}

const data = [ 
    { 
        question: 'Що таке Netflix?',
        answer: 'Netflix — це сервіс потокового передавання відео, що дає змогу дивитися різноманітні відзначені нагородами телесеріали, фільми, аніме, документалістику й інший контент на тисячах пристроїв із підключенням до Інтернету.',
    },
    {
        question: 'Скільки коштує підписка Netflix?',
        answer: 'Дивіться Netflix на смартфоні, планшеті, Smart TV, ноутбуці або пристрої потокової передачі за фіксованою щомісячною ціною. Плани від 4,99 EUR до 9,99 EUR на місяць. Без доплат й угод.',
    },
    {
        question: 'Де можна дивитися контент?',
        answer: 'Дивіться будь-де, будь-коли. Увійдіть у свій обліковий запис Netflix, щоб дивитися контент онлайн на сайті netflix.com з персонального комп’ютера або будь-якого пристрою з підключенням до Інтернету, на якому можна завантажити застосунок Netflix, як-от Smart TV, смартфон, планшет, медіапрогравач для потокової передачі або ігрова приставка.',
    },
    {
        question: 'Як скасувати підписку?',
        answer: 'Netflix надає гнучкі умови. Жодних надокучливих угод чи зобов’язань. Скасувати підписку можна всього за два кліки. Жодних комісій за скасування. Оформити або скасувати підписку можна будь-коли.',
    },
    {
        question: 'Що можна подивитися на Netflix?',
        answer: 'Netflix пропонує обширну бібліотеку художніх фільмів, документалістики, телесеріалів, аніме, відзначеного нагородами оригінального контенту тощо. Дивіться скільки завгодно й коли завгодно.',
    },
    {
        question: 'Netflix підходить для дітей?',
        answer: 'Інтерфейс Netflix для дітей включено у вашу підписку. Діти можуть насолоджуватися телесеріалами й фільмами для всієї родини у своєму профілі, а батьки при цьому контролюватимуть такий контент.',
    },
    {
        question: 'Чому відображається текст цією мовою?',
        answer: 'Мову встановлено відповідно до налаштувань браузера.',
    },

] 

export default FAQ;