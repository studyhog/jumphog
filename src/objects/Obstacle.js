import './Obstacle.css';

function Obstacle(props) {
    const additionalClass = props.isPlaying ? 'animate-move' : '';

    return (
        <div className={`Obstacle ${additionalClass}`}>{props.model}</div>
    )
}

export default Obstacle;