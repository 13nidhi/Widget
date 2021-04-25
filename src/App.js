import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'what is react',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'whu use react',
        content: 'React is a favorite javascript liberary among engineers'   
    },
    {
        title: 'How do you use react',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
    <div>
        <Header />
       <Route path="/" >
            <Accordion items={items} />
       </Route> 

       <Route path="/list">
            <Search />
       </Route>

       <Route path="/dropdown">
            <Dropdown 
                label="select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}    
            />
       </Route>

       <Route path="/translate">
            <Translate />
       </Route>
    </div>
    );
};



