import './Protagonist.css';

function Protagonist(props) {
    const additionalClass = props.inAir ? 'animate' : '';

    return (
        <div className={`Protagonist ${additionalClass}`}
             onAnimationEnd={() => {props.setInAir(false)}}
        >
            🦔
        </div>
    )
}

export default Protagonist;