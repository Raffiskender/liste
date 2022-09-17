// Module qui permet de faciliter la gestion du localStorage 
// et la traduction en JSON des valeurs stockées

const storage = 
{
  // Enregistrer une valeur en JSON
  set : function( key, value )
  {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    const json = JSON.stringify( value );

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    window.localStorage.setItem( key, json );
  },

  // Récupérer une valeur 
  get : function( key )
  {
    const json = window.localStorage.getItem( key );
    return JSON.parse( json );
  },

  // Supprimer une valeur
  unset : function( key )
  {
    window.localStorage.removeItem( key );
  }
};

export default storage;