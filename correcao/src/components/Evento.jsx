import React from 'react';
function Evento({titulo, descricao, horario, local}){
    return(
        <section className='Evento'>
            <div className='Informacao'>
                <p>{titulo}</p>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </div>
            <img src="https://media.mutualart.com/Images//2017_12/05/07/071947635/bf9b4a73-b54e-49ab-b161-fae7a1cee1ae.Jpeg" alt="" />
        </section>
    )

}
export default Evento