import './App.css';
import * as React from 'react';

import ReactEmbedGist from 'react-embed-gist';

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

import { Apples } from './components/Apples';
import { Bananas } from './components/Bananas';
import { Grapes } from './components/Grapes';

function App() {
  const [index, setIndex] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Tabs
          aria-label="Plain tabs"
          value={index}
          onChange={(event, value) => setIndex(value)}
          sx={{ borderRadius: 'lg' }}
        >
          <TabList variant="plain">
            <Tab variant={index === 0 ? 'outlined' : 'plain'}>Apples</Tab>
            <Tab variant={index === 1 ? 'outlined' : 'plain'}>Bananas</Tab>
            <Tab variant={index === 2 ? 'outlined' : 'plain'}>Grapes</Tab>
          </TabList>
          <TabPanel value={0} sx={{ p: 2 }}>
            <b>
              <Apples />
            </b>
          </TabPanel>
          <TabPanel value={1} sx={{ p: 2 }}>
            <b>
              <Bananas />
            </b>
          </TabPanel>
          <TabPanel value={2} sx={{ p: 2 }}>
            <b>
              <Grapes />
            </b>
          </TabPanel>
        </Tabs>

        <div>
          <ReactEmbedGist
            gist="azvontsov/b2c3f050f73fb462160e9f2b28defce9"
            wrapperClass="gist__bash"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
