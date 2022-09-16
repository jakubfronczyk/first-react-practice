import Header from 'Header.js';

function Footer() {
    return(
        <footer className="footer">
            <small>© 2022 Jakub Fronczyk development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return(
        <div className="main-content">
            <h1>Fun facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was orginally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise app, including mobile apps</li>
            </ol>
        </div>
    )
}
function Page (){
    return(
    <div className="page">
        <Header />
        <MainContent />
        <Footer />
    </div>
    
    )
}

ReactDOM.render (<Page/>, document.getElementById('root'))