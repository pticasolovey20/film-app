import axios from 'axios'
import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../components/ContentWrapper"

import Star from '../../assets/img/star.svg'
import { prepareDate } from '../../utils/prepareDate'
import { prepareGenre } from '../../utils/prepareGenre'

import "./styles.scss"


const DetailPage: React.FC = () => {
    const {id} = useParams()
    const [film, setFilm] =  useState<{
        image: {
            medium:string,
        }
        name: string,
        rating:{
            average:number
        }
        premiered:string,
        network: {
            country:{
                name:string,
            }

        }
        genres: string[],
        summary:string,
    }>()

    useEffect(() => {
        const fetchFilmsByID = async()=> {
            const {data} = await axios.get('https://api.tvmaze.com/shows/' + id)
            setFilm(data)
        }
        fetchFilmsByID()
    },[id])

    return (
        <ContentWrapper>
            {film && <div className='detailPage'>
                        <img src={film.image.medium} alt='img' className='image'/>
                        <div className='detailWrapper'>
                            <div className='title'>
                                {film.name}
                                <div className='average'>
                                    {film.rating.average && <img src={Star} alt='star'/>}
                                {film.rating.average && film.rating.average + '/10'}
                            </div>
                        </div>
                            <div>
                                PREMIERED: 
                                <span className='item-1'>{film.premiered && prepareDate(film.premiered)}</span>
                            </div>
                            <div>
                                COUNTRY: 
                                <span className='item-2'>{film.network && film.network.country.name}</span>
                            </div>
                            <div>
                                GENRE: 
                                <span className='item-3'>{film.genres && prepareGenre(film.genres).toUpperCase()}</span>
                            </div>
                            <div>
                                DESCRIPTION: 
                                <span className='item-4'>{film.summary && film.summary}</span>
                            </div>
                        </div>
                    </div>}
        </ContentWrapper>
    )
}

export {DetailPage}