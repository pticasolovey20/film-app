import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchFilmsByCategory } from '../../store/slices/filmByCategorySlice'
import { ContentWrapper } from '../../components/ContentWrapper'
import { CategoryCardItem } from '../../components/CategoryCardItem'
import { ICategoryFilms } from '../../types/ICategoryFilms'
import './styles.scss'

const CategoriesPage = () => {
    const dispatch = useAppDispatch()

    const category = 'Fantasy'

    useEffect(()=> {
        dispatch(fetchFilmsByCategory(category))
    })

    const {films} = useAppSelector((state) => state.filmByCategorySlice)

    return (
        <ContentWrapper>
            <div className='topWrapper'>
                <h2>Selected category: <span>{category}</span></h2>
            </div>
            <div className='categoryContainer'>
                {films.length > 0 && films.map((film: ICategoryFilms, index) => (
                    <CategoryCardItem film={film} key={index}/>
                ))}
            </div>
        </ContentWrapper>
    )
}

export {CategoriesPage}