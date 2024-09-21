import './App.css';
import {Button} from './components/Button';
import {useState} from "react";
import {Counter} from "./components/Counter";


function App() {
    const maxNumb = 5
    const minNumb = 0

    const [value, setValue] = useState<number>(minNumb);

    const increment = () => {
        if(value < maxNumb)  setValue(value + 1)
    }

    const reset = () => {
        setValue(minNumb);
    }

    const isDone = value === maxNumb

    return (
        <div className="App">
            <div className="counter">
                <Counter value={value} done={isDone}/>
                <div>
                    <Button
                        disabled={isDone}
                        title={'inc'}
                        onClick={increment}
                        className={`
                            button
                            inc
                            ${isDone ? 'disabled' : ''}
                        `}

                    />
                    <Button
                        disabled={!isDone}
                        title={'reset'}
                        className={`
                            button
                            res
                            ${!isDone ? 'disabled' : ''}
                        `}
                        onClick={reset}/>
                </div>
            </div>
        </div>
    );
}

export default App;

