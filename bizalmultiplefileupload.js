/***
 Javascript plugin for uploading 
 multiple files
 Under MIT license.
 Deleveloper: Ebong Makoge 
 Owner: Ebong Makoge.
 Use Case: Public .
 Maintainance: Ebong Makoge/Public
 * 
 */
function callable(formel,domelement,previewimagesdisplay){
    var fileinput = document.querySelector(domelement);
    fileinput.addEventListener('click',uploader);

function uploader(e){
    console.log('upload file called')
    e.preventDefault();
    /* create a new input document and add the change file to it */
    newinput = document.createElement('input');
    /* get the form element where to append the new 
    created input element  */
    mainform  = document.querySelector(formel);

    newinput.className='newinput'
    newinput.setAttribute('type','file')
    newinput.setAttribute('name','image')
    // adding of file to the new input 

/* open the new created file input */    
    mainform.appendChild(newinput)
    if(newinput && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        newinput.dispatchEvent(evt);
     }

/* 
call the change eventlistener function for the 
newly created input.
-checks file type
-this function previews uploaded image.
*/

newinput.addEventListener('change',preview)
function preview(e){
    e.preventDefault()
    const uploaded =  e.target
    // check if uploaded file is an image
    const file             = e.target.files[0]
    const filetype         = file['type']
    const validImageTypes = ['image/jpeg','image/png']
    if(!validImageTypes.includes(filetype)){
        alert('Select an image')
    }
    else{
        
        // create image preview uploaded images
        elcontainer            = document.querySelector(previewimagesdisplay)
        li                     = document.createElement('li');
        divcontainer           = document.createElement('div');
        img                    = document.createElement('img');
        divcancel              = document.createElement('div');
        cannote                = document.createTextNode('X');
        divcancel.className    =  "divcancel"
        divcontainer.className = "rmupload";
        img.className          = "imgclass";
        cannote.className      = "cancel-note";
        divcancel.appendChild(img)
        divcancel.appendChild(cannote)
        divcontainer.appendChild(divcancel)
        var reader    = new FileReader();
        reader.onload = function(e){
         //preview upload image
         img.src=e.target.result
        }
        reader.readAsDataURL(e.target.files[0]);
        
        li.appendChild(divcontainer)
        elcontainer.appendChild(li)
        /* create an event handler when x is clicked
        by a user */
        
        divcancel.addEventListener('click',imgrove)
        /* function to remove  uploaded images */
        function imgrove(e){
            e.preventDefault();
            if(e.target instanceof HTMLDivElement){
                targetElment_ = e.target
                setTimeout(function(){
                   
                    
                    targetElment_.parentNode.removeChild(targetElment_) 
                              
                //remove created input from parent note
                uploaded.parentNode.removeChild(uploaded)
                },100)  
            }
       
  

            
        }
    }
    
}
}

}

