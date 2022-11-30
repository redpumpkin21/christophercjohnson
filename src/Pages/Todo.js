const Todo = () => {
    return(
        <div>
            <img className ='todoImg' src = 'https://res.cloudinary.com/dx3a3l6k0/image/upload/v1669837854/613BCE21-488F-4135-8753-C727FA1ED27A_odstrh.png'/>
            <p className ='aboproj'> This is a project built using the MERN stack, MongoDB, Express, React, Node. I created the backend with express and MongoDB.
            Setting up the routes so that a person can do a simple CRUD. CRUD being Create, Read, Update, and Destroy. Postman was used to test the routes,
            to make sure everything is in good working order.</p>
            <p>github frontend</p>
            <a href='https://github.com/redpumpkin21/todo' target='_blank' rel= 'noreferror noopener'> Frontend Git </a>
            
            <p>github backend</p>
            <a href='https://github.com/redpumpkin21/todoback' target='_blank' rel='noreferror noopener'> Backend Git</a>

            <p>link to site</p>
            <a href='https://todo-delta-vert.vercel.app/' target='_blank' rel= 'noreferror noopener'>Site</a>
            
        </div>
        
        
    )
}

export default Todo