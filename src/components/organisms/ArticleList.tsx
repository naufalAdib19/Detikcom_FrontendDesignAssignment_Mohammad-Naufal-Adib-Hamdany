import imageArticle1 from '../../assets/article-image/thumbnail-artikel-1 1.png'
import imageArticle2 from '../../assets/article-image/thumbnail-artikel-1 1 (1).png'
import imageArticle3 from '../../assets/article-image/thumbnail-artikel-1 1 (2).png'
import imageArticle4 from '../../assets/article-image/thumbnail-artikel-1 1 (3).png'
import imageArticle5 from '../../assets/article-image/thumbnail-artikel-1 1 (4).png'
import imageArticle6 from '../../assets/article-image/thumbnail-artikel-1 1 (5).png'
import CardArticle from '../moleculs/CardArticle'

const data = [
    {
        img: imageArticle1,
        title: 'Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya',
        time: 'Sabtu, 25 Nov 2023 20:00 WIB'
    },
    {
        img: imageArticle2,
        title: 'Edukasi Lingkungan Hidup Bonus Sehat di \'Misi Lestari 2023: See Nature\'',
        time: 'Sabtu, 25 Nov 2023 20:00 WIB'
    },
    {
        img: imageArticle3,
        title: 'Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023',
        time: 'Minggu, 26 Nov 2023 13:04 WIB'
    },
    {
        img: imageArticle4,
        title: 'Kelar Lari di CT Arsa Charity Fun Run, \'Recharge\' Energi Nonton Maliq & D\'essentials',
        time: 'Sabtu, 18 Nov 2023 17:39 WIB'
    },
    {
        img: imageArticle5,
        title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas',
        time: 'Kamis, 16 Nov 2023 16:34 WIB'
    },
    {
        img: imageArticle6,
        title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta',
        time: 'Minggu, 12 Nov 2023 11:55 WIB'
    }
]

const ArticleList = () => {
  return (
    <div className=''>
        <div className='container-lg d-flex flex-wrap gap-md-4 justify-content-center mt-2'>
            {
                data.map((data, index) => {
                    return(
                        <CardArticle key={index} props={{
                            img: data.img,
                            title: data.title,
                            time: data.time
                        }}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ArticleList