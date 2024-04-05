import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectProp {
  placeholder: string
  label: string
  options: { value: string; label: string }[]
  onChange: (e: any) => void
  name: string
}

function SelectComp({
  placeholder,
  options,
  label,
  onChange: handleChange,
  name,
}: SelectProp) {
  return (
    <Select
      name={name}
      onValueChange={(e) => {
        handleChange(e)
      }}
    >
      <SelectTrigger className="w-full h-[4rem] ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="">
          <SelectLabel className="">{label}</SelectLabel>
          {options.map((option, index) => {
            return (
              <SelectItem
                value={option.value}
                key={option.label + index}
                className=""
              >
                {option.label}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectComp
