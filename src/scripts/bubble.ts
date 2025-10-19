import { openWorks } from './main'
import gsap from 'gsap'

const spawn = (): HTMLDivElement => {
  const div = document.createElement('div')
  div.style.width = '80px'
  div.style.height = '80px'
  div.classList.add('rounded-full', 'bg-white', 'fixed', 'z-10')

  div.onmousedown = () => {
    const rect = div.getBoundingClientRect()

    const oldRadius = rect.width / 2
    const distToLeft = rect.left + oldRadius

    /* We use screen.width and screen.height so that we guarantee to cover the screen on mobile (in case the viewport shrinks). */
    const distToRight = window.screen.width - rect.right + oldRadius
    const distToTop = rect.top + oldRadius
    const distToBottom = window.screen.height - rect.bottom + oldRadius

    const maxHorizontal = Math.max(distToLeft, distToRight)
    const maxVertical = Math.max(distToTop, distToBottom)
    const distToCorner = Math.sqrt(
      maxHorizontal * maxHorizontal + maxVertical * maxVertical
    )

    const BUFFER = 20 // To make sure we cover the whole screen
    const newRadius = distToCorner + BUFFER
    const scale = newRadius / oldRadius

    openWorks(div, scale)
  }

  document.body.appendChild(div)
  return div
}

const startBubble = (): gsap.core.Timeline => {
  const randomLeft = (): string =>
    `${Math.random() * (window.innerWidth - 80)}px`

  const bubbleTimeline = gsap.timeline({
    paused: true,
    repeat: -1,
    onRepeat: () => {
      gsap.set(bubble, {
        left: randomLeft(),
      })
    },
    delay: 2,
  })
  const bubble = spawn()

  gsap.set(bubble, {
    left: randomLeft(),
  })

  bubbleTimeline.fromTo(
    bubble,
    {
      top: 'calc(100vh + 80px)',
    },
    {
      top: '-80px',
      duration: 8,
      ease: 'none',
    }
  )
  bubbleTimeline.play()
  return bubbleTimeline
}

export default startBubble
