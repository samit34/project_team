
'use client'
import react,{ useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ProfileForm from './ProfileForm'

const ProfilePopup = ({ open, setOpen }) => {

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
        />

        <div className="fixed inset-0 lg:inset-x-32 xl:inset-x-20 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
              transition
              className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-2xl xl:max-w-4xl"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>

                <div className="grid w-full">
                  <ProfileForm/>

                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProfilePopup

// import React, { useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
// import { StarIcon } from '@heroicons/react/20/solid'

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   rating: 3.9,
//   reviewCount: 117,
//   href: '#',
//   imageSrc: '/assets/img.jpg', // Use correct path
//   imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: true },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: 'XXL', inStock: true },
//     { name: 'XXXL', inStock: false },
//   ],
// }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// const ProfilePopup = () => {
//   const [open, setOpen] = useState(false)
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2])

//   return (
//     <>
//       {/* Button to Open Modal */}
//       <button
//         onClick={() => setOpen(true)}
//         className="mt-10 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//       >
//         Open Modal
//       </button>

//       <Dialog open={open} onClose={setOpen} className="relative z-10">
//         {/* Backdrop */}
//         <DialogBackdrop className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" />

//         {/* Modal Content */}
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <DialogPanel className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
//             {/* Close Button */}
//             <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
//               <XMarkIcon className="w-6 h-6" />
//             </button>

//             {/* Product Image */}
//             <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-64 object-cover rounded-lg" />

//             {/* Product Info */}
//             <h2 className="mt-4 text-xl font-bold">{product.name}</h2>
//             <p className="text-lg text-gray-700">{product.price}</p>

//             {/* Close Button Inside */}
//             <button
//               onClick={() => setOpen(false)}
//               className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//             >
//               Close
//             </button>
//           </DialogPanel>
//         </div>
//       </Dialog>
//     </>
//   )
// }

// export default ProfilePopup
