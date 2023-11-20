import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function Login() {
  const router = useRouter()
  return (
    <div className='container row h-per-100 d-align-center d-justify-center'>
        <div className='col-12 row d-flex-column d-align-center'>
            <Image src="/images/Upscale-Enclave.svg" width={146} height={72}></Image>
            <h1 className='f-600 col-12 row d-justify-center mt-8'>Sign In to Upscale Enclave</h1>
            <div className='login_module p-6'>
              <h4 className='mb-4'>Username</h4>
              <input className='' type='email' />
              <div className='row d-align-center d-justify-space-between mb-4 mt-6'>
                <h4 className=''>Password</h4>
                <button className='btn-default h5 text-primary f-600'>Forgot Password ?</button>
              </div>
              <input className='' type='password' />
              <button className='mt-8 btn btn-primary col-12' onClick={()=> router.push("/dashboard")}>
                Sign In
              </button>
            </div>
        </div>
    </div>
  )
}
