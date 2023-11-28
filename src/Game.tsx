import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
function Game(length){

    const buttons = [];
    for (let i = 0; i < Number(length); i++){
        buttons.push(<Square/>);
    }
    return (
        <>
            <div className='gameRow'>
            {buttons}
            </div>
        </>
    );
}

function Square(){
    return (<button className='button2'>2</button>)
}

export default Game;