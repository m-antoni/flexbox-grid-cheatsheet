import React from 'react'

function Flexbox() {
    return (
        <div className="container">    
            <div className="title">Flexbox</div>
            
            <div className="sub-title">Property: flex-direction</div>

            <section className="sec1">
                <div className="code"><span>flex-direction: row;</span></div>
                <div className="wrapper">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </section>

            <section className="sec2">
                <div className="code"><span>flex-direction: row-reverse;</span></div>
                <div className="wrapper">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </section>
        </div>
    )
}

export default Flexbox
