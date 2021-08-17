import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../atoms/header';
const Details = (props) => {
    const [data, setData] = useState({
        id: '',
        title: '',
        body: ''
    });
    useEffect(() => {
        axios.get('/api/').then((response) => {
            setData(response.data.find((sin) => sin.id === parseInt(props.match.params.id)));
        });
    }, [props.match.params.id]);
    return (<div className=''>
      <Header>
        <div></div>
      </Header>

      <div className='py-5'>user Detail</div>
      <p>userId: {data.id}</p>
      <p>title: {data.title}</p>
      <p>body: {data.body}</p>
    </div>);
};
export default Details;
//# sourceMappingURL=detail.jsx.map