import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetListAPI} from '~/services/serviceApi';
import {apiService} from '~/services/serviceGeneral';
import {SET_LIST} from '~/states/actions/contentAction';
import SingleContent from '~/views/components/content/SingleContent';

import './style/homepages.scss';

const Homepage = () => {
    const dispatch = useDispatch();
    const content = useSelector((state) => state.content);
    const {list} = content;

    useEffect(() => {
        const getList = async () =>{
            const list = await apiService(GetListAPI);
            if (list && list.length > 0) {
                dispatch({type: SET_LIST, data: list.filter((row) => row.uuid)});
            };
        };
        getList();
    }, []);

    return (
        <div className="row">
            {list.map((row, i) => {
                return (
                    <div className="col-lg-6" key={i}>
                        <SingleContent data={row} />
                    </div>
                );
            })}
        </div>
    );
};

Homepage.displayName = 'homepageContainer';

export default Homepage;
