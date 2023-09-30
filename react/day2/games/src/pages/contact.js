import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter, increaseCounterByValue, resetCounter } from "../store/slice/counter";

export default function Contact(){
    const counter = useSelector(state=>state.counter.initial) 
    const dispatch = useDispatch()
    return(
        <>
        <h1>counter</h1>
        <hr/>
        <div d-flex>
            <button className="btn btn-dark m-1 p1" onClick={()=>{dispatch(increaseCounter())}}>+1</button>
            <button className="btn btn-dark m-1 p1" onClick={()=>{dispatch(decreaseCounter())}}>-1</button>
            <button className="btn btn-dark m-1 p1" onClick={()=>{dispatch(increaseCounterByValue(30))}}>+3</button>
            <button className="btn btn-dark m-1 p1" onClick={()=>{dispatch(resetCounter())}}>reset</button>
        </div>
        <h1 className="m-5">{counter}</h1>

        </>
        
    );
}