import './App.css';
import {Button} from './components/Button';
import {useEffect, useState} from "react";
import {Counter} from "./components/Counter";


function App() {
    const maxNumb = 10
    const minNumb = 0

    const [value, setValue] = useState<number>(minNumb);

    // useEffect(() => {
    //     const valueFromLS = localStorage.getItem('newCounter');
    //     if (valueFromLS) setValue(JSON.parse(valueFromLS));
    // }, []);

    useEffect(() => {
        localStorage.setItem('newCounter', JSON.stringify(value))

    }, [value])

    const increment = () => {
        if (value < maxNumb) setValue(value + 1)
    }

    const reset = () => {
        setValue(minNumb);
    }

    const saveToLS = () => {
        localStorage.setItem('newCounter', `${value}`)
    }

    const getFromLS = () => {
        const valueFromLS = localStorage.getItem('newCounter');
        if (valueFromLS) setValue(JSON.parse(valueFromLS));
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
                        onClick={reset}
                    />
                    {/*<div className={'buttonGroup'}>*/}
                    {/*    <Button*/}
                    {/*        disabled={isDone}*/}
                    {/*        title={'To-LS'}*/}
                    {/*        onClick={saveToLS}*/}
                    {/*        className={`*/}
                    {/*        button*/}
                    {/*        inc*/}
                    {/*        ${isDone ? 'disabled' : ''}*/}
                    {/*    `}*/}

                    {/*    />*/}
                    {/*    <Button*/}
                    {/*        disabled={isDone}*/}
                    {/*        title={'From-LS'}*/}
                    {/*        onClick={getFromLS}*/}
                    {/*        className={`*/}
                    {/*        button*/}
                    {/*        inc*/}
                    {/*        ${isDone ? 'disabled' : ''}*/}
                    {/*    `}*/}

                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default App;

