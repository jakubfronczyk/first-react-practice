1. Why do we need to `import React from "react" in our files`

We need 'import React from "react"' to be able to use code  that is avaible in other folder or file within the same project


2. If i were to nsole.log(page) in index.js, what would show up?

If you were console.log(page) in index.js it would show up an  js object 


3. What's wron with this code:
```
    const page = (
        <h1>>Hello</h1>
        <p>This is my website !</p>
    )
```

In this example the parent element is missing


4. What doest it mean for someting to be "declarative" instead of "imperative"

Declarative - what shoud be done "telling what to do       instead of how to do it", 
"Just tell me what to do instead of how to do it"
Imperative - how should it be done 
'Describe to me every step on how to do something'



5. What doest it mean for somthing to be "composable"

Means that we have small piceses that we cna put togheter to make somthing larger/grater that the individual pieces.

6. What is React component ?

A function thet returns React elements.React component is like function returns HTML element. Components are indenpendet and reusable bits of code. They serve the same purpose as JavaScript function, but work in isolation and retun HTML.

7. What is wrong with this code ?
```
    function myComponent (){
        return(
            <small>I'm tiny text!</small>
        )
    }
```
The wrong is the convention of variables naming, React requiers Pascal case which in this exmaple should be MyComponent()

8. What is wrong with this code ?
```
    function Header(){
        return(
            <header>
                <nav>
                    <img src="./react-logo.png width="40px"/>
                </nav>
            </header>
        )
    }
    ReactDOM.render(Header(), document.getElementById('root'))
```
With function component in React insted surroundings with the angle brackets as if it were html tag.

```
ReactDOM.render(<Header/>, document.getElementById('root'))
```
In the React it is the correct way to call your components

