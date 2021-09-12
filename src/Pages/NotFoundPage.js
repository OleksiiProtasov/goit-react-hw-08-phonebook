import s from './styles.module.css'
import page404 from '../img/page404.png'

export default function NotFoundPage() {
  return ( 
        <div className={s.page404}>
         <img src={page404} alt={page404}/>
        </div>
  );
}
