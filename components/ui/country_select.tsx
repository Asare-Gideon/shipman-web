"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { countries } from "@/lib/countries";
const chinaImg = require("../../public/flags/china.png");
const ghImg = require("../../public/flags/gh.png");
const usaImg = require("../../public/flags/usa.png");

interface prop {
  label: string;
  value: string;
  setValue: (val: string) => void;
}

const CountrySelect = ({ label, value, setValue }: prop) => {
  // const { data: countries } = useGetCountriesQuery();
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <div className="flex items-center koho-M font-[500]  text-gray-800">
            {value ? (
              // <Image
              //   src={
              //     countries?.find((country) => country._id === value)
              //       ?.flag || ""
              //   }
              //   alt="img"
              //   height={20}
              //   width={20}
              //   className="mr-1"
              // />
              <></>
            ) : null}
            {value
              ? countries?.find((country) => country.name === value)?.name
              : label}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.name}
                  onSelect={(currentValue: any) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {/* <Image
                    src={country.flag}
                    height={20}
                    width={20}
                    alt="img"
                    className="mr-[5px]"
                  /> */}

                  {country.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CountrySelect;
