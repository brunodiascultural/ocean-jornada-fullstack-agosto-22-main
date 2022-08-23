import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import { useState } from "react";

function Jogo() {
    // Criando o estado 'estaPulando', com o valor padrão 'false',
    // Primeiro  valor é apenas para ler (GET)
    // Segundo valor é para atualizar o estado (SET)
    // No momneto que um estado é atualizado, o componente atualiza
    // tudo o que está sendo renderizado
    const [estaPulando, setEstaPulando] = useState(false);

    document.onkeydown = function () {
        setEstaPulando(true);

        setTimeout(function () { 
            setEstaPulando(false);
        }, 600);
    };

    let marioClassName = "mario";

    if (estaPulando) {
        marioClassName = "mario mario-pulo";
    }

    return (
        <div className="jogo">
            <img className="nuvens" src={nuvens} alt="Nuvens" />
            
            <img className="cano" src={cano} alt="Cano" />
            
            <img className={marioClassName} src={mario} alt="Mario" /> 

            <div className="chao"></div>
        </div>
    );
}

export default Jogo;