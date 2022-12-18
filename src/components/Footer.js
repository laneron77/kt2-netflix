import LangSelect from './subComponents/LangSelect';
import '../styles/footer.scss'

function Footer() {
    return (
<footer>
<p>Маєте запитання? Зателефонуйте за номером<a href='#index'> 0800-509-416</a></p>
<div class="links">
  <ul>
    <li><a href='#index'>Поширені запитання</a></li>
    <li><a href='#index'>Зв’язки з інвесторами</a></li>
    <li><a href='#index'>Конфіденційність</a></li>
    <li><a href='#index'>Довідковий центр</a></li>
    <li><a href='#index'>Налаштування файлів cookie</a></li>
    <li><a href='#index'>Вакансії</a></li>
    <li><a href='#index'>Перевірка швидкості</a></li>
    <li><a href='#index'>Зв’язатися з нами</a></li>
    <li><a href='#index'>Умови використання</a></li>
    <li><a href='#index'>Медіацентр</a></li>
    <li><a href='#index'>Обліковий запис</a></li>
    <li><a href='#index'>Корпоративна інформація</a></li>
    <li><a href='#index'>Тільки на Netflix</a></li>
    <li><a href='#index'>Юридичні повідомлення</a></li>
    <li><a href='#index'>Конфіденційність</a></li>
  </ul>
  <div className='lang'>
  <LangSelect />
  </div>
  </div>
  <p>Netflix Україна</p>
</footer>
    );
    };
    export default Footer;