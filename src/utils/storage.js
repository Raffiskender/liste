// Module qui permet de faciliter la gestion du localStorage 
// et la traduction en JSON des valeurs stockées

const storage = 
{
  // Enregistrer une valeur en JSON
  set : function( key, value )
  {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    window.localStorage.setItem( key, JSON.stringify( value ) );
  },

  // Récupérer une valeur 
  get : function( key )
  {
    return JSON.parse( window.localStorage.getItem( key ) );
  },

  // Supprimer une valeur
  unset : function( key )
  {
    window.localStorage.removeItem( key );
  }
};

export default storage;