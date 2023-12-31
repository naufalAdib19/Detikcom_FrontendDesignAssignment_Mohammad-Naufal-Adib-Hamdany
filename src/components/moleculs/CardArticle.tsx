import './CardArticleStyle.css'
import { ArticleTypeDesc } from '../atoms/ArticleTypeDesc';
import { Context } from '../../helper/context';
import { useContext } from 'react'

type propsType = {
    img: string,
    title: string,
    time: string
}

const CardArticle = ({props}: {props: propsType}) => {
    const { articleType } = useContext(Context);

    function limitTitleLength(title: string): string {
        const limitLength: number = 80;
        if(title.length > limitLength) {
            let words = title.substring(0, limitLength);
            words = words + '...'
            return words
        }
        return title;
    } 

    return (
        <div>
            <div className='card-article-container position-relative'>
                <div className='position-absolute z-3 top-0 end-0'>
                    {
                        articleType == 0 ? '' :
                        articleType == 1 ? <ArticleTypeDesc props='5 Photos'/> :
                        <ArticleTypeDesc props='01:45'/>
                    }
                </div>
                <img src={props.img} alt="" className="ratio ratio-4x3 rounded-3"/>
                <h6 className='mt-3'>{limitTitleLength(props.title)}</h6>
                <p>{props.time}</p>
            </div>
        </div>
  )
}

export default CardArticle