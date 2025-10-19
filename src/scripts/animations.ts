import gsap from 'gsap'

export default function animate() {
  let tl = gsap.timeline()
  tl.from('#last-name', {
    y: 50,
    autoAlpha: 0,
  })
  tl.from(
    '#first-name',
    {
      y: 20,
      autoAlpha: 0,
    },
    '-=0.2'
  )
  tl.from(
    '#links',
    {
      x: 20,
      autoAlpha: 0,
    },
    '-=0.2'
  )
  tl.from(
    '#about',
    {
      y: -20,
      autoAlpha: 0,
    },
    '-=0.2'
  )
}
