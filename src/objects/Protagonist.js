import './Protagonist.css';

function Protagonist(props) {
    const additionalClass = props.inAir ? 'animate-jump' : '';

    return (
        <div className={`Protagonist ${additionalClass}`}
             onAnimationEnd={() => {props.setInAir(false)}}
        >{props.model}</div>
    )
}

export default Protagonist;