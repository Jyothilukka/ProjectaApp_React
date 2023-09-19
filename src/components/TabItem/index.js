import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateTabItem = () => {
    updateActiveTabId(tabId)
  }

  const updateClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${updateClassName}`}
        onClick={updateTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
