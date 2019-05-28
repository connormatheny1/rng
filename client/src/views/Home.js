import React from "react";
export default class Home extends React.Component{
    render(){
        return(
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                <div className="text-center">
                    <h1 style={{marginTop:30, marginBottom: 20}}>Welcome!</h1>
                    <h1>This site was created to help you find something to watch.</h1>
                </div>
                <div style={{marginTop:30, marginBottom: 20, width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontSize:16}}>
                    <h2>Instructions if you really need them: </h2>
                    <p>If you have no idea what you want to watch, head to the platform you'd like to watch on and then generate a random movie or show title.</p>
                    <p>If you have a particular show already in mind, head to the search page and type in the name of the show you want to watch. Once you've found the correct title, click on the dropdown and hit the random episode button.</p>
                    <br></br><p>**A quick note about the random episode search module, to get a truly random episode, generate twice. Because of a stupid bug that I'm working on, the first episode you 'randomly' generate will be that show's last episode to come out. So click it again and a truly random result will be displayed.</p>
                    <p>That is all.</p>
                </div>
            </div>
        );
    }
}