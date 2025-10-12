import startGame from './game'

// Creating links dynamically to avoid scraping by bots
const LINKS = [
  { url: 'https://github.com/mahutt', icon: 'github' },
  { url: 'http://linkedin.com/in/mahutt', icon: 'linkedin' },
]

const linksContainer = document.getElementById('links')
if (linksContainer) {
  for (const link of LINKS) {
    const a = document.createElement('a')
    a.href = link.url
    a.target = '_blank'
    a.rel = 'noopener'
    a.classList.add('transition', 'duration-200', 'hover:scale-110')
    a.onmouseenter = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.classList.add('opacity-50')
      })
      a.classList.remove('opacity-50')
    }
    a.onmouseleave = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.classList.remove('opacity-50')
      })
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'h-8 w-8 fill-current')

    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    use.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      `/icons.svg#${link.icon}`
    )

    svg.appendChild(use)
    a.appendChild(svg)
    linksContainer.appendChild(a)
  }
}

startGame()
