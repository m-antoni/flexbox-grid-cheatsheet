import React from 'react';

function FlexDirection({ flex_direction }) {
    return (
        <>
            <div className="sub-title">Property: flex-direction</div>
            {
                flex_direction.map((row, i) => (
                    <section className={row.class}>
                        <div className="code"><span>{row.code}</span></div>
                        <div className="wrapper">
                            <div className="box"><span>1</span></div>
                            <div className="box"><span>2</span></div>
                            <div className="box"><span>3</span></div>
                            <div className="box"><span>4</span></div>
                        </div>
                    </section>
                ))
            }
        </>
    )
}

export default FlexDirection
