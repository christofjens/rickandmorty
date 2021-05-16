import './NavigationButton.css'

export default function NavigationButton({
  navItem,
  activePage,
  setActivePage,
}) {
  return (
    <button
      className={
        navItem === activePage
          ? 'NavigationButton NavigationButton--active'
          : 'NavigationButton'
      }
      onClick={handleNavClick}
    >
      {navItem}
    </button>
  )

  function handleNavClick() {
    setActivePage(navItem)
  }
}
