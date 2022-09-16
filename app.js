function PageComponent (){
    return(<div>
        <header>
            <nav>
                <img src="images/react-logo.png" width="50px"/>
            </nav>
        </header>
        <h1>Fun facts about React</h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was orginally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise app, including mobile apps</li>
        </ol>
        <footer>
            <small>© 2022 Jakub Fronczyk development. All rights reserved.</small>
        </footer>
    </div>
    
    )
}

ReactDOM.render (PageComponent(), document.getElementById('root'))