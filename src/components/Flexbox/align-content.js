
import React from 'react';

function AlignContent({ align_content }) {
    return (
        <>
            <div className="sub-title">Property: align-content</div>
            {
                align_content.map((row, i) => (
                    <section className={row.class}>
                        <div className="code"><span>{row.code}</span></div>
                        <div className="wrapper">
                            <div className="box"><span>1</span></div>
                            <div className="box"><span>2</span></div>
                            <div className="box"><span>3</span></div>
                            <div className="box"><span>4</span></div>
                            <div className="box"><span>5</span></div>
                            <div className="box"><span>6</span></div>
                            <div className="box"><span>7</span></div>
                            <div className="box"><span>8</span></div>
                            <div className="box"><span>9</span></div>
                            <div className="box"><span>10</span></div>
                            <div className="box"><span>11</span></div>
                            <div className="box"><span>12</span></div>
                        </div>
                    </section>
                ))
            }
        </>
    )
}

export default AlignContent