const SPAWN_INTERVAL = 4000

// Preload the splash image
const splashImage = new Image()
splashImage.src = '/splash.svg'

let lastSpawn = 0

const spawn = () => {
  const div = document.createElement('div')
  div.classList.add(
    'w-20',
    'h-20',
    'rounded-full',
    'bg-red-500',
    'float-animation'
  )
  div.style.left = `${Math.random() * (window.innerWidth - 80)}px`

  div.onmousedown = () => {
    const rect = div.getBoundingClientRect()
    const splash = document.createElement('img')
    splash.src = '/splash.svg'
    splash.style.position = 'absolute'
    splash.style.left = `${rect.x + rect.width / 2}px`
    splash.style.top = `${rect.y + rect.height / 2}px`
    splash.style.width = '120px'

    const rotation = Math.random() * 360
    splash.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`

    document.body.removeChild(div)
    document.body.appendChild(splash)
  }

  document.body.appendChild(div)

  div.addEventListener('animationend', () => {
    document.body.removeChild(div)
  })
}

const startGame = () => {
  const loop = (now: number) => {
    if (lastSpawn === 0) lastSpawn = now
    if (now - lastSpawn >= SPAWN_INTERVAL) {
      spawn()
      lastSpawn = now
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
}

export default startGame
