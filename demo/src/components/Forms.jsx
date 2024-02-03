import { useState } from "react";

function Forms(){

    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        selectCountry:"",
        StreetAddress:"",
        city:"",
        PostCode:"",
        ByComments:false,
        ByCandidates:false,
        ByOffers:false,
        notificationby:""

    })


    function formChangeHandler(event){
        const{name,value,checked,type}=event.target;
        setFormData( prevData =>{
            return {
                ...prevData, [name]:type==='checkbox'?checked:value
            }
        } )

        
    }

    function formSubmitHandler(event){
        event.preventDefault();
        console.log("Sending Data to XYZ API->",formData);
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <label>First Name</label>
            <br></br>
            <input
                type="text"
                placeholder="Pankaj"
                onChange={formChangeHandler}
                name="firstName"
                value={formData.firstName}
            >
            </input>

            <br></br>
            <label>last Name</label>
            <br></br>
            <input
                type="text"
                placeholder="Singh"
                onChange={formChangeHandler}
                name="lastName"
                value={formData.lastName}
            >
            </input>

            <label>Email Address</label>
            <br></br>
            <input
                type="email"
                placeholder="pt92649@yahoo.com"
                onChange={formChangeHandler}
                name="email"
                value={formData.email}
            >
            </input>

            <br></br>
            <label>Country</label>
            <select
                name="selectCountry"
                onChange={formChangeHandler}
            >
                <option value="india">India</option>
                <option value="US">US</option>
                <option value="Canada">Canada</option>
            </select>

            <br></br>
            <label>Street Address</label>
            <textarea
            type="text"
            placeholder="1234 Main St"
            name="StreetAddress"
            onChange={formChangeHandler}
            value={formData.StreetAddress}
            ></textarea>

            <br></br>
            <label>City</label>
            <br></br>
            <input
                type="text"
                onChange={formChangeHandler}
                name="city"
                value={formData.city}
                placeholder="Faridabad"
            ></input>
            
            <br></br>
            <label>ZIP/Postal Code</label>
            <br></br>
            <input
                type="text"
                onChange={formChangeHandler}
                name="PostCode"
                value={formData.PostCode}
                placeholder="121004"
            ></input>
            
            <br></br>
            <label>By Email</label>

            <div>
                <input
                type="checkbox"
                id="comments"
                name="ByComments"
                checked={formData.ByComments}
                onChange={formChangeHandler}
                ></input>
                <label htmlFor="comments">Comments</label>


                <br></br>
                <input
                type="checkbox"
                id="candidates"
                name="ByCandidates"
                checked={formData.ByCandidates}
                onChange={formChangeHandler}
                ></input>
                <label htmlFor="candidates">Candidates</label>

                <br></br>
                <input
                type="checkbox"
                id="offers"
                name="ByOffers"
                checked={formData.ByOffers}
                onChange={formChangeHandler}
                ></input>
                <label htmlFor="offers">Offers</label>
            </div>

            <div>
                <p>Push Notifications</p>
                <p>These are delivered via SMS to your mobile phone</p>

                <input
                    type="radio"
                    name="notificationby"
                    id="byEmail"
                    onChange={formChangeHandler}
                    value="By-Email"
                    checked={formData.notificationby==='By-Email'}
                ></input>
                <label htmlFor="sameasemail">Same as email</label>

                <input
                    type="radio"
                    name="notificationby"
                    id="NoNotification"
                    onChange={formChangeHandler}
                    value="No-Notification"
                    checked={formData.notificationby==='No-Notification'}
                ></input>
                <label htmlFor="noNotification">No Push Notification</label>
            </div>
    

            <br></br>
            <button>Submit</button>
        </form>
    )
}

export default Forms;