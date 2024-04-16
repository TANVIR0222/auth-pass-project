import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.confi";
import { useState } from "react";
import { IoMdEyeOff} from "react-icons/io";
import { IoEye } from "react-icons/io5";



const Reagister = () => {
    const [error, setError] = useState('');
    const [succes, setSucces] = useState('');
    const [pass, setpass] = useState('');
    const [showPass, setshowPass] = useState(false);

    const handleRegister = e =>{
      e.preventDefault();
      const email = e.target.email.value;
      const pass = e.target.password.value;
      const accepted = e.target.trems.checked;
      console.log(email,pass, accepted);
      setError(' ');
      setSucces(' ');
      
      if(pass.length < 6){
        console.log('kotin pass de ');
        return;
      }

      else if(!/[A-Z]/.test(pass)){
        setpass('strong pass word ');
        return;
      }
      else if(!accepted){
        setpass('Please accept our condition ');
        return;
      }

      createUserWithEmailAndPassword(auth,email,pass)
      .then(createPass =>{
        console.log(createPass.user);
        setSucces('register Done');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });

    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">     
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          
          <form onSubmit={handleRegister} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="  text-white  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
              </div>
              <div className=" mr-2 flex mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="  text-white  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span onClick={()=> setshowPass(!showPass)}>
                  {
                    showPass ?  <IoEye></IoEye> :  <IoMdEyeOff></IoMdEyeOff>
                  }
                </span>
              </div>
            </div>
                  <br />
                  <input type="checkbox" name="trems" id="trems" />
                  <label className="ml-2" htmlFor="trems">Accept Out trems and Conditions</label>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registratinon
              </button>
            </div>
          </form>
          {
            error && <p className="text-red-600">{error}</p>
          }
          {
            succes && <p className="text-green-600">{succes}</p>
          }
          {
            pass && <p className="text-red-600">{pass}</p>
          }
        </div>
      </div>

    );
};

export default Reagister;