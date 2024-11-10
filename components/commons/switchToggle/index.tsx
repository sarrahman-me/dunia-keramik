"use client";
import React from "react";
import { Switch } from "@headlessui/react";

interface SwitchProps {
  setValue: (e: boolean) => void;
  value: boolean;
  label?: string;
}

const SwitchToggle = ({ value, setValue, label }: SwitchProps) => {
  return (
    <div className="flex items-center">
      <Switch
        checked={value}
        onChange={setValue}
        className={`${value
          ? "bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700"
          : "bg-white border"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${value ? "translate-x-6 bg-white" : "translate-x-1 bg-gray-400"
            } inline-block h-4 w-4 transform rounded-full transition`}
        />
      </Switch>
      {label && (
        <label className="ml-2 text-sm md:text-base font-medium select-none text-black first-letter:uppercase">
          {label}
        </label>
      )}
    </div>
  );
};

export default SwitchToggle;
