import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
  Link,
  withRouter,
  Redirect,
  useLocation
} from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'

import { EsperGenCharacterStatsSheet, EsperGenCharacterProfileSheet, EsperGenCharacterSpellSheet, EsperGenCharacter } from 'espergen-character-sheets'
import 'espergen-character-sheets/dist/index.css'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = (props: any) => {
  const [character, setCharacter] = useState<EsperGenCharacter>(loadDefaultCharacter())
  const [navTop, setNavTop] = useState<number>(0)
  const [prevScrollpos, setPrevScrollpos] = useState<number>(window.pageYOffset)
  const [, setLoading] = useState<boolean>(false)

  const { search } = useLocation();
  useEffect(() => {
    const characterToLoad = qs.parse(search, { ignoreQueryPrefix: true }).character
    if (characterToLoad) {
      setLoading(true)
      axios
        .get('characters/' + characterToLoad + '.json')
        .then((response: any) => {
          setLoading(false)
          try {
            if (!Array.isArray(response.data) && typeof response.data === 'object') {
              console.log('Loaded Character - ' + characterToLoad)
              updateCharacter(response.data)
            } else {
              throw new Error('Json file does not contain a Genesis character.')
            }
          }
          catch {
            throw new Error('Json file does not contain a Genesis character.')
          }
        })
        .catch((error: any) => {
          console.log('Failed to load Character - ' + characterToLoad)
          console.log(error)
          setLoading(false)
        })
    }
  }, [search]);

  const statsSheet = (
    <EsperGenCharacterStatsSheet
      character={character}
      onCharacterChanged={updateCharacter}
    />
  )
  const profileSheet = (
    <EsperGenCharacterProfileSheet
      character={character}
      onCharacterChanged={updateCharacter}
    />
  )
  const spellSheet = (
    <EsperGenCharacterSpellSheet
      character={character}
      onCharacterChanged={updateCharacter}
    />
  )

  window.onscroll = function() {onScroll()};
  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos < 20) {
      setNavTop(0)
    } else {
      setNavTop(-280);
    }
    setPrevScrollpos(currentScrollPos)
  }

  function loadDefaultCharacter () {
    let character: EsperGenCharacter = {}
    const lsData = localStorage.getItem('espergen-character-data')
    if (lsData) {
      try {
        character = JSON.parse(lsData)
      } catch {}
    }
    return character
  }

  function updateCharacter (character: EsperGenCharacter) {
    setCharacter(character)
    localStorage.setItem('espergen-character-data', JSON.stringify(character))
  }

  function exportCharacter () {
    const json = JSON.stringify(character, null, 2)

    var a = document.createElement('a');
    var file = new Blob([json], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = character.name ? character.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.json' : 'espergen-character.json';
    a.click();
  }


  function importCharacter (event: any) {
    if (event.target.files.length > 0){
      var fr = new FileReader();

      fr.onload = function(e) { 
        if (e.target && e.target.result && typeof e.target.result === 'string') {
          loadCharacter(e.target.result)
        }
      }
    
      fr.readAsText(event.target.files[0]);
    }
  }

  function loadCharacter(json: string) {
    try {
      var result = JSON.parse(typeof json === 'string' ? json : '{}');
      if (!Array.isArray(result) && typeof result === 'object') {
        updateCharacter(result)
      } else {
        window.alert('Json file does not contain a Esper Genesis character.')
      }
    }
    catch {
      window.alert('Json file does not contain a Esper Genesis character.')
    }
  }

  function clearCharacter() {
    updateCharacter({ })
  }

  function getDefaultRedirect(search: string | undefined) {
    let defaultRedirect = '/stats' + search
    if (window.innerWidth < 992) { 
      // is mobile device
      defaultRedirect = '/all' + search
    }
    return defaultRedirect
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top' style={{ backgroundColor: '#653294', top: navTop === 0 ? '' : navTop + 'px' }}>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
          </button>
          <div style={{width:'100%'}}>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ml-lg-5' data-toggle='collapse' data-target='.navbar-collapse.show'>
                    <li className='nav-item mr-lg-3'>
                        <Link className={props.location.pathname === '/stats' ? 'nav-link active' : 'nav-link'} to='/stats'>Stats</Link>
                    </li>
                    <li className='nav-item mr-lg-3'>
                        <Link className={props.location.pathname === '/traits' ? 'nav-link active' : 'nav-link'} to='/traits'>Traits</Link>
                    </li>
                    <li className='nav-item mr-lg-3'>
                        <Link className={props.location.pathname === '/talents' ? 'nav-link active' : 'nav-link'} to='/talents'>Talents</Link>
                    </li>
                    <li className='nav-item mr-lg-3'>
                        <Link className={props.location.pathname === '/all' ? 'nav-link active' : 'nav-link'} to='/all'>All</Link>
                    </li>
                </ul>

                <ul className='navbar-nav ml-auto mr-lg-5' data-toggle='collapse' data-target='.navbar-collapse.show'>
                    <li className='nav-item mr-lg-3'>
                        <button className='btn btn-dark' onClick={() => exportCharacter()}>Export</button>
                        <input style={{display: 'none'}} type="file" id="selectFiles" accept="application/json" onChange={(e) => importCharacter(e)} />
                        <button className='btn btn-dark' onClick={() => document.getElementById("selectFiles")?.click()}>Import</button>
                        <button className='btn btn-dark' onClick={() => window.print()}>Print</button>
                        <button className='btn btn-danger' onClick={() => clearCharacter()}>Clear</button>
                    </li>
                </ul>
            </div>
          </div>
      </nav>
      <div className='app-holder'>

        <Switch>
          <Route exact path='/'>
            <ScrollToTop />
            <Redirect to={getDefaultRedirect(search)} />
          </Route>
          <Route exact path='/stats'>
            <ScrollToTop />
            {statsSheet}
          </Route>
          <Route exact path='/traits'>
            <ScrollToTop />
            {profileSheet}
          </Route>
          <Route exact path='/talents'>
            <ScrollToTop />
            {spellSheet}
          </Route>
          <Route exact path='/all'>
            <ScrollToTop />
            {statsSheet}
            <div className='page-break' />
            <div className='page-space' />
            {profileSheet}
            <div className='page-break' />
            <div className='page-space' />
            {spellSheet}
          </Route>
        </Switch>
        

      </div>
      <footer className="no-print page-footer font-small text-white pt-4" style={{ backgroundColor: '#7F4CAE' }}>
        <div className="container-fluid container-xl text-center text-md-left mt-2 mb-3">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5>Esper Genesis Character Sheets</h5>
                <p>This page was created using espergen-character-sheets, an open source ReactJs library created by Daryl Buckle.</p>
              </div>
              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="col-md-3 mb-md-0 mb-3">
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://github.com/darylbuckle/espergen-character-sheets">Source Code</a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/espergen-character-sheets">Npm</a>
                  </li>
                  <li>
                    <a href="https://github.com/darylbuckle">Daryl Buckle</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5>Related</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://darylbuckle.github.io/dnd-character-sheets">D&D Character Sheets</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className="footer-copyright text-center mt-5 py-2 text-white small" style={{ backgroundColor: '#653294' }}>
          MIT © Daryl Buckle 2020
        </div>
      </footer>
    </div>
    
  )
}

export default withRouter(App)
