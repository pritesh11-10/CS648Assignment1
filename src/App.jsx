//Name Component
const nameComponent = (
    <div id="name">
        <h1 id="name_comp">PRITESH MANOJ CHOKSI</h1>
    </div>
);

//Picture Component
const pictureComponent = (
    <div id="image">
        <img id="picture_comp" src="./self.jpg"></img>
    </div>
);

//Intro Component
const introComponent = (
    <div id="intro">
        <p id="intro_comp">I am currently Pursuing Master's in Computer Science at San Diego State University</p>
    </div>
);

//Button Component
const buttonComponent = (
    <div id="button">
        <a href="https://github.com/pritesh11-10"><button id= "button_comp">Link to my Github</button></a>
    </div>
)

ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('image'));
ReactDOM.render(introComponent, document.getElementById('intro'));
ReactDOM.render(buttonComponent, document.getElementById('gitBtn'));