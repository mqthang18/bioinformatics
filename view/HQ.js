templateHQ = `
<div id="change">
<center><h4>Habitat Quality</h4></center>
<div class="accordion">
    <div class="card mb-2">
        <div class="card-header">
            <a class="btn" data-bs-toggle="collapse" href="#problem">
                Đặt vấn đề
            </a>
        </div>
        <div id="problem" data-bs-parent="#accordion" class="collapse p-4">
            Đánh giá chất lượng sinh cảnh rừng ngập mặn, nhân tố được xác định là xói mòn sạc lở
            <center>
                <img src="./assets/img/AOI.png" alt="AOI" class="w-50">
            </center>
        </div>
    </div>

    <div class="card mb-2">
        <div class="card-header">
            <a href="#step1" class="btn" data-bs-toggle="collapse">
                Bước 1. Chuẩn bị bản đồ lớp phủ và dữ liệu 
            </a>
        </div>
        <div id="step1" data-bs-parent="#accordion" class="collapse p-4">
            <center>
                <img src="./assets/img/LULCmap_CG.png" alt="LULCmap_CG" class="w-50">
            </center>
            Từ bản đồ lớp phủ tiến hành tạo lớp phủ rừng ngập mặn bằng cách trích lớp chỉ số 15 từ bản đồ gốc, và các bản đồ đều phải chuyển về hệ quy chiếu theo đơn vị mét. 
            <br>
            Dữ liệu phỏng vấn được lượng hóa theo các chỉ tiêu để được bản dữ liệu mô tả nhân tố, mức độ tác động, nguồn tác động …
            <center>
                <img class="w-50" src="./assets/img/InVEST/HQ_stressor_info.jpg" alt="HQ_stressor_info">
            </center>
            Dữ liệu phỏng vấn được lượng hóa để đưa ra mức độ nhạy của sinh cảnh khi tiếp xúc với tác nhân gây suy giảm chất lượng sinh cảnh.
            <center>
                <img class="w-50" src="./assets/img/InVEST/HQ_sensitivity.jpg" alt="HQ_sensitivity">
            </center>
        </div>
    </div>
   
    <div class="card mb-2">
        <div class="card-header">
            <a href="#step2" class="btn" data-bs-toggle="collapse">Bước 2. Sau khi hoàn thành chuẩn bị dữ liệu, ta sắp xếp lại theo cấu trúc thư mục sau</a>
        </div>
        <div id="step2" data-bs-parent="#accordion" class="collapse p-4">
            <center>
                <img src="./assets/img/InVEST/HQ_structrure.jpg" alt="folder_structure">
            </center>
        </div>
    </div>

    <div class="card mb-2">
        <div class="card-header">
            <a href="#step3" class="btn" data-bs-toggle="collapse">Bước 3. Mở chương trình Habitat Risk Assessment</a>
        </div>
        <div id="step3" data-bs-parent="#accordion" class="collapse p-4">
            <center>
                <img src="./assets/img/InVEST/HQopen.png" alt="HQopen">
            </center>
        </div>
    </div>

    <div class="card mb-2">
        <div class="card-header">
            <a href="#step4" class="btn" data-bs-toggle="collapse">Bước 4. Nhập các dữ liệu vào phần mềm như sau</a>
        </div>
        <div id="step4" data-bs-parent="#accordion" class="collapse p-4">
            <center>
                <img src="./assets/img/InVEST/HQ_result.jpg" alt="HQ_result">
            </center>
        </div>
    </div>

    <div class="card mb-2">
        <div class="card-header">
            <a href="#step5" class="btn" data-bs-toggle="collapse">Bước 5. Sau khi đã nhập dữ liệu ấn “Run” để chạy chương trình</a>
        </div>
        <div id="step5" data-bs-parent="#accordion" class="collapse p-4">
            <center>
                <img src="./assets/img/InVEST/HRAprocess.png" alt="HRAprocess" class="w-50">
            </center>
        </div>
    </div>

    <div class="card mb-2">
        <div class="card-header">
            <a href="#step6" class="btn" data-bs-toggle="collapse">Bước 6. Quá trình chạy hoàn tất, vào thư mục được chọn ở mục “Workspace” ban đầu để xem kết quả.</a>
        </div>
        <div id="step6" data-bs-parent="#accordion" class="collapse p-4">
            <center>
                <img src="./assets/img/InVEST/HRAoutput.png" alt="HRAoutput" class="w-50">
            </center>
        </div>
    </div>

    <div class="card mb-2">
        <div class="card-header">
            <a href="#step7" class="btn" data-bs-toggle="collapse">Bước 7. Vào thư mục output để đọc kết quả</a>
        </div>
        <div id="step7" data-bs-parent="#accordion" class="collapse p-4">
            <center>
                <img src="./assets/img/InVEST/HQdeg.png" alt="HQdeg" class="w-50">
            </center>
            <center>
                <img class="w-50" src="./assets/img/InVEST/HQ_score.png" alt="HQ_score">
            </center>
        </div>
    </div>
</div>
</div>
`