const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry we can't find this page!</p>
              <p>Don't be sad. Be happy it happened</p>
              <div class="center">
                <img src="images/404Img.jpg" alt="404Img"/>
              </div>
              <div class="center">
                <p>Photo By <a href="https://unsplash.com/@charlesdeluvio"> Charles Deluvio </a> On <a href="https://unsplash.com/">Unsplash</a></p>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
