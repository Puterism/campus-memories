import React, { useState } from 'react';

interface Options {
  numberOnly?: boolean;
}

const isNumeric = (value: string): boolean => !isNaN(parseFloat(value)) && isFinite(+value);

const useInput = (initialValue: string, { numberOnly }: Options = { numberOnly: false }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value === '') setValue(event.target.value);
    if (numberOnly && !isNumeric(event.target.value)) return;

    setValue(event.target.value);
  };

  return [value, handleChange, setValue] as const;
};

export default useInput;
