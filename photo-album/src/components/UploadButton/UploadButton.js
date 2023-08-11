import Add from '../../assets/add.png'
import './UploadButton.css'

const UploadButton = props => {

    return (
        <button className="loadImage" onClick={props.onClick}>
            <img src={Add} width={50} />
            <label className="title">{props.title}</label>
        </button>
    )
}
export default UploadButton;