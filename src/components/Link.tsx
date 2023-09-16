import { Link as ReactRouterLink } from 'react-router-dom'
import { ReactNode } from 'react'

interface LinkProps {
  path: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}

const Link = ({ className, path, children, onClick }: LinkProps) => {
  return (
    <ReactRouterLink
      to={path}
      onClick={onClick}
      className={`text-3xl font-bold ${className}`}
    >
      {children}
    </ReactRouterLink>
  )
}

export default Link
