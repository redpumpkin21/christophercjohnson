import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div className = 'Projects'>
            <h2>Projects: </h2>
            <article className= 'BookNRead'>
                <h4>Book N Read</h4>
                <img src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166749/Screen_Shot_2021-09-27_at_5.37.55_PM_epjm8z_Small_cdvxea.jpg'/>
                <div className= 'firstdescr'>
                    <p>Desktop View</p>
                    <p  className= 'bkdescr'> First project created in bootcamp using cloudinary. I am sharing this site cause it shows where I started from and where I am now. 
                    </p>
                    <Link to= '/booknread'> Details</Link>
                    
                </div> 
                    
                
            </article>

           
      
                
            <article className= 'VideoGame'>
                <h4>VideoGame</h4>
                <img src= 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166738/Screen_Shot_2022-01-26_at_6.44.44_PM_slslke_Small_dr7vua.jpg'/>
                <div className= 'firstdescr'>
                    <p>Desktop View</p>
                    <p className= 'vgdescr'>A website with a limited amount of videogames
                        that you can see to show functionality of the site.
                        search through and look at the games shown.
                    </p>
                    <Link to= '/videogame'> Details</Link>
                    
                </div> 
                    
                    
                      
            </article>

            <article className= 'Todo'>
                <h4>Todo</h4>
                <img src= 'https://res.cloudinary.com/dx3a3l6k0/image/upload/c_scale,w_300/v1670336894/9CCA323B-5EB2-49F4-9144-B73A28EB3751_wfvpg9.jpg'/>
                <div className= 'firstdescr'>
                    <p>Mobile View</p>
                    <p className= 'tddescr'>An application built for mobile. Instead of having desktop distrations
                    use app for realtime task creation and finishing.
                    </p>
                    <Link to= '/todo'> Details</Link>
                    
                </div> 
                    
            </article>
        
            
        </div>
    )
}

export default Projects