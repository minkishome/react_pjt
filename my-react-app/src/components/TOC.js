import React, {Component} from 'react';


class TOC extends 
Component{
    render() {
        var data = this.props.data; // data가 App에서 보내주고 있는 값
        var lists = [];
        var i = 0;
        while(i< data.length){
            lists.push(
            <li key={data[i].id}>
              <a 
                href={"/content/"+data[i].id}
                data-id = {data[i].id}
                onClick= {function(e){
                  //e.target -> a,태그 
                  
                  // debugger;
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
                }.bind(this)} 
              >{data[i].title}</a></li>)
            i = i+ 1;
        }
      return (
        <nav>
           <ul>
               {lists}
           </ul>
        </nav>
      );
    }
  }

export default TOC;