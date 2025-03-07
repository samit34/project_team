
'use client'
import react,{ useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import UserDetail from './UserDetail'

const UserViewDetails = ({ open, setOpen, user }) => {
  return (
    <>
    {/* <Dialog open={open} onClose={setOpen} className="relative z-50"> */}
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">

      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/15 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />

      <div className="fixed inset-0 lg:inset-x-32 xl:inset-x-20 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-2xl xl:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-blue-50 shadow-sm sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full">
                {/* <UserDetail/> */}
                <UserDetail user={user} />

              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </>
  )
}

export default UserViewDetails