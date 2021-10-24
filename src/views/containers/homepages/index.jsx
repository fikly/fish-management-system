import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import JsonToForm from 'json-reactform';
import contentSchema from '~/schemas/contentSchema';
import {SET_LIST} from '~/states/actions/contentAction';
import {SET_MODAL_STATUS} from '~/states/actions/generalAction';
import SingleContent from '~/views/components/content';
import Modal from '~/views/components/modal';

import './style/homepages.scss';
import {dataForSchema, getList, setDefaultValueSchema, submitForm, updateForm} from './controller';

const Homepage = () => {
    const dispatch = useDispatch();
    const content = useSelector((state) => state.content);
    const {list} = content;
    const [schema, setSchema] = useState(contentSchema);
    const [onEdit, setOnEdit] = useState('');
    const [onLoadSchema, setOnLoadSchema] = useState(false);
    const [onLoadSubmit, setOnLoadSubmit] = useState(false);

    const getDataForSchema = async () => {
        const newSchema = await dataForSchema(schema);
        setSchema(newSchema);
        setOnLoadSchema(true);
    };

    const setList = async () =>{
        const list = await getList();
        dispatch({type: SET_LIST, data: list.filter((row) => row.uuid)});
    };

    const onSubmitForm = async (params) => {
        setOnLoadSubmit(true);
        const submit = await (onEdit ? updateForm(params, onEdit.uuid) : submitForm(params));
        if (submit.status) {
            setList();
            dispatch({type: SET_MODAL_STATUS, data: false});
        }
        editContent('');
        setOnLoadSubmit(false);
    };

    const editContent = (index) => {
        setOnLoadSchema(false);
        const content = (index !== '' ? list[index] : index);
        const newSchema = setDefaultValueSchema(schema, content);
        setSchema(newSchema);
        setOnLoadSchema(true);
        setOnEdit(content);
        if (index !== '') {
            dispatch({type: SET_MODAL_STATUS, data: true});
        }
    };

    useEffect(() => {
        getDataForSchema();
        setList();
    }, []);

    const ModalBodyContent = () => {
        return (
            <Fragment>
                {onLoadSchema &&
                <JsonToForm model={schema} onSubmit={onSubmitForm} />}
            </Fragment>
        );
    };

    return (
        <Fragment>
            <div className="row">
                {list.map((row, i) => {
                    return (
                        <div className="col-lg-6" key={i}>
                            <SingleContent data={row} editContent={editContent} index={i} />
                        </div>
                    );
                })}
            </div>
            <Modal title="Manage Content" Container={ModalBodyContent} onLoad={onLoadSubmit} />
        </Fragment>
    );
};

Homepage.displayName = 'homepageContainer';

export default Homepage;
