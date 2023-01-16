import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchFilms } from '../../store/slices/filmSlice'
import { ContentWrapper } from '../../components/ContentWrapper'
import { MainCardItem } from '../../components/MainCardItem'
import { IFilms } from '../../types/IFilms'
import './styles.scss'

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFilms())
    },[dispatch])

    const {films} = useAppSelector((state) => state.filmSlice)
    
    return (
        <>
            <h1 className='mainTitle'>MOVIESinfo</h1>
            <p className='popular'>The most popular movie portal </p>
            <ContentWrapper>
                <div className='mainContainer'>
                    {films.length > 0 && films.map((film: IFilms) => (
                        <MainCardItem film={film} key={film.id}/>
                    ))}
                </div>
            </ContentWrapper>
        </>
    )
}

export {MainPage}