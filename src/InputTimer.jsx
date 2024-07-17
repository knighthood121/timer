

const InputTimer = ({ handleInput, handleStart }) => {
    return (
        <div className='input-container'>
      <h1>Countdown Timer</h1>
            <div className='input-box'>
                <input
                    type="number"
                    onChange={handleInput}
                    id="hours" placeholder='Enter a value' />
                
            </div>
            <button
                onClick={handleStart}
                className='timer-button'>Start</button>
        </div>
    )
}

export default InputTimer;
