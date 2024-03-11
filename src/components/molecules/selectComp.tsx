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
  onChange: (e: any) => void
  name: string
}

function SelectComp({ placeholder, options, label, onChange: handleChange, name }: SelectProp) {
  return (
    <Select
      name={name}
      onValueChange={(e) => {
        handleChange(e)
      }}>
      <SelectTrigger className="w-full h-[4rem] text-[1.6rem]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-[1.6rem]">
          <SelectLabel className="text-[1.6rem]">{label}</SelectLabel>
          {options.map((option, index) => {
            return <SelectItem value={option.value} key={option.label + index} className="text-[1.6rem]">{option.label}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select >
  )
}

export default SelectComp