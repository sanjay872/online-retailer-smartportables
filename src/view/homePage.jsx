import '../styles/homepage.css';

function HomePage(){

    const collageImages=[]

    for(let i=1;i<=4;i++){
        collageImages.push(<img key={i} className={'home_right_side-image-'+i} src={require('../images/home_bg-'+i+'.jpg')} alt={'Home BG - '+i}></img>);
    }

    return(
        <div className="home">
            <div className="home_left_side">
                <div className="home_left_side-title">online retailer SmartPortables</div>
            </div>
            <div className="home_right_side">
                <div className='home_right_side-wrapper'>
                    {collageImages}
                </div>
                <div className="home_right_side-description">
                    Everything You Need, <br/> 
                    Everywhere You Go.
                </div>
            </div>
        </div>
    )
}

export default HomePage;