import React, {useState, useEffect} from 'react';
import AppBar from './components/AppBar';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from './ui/theme/index'
import GameCard from './components/GameCard'
import axios from 'axios'

export default function App(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [items, setItems] = useState({});

    useEffect(async () => {
      let request = await axios.get('https://r6tab.com/api/search.php?platform=uplay&search=Zeerdo')
      setItems(request.data.results[0])
    }, []);

    return (
      <div className="App">
        <ThemeProvider theme={createMuiTheme}>
          <AppBar position="static" setOpen={() => setMenuOpen(!menuOpen)} onClick={() => setMenuOpen(!menuOpen)} open={menuOpen}/>
          <img alt='user-avatar' src={items ? `https://ubisoft-avatars.akamaized.net/${items.p_user}/default_146_146.png` : null}/>
          <div>{JSON.stringify(items)}</div>
        </ThemeProvider>
      </div>
    );
  }