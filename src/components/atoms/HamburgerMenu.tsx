export const HamburgerMenu = () => {
    
    const hamburgerStyle = {
        'width': '13px',
        'height': '13px',
    }

    const containerStyle = {
        'width': '60px',
        'height': '60px',
        'padding': '10px'
    }

    return (
        <div className="" role="button">
            <div style={containerStyle} className="d-flex flex-wrap bg-white justify-content-center align-items-center gap-1 rounded-circle">
                <div className="d-flex flex-wrap gap-1 justify-content-center ">
                    <div style={hamburgerStyle} className="bg-dark-blue rounded-1"/>
                    <div style={hamburgerStyle} className="bg-dark-blue rounded-1"/>
                    <div style={hamburgerStyle} className="bg-dark-blue rounded-1"/>
                    <div style={hamburgerStyle} className="bg-dark-blue rounded-1"/> 
                </div>
            </div>                
        </div>
    )
}