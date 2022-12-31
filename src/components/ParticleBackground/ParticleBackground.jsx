import React, { useState, useLayoutEffect } from 'react'
import Particles from 'react-tsparticles'
import {
  particlesConfigDark,
  particlesConfigLight,
} from './particles-config.js'
import './ParticleBackground.scss'

const ParticleBackground = () => {
  const [particleColor, setParticleColor] = useState(particlesConfigLight)
  const [particleKey, setParticleKey] = useState(4)

  const dataTheme = document.querySelector('[data-theme]')

  const setAndHandleThemeChange = () => {
    const storedTheme = localStorage.getItem('theme')

    storedTheme === 'dark'
      ? setParticleColor(particlesConfigDark)
      : setParticleColor(particlesConfigLight)
  }

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      setParticleKey(particleKey + 1)
    }
  }

  useLayoutEffect(() => {
    setAndHandleThemeChange()

    document.addEventListener('visibilitychange', () =>
      handleVisibilityChange()
    )
    dataTheme.addEventListener('change', () => setAndHandleThemeChange())

    return () => {
      document.removeEventListener('visibilitychange', () =>
        handleVisibilityChange()
      )
      dataTheme.removeEventListener('change', () => setAndHandleThemeChange())
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Particles
      id="tsparticles-custom"
      key={particleKey}
      options={particleColor}
      style={{ position: 'absolute' }}
    />
  )
}

export default ParticleBackground
