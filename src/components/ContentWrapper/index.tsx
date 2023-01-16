import { ReactNode } from "react"
import './styles.scss'

interface ChildrenProps {
    children : ReactNode 
}

const ContentWrapper = ({children}: ChildrenProps) => {
    return (
        <div className="contentWrapper">
            {children}
        </div>
    )
}

export {ContentWrapper}