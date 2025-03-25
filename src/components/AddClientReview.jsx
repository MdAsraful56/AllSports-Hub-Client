import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddClientReview = () => {


    const { user } = useContext(AuthContext);


    const handleSubmit = (e) => {
        // e.preventDefault();
        e.preventDefault(); // Stops the form from submitting

        
        // const message = e.target.message.innerHTML;
        // const message = e.target.message.value;
        const message = document.getElementById('message').value;
        // const message = e.target.elements.message.value; 
        // console.log(message)


        const name = user?.displayName;
        const email = user?.email;
        const photo = user?.photoURL;

        const review = {name, email, photo, message};

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
            })
    }



    return (
        <div className='flex items-center justify-center'>
            <form className="md:w-1/2 w-full flex flex-col gap-4 items-center justify-center iansui-font">
                <h2 className="text-2xl font-semibold">Publish Your Comment.</h2>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    <input type="input" className='' defaultValue={user?.displayName} name='name' required placeholder="Name" pattern="[A-Za-z][A-Za-z0-9\-]*" title="Only letters, numbers or dash" />
                </label>
                    <textarea type="text" name='message' id='message' placeholder="Message !!!" className='textarea textarea-info  resize-none' rows={8}  required/>
                {/* <input onSubmit={handleSubmit} type="submit" value="Post Review" className='btn btn-accent font-semibold text-sm rounded-lg hover:bg-transparent hover:border-2 hover:border-[#a5357c]'/> */}
                <button onClick={handleSubmit} className="btn">Submit</button>
            </form>
        </div>
    );
};

export default AddClientReview;