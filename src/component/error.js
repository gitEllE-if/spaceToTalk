import errorImg1 from '../img/ufo1.png';
import errorImg2 from '../img/light1.png';


export default function Error({ errorCode }) {

    return (
        <div className="error__field">
            <div className="app__text">Houston, we have a problem</div>
            <div className="error__img" id='increase'>
                <img className='img__bottom' id='blink' src={errorImg2} alt='error'></img>
                <img className='img__top' src={errorImg1} alt='error'></img>
                <div className="error__code">error<br /><span>{errorCode}</span></div>
            </div>
        </div >
    );
}