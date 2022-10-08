import React from 'react'
import FormRegister from '../../components/FormRegister'

function Register() {
  return (
    
         <section classNameName="h-full gradient-form bg-gray-200 md:h-screen ">
  <div className="container py-12 px-6 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="xl:w-10/12">
        <div className="block bg-white shadow-lg rounded-lg">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                 
                  <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">ARE YOU A CLIENT</h4>
                </div>
                
                    <FormRegister/>

              </div>
            </div>
            <div
              className="lg:w-6/12 flex items-center justify-center bg-slate-300 lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
            >
              <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 className="text-xl font-semibold mb-6">ARE YOU A SELLER</h4>
                
                <FormRegister/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </section>
    
  )
}

export default Register