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
  options: { value: string, label: string }[]
  onChange: () => void
}

function SelectComp({ placeholder, options, label, onChange: handleChange }: SelectProp) {
  return (
    <Select>
      <SelectTrigger className="w-full h-[4rem] text-[1.6rem]" onChange={handleChange}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-[1.6rem]">
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => {
            return <SelectItem value={option.value} key={option.label}>{option.label}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectComp