import React, {Component} from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"
import Control from "./components/Control"
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:"Web", sub:"World WEb!!"},
      welcome:{title:'Welcome', desc:'Hello React'}, 
      contents:[
        {id:1, title:'HTML', desc:"Html is"},
        {id:2, title:'CSS', desc:"CSS is"},
        {id:3, title:'JAVASCRIPT', desc:"Javascrpit is"},
      ]
    }
  }
  // constructor 안에는 render 전에 먼저 실행되는 함수
  render() {
    console.log('App render')
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode ==='read'){
      var i =0;
      while(i< this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title=data.title;
          _desc= data.desc;
          break;
        }
        i= i+1;
      }

    }
    return (
      <div className="App">
       <Subject 
          title={this.state.subject.title} // 상위 component인 App의 상태를 하위 component에 props의 값으로 전달
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
          
        </Subject>
        
       <TOC 
       onChangePage={function(id){
         this.setState({
           mode:'read',
           selected_content_id:Number(id)
          });

       }.bind(this)} 
       data={this.state.contents}>
         {/*contents의 값을 받아온다.  */}
        </TOC> 

       <Control onChangeMode={function(mode) {
         this.setState({
           mode:mode
         });
       }.bind(this)}/>
       <Content title={_title} desc = {_desc}></Content>
      </div>
    );
  }
}

export default App;
