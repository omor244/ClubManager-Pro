import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItem'
import { MdEventNote } from 'react-icons/md'
import { FaRegBuilding } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const CustomerMenu = () => {


 

  return (
    <> 
    
      <MenuItem icon={MdEventNote} label='My Events ' address='My-events' />
      <MenuItem icon={FaRegBuilding} label='My Clubs ' address='my-clubs' />
      <MenuItem icon={RiMoneyDollarCircleFill} label='Payment History' address='Payment-History' />
      <MenuItem icon={GrUserAdmin} label='Become A Manager' address='BecomeAManager' />

 
    </>
)
}

export default CustomerMenu
