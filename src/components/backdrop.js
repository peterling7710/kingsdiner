import React, {useState, useEffect} from 'react';
import { Image, Reveal } from 'semantic-ui-react';

const backDrop = () => (
    <div>

        
        <Image src='/images/square-image.png' size='small' />

        <Reveal animated='fade'>
            <Reveal.Content visible>
                <Image src='/images/square-image.png' size='small' />
            </Reveal.Content>
            <Reveal.Content hidden>
                <Image src='/images/frontView.jpg' size='small' />
            </Reveal.Content>
        </Reveal>

    </div>
    
)

export default backDrop