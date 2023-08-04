import React from 'react';
import { useState } from 'react';

const Inquiry = () => {

    const [contactInfo,setContactInfo]=useState({
        ename: "",
        email:"",
        remarks:""
    });

    const onChange = (e) => {
        setContactInfo( {...contactInfo,[e.target.id]:e.target.value});
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(contactInfo);
        let {ename,email,remarks} = contactInfo;
        console.log(ename);
        console.log(email);
        console.log(remarks);
    }
    return ( 
        <form className="mt-2" action="">
            <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input id="ename" type="text"
                placeholder="Name"
                value={contactInfo.ename}
                onChange={onChange}
                className="form-control"
                name="name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email"> Email </label>
                <input id="email" type="email"
                placeholder="Email"
                value={contactInfo.email}
                onChange={onChange}
                className="form-control"
                name="email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="remarks"> Remarks </label>
                <input id="remarks" type="remarks"
                placeholder="Remarks"
                value={contactInfo.remarks}
                onChange={onChange}
                className="form-control"
                name="remarks"
                />          
            </div>
            <button type="submit" className="btn btn-primary mt-2"
            disabled={ !contactInfo.ename || !contactInfo.email}
            value="submit" onClick={handleOnSubmit}> Submit </button>
        </form>
     );
};
 
export default Inquiry;