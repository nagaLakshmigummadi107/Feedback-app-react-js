import './index.css'

const Emoji = props => {
  const {imageUrl, name, changeFeedbackPage} = props
  console.log(imageUrl)

  const onClickChangePage = () => {
    changeFeedbackPage()
  }

  return (
    <li className="emoji-container">
      <img
        className="emoji-image"
        src={imageUrl}
        alt={name}
        onClick={onClickChangePage}
      />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default Emoji
