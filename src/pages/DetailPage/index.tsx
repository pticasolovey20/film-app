import {useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchFilmsByID } from '../../store/slices/filmByIdSlice'
import { ContentWrapper } from "../../components/ContentWrapper"

import Star from '../../assets/img/star.svg'
import { prepareDate } from '../../utils/prepareDate'
import { prepareGenre } from '../../utils/prepareGenre'

import "./styles.scss"


const DetailPage: React.FC = () => {
    const {id} = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFilmsByID(id))
    },[dispatch,id])

    const {films} = useAppSelector((state) => state.filmByIdSlice)

    return (
        <ContentWrapper>
            {Object.keys(films).length > 0 && <div className='detailPage'>
                        <img src={films.image.medium} alt='img' className='image'/>
                        <div className='detailWrapper'>
                            <div className='title'>
                                {films.name}
                                <div className='average'>
                                    {films.rating.average && <img src={Star} alt='star'/>}
                                    {films.rating.average && films.rating.average + '/10'}
                                </div>
                            </div>
                            <div>
                                PREMIERED: 
                                <span className='item-1'>{films.premiered && prepareDate(films.premiered)}</span>
                            </div>
                            <div>
                                COUNTRY: 
                                <span className='item-2'>{films.network && films.network.country.name}</span>
                            </div>
                            <div>
                                GENRE: 
                                <span className='item-3'>{films.genres && prepareGenre(films.genres).toUpperCase()}</span>
                            </div>
                            <div>
                                DESCRIPTION: 
                                <span className='item-4'>{films.summary && films.summary}</span>
                            </div>
                        </div>
                    </div>}

                    
        </ContentWrapper>
    )
}

export {DetailPage}