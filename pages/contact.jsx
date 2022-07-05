import React from 'react'
import { useState } from 'react'


function Contact() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  function submit(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      desc };
    console.log(data)

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        window.alert('Your details have been submitted');
        setname('');
        setemail('');
        setphone('');
        setdesc('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    const valueChange = (e) => {
      if (e.target.name == 'phone') {
        setphone(e.target.value)
      } else if (e.target.name == 'name') {
        setname(e.target.value)
      } else if (e.target.name == 'email') {
        setemail(e.target.value)
      } else if (e.target.name == 'desc') {
        setdesc(e.target.value)
      }
      
    }



    return (
      <>
        <div className='flex items-center flex-col h-full w-full pt-4 bg-contactUs bg-cover'>

          <h1 className='text-3xl font-bold block'>Contact Us</h1>
          <div>
            <form onSubmit={submit} method='POST' className='w-[40vw] rounded-lg my-6 bg-gray-600 p-8 bg-opacity-60'>

              <div className='formContainer flex flex-col  my-4'>
                <label htmlFor="name" className='text-xl font-semibold'>Name:</label>
                <input onChange={valueChange} value={name} type="text" name='name' id='name' className='w-full border-black border-[1px] rounded-md h-8 px-2 font-sans ' required />
              </div>

              <div className='formContainer flex flex-col my-4 '>
                <label htmlFor="email" className='text-xl font-semibold'>Email:</label>
                <input onChange={valueChange} value={email} type="email" name='email' id='email' className='w-full border-black border-[1px] rounded-md h-8 px-2 font-sans ' required />
              </div>

              <div className='formContainer flex flex-col my-4 '>
                <label htmlFor="phone" className='text-xl font-semibold'>Phone:</label>
                <input onChange={valueChange} value={phone} type="text" name='phone' id='phone' className='w-full border-black border-[1px] rounded-md h-8 px-2 font-sans ' maxLength='10' minLength={10} required />
              </div>

              <div className='formContainer flex flex-col my-4 '>
                <label htmlFor="desc" className='text-xl font-semibold'>Description:</label>
                <textarea onChange={valueChange} value={desc} placeholder='Write you concern here...' type="text" name='desc' id='desc' className='w-full border-black border-[1px] rounded-md h-24 px-2 font-sans ' required />
              </div>


              <button type="submit" value="Contact Us" className="bg-blue-700 text-white px-3 text-md font-semibold cursor-pointer py-2 rounded-md" >Contact Us</button>
            </form>
          </div>
        </div>
      </>
    )
  }

  export default Contact