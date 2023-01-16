import { ContentWrapper } from '../../components/ContentWrapper'
import Search from '../../assets/img/search.svg'
import './styles.scss'

const SearchPage:React.FC = () => {
    return (
        <ContentWrapper>
            <h2 style={{fontWeight: '700'}}>Search by Category : <span></span></h2>
            <div className='inputWrapper'>
                <img src={Search} alt='search'/>
                <input style={{fontWeight: '600'}} placeholder='Example: Horror'/>
            </div>
            <span>Search Results:</span>
            <div className='resultWrapper'>
                <span>Enter a search term to display results</span>
            </div>
        </ContentWrapper>
    )
}

export {SearchPage}