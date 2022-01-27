import React, { useContext } from 'react';
import './Redy.css'
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';
import Swal from 'sweetalert2';

const Redy = () => {
  let history = useHistory();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
    fetch('https://islavo.herokuapp.com/addusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'সফলভাবে পেমেন্ট হয়েছে',
            showConfirmButton: false,
            timer: 2000
          })
          history.push('/clicknow')
        }
      })
  }

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className='body'>

      <div className="container">

        <p>বিকাশের payment অপশনে গিয়ে নিচের নাম্বারে ২২ টাকা পেমেন্ট করে নিচের ফরম পূরণ করুন । reference ও counter অপশনে 1 লিখুন  </p>

        <div className='title'>01303920181</div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div class="user-details">

            <div className="input-box">
              <span class="details">ইমেইল</span>
              <input defaultValue={loggedInUser.email} {...register('Email', { required: true })} placeholder=' আপনার ইমেইল' />
            </div>

            <div className="input-box">
              <span class="details">আপনার নাম</span>
              <input {...register('name', { required: true })} placeholder=' আপনার নাম' />
            </div>

            <div className="input-box">
              <span class="details">আপনার মোবাইল</span>
              <input {...register('phone', { required: true })} placeholder=' আপনার মোবাইল' />
            </div>
            <div className="input-box">
              <span class="details">যে নাম্বার থেকে টাকা পাঠিয়েছেন</span>
              <input {...register('bkash_no', { required: true })} placeholder=' বিকাশ নাম্বার' />
            </div>
            <input
              {...register('payment', { required: true })}
              value='paid'
              style={{ display: 'none' }}
            />
          </div>


          <button type='submit' className="btn">ক্লিক করুন</button>


        </form>
      </div>

    </div>
  );
};

export default Redy;
