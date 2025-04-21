import React, { useState } from "react";
import { Select } from "../ui/select";
import { Button } from "../ui/button";

const SelectExample = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [hasError, setHasError] = useState(false);

  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
    { value: "jp", label: "Japan" },
  ];

  const sizes = [
    { value: "xs", label: "Extra Small" },
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "xl", label: "Extra Large" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCountry) {
      setHasError(true);
      return;
    }

    setHasError(false);
    alert(
      `Form submitted with Country: ${selectedCountry} and Size: ${selectedSize}`
    );
  };

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Select Component Examples</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Basic Select</h3>
          <Select
            options={countries}
            placeholder="Select a country"
            label="Country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Select Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              variant="default"
              options={countries}
              placeholder="Default variant"
              label="Default"
            />
            <Select
              variant="error"
              options={countries}
              placeholder="Error variant"
              label="Error"
              error="This field is required"
            />
            <Select
              variant="success"
              options={countries}
              placeholder="Success variant"
              label="Success"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Select Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              selectSize="sm"
              options={sizes}
              placeholder="Small size"
              label="Small"
            />
            <Select
              selectSize="default"
              options={sizes}
              placeholder="Default size"
              label="Default"
            />
            <Select
              selectSize="lg"
              options={sizes}
              placeholder="Large size"
              label="Large"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Disabled Select</h3>
          <Select
            options={countries}
            placeholder="Disabled select"
            label="Disabled"
            disabled
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Form Example</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Select
              options={countries}
              placeholder="Select a country"
              label="Country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              variant={hasError ? "error" : "default"}
              error={hasError ? "Please select a country" : undefined}
              required
            />

            <Select
              options={sizes}
              placeholder="Select a size (optional)"
              label="Size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            />

            <div className="flex gap-2">
              <Button type="submit" variant="default">
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSelectedCountry("");
                  setSelectedSize("");
                  setHasError(false);
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelectExample;
