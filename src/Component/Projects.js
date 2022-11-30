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
                    <p  className= 'bkdescr'>A website with a limited amount of videogames
                        that you can see to show functionality of the site.
                        search through and look at the games shown.
                    </p>
                    <Link to= '/booknread'> Details</Link>
                    
                </div> 
                    
                
            </article>

            <article className = 'Frizzy'>
                <h4>Frizzy</h4>
                
                <img src ='https://res.cloudinary.com/dx3a3l6k0/image/upload/v1646166714/Screen_Shot_2021-09-27_at_5.44.27_PM_cnvup1_Small_ebjh13.jpg'/>
                <div className= 'firstdescr'>
                    <p>Desktop View</p>
                    <p className= 'fzdescr'>A website with a limited amount of videogames
                        that you can see to show functionality of the site.
                        search through and look at the games shown.
                    </p>
                    <Link to= '/frizzy'> Details</Link>
                    
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
                <img src= 'https://res.cloudinary.com/dx3a3l6k0/image/upload/c_scale,w_300/v1669837998/613BCE21-488F-4135-8753-C727FA1ED27A_odstrh.png'/>
                <div className= 'firstdescr'>
                    <p>Mobile View</p>
                    <p className= 'tddescr'>An application built mainly to use for mobile devices.
                        Sitting on a chair on the computer can lead to a whole mess
                        of procastinations. Using your phone limits it. So when using
                        the app on your phone have realtime to do list where you can create
                        what you need to get done and then click finish to be done with it forever.
                    </p>
                    <Link to= '/todo'> Details</Link>
                    
                </div> 
                    
            </article>
        
            
        </div>
    )
}

export default Projects