import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

const Feedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] =useState({
    name:'',
    email : '',
    message : '',
  })

  const saveData = (e)=>{
        e.preventDefault();
        //console.log(fullname, email, message)
        Swal.fire({
            title: 'success',
            text: 'Form submitted ',
            icon: 'success',
            confirmButtonText: 'Thank you'
        })
        setFormData({
          name:'',
          email : '',
          message : '',
        })
    }

    const data = (e) => {
          const input = e.target
          const value = input.value

          const key = input.name
          setFormData({
            ...formData,
            [key] : value,
          })
    }

  const testimonials = [
    {
      name: "Pritam Kumar",
      role: "CSE_2k22",
      quote: "Joining the Coding Club was transformative! Engaging lessons and supportive community enhanced my coding skills...",
      image: "/images/5.png"
    },
    {
      name: "Rahul Maurya",
      role: "CSE_2k22",
      quote: "Joining the Coding Club was transformative! Engaging lessons and supportive community enhanced my coding skills...",
      image: "/images/5.png"
    },
    {
      name: "Vikram Kumar",
      role: "CSE_2k22",
      quote: "Joining the Coding Club was transformative! Engaging lessons and supportive community enhanced my coding skills...",
      image: "/images/5.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='mb-8 '>
        <h1 className='text-4xl font-semibold text-center mb-4 '> What's people Says </h1>
        <div className=" grid md:grid-cols-2 gap-8 md:gap-0 justify-center items-center font-sans relative md:w-10/12 w-full  mx-auto mt-12">
      {/* Added padding to the grid container to accommodate the overflowing image */}

      
      <div >
        <div className="bg-white rounded-2xl shadow-xl md:w-[400px] md:h-[300px] h-[400px] relative p-5 flex mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row items-center p-5 transition-opacity duration-800 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-white p-2 rounded-2xl shadow-md md:mr-3 md:ml-[-100px] z-500 mx-auto ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[120px] h-[120px] rounded-2xl object-cover "
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                <h4 className="text-base text-gray-500 mb-1">{testimonial.role}</h4>
                <p className="text-base text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}

          {/* Dots navigation */}
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'h-5 w-2 rounded bg-[#00eaff]'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=' bg-white md:w-7/12 w-full  mx-auto rounded-lg p-8 '>
        {/* <p className=' text-black text-lg font-semibold '> It's been very helpful for us listen from you !! </p> */}

        <form 
        className=' space-y-2 '
        onSubmit={saveData}
        >
          <div className='space-y-1 '>
            <label className='text-black font-semibold '> Full Name  </label>
            <input
              placeholder='Enter Your Name'
              name='fullname'
              onChange={data}
              required
              className=' border rounded-md p-2 text-black block w-full '
            />
          </div>

          <div className='space-y-1 '>
            <label className='text-black font-semibold '> Email  </label>
            <input
              placeholder='example@mail.com'
              name='fullname'
              type='email'
              required
              onChange={data}
              className=' border rounded-md p-2 text-black block w-full '
            />
          </div>

          <div className='space-y-1 '>
            <label className='text-black font-semibold '> Message  </label>
            <textarea
              placeholder='Suggest Us '
              name='fullname'
              required
              rows={1}
              onChange={data}
              className=' border rounded-md p-2 text-black block w-full '
            />
          </div>
          <button className=' text-black bg-cyan-400 border border-black rounded-full px-8 py-1 font-semibold text-lg ' 
            > Tell Us  </button>
        </form>
        
      </div>
        </div>
             
    </div>
  );
};

export default Feedback;