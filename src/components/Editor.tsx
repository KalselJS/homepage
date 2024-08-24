import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';
import { useState } from 'react';
import Kalseljs from "../logo.png"

// Tab Content
import { Event } from "./Event"
import { Home } from "./Home"

export interface CustomMenuItem extends MenuItem {
    label: string;
    template: (item: MenuItem) => React.ReactNode
  }

export function Editor() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  
    const itemRenderer = (item: MenuItem, itemIndex: number) => (
      <a 
        className="p-menuitem-link flex align-items-center gap-2" 
        onClick={() => setActiveIndex(itemIndex)}
      >
        <img 
          alt={item.label} 
          src={Kalseljs} 
          style={{ width: '1rem' }} 
        />
        <span className="font-regular">{item.label}</span>
      </a>
    );
  
    const items: CustomMenuItem[] = [
      {
        label: 'home.kalsel.js',
        template: (item) => itemRenderer(item, 0)
      },
      {
        label: 'event.kalsel.js',
        template: (item) => itemRenderer(item, 1)
      }
    ];
  
    return (
      <div className="card">
        <TabMenu 
          model={items} 
          activeIndex={activeIndex} 
          onTabChange={(e) => setActiveIndex(e.index)} 
        />
        <div style={{ overflow: "scroll", flex: 1}}>
            {activeIndex === 0 && <Home />}
            {activeIndex === 1 && <Event />}
        </div>
      </div>
    );
  }
  