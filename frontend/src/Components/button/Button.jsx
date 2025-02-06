import React from 'react'

const Button = ({props}) => {
    return (
        <div>
            <button className="px-4 py-2 rounded-3xl bg-gray-200 hover:bg-gray-500 text-gray-800 hover:text-gray-300 text-[14px] mt-1 font-medium">
                {props}
            </button>
        </div>
    )
}

export default Button