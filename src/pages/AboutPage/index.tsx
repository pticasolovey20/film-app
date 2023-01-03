import Image from '../../assets/img/image.png'
import { ContentWrapper } from "../../components/ContentWrapper"
import './styles.scss'

const AboutPage = () => {
    return (
        <ContentWrapper>
            <div className='aboutWrapper'>
                <img src={Image} alt='img'/>
                <div className='infoWrapper'>
                    <h1 className='title'>MOVIESinfo</h1>
                    <p className='description'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                        natoque penatibus et magnis dis parturient montes, nascetur 
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                        fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu 
                        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum 
                        semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor 
                        eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra 
                        quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
                    </p>
                </div>
            </div>
        </ContentWrapper>
    )
}

export {AboutPage}