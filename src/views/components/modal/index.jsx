import React, {Fragment} from 'react';
import {BiX} from 'react-icons/bi';
import {useDispatch, useSelector} from 'react-redux';
import {SET_MODAL_STATUS} from '~/states/actions/generalAction';
import Loading from '../loading';

import './style/modal.scss';

const Modal = ({title, Container, onLoad}) =>{
    const dispatch = useDispatch();
    const general = useSelector((state) => state.general);
    const {showModal} = general;

    const closeModal = () => {
        dispatch({type: SET_MODAL_STATUS, data: false});
    };
    return (
        <Fragment>
            <div className={`modal-overlay d-flex align-items-center ${showModal ? '' : 'd-none'}`}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 modal-component d-flex flex-column with-shadow">
                            <div className="modal-title p-3 d-flex align-items-center justify-content-between with-shadow">
                                <h4 className="font-20 font-500">{title}</h4>
                                <BiX onClick={() => closeModal()} className="font-26 cursor-pointer" />
                            </div>
                            <div className="modal-body flex-grow-1">
                                <Container />
                                {onLoad &&
                                <div className="modal-loading"><Loading /></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Modal;
