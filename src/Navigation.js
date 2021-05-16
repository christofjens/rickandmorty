import './Navigation.css'
import NavigationButton from './NavigationButton'

export default function Navigation({ navItems, activePage, setActivePage }) {
  return (
    <nav className="Navigation">
      {navItems.map(navItem => (
        <NavigationButton
          key={navItem}
          navItem={navItem}
          activePage={activePage}
          setActivePage={setActivePage}
        ></NavigationButton>
      ))}
    </nav>
  )
}
