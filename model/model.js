
window.addEventListener('resize', function(event){
    // console.log("Hello")
    var width = $(window).width();
    if (width > 1000) {
        // position-fixed
        if ($("#sidebar")[0].className.includes(' position-fixed')) {
            console.log('Not add')
        } else {
            $("#sidebar")[0].className = $("#sidebar")[0].className + ' position-fixed';
            console.log($("#sidebar")[0].className);
        }
        
    } else {
        console.log($("#sidebar")[0].className)
        $("#sidebar")[0].className = $("#sidebar")[0].className.replace(' position-fixed','');
    }
  });

// console.log("Hello")
// var width = window.screen.width;

// console.log(width)

templateCBC = 
        ``




function collapsible(el, id) {
    console.log(el.childNodes[1].className)
    if ($('div#'+id)[0].className.includes('show-not')) {
        $('div#'+id).removeClass('show-not').addClass('show');
        el.childNodes[1].className = 'fa fa-angle-down';
    } else {
        $('div#'+id).removeClass('show').addClass('show-not');
        el.childNodes[1].className = 'fa fa-angle-right';
    }

    pourData(templateCBC)
}

function pourData(dataAPI=null) {
    if (dataAPI==null) {
        app = new Vue({
            el: "#topic",
            template: `<div id="change">
                            Ứng dụng mô hình InVEST trong dự án Cần Giờ liên quan đến tính kết nối sinh cảnh với mô hình đánh giá chất lượng sinh cảnh, đánh giá rủi ro. 
                        </div>`,
            methods: {
             ReturnID() {
                 var el = document.getElementById('change');
                 el.id = "topic";
             }  
            }
         })
        
         if (document.getElementById('change')!=undefined) {
            app.ReturnID();
        }
    } else {
        app = new Vue({
            el: "#topic",
            template: dataAPI,
            methods: {
             ReturnID() {
                 var el = document.getElementById('change');
                 el.id = "topic";
             }  
            }
         })
        
        if (document.getElementById('change')!=undefined) {
            app.ReturnID();
        }
    }
    
}

// pourData(templateCBC)


