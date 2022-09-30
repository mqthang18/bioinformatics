function AddClassSideBar() {
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
        $("#sidebar")[0].className = $("#sidebar")[0].className.replace(' position-fixed', '');
    }
}

AddClassSideBar()

window.addEventListener('resize', function (event) {
    // console.log("Hello")
    AddClassSideBar()
});

// Thêm thẻ script dùng để add dữ liệu chứa 
function AddScript(src, id, type = 'text/javascript') {
    console.log(document.getElementById(id))
    if (document.getElementById(id) == null) {
        var script = document.createElement('script');
        script.src = src;
        script.id = id;
        $('head').append(script);
    }
    else {
        console.log('The tag have existed!')
    }

}
// console.log("Hello")
// var width = window.screen.width;

// console.log(width)




function collapsible(el /* DOM object */,
    id /* string */, template = null /* string */,
    path_script = null /* string */, id_script = null /* string */) {
    if (path_script == null || id_script == null || template == null) {
        pourData(`<div id="change">Không có dữ liệu</div>`)
    } else {
        AddScript(path_script, id_script);

        console.log(el.childNodes[1].className)
        if ($('div#' + id)[0].className.includes('show-not')) {
            $('div#' + id).removeClass('show-not').addClass('show');
            el.childNodes[1].className = 'fa fa-angle-down';
        } else {
            $('div#' + id).removeClass('show').addClass('show-not');
            el.childNodes[1].className = 'fa fa-angle-right';
        }

        pourData(window[template])
    }
}

function pourData(dataAPI = null) {
    if (dataAPI == null) {
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

        if (document.getElementById('change') != undefined) {
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

        if (document.getElementById('change') != undefined) {
            app.ReturnID();
        }
    }

}

pourData()


