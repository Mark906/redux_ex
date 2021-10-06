import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeBg, resetBg } from '../../redux/bgRedux/bg.actions';
import { BG_KEY } from '../../redux/bgRedux/bgReducer';

const Background = () => {

    let dispatch = useDispatch();

    let change = () => {
        dispatch(changeBg())
    }

    let reset = () => {
        dispatch(resetBg())
    }
    //view store
    //useSelector consente di estrarre i dati dallo stato del negozio Redux
    let viewBg = useSelector((state) => {
        return state [BG_KEY]
    })

    return (
        <React.Fragment>
            <pre className="py-3">{JSON.stringify(viewBg)}</pre>
            <div className="container">
                <div className="row mt-5">
                    <div className="offset-md-2"></div>
                    <div className="col-md-8">
                        <div className="card shadow">
                            {/* HEADER */}
                            <div className="card-header">
                                <h1 className="h3 text-center">CHANGE BACKGROUND APP</h1>
                            </div>
                            {/* SECOND HEADER */}
                            <div className="card-header d-flex justify-content-between">
                                <button className="btn btn-success" onClick={change}>CHANGE COLOR</button>
                                <p className="mt-3">COLOR: <span>{viewBg.color}</span></p>
                                <button className="btn btn-danger" onClick={reset}>RESET COLOR</button>
                            </div>
                            {/* BODY */}
                            <div className="card-body bodyColorContainer" style={{backgroundColor: viewBg.color}}></div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Background;