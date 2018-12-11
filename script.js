setTimeout(function() {


  var allStates = document.querySelectorAll("div.container-individual-state");

    for (var i = 0; i < allStates.length; i++) {
      var selectElem = document.getElementById('select')

      selectElem.addEventListener('change', function() {
        allStates.forEach(function(state){
          state.className = "hide";
        })
        var index = selectElem.selectedIndex;
        allStates[index].className ="show";
      })
    }


},0);
