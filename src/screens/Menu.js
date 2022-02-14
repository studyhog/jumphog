import './Menu.css';

function Menu (props) {
    const additionalClass = props.isPlaying ? 'playing' : '';

    return (
        <div className={`Menu ${additionalClass}`}>
            <button onClick={() => props.setIsPlaying(true)}>
                Start
            </button>
        </div>
    )
}

export default Menu;