import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import JsonToForm from 'json-reactform';
import contentSchema from '~/schemas/contentSchema';
import {SET_LIST, SET_QUERY_LIST} from '~/states/actions/contentAction';
import {SET_MODAL_STATUS} from '~/states/actions/generalAction';
import SingleContent from '~/views/components/content';
import Modal from '~/views/components/modal';
import Button from '~/views/components/button';
import SortFilter from '~/views/components/sortFilter';

import {dataForSchema, deleteForm, getList, setDefaultValueSchema, setSchemaForFilter, submitForm, updateForm} from './controller';
import Loading from '~/views/components/loading';
import {KOMODITAS} from '~/constants/variable';

const Homepage = () => {
    const dispatch = useDispatch();
    const content = useSelector((state) => state.content);
    const general = useSelector((state) => state.general);
    const {showModal} = general;
    const {list, queryList} = content;
    const [schema, setSchema] = useState(contentSchema);
    const [filterSchema, setFilterSchema] = useState({});
    const [onEdit, setOnEdit] = useState('');
    const [onDelete, setOnDelete] = useState('');
    const [onLoadList, setOnLoadList] = useState(false);
    const [onLoadSchema, setOnLoadSchema] = useState(false);
    const [onLoadSubmit, setOnLoadSubmit] = useState(false);
    const [onSort, setOnSort] = useState(false);

    const getDataForSchema = async () => {
        const newSchema = await dataForSchema(schema);
        setSchema(newSchema);
        const filterSchema = setSchemaForFilter(newSchema, queryList);
        setFilterSchema(filterSchema);
        setOnLoadSchema(true);
    };

    const setList = async () =>{
        setOnLoadList(false);
        const list = await getList();
        setOnLoadList(true);
        dispatch({type: SET_LIST, data: list.filter((row) => row.uuid)});
        dispatch({type: SET_QUERY_LIST, data: {}});
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

    const deleteContent = async (index) => {
        const content = list[index];
        setOnDelete(content);
        dispatch({type: SET_MODAL_STATUS, data: true});
    };

    const submitDeleteContent = async () =>{
        setOnLoadSubmit(true);
        const submit = await deleteForm(onDelete.uuid);
        if (submit.status) {
            setOnDelete('');
            setList();
            dispatch({type: SET_MODAL_STATUS, data: false});
        }
        setOnLoadSubmit(false);
    };

    const resetDeleteContent = () => {
        setOnDelete('');
        dispatch({type: SET_MODAL_STATUS, data: false});
    };

    const onOpenSortFilter = () => {
        const newFilterSchema = setSchemaForFilter(filterSchema, queryList);
        setFilterSchema(newFilterSchema);
        dispatch({type: SET_MODAL_STATUS, data: true});
        setOnSort(true);
    };

    const submitSortFilter = (params) => {
        dispatch({type: SET_MODAL_STATUS, data: false});
        dispatch({type: SET_QUERY_LIST, data: params});
    };

    useEffect(() => {
        if (!showModal) {
            setOnSort(false);
            setOnDelete('');
            editContent('');
        };
    }, [showModal]);

    useEffect(() => {
        getDataForSchema();
        setList();
    }, []);

    const ModalBodyContent = () => {
        return (
            <Fragment>
                {(!onSort && onDelete === '' && onLoadSchema) &&
                <JsonToForm model={schema} onSubmit={onSubmitForm} />}
                {onDelete &&
                <div className="d-flex flex-column align-items-center">
                    <h5 className="mb-32p">Are you sure you want to delete <b>{onDelete[KOMODITAS]}</b> ?</h5>
                    <div className="d-flex">
                        <Button type="default" label="No" action={() => resetDeleteContent()} className="mr-8p" />
                        <Button type="danger" label="Yes" action={() => submitDeleteContent()} />
                    </div>
                </div>}
                {onSort &&
                <JsonToForm model={filterSchema} onSubmit={submitSortFilter} />}
            </Fragment>
        );
    };

    return (
        <Fragment>
            {!onLoadList ? (
                <Loading />
            ) : (
                <Fragment>
                    {(list.length) > 0 ? (
                        <div className="row">
                            {list.map((row, i) => {
                                return (
                                    <div className="col-lg-6" key={i}>
                                        <SingleContent data={row} editContent={editContent} deleteContent={deleteContent} index={i} />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                            <h5 className="font-400 font-24">Empty List</h5>
                        </div>
                    )}
                    <SortFilter onClick={onOpenSortFilter} />
                </Fragment>
            )}
            <Modal title={`${onSort ? 'Filter/Sort' : 'Manage'} Content`} Container={ModalBodyContent} onLoad={onLoadSubmit} />
        </Fragment>
    );
};

Homepage.displayName = 'homepageContainer';

export default Homepage;
