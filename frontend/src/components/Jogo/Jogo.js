import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.png";

function Jogo() {
    return (
        <div className="jogo">
            <img className="nuvens" src={nuvens} alt="Nuvens" />
            
            <img className="cano" src={cano} alt="Cano" />
            
            <img className="mario" src={mario} alt="Mario" /> 

            <div className="chao"></div>
        </div>
    );
}

export default Jogo;