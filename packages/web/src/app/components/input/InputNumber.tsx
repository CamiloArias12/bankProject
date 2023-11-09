import { NumericFormat } from "react-number-format"

function InputNumber({name,label,handleChange,value}:{label?:string,name:string,handleChange:any,value:number}) {

   return ( 
   <div className={`flex pr-2 flex-grow flex-col  text-input `}>
      <label className={`pb-2 `}>{label}</label>
      <NumericFormat className="h-[30px] pl-2 border  border-[#d9d9d9] " value={value} thousandSeparator=","
	       renderText={(value) => <b> $ {value}</b>}

	         onValueChange={(values) => {
		     handleChange(name,values.floatValue)
		  }}

	    />
    </div>
    )
}


export default InputNumber
