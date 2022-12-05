import { useState } from "react"

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function Perguntas() {

    return (
        <>
            {
            pergunta.map((quest) => {
                return <Pergunta question={quest.questio} />
            })
          }
        </>
    )

}

function Pergunta(props) {
    const [classe, setClasse] = React.useState('pergunta-fechada')

    function mudarClasse() {
        setClasse('pergunta-aberta')
    }
    
    // console.log(props)
    return (
    //   <div className="sugestao">
    //     <div className="usuario">
    //         <img src={props.imagem} />
    //         <div class="texto">
    //               <div className="nome">{props.nome}</div>
    //               <div className="razao">{props.razao}</div>
    //             </div>
    //     </div>
    //   </div>
        <div className='container-botoes'>
            <button onClick={mudarClasse} className={classe}>{props.question}</button>
        </div>
        
    )
  }