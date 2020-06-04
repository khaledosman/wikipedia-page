import React, { memo } from 'react'

const languages = ['en', 'de', 'ar']
export default memo(function LanguageSwitcher ({ selectedValue, onSelected }) {
  const handleChange = e => {
    e.stopPropagation()
    onSelected(e.target.value)
  }

  return (
    <div>
      <label>
          Pick your favorite language:
        <select value={selectedValue} onChange={handleChange}>
          {languages.map(language => <option value={language} key={language}>{language}</option>)}

        </select>
      </label>
    </div>
  )
})
