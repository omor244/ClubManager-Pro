import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
import {  FaUserPlus } from 'react-icons/fa'
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='Add Event'
        address='add-event'
      />
      
      <MenuItem icon={MdHomeWork} label='My members' address='my-inventory' />
      <MenuItem icon={MdHomeWork} label='My events-Register' address='my-register' />
      <MenuItem icon={FaUserPlus} label='Create A Club' address='Create-Club' />
      <MenuItem icon={FaUserPlus} label='Clubs Information' address='Clubs-info' />
      
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Events'
        address='manage-events'
      />
    </>
  )
}

export default SellerMenu
