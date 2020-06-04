import React, { memo, useState, useTransition, useEffect } from 'react'
import LanguageSwitcher from './components/LanguageSwitcher'
import WikipediaPage from './components/WikipediaPage'
import { getSummary } from './helpers/wikipedia-api-helpers'
import { getDefaultLanguage } from './helpers/get-default-language'
import './App.css'
import { Notifier } from './components/Notifier'
import { cachedGet } from './helpers/cached-get'

function App () {
  const [language, setLanguage] = useState(getDefaultLanguage())
  const [phrase] = useState('Linkin Park')
  const [wikipediaInfo, setWikipediaInfo] = useState({ image: '', content: '' })
  const handleSelected = selectedLanguage => {
    setLanguage(selectedLanguage)
  }

  useEffect(() => {
    getSummary(phrase, language)
      .then((res) => {
        setWikipediaInfo({ content: res.extract, image: res.thumbnail.source })
        cachedGet(res.thumbnail.source) // cache the image
      })
    return () => {
      // ~TODO cancel axios request
    }
  }, [language, phrase])
  return (
    <div className='App'>
      <Notifier />
      <header className='App-header' />
      <main>
        <LanguageSwitcher selectedValue={language} onSelected={handleSelected} />
        {wikipediaInfo.content && <WikipediaPage phrase={phrase} image={wikipediaInfo.image} content={wikipediaInfo.content} />}
      </main>
    </div>
  )
}

export default memo(App)
