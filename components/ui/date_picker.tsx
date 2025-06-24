"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { Calendar } from "./calendar";

interface props {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  placeholder?: string;
}
const DatePicker: React.FC<props> = ({ date, setDate, placeholder }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex koho-M font-[500]  text-gray-800 items-center justify-between"
        >
          <div className="flex items-center text-sm ">
            <FaRegCalendarAlt size={18} className="mr-3" />
            {placeholder || "Starting Date"}
          </div>
          <GoChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
