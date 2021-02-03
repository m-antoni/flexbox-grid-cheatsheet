import React from 'react'

function AlignItems({ align_items }) {
    return (
        <>
            <div className="sub-title">Property: align-items</div>
            {
                align_items.map((row, i) => (
                    <section className={row.class}>
                        <div className="code"><span>{row.code}</span></div>
                        <div className="wrapper">
                           {
                               row.class == 'sec15' ? 
                                <>
                                    <div className="box"><center><p>1</p></center></div>
                                    <div className="box"><span>2</span></div>
                                    <div className="box"><center><h3>3</h3></center></div>
                                    <div className="box"><span>4</span></div>
                                </>
                                : 
                                <>
                                    <div className="box"><span>1</span></div>
                                    <div className="box"><span>2</span></div>
                                    <div className="box"><span>3</span></div>
                                    <div className="box"><span>4</span></div>
                                </>
                           }
                        </div>
                    </section>
                ))
            }
        </>
    )
}

export default AlignItems
