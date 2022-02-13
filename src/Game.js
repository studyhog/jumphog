import {useState} from 'react';
import Protagonist from './objects/Protagonist';
import Obstacle from './objects/Obstacle';
import './Game.css'


function Game() {
    const [inAir, setInAir] = useState(false);
    const jump = () => {setInAir(true)}

    return (
        <div className='Game' onClick={jump}>
            <Protagonist inAir={inAir}
                         setInAir={setInAir}
            />
            <Obstacle/>
        </div>
    )
}

export default Game;