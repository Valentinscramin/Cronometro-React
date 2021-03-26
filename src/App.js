import React, {Component} from 'react';
import './style.css';
import Image from "./assets/cronometro.png";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            timer: 0,
            botaoVai: 'Vai',
        }
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){

        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null
            this.setState({botaoVai: 'Vai'});
        }else{
            this.timer = setInterval(()=>{
                let state = this.state;
                state.timer += 0.1;
                state.botaoVai = "Pausar";
                this.setState(state);
            },100);
        }
    }

    limpar(){
        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
        }
        let state = this.state;
        state.timer = 0;
        state.botaoVai = "Vai";
        this.setState(state);
    }
   


    render(){
        return(
          <div className="container">
              <img class="img" src={Image}/>
              <a className="timer">{this.state.timer.toFixed(2)}</a>
              <div  className="areaBotao">
                  <a className="botao" onClick={this.vai}>{this.state.botaoVai}</a>
                  <a className="botao" onClick={this.limpar}>Limpar</a>
              </div>
          </div>
        );
    }
}




export default App;
