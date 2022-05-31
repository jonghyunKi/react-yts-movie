import React, { Component } from 'react';
import '../css/PagiNation.css'

class PagiNation extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    pageClick=(page)=>{
        alert('페이지네이션클릭'+page)
        this.props.setCurrentPage(page)
    }
    render() {
        let pageNumber=[]

        for(let i=1; i<=Math.ceil(this.props.totalList/this.props.movieListperPage); i++){
            pageNumber.push(i)
        }

        console.log(pageNumber)

        const result=pageNumber.map(
            (page,index)=>(<span key={index} id='page' onClick={()=>this.pageClick(page)}>{page}</span>)
        )
        return (
            <div id='pagination'>
                {result}
                <div id='total1'>
                    페이지당 글 갯수 : {this.props.movieListperPage}
                </div>
                <div id='total2'>
                    총 글갯수: {this.props.totalList}
                </div>
                
            </div>
            
        );
    }
}

export default PagiNation;