import PictureInformation from '../assets/info-circle.svg'
import PictureRemove from '../assets/remove.svg'
import { useState } from 'react'

export default function Menu(props) {

    const [onclickbtnInformation, SetonclickbtnInformation] = useState(false)

    return (

        <div className='flex flex-col w-full justify-center items-center gap-40 min-md:w-1/4'>

            <div className='w-full flex justify-center items-center'>

                <div className={` div-cards ${onclickbtnInformation ? 'blur-xs' : '' } `}>
                    <img className='img-card'
                    src={ props.imgMenu } alt="picture-card"/>
                    <div className='div-minipic'>
                        <img src={ props.imgborokly } alt="picture-mini"/>
                        <img src={ props.imgWater } alt="picture-mini"/>
                    </div>
                    <div className='div-maintexts'>
                        <h2 className='h2-Card'> { props.title } </h2>
                        <div className='div-maindetails'>
                            <p><span> { props.Sale } </span> تومان</p>
                            <p> | </p>
                            <p><span>180</span> کالری</p>
                        </div>
                    </div>
                    <img onClick={ ()=> SetonclickbtnInformation(!onclickbtnInformation) }
                    className='img-information'
                     src={ PictureInformation } alt="picture-information"/>
                </div>


                {/* <div className={` div-cardsBackblur ${onclickbtnInformation ? 'blur-xs' : '' } `}>
                    
                </div> */}


                <div 
                className={ onclickbtnInformation ? 'div-cards div-cardsBack' : 'class-hidden' }>
                    <p className='w-10/12'>
                        خیار، گوجه فرنگی، فلفل دلمه ای سبز، پیاز قرمز، زیتون و پنیر فتا
                    </p>
                    <p className='p-details'>
                        روغن زیتون، سرکه شراب قرمز، خردل دیژون، سیر و پونه کوهی خشک
                    </p>
                    <div className='flex flex-row gap-2'>
                        <button className='btn-cardOne'>وگن</button>
                        <button className='btn-cardTwo'>بدون گلوتن</button>
                        <button className='btn-cardThree'>لاکتوز</button>
                    </div>
                    <img onClick={ ()=> SetonclickbtnInformation(!onclickbtnInformation) }
                        className='img-closed'
                         src={ PictureRemove } alt="picture-information"/>
                </div>
            </div>





            



        </div>

    );
}