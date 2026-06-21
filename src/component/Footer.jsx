import iconSale from '../assets/iconSale.svg'
import iconInstagram from '../assets/iconInstagram.svg'
import iconPhone from '../assets/iconPhone.svg'
import iconLocation from '../assets/iconLocation.svg'

export default function Footer(props) {
    return(
        <div className='footer'>
            <a href="">
                <img className='icon-footer' src = { iconSale } alt=""/>
            </a>
            <a href="https://www.instagram.com/alib_rzn?utm_source=qr">
                <img className='icon-footer' src = { iconInstagram } alt=""/>
            </a>
            <a  href="tel:09055513278">
                <img className='icon-footer' src = { iconPhone } alt=""/>
            </a>
            <a onClick={ props.IsMapStatus }>
                <img className='icon-footer' src = { iconLocation } alt=""/>
            </a>
        </div>
    );
}