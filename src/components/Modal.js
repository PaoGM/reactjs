import './../App.css'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({titulo, cerrar, children}) => {
    return(
        <>
        <div className='modal-bg'>
        </div>
        <div className="modal-custom">
            <h2>{titulo}</h2>
            <CloseIcon onClick={() => cerrar(false)}/>
            {children}
        
        </div>
        </>
        
    )
}

export default Modal;