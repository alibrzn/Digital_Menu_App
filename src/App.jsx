import { useState } from "react";

import NavBar from "./component/NavBar";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
//import IframeMap from "./component/IframeMap";
import Alibrzn from "./component/Alibrzn";
/* ----- Images Menu ----- */
import boroklyimg from './assets/borokly.png'
import watherimg from './assets/water.png'
import badom from './assets/badom.png'
import chicken from './assets/chicken.png'
import kharchang from './assets/kharchang.png'

import Picturecard1 from './assets/img-menu1.png'
import Picturecard2 from './assets/img-menu2.png'
import Picturecard3 from './assets/img-menu3.png'
import Picturecard4 from './assets/img-menu4.png'
import Picturecard5 from './assets/img-menu5.png'
import Picturecard6 from './assets/img-menu6.png'
import Picturecard7 from './assets/img-menu7.png'
import Picturecard8 from './assets/img-menu8.png'

function App() {

  //const [isMapstatus, SetisMapstatus] = useState(false)

  return(
    
    <div className="flex justify-center items-center flex-col gap-40 pt-6 m-0 p-0 min-md:flex-row min-md:flex-wrap">
    
      <NavBar />

      <Menu imgMenu = { Picturecard1 } imgWater = { watherimg } imgborokly = { boroklyimg } title = "فلافل با سالاد" Sale = "270" />
      <Menu imgMenu = { Picturecard2 } imgWater = { chicken } imgborokly = { boroklyimg } title = "گوشت با پنیر فتا" Sale = "870" />
      <Menu imgMenu = { Picturecard3 } imgWater = { watherimg } imgborokly = { boroklyimg } title = "سالاد سبزیجات" Sale = "190" />
      <Menu imgMenu = { Picturecard4 } imgWater = { kharchang } imgborokly = { boroklyimg } title = "بروکلی و سیب‌ تنوری" Sale = "200" />
      <Menu imgMenu = { Picturecard5 } imgWater = { chicken } imgborokly = { boroklyimg } title = "چیکن استیک" Sale = "270" />
      <Menu imgMenu = { Picturecard6 } imgWater = { watherimg } imgborokly = { boroklyimg } title = "سالاد با پنیر فتا" Sale = "400" />
      <Menu imgMenu = { Picturecard7 } imgWater = { chicken } imgborokly = { boroklyimg } title = "سوپ مرغ" Sale = "270" />
      <Menu imgMenu = { Picturecard8 } imgWater = { watherimg } imgborokly = { badom } title = "اوتمیل کلاسیک" Sale = "380" />

      {/* <IframeMap /> */}

      <br></br>

      <Footer IsMapStatus />

      <Alibrzn />

    </div>
    
  );

}

export default App;