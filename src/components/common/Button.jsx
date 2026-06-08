import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// Theme-matching variants. `primary` uses the cyan accent (same language as links/
// dots/avatar ring) so it reads correctly in both light and dark themes.
const VARIANTS = {
  primary: 'border-2 border-primary text-primary hover:bg-primary/10',
  secondary: 'bg-bg2 text-content hover:text-primary border-2 border-transparent',
}

function Button({ children, to, href, onClick, icon, variant = 'primary', className = '', ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none ${VARIANTS[variant] || VARIANTS.primary} ${className}`

  const inner = (
    <>
      {children}
      {icon}
    </>
  )

  // External link
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    )
  }

  // Internal route
  if (to) {
    return (
      <NavLink to={to} className={classes} {...rest}>
        {inner}
      </NavLink>
    )
  }

  // Plain button
  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {inner}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
}

export default Button
