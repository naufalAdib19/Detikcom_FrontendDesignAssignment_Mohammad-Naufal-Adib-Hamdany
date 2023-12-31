import './ArticleTypeDescStyle.css'

export const ArticleTypeDesc = ({props}: {props: string}) => {
    return (
        <div className='article-type-desc-container mx-2 my-2'>
            <p className='text-white px-3 py-1'>{props}</p>
        </div>
    )
}
