
import styles from "./Favorit.module.css";
import { useSelector, useDispatch } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { supprimerFavori } from "@/features/likeSlice";

export default function Favorit({ open, setOpen }) {

    const fav = useSelector(state => state.favoris.fav);
    const dispatch = useDispatch();

    const handleSupprimerFav = (idArticle) => {
        const article = fav.find(article => article.id === idArticle);
        if (article) {
            dispatch(supprimerFavori(article));
        }
    }

    return(
        <>
            <div className={open ? styles.modal2 + ' ' + styles.off : styles.modal2} onClick={() => {setOpen(true)}}></div>
            <div className={open ? styles.menu2 + ' ' + styles.off : styles.menu2}>
                <div className={styles.header}>
                    <h1>Favoris</h1>
                    <h3 className={styles.quit} onClick={() => {setOpen(true)}}><RxCross2/></h3>
                </div>
                <div className={styles.content} >
                    {fav.map((item) => (
                        <div key={item.id} className={styles.like}>
                            <img src={item.image_url} className={styles.imageLike} />
                            <p> {item.title} </p>
                            <RxCross2 onClick={() => handleSupprimerFav(item.id)} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}