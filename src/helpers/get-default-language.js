export function getDefaultLanguage () {
  const lang = (window.navigator.userLanguage || window.navigator.language || 'en-US')
  return lang.split('-')[0]
}
