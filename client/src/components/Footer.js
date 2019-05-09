import React from "react";
import { Tooltip, Position } from '@blueprintjs/core';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends React.Component{
    render(){
        return(
            <div id='footer'>
                <div>
                    <Tooltip
                        content={<span>This isn't actually copyrighted just don't be a dick, ya know?</span>}
                        position={Position.RIGHT}
                        usePortal={false}
                    >
                        <p style={{display:'flex',marginBottom:0, height:50, alignItems:'center'}}>{'\u00A9'} Connor Matheny</p>
                    </Tooltip>
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:175, height:60}}>
                    <SocialIcon url="https://github.com/connormatheny1"></SocialIcon>
                    <SocialIcon url="https://www.linkedin.com/in/connor-matheny/"></SocialIcon>
                    <SocialIcon url="https://soundcloud.com/connor-matheny"></SocialIcon>
                </div>



            </div>
        );
    }
}