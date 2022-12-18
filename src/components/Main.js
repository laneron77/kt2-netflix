import FAQ from './subComponents/FAQ';
import AnimationCard from './subComponents/AnimationCard';
import '../styles/main.scss'
import Device from '../assets/device.png';
import mobile from '../assets/mobile.jpg';
import tv from '../assets/tv.png';
import child from '../assets/children.png';
import videoTv from '../assets/video-tv-0819.m4v';
import downloadIcon from '../assets/icon.gif';
import videoDevicePile from '../assets/video-devices-in.m4v';

const Main = () => {
    return (
      <div className="main-content">
        <section className="enjoy-on-tv-section">
          <AnimationCard
            title="Дивіться на телевізорі."
            subtitle="Дивіться на Smart TV, Playstation, Xbox, Chromecast, Apple TV, Blu-ray-програвачах тощо."
            image={tv}
            imageAlt="tv"
            videoTv={videoTv}
          />
        </section>
        <section className="download-your-shows-section">
          <AnimationCard
            title="Завантажуйте контент і дивіться його офлайн."
            subtitle="Легко зберігайте улюблені телесеріали й фільми, щоб дивитися їх будь-коли."
            image={mobile}
            imageAlt="mobile"
            downloadIcon={downloadIcon}
          />
        </section>
        <section className="watch-everywhere-section">
          <AnimationCard
            title="Дивіться будь-де."
            subtitle="Дивіться фільми й телесеріали без обмежень на смартфоні, планшеті, ноутбуці й телевізорі без доплат."
            image={Device}
            imageAlt="device pile in"
            videoDevicePile={videoDevicePile}
          />
        </section>
        <section className="children-section">
          <AnimationCard
            title="Створюйте профілі для дітей."
            subtitle="Ваші діти зможуть мандрувати країною фантазії разом з улюбленими персонажами в спеціальних профілях, які входять у вартість підписки."
            image={child}
            imageAlt="children"
          />
        </section>
        <FAQ />
      </div>

    );
  };
  
  export default Main;