import { useSelector, useDispatch } from 'react-redux'
import { incrementCounterAction } from '../../store/module/counter/actions';
import { counterSelector } from '../../store/module/counter/selectors';
import Button from '../button/Button';

const Card = () => {
    const counter: any = useSelector(counterSelector)
    const dispatch = useDispatch()
    const handlerIncrementClick = () => {
        dispatch(incrementCounterAction(counter.number))
    }

    return (
        <div className="card">
            <Button />
            <div>{counter.number}</div>
            <button onClick={handlerIncrementClick}>Increment</button>
        </div>
    )
}

export default Card
