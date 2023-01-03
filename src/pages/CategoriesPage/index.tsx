import { useState } from 'react'
import { ContentWrapper } from '../../components/ContentWrapper'
import Search from '../../assets/img/search.svg'
import { CategoryCardItem } from '../../components/CategoryCardItem'
import { categoryAPI } from '../../services/CategoryService'
import { ICategoryFilms } from '../../types/ICategoryFilms'
import './styles.scss'

const CategoriesPage = () => {
    const [inputValue, setInputValue] = useState('Fantasy')

    const handleChange = (e:any):void => {
        setInputValue(e.target.value)
    }
    const {data:category} = categoryAPI.useFetchCategoryQuery(inputValue)

    return (
        <ContentWrapper>
            <div className="inputWrapper">
                <input placeholder="Please enter the category name in English. Example: Animals" onChange={handleChange}/>
                <img src={Search} alt='search'/>
            </div>
            <h2>Selected category: <span>{inputValue}</span></h2>
            <div className='categoryContainer'>
                {category && category.map((film: ICategoryFilms) => (
                    <CategoryCardItem film={film} key={film.show.id}/>
                ))}
            </div>
        </ContentWrapper>
    )
}

export {CategoriesPage}