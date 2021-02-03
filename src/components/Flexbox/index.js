import React from 'react'
import AlignContent from './align-content'
import AlignItems from './align-items'
import FlexDirection from './flex-direction'
import FlexWrap from './flex-wrap'
import JustifyContent from './justify-content'

function Main() {

    const data = {
        flex_direction: [
            { class: 'sec1', code: 'flex-direction: row;'},    
            { class: 'sec2', code: 'flex-direction: row-reverse;'},    
            { class: 'sec3', code: 'flex-direction: column;'},    
            { class: 'sec4', code: 'flex-direction: column-reverse;'},    
        ],
        justify_content: [
            { class: 'sec5', code: 'justify-content: flex-start;'},    
            { class: 'sec6', code: 'justify-content: flex-end;'},    
            { class: 'sec7', code: 'justify-content: center;'},    
            { class: 'sec8', code: 'justify-content: space-around;'},    
            { class: 'sec9', code: 'justify-content: space-between;'},    
            { class: 'sec10', code: 'justify-content: space-evenly;'},    
        ],
        align_items: [
            { class: 'sec11', code: 'align-items: flex-start;'},    
            { class: 'sec12', code: 'align-items: flex-end;'},    
            { class: 'sec13', code: 'align-items: center;'},    
            { class: 'sec14', code: 'align-items: stretch;'},    
            { class: 'sec15', code: 'align-items: baseline;'},    
        ],
        flex_wrap: [
            { class: 'sec16', code: 'flex-wrap: nowrap;'},    
            { class: 'sec17', code: 'flex-wrap: wrap;'},    
            { class: 'sec18', code: 'flex-wrap: wrap-reverse;'},   
        ],
        align_content: [
            { class: 'sec19', code: 'align-content: flex-start;'},    
            { class: 'sec20', code: 'align-content: flex-end;'},    
            { class: 'sec21', code: 'align-content: center;'},   
            { class: 'sec22', code: 'align-content: space-around;'},   
            { class: 'sec23', code: 'align-content: space-between;'},   
        ],
    }

    return (
        <div className="container">    
            <div className="title">Flexbox</div>
            <FlexDirection flex_direction={data.flex_direction}/>
            <JustifyContent justify_content={data.justify_content}/>
            <AlignItems align_items={data.align_items}/>
            <FlexWrap flex_wrap={data.flex_wrap}/>
            <AlignContent align_content={data.align_content}/>
        </div>
    )
}

export default Main
