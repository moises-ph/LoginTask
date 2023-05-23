import { useState, useRef, useEffect } from "react"
import { CheckUserExists } from "../Services/CheckUserExists";
import { LoginUser } from "../Services/LoginService";
import { RegisterUser } from "../Services/RegisterService";

function Home() {

    const [isRegistered, setRegistered] = useState(true);
    const [submited, setSubmited] = useState(false);
    const [putEmail, setPutEmail] = useState(false);
    const User = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (e : any)  => {
        e.preventDefault();
        console.log(User.current!.value);
        if(!submited) {
            let regExp = RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'g')
            if(User.current!.value.match(regExp)) setPutEmail(true);
            setRegistered(CheckUserExists(User.current!.value).exists);
            setSubmited(true);
        }
        else{
            const form : FormData = new FormData(e.target);
            const userInfo = Object.fromEntries(form);
            console.log(isRegistered ? LoginUser(userInfo) : RegisterUser(userInfo));
        }
    }
    

    const alreadySubmited = () => submited

    return (
    <>
        <main className='overscroll-none h-[87vh] flex flex-col items-center justify-end bottom-0 bg-[#111b21] absolute w-full'>
            <section className='h-full bg-white w-3/5 z-10 gap-4 rounded p-5'>
                <h1 className="text-2xl text-slate-700 homeTitle">Use this Whatsapp Clone Signing In or Signing Up below!</h1>
                <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                    <h2 className="text-2xl font-semibold text-slate-700">Login or Sign Up</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-3 rounded bg-slate-100">
                        <div className="flex flex-col">
                            <label htmlFor="user" className="text-slate-700 font-medium">Email or Phone Number</label>
                            <input name="user" ref={User} id="user" className="w-60 rounded shadow" />
                        </div>
                        {alreadySubmited() && 
                        <>
                            {isRegistered ? 
                            <> 
                                <div className="flex flex-col">
                                    <label htmlFor="pass" className="text-slate-700 font-medium">Password</label>
                                    <input name="password" id="pass" className="w-60 rounded shadow" />
                                </div>
                            </> 
                            : 
                            <>
                                <div className="flex flex-col">
                                    <label htmlFor="username" className="text-slate-700 font-medium">username</label>
                                    <input name="username" id="username" className="w-60 rounded shadow" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-slate-700 font-medium">Name</label>
                                    <input name="name" id="name" className="w-60 rounded shadow" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="lastname" className="text-slate-700 font-medium">Lastname</label>
                                    <input name="lastname" id="lastname" className="w-60 rounded shadow" />
                                </div>
                                <div className="flex flex-col">
                                    {putEmail ?
                                        <>
                                            <label htmlFor="phonenumber" className="text-slate-700 font-medium">Phone Number</label>
                                            <input name="phonenumber" type="number" id="phonenumber" className="w-60 rounded shadow" />
                                        </>
                                        :
                                        <>
                                            <label htmlFor="email" className="text-slate-700 font-medium">Email</label>
                                            <input name="email" id="email" type="email" className="w-60 rounded shadow" />
                                        </>
                                    }
                                </div>
                            </>
                            }
                        </>
                        }
                        <button className="w-40 bg-green-600 rounded text-center text-slate-100 font-semibold shadow hover:scale-110 transition" type="submit">{submited ? isRegistered ? 'Sign In' : 'Sign Up' : 'Send'}</button>
                    </form>
                </div>
            </section>
        </main>
    </>
    )
}

export default Home