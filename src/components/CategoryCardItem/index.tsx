import { NavLink } from "react-router-dom"
import { ICategoryFilms } from "../../types/ICategoryFilms"
import { prepareGenre } from "../../utils/prepareGenre"
import notFound from '../../assets/img/notfound.png'

import './styles.scss'

interface PropsParams {
    film: ICategoryFilms
}

const CategoryCardItem: React.FC<PropsParams> = ({film}) => {
    return (
        <NavLink to={`/detail/${film.show.id}`} className='linkWrapper'>
            <div className="categoryItem">
                <img src={film.show.image ? film.show.image.medium : notFound} alt='img'/>
                <div className="description">
                    <div className="name">{film.show.name}</div>
                    <div className="genre">{prepareGenre(film.show.genres)}</div>
                </div>
            </div>
        </NavLink>
    )
}

export {CategoryCardItem}