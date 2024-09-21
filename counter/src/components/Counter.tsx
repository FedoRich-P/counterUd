type CounterProps = {
    value: number;
    done: boolean | number;
};
export const Counter = ({value, done}: CounterProps) => {
    return (
        <div className="counterValue">
                    <span
                        className={done ? 'isDone' : ''}
                    >{value}</span>
        </div>
    );
};