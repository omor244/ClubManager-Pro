import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
import {  FaUserPlus } from 'react-icons/fa'
import { Building2,  Users } from 'lucide-react'
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='Add Event'
        address='add-event'
      />
      
      <MenuItem icon={Users} label='My members' address='my-members' />
      <MenuItem icon={MdHomeWork} label='My events-Register' address='my-register' />
      <MenuItem icon={FaUserPlus} label='Create A Club' address='Create-Club' />
      <MenuItem icon={Building2} label='Clubs Information' address='Clubs-info' />
      
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Events'
        address='manage-events'
      />
    </>
  )
}

export default SellerMenu
