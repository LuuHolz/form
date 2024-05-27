import TimeIcon from "../assets/time.svg";
import CloseIcon from "../assets/close.svg";
import ButtonEnviar from "../components/ButtonEnviar.tsx";
import InputText from "../components/InputText.tsx";
import Desplegable from "../components/Desplegable.tsx";
import InputRadio from "../components/InputRadio.tsx";
import TextArea from "../components/TextArea.tsx";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="topHomeContainer">
        <p className="textTeLlamamos">Te llamamos</p>
        <img src={CloseIcon} alt="time" className="closeIcon" />
      </div>

      <p>Introduce tus datos para poder ponernos en contacto contigo</p>
      <p>Nombre</p>
      <InputText />
      <p>Apellido</p>
      <InputText />
      <p>Sexo</p>
      <Desplegable />
      <p>Email</p>
      <InputText />
      <p>¿Cuándo quieres que te contactemos?</p>
      <InputRadio />
      <p>
        Observaciones <span>(Opcional)</span>
      </p>
      <TextArea />

      <div className="textsBottom">
        <img src={TimeIcon} alt="time" className="timeIcon" />
        <p>Nuestro horario es <br />
        <span className="boldText">lunes a viernes laborables de 8:00 a 21:00 hs.</span></p>
      </div>

      <ButtonEnviar />
    </div>
  );
};

export default Home;
