import React from 'react';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {inc, dec, add, remove, reset} from "../../redux/countRedux/count.action";
import {COUNTER_KEY} from "../../redux/countRedux/countReducer";


const Counter = () => {
    const [data, setData] = useState(null);
    let dispatch = useDispatch();

    let increment = () => {
        dispatch(inc())
    }

    let decrement = () => {
        dispatch(dec())
    }

    let addTen = () => {
        dispatch(add())
    }

    let removeTen = () => {
        dispatch(remove())
    }

    let handle = (event) => {
        let val = event.target.value;
        setData(val);
    }

    let addNumber = () => {
        for (let i = 0; i<data; i++){
            increment();
        }
    }

    let resetNumber = () => {
        dispatch(reset())
        let val = 0;
        setData(val);
    }

    let viewCounter = useSelector((state) => {
        return state [COUNTER_KEY]
    })

    return(
        <>
            <pre className="py-3">{JSON.stringify(viewCounter)}</pre>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="offset-md-2"></div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header d-flex flex-column align-items-center">
                                <h1 className="h3 text-center">COUNTER</h1>
                                <button className="btn btn-danger w-25" onClick={resetNumber}>RESET</button>
                            </div>
                            <div className="card-header">
                                <p className="text-center">Counter: <span>{viewCounter.counter}</span></p>
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <button onClick={increment}>Inc (+1)</button>
                                <button onClick={decrement}>Dec (-1)</button>
                                <button onClick={addTen}>Add (+10)</button>
                                <button onClick={removeTen}>Remove (-10)</button>
                                <input type="number" value={data} onChange={handle}/>
                                <button onClick={addNumber}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;