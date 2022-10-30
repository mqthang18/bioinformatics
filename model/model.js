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




function collapsible(el=null /* DOM object */,
    id=null /* string */, template = null /* string */,
    path_script = null /* string */, id_script = null /* string */) {
    // console.log(el.parentElement.id)
    if (el == null) {
        pourData(window[template])
    } else {
        if (path_script == null || id_script == null || template == null) {
            pourData(`<div id="change">Không có dữ liệu</div>`)
        } else {
            AddScript(path_script, id_script);
            collapsibleCloseUnactive(el.parentElement.id, id)
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
}

function collapsibleCloseUnactive(NumOrder, id) {
    listEl = $('#'+'sidebar-li')[0].children;
    // console.log(listEl['4'])
    Object.values(listEl).forEach(element => {
        if (element.id != NumOrder) {
            // console.log(element.childNodes[1].childNodes[1].className)
            element.childNodes[1].childNodes[1].className = 'fa fa-angle-right'
            // console.log(element.childNodes[3].className)
            element.childNodes[3].className = 'block show-not'
        }
    });
}



// collapsibleCloseUnactive(1)

function pourData(dataAPI = null) {
    if (dataAPI == null) {
        app = new Vue({
            el: "#topic",
            template: `<div id="change">
                            Ứng dụng mô hình InVEST trong dự án Cần Giờ liên quan đến tính kết nối sinh cảnh với mô hình đánh giá chất lượng sinh cảnh, đánh giá rủi ro. 
                            <br><br>
                            <p>Thư mục dữ liệu: <a href="https://drive.google.com/drive/folders/1wVZ2_OpE74yDw1VqBUVMP_RKPm7peC0s?usp=sharing" target="_blank">Link</a></p>
                            <p>Install Invest: Powerpoint - <a href="https://docs.google.com/presentation/d/1ilIIs136wxks4T9eX9Fzkhu72hSowLqw/edit?usp=sharing&ouid=109658153567321835773&rtpof=true&sd=true" target="_blank" class="text-decoration-none">Link</a>; Word - <a href="https://docs.google.com/document/d/1qOdQIAB3dMCbBl5gyszix447GutrGSPa/edit?usp=sharing&ouid=109658153567321835773&rtpof=true&sd=true" target="_blank" class="text-decoration-none">Link</a></p>

                            <p>
                                Coastal Blue Carbon: powerpoint - <a href="https://docs.google.com/document/d/1aByXylT7odq4dJWMIdZGHA_FpUUEY9IL/edit?usp=sharing&ouid=109658153567321835773&rtpof=true&sd=true" target="_blank" class="text-decoration-none">Link</a>;
                                Word - <a href="https://docs.google.com/presentation/d/1PEff82es5QNjZlIpYVyQ0ePYYsOrxLMaiY65TBfddhs/edit?usp=sharing" target="_blank" class="text-decoration-none">Link</a>
                            </p>

                            <p>
                                Habitat Quality: 

                                Powerpoint - <a href="https://docs.google.com/presentation/d/1cwlQ6YeW9GoBAs6TLElYgFi1jXDeEoUX/edit?usp=sharing&ouid=109658153567321835773&rtpof=true&sd=true" target="_blank" class="text-decoration-none">Link</a>;
                                Word - <a href="https://docs.google.com/document/d/1QZKqyGxJSuH1LROKgeU5Oj791jGNnPFK/edit?usp=sharing&ouid=109658153567321835773&rtpof=true&sd=true" target="_blank" class="text-decoration-none">Link</a>
                            </p>

                            <p>
                                Habitat Risk Assessment:
                                Powerpoint - <a href="https://docs.google.com/presentation/d/1_c9KwDPwm2zRZsgHwqb5JofdkpG8-xoG/edit?usp=sharing&ouid=109658153567321835773&rtpof=true&sd=true" target="_blank" class="text-decoration-none">Link</a>; Word - <a href="https://docs.google.com/document/d/1fwfk14M1_Rj0wd0GLSWejYhEMDaKKz5S/edit?usp=sharing&ouid=109658153567321835773&rtpof=true&sd=true" target="_blank" class="text-decoration-none">Link</a>
                            </p>

                            <p>
                                Maxent model: 
                                Powerpoint - <a href="https://docs.google.com/presentation/d/1z0xA6ijfxbyc6ZupvcO11zhjdgg3SAJJtvTYAXAIb4w/edit?usp=sharing" target="_blank" class="text-decoration-none">Link</a>; Word - <a href="https://docs.google.com/document/d/1IkuiytjrsXBbwt_xz_7MxDOIa_y5lOhMNJMLHdcP7QM/edit?usp=sharing" target="_blank" class="text-decoration-none">Link</a>
                            </p>
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


