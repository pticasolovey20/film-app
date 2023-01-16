import { Link } from "react-router-dom"
import { IFilms } from "../../types/IFilms"
import { prepareGenre } from "../../utils/prepareGenre"

import './styles.scss'

interface PropsParams {
    film: IFilms
}

const MainCardItem: React.FC<PropsParams> = ({film}) => {

    return (
        <Link to={`/detail/${film.id}`}>
            <div className="mainItem">
                <img src={film.image.medium} alt='img'/>
                <div className="name">{film.name}</div>
                <div className="country">{film.network?.country.name}</div>
                <div className="genre">{prepareGenre(film.genres)}</div>
            </div>
        </Link>
    )
}

export {MainCardItem}