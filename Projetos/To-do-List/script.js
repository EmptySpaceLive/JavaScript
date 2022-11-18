

const newTask = []
root = document.querySelector('#res')
var newText = document.querySelector('#txtlist')
root.inneHTML = ' '



//var newEntry = document.querySelector('#newEntry') não necessario


newEntry.addEventListener('click', () => {
    
    var txtList = newText.value
    if (txtList.length == 0) {
        alert('[ERRO] Insira uma tarefa.')
    } else {
        newText.focus()
        newText.value = ''
        
        newTask.push(txtList)        
            
        const id = `newTask-${newTask[newTask.length -1]} `
        
        const label = document.createElement('label')
        label.setAttribute('for', id)
        
        const checkbox = document.createElement('input')
        checkbox.type ='checkbox'
        checkbox.name ='newTask'
        checkbox.value = newTask
        checkbox.id = 'teste'
        
        
        label.appendChild(checkbox)
        label.appendChild(document.createTextNode(newTask[newTask.length -1]))
        root.appendChild(label) 

        
    }

    if (condition) {
        
    }
    
})

 



