import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
function Game(prop:number){
    const buttons = [];
    for (let i = 0; i < prop.length; i++){
        buttons.push(<Square value="*"/>);
    }
    return (
        <>
            <div className='gameRow'>
            {buttons}
            </div>
        </>
    );
}

function Square({value}){
    return (<button className='button2'>{value}</button>)
}

export default Game;