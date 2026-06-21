import LogoPic from '../assets/logo.png'

export default function NavBar() {

    return(
        <div className='z-100 mb-25 w-full mt-0'>

            <div className='div-main'>
                <div className='flex flex-col justify-center items-start'>
                    <h1>کافـه دارت</h1>
                    <p>خیابان باهنر شمالی، نبش باهنر <span>14</span></p>
                </div>
                <img className='w-1/3 h-auto min-md:w-30'
                 src={ LogoPic } alt="Icon-Arrowblackgreen"/>
            </div>
            <div></div>

        </div>
    );

}