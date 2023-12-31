import './ArticleTypeStyle.css'
import { useContext } from 'react'
import { Context } from '../../helper/context';

const ArticleType = () => {    
    const {articleType, setArticleType} = useContext(Context)

    return (
        <div>
            <div className='article-type-container d-flex justify-content-center mb-5 mt-4'>
                <ul className='text-white fw-semibold d-flex rounded-5'>
                    <li className={`px-4 py-2 ${articleType == 0 ? 'active' : ''}`} onClick={() => setArticleType(0)}>Artikel</li>
                    <li className={`px-4 py-2 ${articleType == 1 ? 'active' : ''}`} onClick={() => setArticleType(1)}>Foto</li>
                    <li className={`px-4 py-2 ${articleType == 2 ? 'active' : ''}`} onClick={() => setArticleType(2)}>Video</li>
                </ul>
            </div>
        </div>
    )
}

export default ArticleType