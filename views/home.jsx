const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div class="center">
                <img src="images/fishFood.jpg" alt="fishFood"/>
              </div>
              <div class="center">
                <p>Photo By <a href="https://unsplash.com/photos/bpPTlXWTOvg#:~:text=Make%20something%20awesome-,Caroline%20Attwood,-Available%20for%20hire"> Caroline Attwood </a> On <a href="https://unsplash.com/">Unsplash</a></p>
              </div>
              <a class="center" href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
