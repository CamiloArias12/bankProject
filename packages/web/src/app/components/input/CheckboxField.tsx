type CheckBoxThirdsProps = {
  isChecked: boolean
  onChange: any
  name: string
  label: string
}

function CheckBoxField({
  label,
  isChecked,
  onChange,
  name
}: CheckBoxThirdsProps) {
  return (
    <>
      <div className="flex flex-row items-center pl-4">
        <div
          className={`h-4 w-4  rounded-[50%] border border-[#054818] ${
            isChecked ? 'bg-[#054818]' : 'bg-white'
          }`}
          onClick={() => {
            onChange(name, !isChecked)
          }}
        />
        <label className="pl-3 text-input">{label}</label>
      </div>
    </>
  )
}

export default CheckBoxField
