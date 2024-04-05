import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {/* Container for the login form */}
      <div className='w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        {/* Heading for the login */}
        <h1 className='text-3xl font-semibold text-center text-gray-100'>
          Login{" "}
          {/* Styling for "ChatApp" */}
          <span className='text-green-600'>ChatApp</span>
        </h1>

        <form>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text text-white'>Username</span>
 						</label>
 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
							<span className='text-base label-text text-white'>Password</span>
 						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-white'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2'>Login</button>
					</div>
				</form>
      </div>
    </div>

  );
}

export default Login;


//Starter code 

// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         {/* Container for the login form */}
//         <div className='w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//           {/* Heading for the login */}
//           <h1 className='text-3xl font-semibold text-center text-gray-100'>
//             Login{" "}
//             {/* Styling for "ChatApp" */}
//             <span className='text-green-600'>ChatApp</span>
//           </h1>
  
//           <form>
//                        <div>
//                            <label className='label p-2'>
//                                <span className='text-base label-text text-white'>Username</span>
//                            </label>
//                            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//                        </div>
  
//                        <div>
//                            <label className='label'>
//                               <span className='text-base label-text text-white'>Password</span>
//                            </label>
//                           <input
//                               type='password'
//                               placeholder='Enter Password'
//                               className='w-full input input-bordered h-10'
//                           />
//                       </div>
//                       <a href='/' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-white'>
//                           {"Don't"} have an account?
//                       </a>
  
//                       <div>
//                           <button className='btn btn-block btn-sm mt-2'>Login</button>
//                       </div>
//                   </form>
//         </div>
//       </div>
  
//     );
//   }
