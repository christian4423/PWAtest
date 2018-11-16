import React, { Component } from 'react';
import STORE from './redux101'
class PlaygroundComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        STORE.subscribe(()=>{console.log(STORE.getState())})
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    inc = ({incrementBy = 1} = {}) =>{
        STORE.dispatch({
            type: 'INCREMENT',
            incrementBy
        });
    }
    dec = ({decrementBy = 1} = {}) =>{
        STORE.dispatch({
            type: 'DECREMENT',
            decrementBy
        });   
    }
    
    render() {
        return (
            <div className="PlaygroundComponent">                 
                <p>In play area</p>
                <button onClick={() => this.inc({incrementBy: 5})}>Increment</button>
                <button onClick={() => this.dec()}>Decrement</button>
                {STORE.getState().count}
            </div>
        )
    }
}
export default PlaygroundComponent;