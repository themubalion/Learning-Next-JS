import React from 'react'
import { useState } from 'react'


function Contact() {

  const submit = (e) => {
    const data = {name, phone, email , desc};
    
    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      }).then(console.log(data));
      
      e.preventDefault()
  }

  const valueChange = (e) => {
    if (e.target.name == 'phone') {
      setphone(e.value)
    } else if (e.target.name == 'name') {
      setname(e.value)
    } else if (e.target.name == 'email') {
      setemail(e.value)
    } else if (e.target.name == 'desc') {
      setdesc(e.value)
    }

  }

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  return (
    <>
      <div className='flex items-center flex-col h-full w-full pt-4 bg-contactUs bg-cover'>

        <h1 className='text-3xl font-bold block'>Contact Us</h1>
        <div>
          <form  className='w-[40vw] rounded-lg my-6 bg-gray-600 p-8 bg-opacity-60'>

            <div className='formContainer flex flex-col  my-4'>
              <label htmlFor="name" className='text-xl font-semibold'>Name:</label>
              <input onChange={valueChange} value={name} type="text" name='name' id='name' className='w-full border-black border-[1px] rounded-md h-8 px-2 font-sans '  />
            </div>

            <div className='formContainer flex flex-col my-4 '>
              <label htmlFor="email" className='text-xl font-semibold'>Email:</label>
              <input onChange={valueChange} value={email} type="email" name='email' id='email' className='w-full border-black border-[1px] rounded-md h-8 px-2 font-sans '  />
            </div>

            <div className='formContainer flex flex-col my-4 '>
              <label htmlFor="phone" className='text-xl font-semibold'>Phone:</label>
              <input onChange={valueChange} value={phone} type="text" name='phone' id='phone' className='w-full border-black border-[1px] rounded-md h-8 px-2 font-sans '  maxLength='10' minLength={10} />
            </div>

            <div className='formContainer flex flex-col my-4 '>
              <label htmlFor="desc" className='text-xl font-semibold'>Description:</label>
              <textarea onChange={valueChange} value={desc} placeholder='Write you concern here...' type="text" name='desc' id='desc' className='w-full border-black border-[1px] rounded-md h-24 px-2 font-sans '  ></textarea>
            </div>

            <button onclick={submit.bind} type="submit" value={"Contact us"} className="bg-blue-700 text-white px-3 text-md font-semibold cursor-pointer py-2 rounded-md  " >Contact us</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Contact