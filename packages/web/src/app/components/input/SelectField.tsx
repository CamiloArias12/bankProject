import React, { use, useState } from 'react'

type SelectFieldProps = {
  name: string
  label: string
  value: string
  country?: string
  state?: string
  options: any
  setCountry?: any
  setState?: any
  image?: boolean
  children?: React.ReactNode
  handleGeneralInformation: any
}

function SelectField({
  name,
  label,
  value,
  options,
  image,
  children,
  handleGeneralInformation,
  country,
  setCountry,
  setState
}: SelectFieldProps) {
  const [toggle, setToggle] = useState<boolean>(false)
  const [img, setImg] = useState<String>('CO')
  const [text, setText] = useState(
    options
      ? options.map((option: any) => {
          option.id === value
          return option.name
        })
      : ''
  )
  return (
    <div className="flex flex-col relative text-input">
      <label className=" pb-2">{label}</label>
      <button
        className={`bg-white relative w-full flex  items-center  border border-gray-350  rounded-sm pl-3  text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500  h-[30px] mb-1`}
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <span>
          {image && (
            <img
              className="inline mr-2 h-4 rounded-sm"
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
            />
          )}
          {text}
        </span>
      </button>
      <div className={`flex flex-grow  ${!toggle && 'hidden'} `}>
        <ul className=" flex absolute w-full z-10  flex-grow bg-white shadow-lg max-h-100 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex-grow  flex flex-col max-h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll text-input">
            {toggle && options ? (
              options.map((option: any) => (
                <li
                  key={option.id}
                  className=" flex-grow text-gray-900 cursor-default select-none relative py-2  flex items-center hover:bg-[#f8fafb] transition"
                  onClick={() => {
                    setToggle(!toggle)
                    if (setCountry) setCountry(option.iso2)
                    if (setState) setState(option.iso2)
                    handleGeneralInformation(name, option.id)
                    setText(option.name)
                    setImg(option.iso2)
                  }}
                >
                  {image && (
                    <img
                      className="h-4 text-gray-900 cursor-default select-none relative px-2 flex items-center hover:bg-gray-50 transition"
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${option.iso2}.svg`}
                    />
                  )}
                  <span className="font-normal truncate">{option.name}</span>
                </li>
              ))
            ) : (
              <div className="flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center">
                  {' '}
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default SelectField
