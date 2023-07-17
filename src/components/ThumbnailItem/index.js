import './index.css'

const ThumbnailItem = props => {
  const {eachPicture, changeActivePic, activeTabId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachPicture

  const onPicClick = () => {
    changeActivePic(id)
  }

  const k = id === activeTabId ? 'active' : 'inactive'

  return (
    <li id={id} className={k}>
      <button type="button" className="button-prop">
        <img
          className="image-prop"
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onPicClick}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
