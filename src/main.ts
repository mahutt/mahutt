import animate from './animations'
import startBubble from './bubble'
import setupLinks from './links'
import gsap from 'gsap'
import './components/experience.component'

// Global state
class State {
  public workIsVisible: boolean
  public workTimeline: gsap.core.Timeline | null
  public bubbleTimeline: gsap.core.Timeline | null = null
  constructor() {
    this.workIsVisible = false
    this.workTimeline = null
  }
}

export const state: State = new State()

// Helper to create work animation timeline given bubble that is popped
export function openWorks(bubble: HTMLDivElement, scale: number) {
  console.log('openWorks')
  let tl = gsap.timeline()
  tl.fromTo(
    bubble,
    {
      scale: 1,
    },
    {
      scale: scale,
      duration: 0.4,
      ease: 'power1.out',
    }
  )
    .fromTo(
      ':root',
      {
        backgroundColor: '#27272a',
      },
      {
        backgroundColor: '#ffffff',
        duration: 0.2,
      }
    )
    .fromTo(
      'body',
      {
        backgroundColor: '',
      },
      {
        backgroundColor: '#ffffff',
        duration: 0.2,
      },
      '<'
    )
    .fromTo(
      '#work',
      {
        display: 'none',
      },
      {
        display: 'block',
        duration: 0,
      },
      '<'
    )
    .fromTo(
      '#work-title span',
      {
        x: -20,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.2,
        stagger: 0.1,
      },
      '<'
    )
  tl.fromTo(
    'experience-item',
    {
      y: 20,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.2,
      stagger: 0.1,
    },
    '-=0.2'
  ).fromTo(
    '#return-home',
    {
      x: 20,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.2,
    }
  )
  state.workTimeline = tl
  state.workIsVisible = true
  state.bubbleTimeline?.pause()

  document.getElementById('return-home')?.addEventListener('click', () => {
    tl.reverse().eventCallback('onReverseComplete', () => {
      state.workIsVisible = false
      state.bubbleTimeline?.play()
    })
  })
}

setupLinks()
animate()
state.bubbleTimeline = startBubble()
