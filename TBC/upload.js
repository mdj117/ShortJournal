        var uploader = document.getElementById('uploader')
        var uploadbutton = document.getElementById('uploadbutton');
        
        uploadbutton.addEventListener('change',function(e){
            
            
            var file = e.target.files[0];
        
           var storageRef = firebase.storage().ref('Files/' + file.name);
            console.log(storageRef);
            
            var task = storageRef.put(file);
            
            task.on('state_changed',
                   
                   function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred /
                        snapshot.totalBytes) * 100;
                
                    uploader.value = percentage; 
                
            },
                    function error(err) {
                
                
            },
                    
                    function complete() {
                
                window.alert("Done");
                
                
            }
                   
                   )
            
            
            
        });