import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { MdOutlineDashboardCustomize } from "react-icons/md";


const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={FaUserCog} label='Transactions' address='Transactions' />
      <MenuItem icon={MdOutlineDashboardCustomize} label='Manage Clubs' address='manage-clubs' />
    </>
  )
}

export default AdminMenu
