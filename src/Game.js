import {useState} from 'react';
import Protagonist from './objects/Protagonist';
import Obstacle from './objects/Obstacle';
import Menu from './screens/Menu';
import './Game.css';


function Game(props) {
    const [inAir, setInAir] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const jump = () => {
        setInAir(true);
    }

    return (
        <div className='Game'
             onClick={jump}
             onKeyDown={jump}
             tabIndex={0}
        >
            <Menu isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
            />
            <Protagonist
                model={props.protagonist}
                inAir={inAir}
                setInAir={setInAir}
            />
            <Obstacle
                model={props.obstacle}
                isPlaying={isPlaying}
            />
        </div>
    )
}

export default Game;