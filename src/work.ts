import gsap from 'gsap'

export default function animate() {
  gsap.from('h1', {
    y: -20,
    autoAlpha: 0,
    duration: 0.2,
  })
  gsap.from('.experience', {
    y: 20,
    autoAlpha: 0,
    stagger: 0.2,
  })
}

animate()
