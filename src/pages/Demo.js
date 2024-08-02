import React, { useState } from 'react'
import '../style/Demo.css'
import Intro from '../componets/chapter/Intro'
import Chapter01 from '../componets/chapter/Chapter01'
import Chapter02 from '../componets/chapter/Chapter02'
import Chapter03 from '../componets/chapter/Chapter03'

const Demo = () => {
    const [page, setPage] = useState("intro")

    return (
        <div className='demo'>
            <h3>&#x268A;&#x26AC; Resumo do Livro &#x26AC;&#x268A;</h3>
            <p>Uma pequena demostração de alguns Capitulos do Livro</p>
            <div className='demo_Container'>
                <div className='demo_btnContainer'>
                    <button onClick={() => setPage('intro')}>Introdução</button>
                    <button onClick={() => setPage('chapter01')}>Capitulo 01</button>
                    <button onClick={() => setPage('chapter02')}>Capitulo 02</button>
                    <button onClick={() => setPage('chapter03')}>Capitulo 03</button>
                </div>
                <div className='demo_text'>
                    {page === "intro" && <Intro />}
                    {page === "chapter01" && <Chapter01/>}
                    {page === "chapter02" && <Chapter02/>}
                    {page === "chapter03" && <Chapter03/>}
          
                 
                </div>
            </div>

        </div>
    )
}

export default Demo