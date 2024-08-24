/* eslint-disable jsx-a11y/anchor-is-valid */
import { PrimeReactProvider,  PrimeReactContext } from 'primereact/api';
import { Boxes } from './components/BackgroundBoxes';

import { Image } from 'primereact/image';


import React, { useRef, useState, useEffect, useContext } from 'react';
import { Dock } from './components/Dock';
import { Editor } from "./components/Editor";

import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Menubar } from 'primereact/menubar';
import { PhotoService } from './service/getPhoto'

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import "primereact/resources/themes/saga-orange/theme.css"

import Kalseljs from "./logo.png"
import { Clock } from './components/Clock';

type Img = {
    itemImageSrc: string,
    thumbnailImageSrc: string,
    alt: string,
    title: string
}

function Main() {
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState<Img[]>([]);
    const galleria = useRef<Galleria>(null);
    const context = useContext(PrimeReactContext);


    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item: Img) => {
      console.log("kerender")
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item: any) => {
      return <img src={item.thumbnailImageSrc} alt={item.alt} />
  }

    useEffect(() => {
        PhotoService.getImages().then((data) => {
          console.log(data)
          setImages(data)
        });

        context?.setAppendTo && context.setAppendTo('self')

        return () => {
            // reset
            context?.setAppendTo && context.setAppendTo(null)
        };
    }, [context]);

    console.log("imsges", images)
    const start = (
        <Image src={Kalseljs} width="18" height="18"/>
    )

    const end = (
        <React.Fragment>
            <i className="pi pi-wifi" />
            <div className="w-2 h-2" />
            <Clock />
        </React.Fragment>
    );

    return (
        <div className="card dock-demo">
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
            <Menubar style={{borderBottom: '3px solid'}} start={start} end={end} />
            <div className="dock-window dock-advanced">
                <Dock 
                  onClickCode={() => setDisplayFinder(true)}
                  onClickGithub={() => window.open("https://github.com/KalselJS", "_blank")}
                  onClickImage={() => galleria?.current?.show()}
                  onClickDiscord={() => window.open("https://github.com/KalselJS", "_blank")}
                />
                <Dialog className="window-ide" visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '90vw', '360px' : '90vw' }} style={{ height: '32rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                   <Editor />
                </Dialog>
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={5}
                    circular fullScreen showThumbnails={true} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} style={{ width: '70vw'}} />
            </div>
        </div>
    )
}
        
function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Boxes />
        <Main />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
