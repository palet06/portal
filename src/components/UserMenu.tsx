import React from 'react'
import ThemeSwitch from './ThemeSwitcher'

const UserMenu = () => {
  return (
    <div className='flex gap-3 text-white dark:text-mybodytext_dark'>UserMenu
      <ThemeSwitch />
    </div>
  )
}

export default UserMenu