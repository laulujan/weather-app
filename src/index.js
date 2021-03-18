import {displayData} from './displayData'

const initialLoad = (()=>{
    addEventListeners();
    displayData("Zapopan")

    function addEventListeners(){
        const input = document.getElementById("input-city");
        const btn = document.getElementById("search-btn");

        input.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') displayData(input.value)
        })
        btn.addEventListener('click', (e) => {
            displayData(input.value)
        })

    }

})();