function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

function MainContent(){
    return (
        <div>
        <h1>Example heading <span class="badge badge-secondary">New</span></h1>
        <h2>Example heading <span class="badge badge-secondary">New</span></h2>
        <h3>Example heading <span class="badge badge-secondary">New</span></h3>
        <h4>Example heading <span class="badge badge-secondary">New</span></h4>
        <h5>Example heading <span class="badge badge-secondary">New</span></h5>
        <h6>Example heading <span class="badge badge-secondary">New</span></h6>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById('root')
)

