import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import { useRef,useState } from "react";

function Jogo() {
    // Criando o estado 'estaPulando', com o valor padrão 'false',
    // Primeiro  valor é apenas para ler (GET)
    // Segundo valor é para atualizar o estado (SET)
    // No momneto que um estado é atualizado, o componente atualiza
    // tudo o que está sendo renderizado
    
    // Criamos o estado `estaPulando`, com o valor padrão `false`.
  // Primeiro valor é apenas para ler (GET)
  // Segundo valor é para atualizar o estado (SET)
  // No momento que um estado é atualizado, o componente atualiza
  // tudo o que está sendo renderizado
  const [estaPulando, setEstaPulando] = useState(false);

  // Criamos as referências para `mario` e `cano`
  const marioRef = useRef();
  const canoRef = useRef();

  function marioEstaNoCano() {
    // Acessamos as referências do mario e do cano
    const mario = marioRef.current;
    const cano = canoRef.current;

    // Se por acaso `mario` ou `cano` não forem encontrados,
    // encerra essa função
    if (!mario || !cano) {
      return;
    }

    // Retorna o valor da lógica que determinar se o mário
    // está na mesma posição do cano ou não (com as checagens
    // que consideram toda a área do cano)
    return (
      cano.offsetLeft > mario.offsetLeft &&
      cano.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
      mario.offsetTop + mario.offsetHeight > cano.offsetTop
    );
  }

  // Implementação temporária para exibir se o mário está no cano
  // ou não
  setInterval(function () {
    const valor = marioEstaNoCano();

    console.log("Mário está no cano?", valor);
  }, 100);

    document.onkeydown = function () {
        // Atualizamos o estado para true
        setEstaPulando(true);

        setTimeout(function () { 
            // Voltamos o estado para o valor inicial
            setEstaPulando(false);
        }, 600);
    };
    // Por padrão, o elemento tem class '.mario'
    let marioClassName = "mario";

    // Caso esteja pulando (valor true), a classe será '.mario' e '.mario-pulo'
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