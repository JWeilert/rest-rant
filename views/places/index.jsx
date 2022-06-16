const React = require('react')
const Def = require('./../default.jsx')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2 class="center" >{place.name}</h2>
        <p clasName="text-center">
          {place.cuisines}
        </p>
        <div class="center">
         <img class="cards" src={place.pic} alt={place.name} />
        </div>
        <p clasName="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Rant or Rave</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}

module.exports = index