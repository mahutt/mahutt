import gsap from 'gsap'

class ExperienceItem extends HTMLElement {
  public underline: HTMLElement | null = null

  constructor() {
    super()
  }

  connectedCallback() {
    const title = this.getAttribute('title') || ''
    const role = this.getAttribute('role') || ''
    const date = this.getAttribute('date') || ''
    const link = this.getAttribute('link') || ''

    this.innerHTML = `
      <a href="${link}" target="_blank" rel="noopener noreferrer" class="flex flex-col-reverse sm:flex-row flex-wrap justify-between items-start sm:items-center pb-9">
        <div>
            <div class="w-fit pb-[3px]">
              <h2 class="text-2xl font-semibold tracking-tight leading-[22px]">${title}</h2>
              <span class="fluid-underline h-[2px] w-full block bg-zinc-800" />
            </div>
          <p class="text-gray-600">${role}</p>
        </div>
        <p class="text-gray-500 text-sm">${date}</p>
      </a>
    `

    this.underline = this.querySelector('.fluid-underline')
    gsap.set(this.underline, { scaleX: 0, transformOrigin: 'left center' })

    this.onmouseenter = () => {
      document.querySelectorAll('experience-item').forEach((el) => {
        if (!(el instanceof ExperienceItem)) return
        if (el === this) {
          gsap.to(el, { opacity: 1, duration: 0.5 })
          gsap.fromTo(
            this.underline,
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.3, ease: 'power2.out' }
          )
        } else {
          gsap.to(el, { opacity: 0.4, duration: 0.5 })
          gsap.to(el.underline, {
            scaleX: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      })
    }

    this.onmouseleave = () => {
      document.querySelectorAll('experience-item').forEach((el) => {
        if (!(el instanceof ExperienceItem)) return
        gsap.to(el, { opacity: 1, duration: 0.5 })
        gsap.to(el.underline, {
          scaleX: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      })
    }
  }
}

customElements.define('experience-item', ExperienceItem)

export default ExperienceItem
