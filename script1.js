const form = document.getElementById('form');

//Phase 2, Criteria 1
form.addEventListener('reset', reset);

function reset(evt){
    if(confirm("Are you sure you want to clear this form? All input will be deleted and cannot be undone.") == false){
        evt.preventDefault();
    }
    else{
        form.reset();
    }
}

// function resetFunction(){
//     const blogbox = document.getElementById('blogtext');
//     const titlebox = document.getElementById('title');
//     window.confirm("Are you sure you want to clear this form? All input will be deleted and cannot be undone.");
//     form.reset();
//     blogbox.style.backgroundColor = 'white';
//     titlebox.style.backgroundColor = 'white';
// }

//Phase 2, Criteria 2
form.addEventListener('submit', add);

function add(evt){
    const blogbox = document.getElementById('blogtext');
    const blogtext = blogbox.value;
    const titlebox = document.getElementById('title');
    const titletext = titlebox.value;
    if(blogtext==""){
        evt.preventDefault();
        blogbox.style.backgroundColor = 'pink';
    }
    else{
        blogbox.style.backgroundColor = 'white';
    }

    if(titletext==""){
        evt.preventDefault();
        titlebox.style.backgroundColor = 'pink';
    }
    else{
        titlebox.style.backgroundColor = 'white';
    }

}