import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Check, ChevronDown } from "lucide-react";
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

interface props {
  labelNode?: React.ReactNode;
  value: string;
  setValue: (val: string) => void;
  searchPlaceholder?: string;
  placeholder?: string;
  listItems: { label: string; value: string; image?: string }[];
}
const Combobox: React.FC<props> = ({
  setValue,
  value,
  labelNode,
  searchPlaceholder,
  listItems,
  placeholder,
}) => {
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
            {labelNode || (
              <>
                {value && (
                  <Image
                    src={
                      listItems.find((item) => item.value === value)?.image ||
                      ""
                    }
                    alt="img"
                    height={20}
                    width={20}
                    className="mr-1"
                  />
                )}
                <p>
                  {listItems.find((item) => item.value === value)?.label ||
                    placeholder ||
                    "Search"}
                </p>
              </>
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder || "Search..."} />
          <CommandList>
            <CommandEmpty>None found</CommandEmpty>
            <CommandGroup>
              {listItems.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.image && (
                    <Image
                      src={item.image}
                      height={20}
                      width={20}
                      alt="img"
                      className="mr-[5px]"
                    />
                  )}

                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
