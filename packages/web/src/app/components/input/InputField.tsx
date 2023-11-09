'use client';
import React, { useState } from 'react';

type InputFieldProps = {
  name?: string;
  type?: string;
  label: string;
  value?: string | number;
  onBlur?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onlyRead?: boolean;
  className?:string
};

function InputField({
  className,
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  onlyRead,
}: InputFieldProps) {
  const [color, setColor] = useState(false);

  return (
    <div className={`flex pr-2 flex-grow flex-col ${className} text-input `}>
      <label className={`pb-2 `}>{label}</label>
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        readOnly={onlyRead}
        className={`bg-white  rounded-sm border pl-2 ${
          !color ? 'border-[#d9d9d9]' : 'border-[#AD1A1A]'
        } h-[30px] `}
        onChange={onChange}
        onBlur={() => {
          if (onBlur !== undefined) {
            console.log('asfsadjkf');
            if (!onBlur(name, value)) {
              setColor(true);
            } else {
              setColor(false);
            }
          }
        }}
      />
    </div>
  );
}

export default InputField;
