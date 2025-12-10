import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'
const SellerOrderDataRow = ({ manageEvent, refetch }) => {

  let [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const axiosSecure = useAxiosSecure()

  const { title, email, status, location, _id } = manageEvent

  const handelupdatestatus = () => {
    
   
    axiosSecure.patch(`/events/${_id}/update`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount) {
          toast.success('Approved')
           refetch()
        }
    })
    
  }

  const handeldelete = () => {

    axiosSecure.delete(`/events/${_id}/delete`)
      .then(res => {
        console.log(res.data)
        refetch()
        toast.success('successfully Deleted')
      })
      .catch(err => {
      console.log(err)
    })
  }


  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{ title}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{ email}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{ location}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className={` ${status === "approved" ? 'text-green-500' : 'text-red-500'} `}>{ status}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center gap-2'>
     
          <button
    
            className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold  leading-tight'>
         
            <span onClick={handelupdatestatus} className='relative btn text-green-900'>approved</span>
            <span onClick={handeldelete} className='relative btn text-red-400'>Cancel </span>
          </button>
        </div>
        <DeleteModal isOpen={isOpen} closeModal={closeModal} />
      </td>
    </tr>
  )
}

export default SellerOrderDataRow
