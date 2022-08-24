
	let addToDoButton = document.getElementById('addToDo');
    let toDoContainer = document.getElementById('toDoContainer');
    let inputField = document.getElementById('inputField');
   
    
    addToDoButton.addEventListener('click', function(){
        var paragraph = document.createElement('li');
        paragraph.classList.add('paragraph-styling');
        toDoContainer.setAttribute('style','text-align :center;');
        paragraph.setAttribute('style','border:2px solid #000000;background-color:#D3D3D3')
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
        toDoContainer.appendChild( document.createTextNode( '\u00A0\u00A0' ) );
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function(){
            toDoContainer.removeChild(paragraph);
        })
    })
    