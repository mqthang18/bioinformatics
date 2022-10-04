templateMM = `
<div id="change">
<center><h3>Mô hình Maxent</h3></center>
<div id="accordion">
    <div class="card mt-2">
        <div class="card-header">
            <a href="#download" data-bs-toggle="collapse" class="btn">Download chương trình Maxent</a>
        </div>
        <div id="download" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
                Chương trình maxent được download tại địa chỉ <a href="https://biodiversityinformatics.amnh.org/open_source/maxent/">https://biodiversityinformatics.amnh.org/open_source/maxent/</a>
                <center>
                    <img src="./assets/img/maxent/DownloadMaxent.jpeg" alt="DownloadMaxent" class="map">
                </center>
            </div>
        </div>
    </div>
    <div class="card mt-2">
        <div class="card-header">
            <a href="#install" class="btn" data-bs-toggle="collapse">Cài đặt chương trình</a>
        </div>
        <div id="install" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
                Sau khi chương trình được tải về ta nhận được file
                    <img src="./assets/img/maxent/maxent_rar.png" alt="maxent_rar">
                <br>
                Chọn file cài rar trên và ấn chuột phải -> chọn "Extract here" để giải nén chương trình
                <br>
                <center>
                    <img src="./assets/img/maxent/extract_maxent.png" alt="extract_maxent" class="map">
                </center>
                <br>
                Sau khi giải nén, ta thu được thư mục maxent chứa các file như sau nghĩa là quá trình cài đặt hoàn thành
                <center>
                    <img src="./assets/img/maxent/maxent.png" alt="maxent" class="map">
                </center> 
            </div>
        </div>
    </div>
    <div class="card mt-2">
        <div class="card-header">
            <a href="#preparedata" class="btn" data-bs-toggle="collapse">Chuẩn bị dữ liệu chạy mô hình</a>
        </div>
        <div id="preparedata" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
                Phần mềm Maxent cần dữ liệu đầu vào liên quan tới dữ liệu loài - tên loại, vị trí (kinh độ, vĩ độ) - (.csv file)
                <center>
                    <img src="./assets/img/maxent/species_table.png" alt="species_table" class="map">
                </center>
                <br>
                Dữ liệu ngoại cảnh ở dạng file ".asc"

                <center>
                    <img src="./assets/img/maxent/file_asc.png" alt="file_asc" class="map">
                </center>

                Dữ liệu ngoại cảnh được download từ trang <a href="https://climateknowledgeportal.worldbank.org/country/vietnam/climate-data-historical" target="_blank">Link</a>
            </div>
        </div>
    </div>
    <div class="card mt-2">
        <div class="card-header">
            <a href="#runmodel" class="btn" data-bs-toggle="collapse">Chạy mô hình</a>
        </div>
        <div id="runmodel" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
                Mở chương trình
                <center>
                    <img src="./assets/img/maxent/maxent.png" alt="maxent" class="map">
                </center>
                Giao diện chương trình 
                <center>
                    <img src="./assets/img/maxent/maxentUI.png" alt="maxentUI" class="map">
                </center>
                Sau khi dữ liệu đã được nạp đủ, ấn "Run" để chạy mô hình 
                <center>
                    <img src="./assets/img/maxent/maxentRUN.png" alt="maxentRUN" class="map">
                </center>
            </div>
        </div>
    </div>
    <div class="card mt-2">
        <div class="card-header">
            <a href="#result" class="btn" data-bs-toggle="collapse">Kết quả</a>
        </div>
        <div id="result" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
                Kết quả được trình bày chi tiết trong file ".html"
                <center>
                    <img src="./assets/img/maxent/maxent_result.png" alt="maxent_result" class="map">
                </center>
                <center>
                <img src="./assets/img/maxent/result.jpeg" alt="result" class="map maxent-result">
                </center>
            </div>
        </div>
    </div>
</div>
</div>
`