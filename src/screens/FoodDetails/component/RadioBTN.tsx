import { FormControl , FormControlLabel, Radio, RadioGroup } from "@mui/material"

export const RadioBTN = () =>{
    const options = [
        {value : 'start' , lable : "+$2.30" } , 
        { value: "start1", label: "+$4.70"  },
    { value: "start3", label: "+$2.50"  },
    ]
    return(
        <FormControl>
      
      <RadioGroup
        
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        {options.map((option)=>(
            <FormControlLabel
          value={option.value}
          control={<Radio sx={{color:'#FE724C' ,'&.Mui-checked': {
            color:'#FE724C',
          }}} />}
          label={option.label}
          labelPlacement="start"
          
        />
        ))}
        
        </RadioGroup>
        </FormControl>
    )
}