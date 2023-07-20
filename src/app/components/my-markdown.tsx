import React from 'react'

const veryFancyAI = (url: string) => {
    const education: string[] = ['www.google.com', 'www.wikipedia.org']
    const social: string[] = ['www.facebook.com', 'www.instagram.com', 'www.reddit.com', ]
    const movies: string[] = ['www.netflix.com']
    const shopping: string[] = ['www.amazon.com', 'www.ebay.com']
    const renting: string[] = ['www.airbnb.com']

    if (education.includes(url)) {
        return '🏫'
    } else if (social.includes(url)) {
        return '🫂'
    } else if (movies.includes(url)) {
        return '📽️'
    } else if (shopping.includes(url)) {
        return '🛒'
    } else if (renting.includes(url)) {
        return '🏠'
    } else {
        return '🌐'
    }
}


const MyMarkdown = ({ text }: { text: string }) => {
  const linkRegex = /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;
  const parts = []

  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, linkText] = match
    const matchStart = match.index
    const matchEnd = matchStart + fullMatch.length
    const linkUrl = linkText.startsWith('http') || linkText.startsWith('https://') ? linkText : `https://${linkText}`
    const emoji = veryFancyAI(linkText)

    if (lastIndex < matchStart) {
      parts.push(text.slice(lastIndex, matchStart))
    }

    parts.push(
      <a
        target='_blank'
        rel='noopener noreferrer'
        className='break-words underline underline-offset-2 text-blue-600'
        href={linkUrl}>
        {linkText} 
        <span className='text-2xl border-2 p-2'>{emoji}</span>
      </a>
    )

    lastIndex = matchEnd
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>{part}</React.Fragment>
      ))}
    </>
  )
}

export default MyMarkdown