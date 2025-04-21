import { Select } from "../ui/select";

const SelectExample = () => {
  const sizes = [
    { value: "xs", label: "Extra Small" },
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "xl", label: "Extra Large" },
  ];

  return (
    <div className="space-y-8 p-6">
      <Select options={sizes} placeholder="Small size" />
    </div>
  );
};

export default SelectExample;
