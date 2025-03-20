import React from 'react';

const AddClientReview = () => {
    return (
        <div className='flex items-center justify-center'>
            <form className="md:w-1/2 w-full flex flex-col gap-4 items-center justify-center iansui-font">
                <h2 className="text-2xl font-semibold">Publish Your Comment.</h2>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    <input type="input" name='name' required placeholder="Name" pattern="[A-Za-z][A-Za-z0-9\-]*" title="Only letters, numbers or dash" />
                </label>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
                    <input type="url" name='photo' required placeholder="Photo URL" pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$" title="Must be valid URL" />
                </label>
                    <textarea type="text" placeholder="Message !!!" className='textarea textarea-info  resize-none' rows={8}  required/>
                <input type="submit" value="Post Review" className='btn btn-accent font-semibold text-sm rounded-lg hover:bg-transparent hover:border-2 hover:border-[#a5357c]'/>
            </form>
        </div>
    );
};

export default AddClientReview;