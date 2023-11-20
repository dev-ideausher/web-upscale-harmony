import { useRouter } from 'next/router'
import React from 'react'

export default function Tabs(props) {
    const router = useRouter()
    const tabsHandler = (e) => {
        const res = document.querySelectorAll(".menubar li")
        res.forEach(item => {
            item.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        if(e.currentTarget.getAttribute("value")=="upload"){
            router.push("/uploadfile")
        }
        else{
            router.push("/dashboard")
        }
    }
    return (
        <div className='col-12 bg-white upscale-subheader'>
            <div className='container row d-align-end'>
                <ul className='menubar col-12 row'>
                    <li className='row d-align-center active' value="config" onClick={tabsHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M9.33329 1.83334H3.99996C3.64634 1.83334 3.3072 1.97382 3.05715 2.22387C2.8071 2.47392 2.66663 2.81305 2.66663 3.16668V13.8333C2.66663 14.187 2.8071 14.5261 3.05715 14.7762C3.3072 15.0262 3.64634 15.1667 3.99996 15.1667H12C12.3536 15.1667 12.6927 15.0262 12.9428 14.7762C13.1928 14.5261 13.3333 14.187 13.3333 13.8333V5.83334L9.33329 1.83334Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.33331 1.83334V5.83334H13.3333" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.99994 12.5V8.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.99994 10.5H9.99994" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h5 className='ml-2'>Add Config files</h5>
                    </li>
                    <li className='row d-align-center' value="upload" onClick={tabsHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0_14_197)">
                            <path d="M10.6667 11.1667L8.00004 8.5L5.33337 11.1667" stroke="#000" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 8.5V14.5" stroke="#000" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.5933 12.76C14.2435 12.4055 14.7572 11.8446 15.0532 11.1658C15.3493 10.4869 15.4108 9.72883 15.2281 9.01114C15.0454 8.29344 14.629 7.65702 14.0444 7.20231C13.4599 6.7476 12.7406 6.5005 12 6.50001H11.16C10.9582 5.7195 10.5821 4.9949 10.0599 4.38067C9.5378 3.76644 8.8832 3.27858 8.14537 2.95375C7.40754 2.62892 6.60567 2.47558 5.80005 2.50526C4.99443 2.53495 4.20602 2.74688 3.49409 3.12512C2.78216 3.50336 2.16525 4.03808 1.68972 4.68906C1.2142 5.34005 0.892434 6.09037 0.748627 6.88361C0.60482 7.67684 0.64271 8.49236 0.859449 9.26885C1.07619 10.0453 1.46613 10.7626 1.99997 11.3667" stroke="#000" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.6667 11.1667L8.00004 8.5L5.33337 11.1667" stroke="#000" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_14_197">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <h5 className='ml-2'>Upload config files</h5>
                    </li>
                </ul>
            </div>
        </div>
    )
}
