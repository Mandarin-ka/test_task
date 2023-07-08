import React from 'react';
import cl from './TextInput.module.css';
import img from './../../../assets/icons/Search.svg';
import { Filter } from '../../FilterPage/Filtration/FilterInterface';

function TextInput({
  type,
  placeholder,
  value,
  setValue,
}: {
  type: string;
  placeholder: string;
  value: Filter;
  setValue: (value: Filter) => void;
}) {
  return (
    <div className={cl.text__block}>
      {type === 'search' && (
        <img src={img} alt='search' className={cl.text__icon} />
      )}
      <input
        type='text'
        placeholder={placeholder}
        className={cl.text__input}
        maxLength={60}
        value={value.query}
        onChange={(e) => {
          e.preventDefault();
          setValue({ ...value, query: e.target.value });
        }}
      />
    </div>
  );
}

export default TextInput;
