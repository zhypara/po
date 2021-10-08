import React from 'react';
import './App.css';

function PokemonImage(props) {
    
    return (<>

    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    
     <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Pokemon name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
    
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Pokemon description
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" id="pokeon desc" type="text" placeholder="Pokemon desc"/>
    </div>
     <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="url">
        Pokemon image URL
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Pokemon desc"/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
        Add pokemon
      </button>
    </div>
    </form>
    

 

  
</>);
}



export default PokemonImage;