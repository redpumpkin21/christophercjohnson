import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div className = 'Projects'>
            <article className= 'BookNRead'>
                <h5>Book N Read</h5>
                <img src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166749/Screen_Shot_2021-09-27_at_5.37.55_PM_epjm8z_Small_cdvxea.jpg'/>
                <p>
                    <Link to= '/booknread'> Read More</Link>
                </p>
            </article>

            <article className = 'Frizzy'>
                <h5>Frizzy</h5>
                <img src ='https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166714/Screen_Shot_2021-09-27_at_5.44.27_PM_cnvup1_Small_ebjh13.jpg'/>
                <p>
                    <Link to= '/frizzy'> Read More</Link>
                </p>
            </article>
        
            <article className= 'KDrama'>
                <h5>K-Drama Love</h5>
                <img src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166726/Screen_Shot_2021-09-27_at_6.09.45_PM_rmasxb_Small_ivofnq.jpg'/>
                <p>
                    <Link to= '/k-dramalove'> Read More</Link>
                </p>
            </article>
                
            <article className= 'VideoGame'>
                <h5>VideoGame</h5>
                <img src= 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166738/Screen_Shot_2022-01-26_at_6.44.44_PM_slslke_Small_dr7vua.jpg'/>
                <p>
                    <Link to= '/videogame'> Read More</Link>
                </p>      
            </article>
        
            
        </div>
    )
}

export default Projects