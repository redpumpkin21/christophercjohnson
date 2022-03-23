import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div className = 'Projects'>
            <article className= 'BookNRead'>
                <h4>Book N Read</h4>
                <img src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166749/Screen_Shot_2021-09-27_at_5.37.55_PM_epjm8z_Small_cdvxea.jpg'/>
            
                    <Link to= '/booknread'> Details</Link>
                
            </article>

            <article className = 'Frizzy'>
                <h4>Frizzy</h4>
                <img src ='https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166714/Screen_Shot_2021-09-27_at_5.44.27_PM_cnvup1_Small_ebjh13.jpg'/>
            
                    <Link to= '/frizzy'> Details</Link>
                
            </article>
        
            <article className= 'KDrama'>
                <h4>K-Drama Love</h4>
                <img src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166726/Screen_Shot_2021-09-27_at_6.09.45_PM_rmasxb_Small_ivofnq.jpg'/>
            
                    <Link to= '/k-dramalove'> Details</Link>
                
            </article>
                
            <article className= 'VideoGame'>
                <h4>VideoGame</h4>
                <img src= 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166738/Screen_Shot_2022-01-26_at_6.44.44_PM_slslke_Small_dr7vua.jpg'/>
            
                    <Link to= '/videogame'> Details</Link>
                      
            </article>
        
            
        </div>
    )
}

export default Projects