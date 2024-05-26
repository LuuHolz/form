import TimeIcon from "../assets/time.svg";
import CloseIcon from "../assets/close.svg";
import inputRadio from '../components/inputRadio';
import inputTexts from '../components/inputText';
import desplegable from '../components/desplegable';
import textArea from '../components/textArea';
import buttonEnviar from '../components/buttonEnviar';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="topHomeContainer">
        <p>Te llamamos</p>
        <img src={CloseIcon} alt="time" className="closeIcon" />
      </div>

      <p>Introduce tus datos para poder ponernos en contacto contigo</p>
      <p>Nombre</p>
      <inputTexts/>
      <p>Apellido</p>
      <inputTexts/>
      <p>Sexo</p>
      <desplegable/>
      <p>Email</p>
      <inputTexts/>
      <p>¿Cuándo quieres que te contactemos?</p>
      <inputRadio/>
      <p>Observaciones <span>(Opcional)</span></p>
      <textArea/>

      <div className="textsBottom">
        <img src={TimeIcon} alt="time" className="timeIcon" />
      </div>
      <buttonEnviar/>
    </div>
  );
};

export default Home;
