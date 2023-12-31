// @ts-nocheck
import './NavigationMenuStyle.css'

export const NavigationMenu = () => {
    
    return (
        <div className="d-flex justify-content-center align-items-center">        
            <ul 
            className='list-navigation d-flex gap-4 mt-3 align-items-center fw-semibold'>
                <li className="tes"><a href="">Home</a></li>
                <li><a href="">Tentang Acara</a></li>
                <li><a href="">Galeri</a></li>
                <li><a href="">Berita</a></li>
                <li className="bg-debug px-3 py-2 rounded-5 text-white regist-button"><a href="">Registrasi</a></li>
            </ul>
        </div>
    )
}
