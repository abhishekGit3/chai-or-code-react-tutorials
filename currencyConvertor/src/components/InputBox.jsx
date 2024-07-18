import React from 'react'

function InputBox({
  label,
  amount,
  OnAmountChange,
  OncurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",  
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm  ${className} `}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              
              <input
                  
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(event) => OnAmountChange && OnAmountChange(Number(event.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(event) => OncurrencyChange && OncurrencyChange(event.target.value)}
                  disabled={currencyDisable}>
                  
                      <option value="usd">
                          usd
                      </option>
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;
