import gsap from 'gsap'

export default function animate() {
  let tl = gsap.timeline()
  tl.to('#last-name', {
    y: 0,
    autoAlpha: 1,
  })
  tl.to(
    '#first-name',
    {
      y: 0,
      autoAlpha: 1,
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
  tl.to(
    '#about',
    {
      y: 0,
      autoAlpha: 1,
    },
    '-=0.2'
  )
}
