import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function Header() {
  const router = useRouter()
  return (
    <div className='col-12 pt-6 pb-6 upscale-header'>
        <div className='container'>
            <div className='col-12 row d-justify-space-between'>
                <Image src={"/images/upscale_logo.svg"} width={66} height={32} className='cursor-pointer' onClick={()=> router.push("dashboard")}></Image>
                <Image src={"/images/Avatar.png"} height={40} width={40} />
            </div>
        </div>
    </div>
  )
}
