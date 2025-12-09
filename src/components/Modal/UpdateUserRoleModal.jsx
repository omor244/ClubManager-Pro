import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'

const UpdateUserRoleModal = ({ isOpen, closeModal, refetch, user }) => {
  const axiossecure = useAxiosSecure()
   console.log(user)
  const [updatedRole, setUpdatedRole] = useState(user?.role)

  console.log(updatedRole)
 
  const handelupdateuser = async () => {
    try {
      const updateinfo = {
        email: user?.email,
        role: updatedRole,
      };

      await axiossecure.patch('/update-role', updateinfo);


      toast.success("User role updated!");
      refetch();
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Something went wrong!");
    }
    finally {
      closeModal()
    }



  }



  return (
    <>
      <Dialog
        open={isOpen}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={closeModal}
      >
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl'
            >
              <DialogTitle
                as='h3'
                className='text-base/7 font-medium text-black'
              >
                Update User Role
              </DialogTitle>
              <form>
                <div>
                  <select
                    value={updatedRole}
                    onChange={e => setUpdatedRole(e.target.value)}
                    className='w-full my-3 border border-gray-200 rounded-xl px-2 py-3'
                    name='role'
                    id=''
                  >
                    <option value='member'>Member</option>
                    <option value='manager'>Manager</option>
                    <option value='admin'>Admin</option>
                  </select>
                </div>
                <div className='flex mt-2 justify-around'>
                  <button
                    onClick={handelupdateuser}
                    type='button'
                    className='cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                  >
                    Update
                  </button>
                  <button
                    type='button'
                    className='cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default UpdateUserRoleModal
