var templateCBC = `
                <div id="change">
                    <center><h4>Coastal Blue Carbon (CBC)<br>Đánh giá tính kết nối sinh cảnh</h4></center>
                    
                    <div id="TQ">
                        <h4>Tổng quan</h4>
                        <div id="accordion">
                            <div class="card mt-2">
                                <div class="card-header">
                                    <a class="btn" data-bs-toggle="collapse" href="#connectivity">
                                        <b>Tính kết nối sinh cảnh</b>
                                    </a>
                                </div>
                                <div id="connectivity" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span class="text-justify">Kết nối sinh thái là sự kết nối của các sinh cảnh ở các quy mô khác nhau. Sự kết nối sinh thái có liên quan đến mối quan hệ dinh dưỡng, xáo trộn, chất dinh dưỡng và dòng sinh thái thủy văn (M E. Soule 2006). Việc duy trì kết nối sinh thái sẽ góp phần bảo vệ đa dạng sinh học.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="accordion">
                            <div class="card mt-2">
                                <div class="card-header">
                                    <a href="#CB" class="btn" data-bs-toggle="collapse">
                                        <b>Carbon xanh và tầm quan trọng</b>
                                    </a>
                                </div>
                                <div id="CB" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span class="text-justify">Carbon xanh (blue carbon, BC) là carbon được lưu trữ trong rừng ngập mặn, đầm lầy thủy triều mặn và đồng cỏ biển trong đất, sinh khối sống trên mặt đất (lá, cành, thân), sinh khối sống dưới mặt đất (rễ) và sinh khối không sống (ví dụ: rác và gỗ chết) (Elizabeth Mcleod et al. 2011). Do vậy, BC có thể chỉ thị cho sinh khối, sự phát triển của rừng ngập mặn.</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


        
                    <div id="Algorithms">
                        <h4 class="mt-4">Mô hình toán học Coastal Blue Carbon, InVEST</h4>

                        <div id="accordion">
                            <div class="card mt-2">
                                <div class="card-header">
                                    <a class="btn" data-bs-toggle="collapse" href="#CS">
                                        <b>Carbon storage</b>
                                    </a>
                                </div>
                                <div id="CS" class="collapse  p-1" data-bs-parent="#accordion">
                                    <div class="card-body">
                   
                                            <b>Giả sử carbon lưu trữ cân bằng tại một thời điểm bất kì. <br></b>
                                            Khi đó carbon lưu trữ tại năm t trong bể p được tính theo công thức: <br>
                                            <center><img class="table formular" alt="formula-22" src="./assets/img/formula/CS1.png"></img><span id="f22">(22)</span></center> 
                                            <br>
                                            Trong đó: 
                                            <ul>
                                                <li>S<sub>p,t</sub>: Carbon lưu trữ tại năm t trong bể p</li>
                                                <li>N<sub>p,t</sub>: mạng lưới cô lập đề cập đến lượng carbon thu được hoặc mất đi trong năm t của bể p</li>
                                            </ul>
                        
                                            N<sub>p,t</sub> trong phương trình <a href="#f22">(22)</a>, được tính theo công thức:
                                            <br>
                                            <center>
                                                <img class="table formular" alt="formula-23" src="./assets/img/formula/CS2.png"></img>
                                                <span id="f23">(23)</span>
                                            </center>
                                            Trong đó:
                                            <ul>
                                            <li>E<sub>p,t</sub>: carbon phát thải tại năm t được cho của bể p</li>
                                            <li>A<sub>p,t</sub>: tỉ lệ tích lũy được định nghĩa bởi người dùng trong bảng sinh lý đối với mỗi lớp phủ</li>
                                            </ul>
                                            
                                            
                                            
                                            
                                            Tuy nhiên, phương trình <a href="#f23">(23)</a> chỉ ứng dụng cho bể biomass và bể đất.
                                            <br>
                                            Vì vậy, tích lũy vật chất rơi rụng chỉ tích lũy theo tỷ lệ do người sử dụng quy định trong bảng lý sinh.
                                            <center>
                                                <img class="table formular" id="formula-24" src="./assets/img/formula/CS4.png"></img>
                                                <span id="f24">(24)</span>
                                            </center>
                                            Do đó, sự cô lập ròng cho bể vật chất rơi rụng, N<sub>plitter,t</sub> thì tương đương A<sub>plitter</sub>, đã được xác định bởi người dùng trong bảng sinh lý.
                        
                                            <br>
                                            Mô hình cũng tính toán tổng lượng dự trữ cho mỗi bước thời gian trong năm t, đơn giản là tổng của tất cả các trữ lượng carbon trong cả 3 nhóm:
                                            <center>
                                                <img class="table formular" alt="formula-25" src="./assets/img/formula/CS5.png"></img>
                                                <span id="f25">(25)</span>
                                            </center>
                                 
                                    </div>
                                </div>
                            </div>

                            
                            
                            
                            
                            <div class="card mt-2">
                                <div class="card-header">
                                    <a class="btn" data-bs-toggle="collapse" href="#CA">
                                        <b>Carbon accumulation</b>
                                    </a>
                                </div>
                                <div id="CA" class="collapse p-4" data-bs-parent="#accordion">
                                    <span class="text-justify">
                                        Sự tích tụ mô hình này giống như tỷ lệ cacbon được giữ lại trong đất ở dạng hữu cơ sau năm đầu tiên phân hủy. Liên quan đến ngân sách hệ sinh thái hàng năm, nhóm này chưa được tái tập trung, vì vậy nó thể hiện tích lũy ròng.
                                        <br>
                                        Carbon này thường có nguồn gốc từ quá trình sản xuất dưới lòng đất, và thời gian cư trú có thể từ hàng thập kỷ đến hàng thiên niên kỷ.
                                        <br>
                                        <span class="text-danger">Sự tích tụ này góp phần vào sự phát triển của các “hồ chứa” carbon được coi là gần như vĩnh viễn trừ khi bị xáo trộn.</span>      
                                    </span>
                                </div>
                            </div>
                            
                            

                            <div class="card mt-2">
                                <div class="card-header">
                                    <a class="btn" data-bs-toggle="collapse" href="#CE">
                                        <b>Carbon emissions</b>
                                    </a>
                                </div>
                                <div id="CE" class="collapse p-4" data-bs-parent="#accordion">
                                    <span class="text-justify">
                                        <center>
                                            <img class="table formular" alt="formula-26" src="./assets/img/formula/CE1.png"></img>
                                            <span id="f26">(26)</span>
                                        </center>
                                        <br>
                                        Trong đó:
                                        <br>
                                        <ul>
                                            <li>E<sub>p,t</sub>: Khối lượng phát ra từ bể p trong năm t;</li>
                                            <li>D<sub>p,s</sub>: tổng khổi lượng carbon sẽ giải phóng theo thời gian từ quá trình chuyển đổi diễn ra trên ô pixel x trong năm chuyển tiếp s theo thời gian t->&#8734;;</li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                           
                            
                        </div>
                        
                    </div>
        
                    <div id="Step">
                        <h4 class="mt-4">Các bước thực hiện</h4>
                        <!-- -------------------------------------------------------- -->
                        <div id="accordion">
                            <div class="card mt-2">
                              <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#collectdata">
                                    <b>Thu thập dữ liệu</b>
                                </a>
                              </div>
                              <div id="collectdata" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#LULCmap" class="btn" data-bs-toggle="collapse">
                                                <b>Sưu tầm Land Use and Land Cover map (LULC)</b>
                                            </a>
                                        </div>
                                        <div id="LULCmap" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                <span class="text-justify">
                                                    Bản đồ Land Use có thể đạt được bằng cách giải đoán ảnh vệ tinh từ cơ sở dữ liệu vệ tinh lớn như Google Earth Engine ...
                                                    <br>
                                                    LULC map có thể được download từ các nguồn sẵn có từ trang jaxa: <a href="https://www.eorc.jaxa.jp/ALOS/en/dataset/lulc_e.htm">Link</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <br>

                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#biomassdata" class="btn" data-bs-toggle="collapse">
                                                <b>Dữ liệu Carbon</b>
                                            </a>
                                        </div>
                                        <div id="biomassdata" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                <span class="text-justify">
                                                    Phương pháp tính sinh khối và trữ lượng carbon dựa vào tài liệu tập huấn quy trình lấy mẫu để đánh giá trữ lượng carbon trong các hệ sinh thái đất ngập nước nhiệt đới của Trung tâm nghiên cứu lâm nghiệp Quốc tế (CIFOR) tổ chức tại Cần Giờ và Cà Mau năm 2012.
                                                    <br>
                                                    <p class="mt-2">
                                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#SumC_Biomass" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                            <b><i>Tổng lượng carbon dự trữ trong sinh khối (biomass)</i></b>
                                                        </a>
                                                    </p>
                                                      <div class="collapse mb-2" id="SumC_Biomass">
                                                        <div class="card card-body">
                                                            Theo Akira Komiyama et al., 2008:<br>
                                                            <span class="text-danger">Sinh khối cây đứng (kg) = 0,251xpxDBH<sup>2.46</sup></span>
                                                            <br>
                                                            <span class="text-danger">Sinh khối rễ (kg) = 0.199xp<sup>0.899</sup>xDBH<sup>2.22</sup></span>
                     
                                                        </div>
                                                      </div>
                                           
                                                    <p>
                                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#SumC_Soil" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                            <b><i>Tổng lượng carbon dự trữ trong đất (soil)</i></b>
                                                        </a>
                                                    </p>
                                                      <div class="collapse mb-2" id="SumC_Soil">
                                                        <div class="card card-body">
                                                            Áp dụng phương pháp đốt khô: Thu mẫu ngoài thực địa mang về phòng thí nghiệm phơi khô tự nhiên. Sau khi phơi khô mang mẫu đất nghiền và sàn qua rây, đối với từng mẫu đem cân ghi lại khối lượng sau đó để vào cốc bỏ vào tủ sấy ở 105oC trong 1h30’ cho hết hơi nước. Đem ra bình hút ẩm cho nguội. Kế tiếp cân mẫu sau khi sấy mang mẫu vào lò đốt ở 550oC trong 2h, xong để vào bình hút ẩm 30 phút cho nguội rồi cân mẫu.
                                                            <br>
                                                            <u>Tính lượng carbon tích lũy trên đơn vị diện tích 1 ha ở từng tầng đất:</u>
                                                            <br>
                                                            <span class="text-danger">C (Mg/ha) = dung trọng đất (g/cm3) x độ sâu của đất (C Lee Sherrod et al.) x %C (J Boone Kauffman et al. 2012)</span>
                                                            <br>
                                                            Trong đó: % C = (khối lượng đất sau sấy – khối lượng đất sau đốt)/1.8 (TCVN 6642:2000)
                                                        </div>
                                                      </div>
                                    
                                    
                                                    
                                                    <p>
                                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#SumC_litter" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                            <b><i>Tổng lượng carbon dự trữ trong vật chất rơi rụng (litter)</i></b>
                                                        </a>
                                                    </p>
                                                    <div class="collapse mb-2" id="SumC_litter">
                                                    <div class="card card-body">
                                                        Xác định thể tích đường kính của cây gỗ chết theo nhóm 
                                                        <ul>
                                                            <li>
                                                                <b>Mẫu gỗ có đường kính 2.5 cm - 7.5 cm</b>
                                                                <br>
                                                                <center>
                                                                    <img class="formular"src="./assets/img/formula/ThuDuLieu1.png" alt="CstorageInLitter">
                                                                    (J Boone Kauffman & Daniel C Donato 2012)
                                                                </center>
                                                                <br>
                                                                Trong đó: 
                                                                <ul>
                                                                    <li>Volume: Khối lượng gỗ thu được</li>
                                                                    <li>N<sub>i</sub> = số mẫu gỗ thu được trên mỗi tuyến OA hoặc OB trong mỗi ô tiêu chuẩn i</li>
                                                                    <li>QMD<sub>i</sub> = Trung bình bình phương bậc hai đường kính của mẫu gỗ trong từng nhóm i (C Lee Sherrod & Calvin McMillan).</li>
                                                                    <li>Chiều dài tuyến thu mẫu (m)</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <b>Mẫu gỗ có đường kính > 7.5 cm</b>
                                                                <br>
                                                                <center>
                                                                    <img class="formular" src="./assets/img/formula/ThuDuLieu2.png" alt="CSstorageLitter">
                                                                    (J Boone Kauffman & Daniel C Donato 2012)
                                                                </center>
                                                                Trong đó: 
                                                                <ul>
                                                                    <li>Volume: khối lượng gỗ thu được</li>
                                                                    <li>d1, d2, dn = Đường kính các mẫu gỗ trên mỗi tuyến OA hoặc OB trong mỗi ô tiêu (C Lee Sherrod & Calvin McMillan)
                                                                        </li>
                                                                    <li>L = Chiều dài tuyến thu mẫu gỗ lớn (m).</li>
                                                                    <li>Tính Carbon tích lũy từ vật rụng trên một ha
                                                                        <br>
                                                                        C (Mg/ha) = Volume (m3/ha) x Tỷ trọng (g/cm3) (J Boone Kauffman & Daniel C Donato 2012)
                                                                    </li>
                                                                </ul>
                                                                <center>
                                                                    <img class="table" src="./assets/img/formula/DataTable.png" alt="TyTrong">
                                                                </center>
                                                            </li>   
                                                        </ul>
                                                    </div>
                                                    </div>
                                                   

                                                    <p>
                                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#SumC_threepools" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                            <b><i>Tổng trữ lượng Carbon trong 3 bể chứa</i></b>
                                                        </a>
                                                    </p>
                                                    <div class="collapse mb-2" id="SumC_threepools">
                                                        <div class="card card-body">
                                                            Tổng trữ lượng Carbon (Mg/ha) = Tổng trữ lượng Carbon đất (Mg/ha) + Tổng trữ lượng Carbon cây đứng (Mg/ha) + Tổng trữ lượng Carbon rễ (Mg/ha) + Tổng trữ lượng Carbon vật rụng (Mg/ha) 
                                                        </div>
                                                    </div>
                                                    
                               
                                                    
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                              </div>
                            </div>
                          
                            <div class="card mt-2">
                              <div class="card-header">
                                <a class="collapsed btn" data-bs-toggle="collapse" href="#HandleData">
                                    <b>Xử lý dữ liệu</b>
                                </a>
                              </div>
                              <div id="HandleData" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <span class="text-justify">
                                        Các dữ liệu cần có cho mô hình: 
                                        <center>
                                            <img class="table" src="./assets/img/InVEST/FilesforCBC.jpg" alt="CBCinterface">
                                        </center>
                                        <br>
                                        Trong đó:
                                            <br>
                                            <p>
                                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#LULCmap" role="button" aria-expanded="false" aria-controls="LULCmap">
                                                    Bản đồ tại đầu cuối của giai đoạn 2007 - 2017 và baseline map vào năm 2006
                                                </a>
                                            </p>
                                            <div class="collapse" id="LULCmap">
                                                <div class="card card-body mb-3">
                                                    <center>
                                                        <div class="d-inline-flex">
                                                            <center>
                                                                <img class="w-100" src="./assets/img/InVEST/LULC2006.png" alt="LULC2006"></img>
                                                            </center>
                                                            <center>
                                                                <img class="w-100" src="./assets/img/InVEST/LULC2007.png" alt="LULC2007"></img>
                                                            </center>
                                                            <center>
                                                                <img class="w-100" src="./assets/img/InVEST/LULC2017.png" alt="LULC2017"></img>
                                                            </center>
                                                        </div>
                                                    </center>
                                                    <h5>Các bước tạo bản đồ LULC</h5>
                                                    <ul>
                                                        <li>Bước 1. Download bản đồ tại địa chỉ (để download cần phải đăng ký tài khoản): <a class="text-decoration-none" href="https://www.eorc.jaxa.jp/ALOS/en/dataset/lulc/lulc_vnm_v2109_e.htm" target="_blank">Link <i class="fa fa-download" aria-hidden="true"></i></a></li>
                                                        <li>
                                                            Bước 2. Sau khi download dữ liệu từ jaxa, ta được file nén (.rar) <img src="./assets/img/InVEST/LULCwinrar.png" alt="LULCwinrar">, tiến hành giải nén <center><img class="w-50" src="./assets/img/InVEST/ExtractLULCData.png" alt="ExtractLULC"></center>
                                                        </li>
                                                        <li>
                                                            Bước 3. Sau đó chúng ta thu được dữ liệu LULC
                                                            <center>
                                                                <img class="w-50" src="./assets/img/InVEST/LULCfiles.png" alt="">
                                                            </center>
                                                        </li>
                                                        <li>
                                                            Bước 4. Sử dụng chương trình xử lý dữ liệu GIS, trong hướng dẫn này tôi sẽ sử dụng chương trình QGIS, <img src="./assets/img/QGISapp.png" alt="Qgisapp" style="width: 100px; height: 40px;">,bạn có thể download tại địa chỉ <a class="text-decoration-none" href="https://qgis.org/en/site/" target="_blank">https://qgis.org/en/site/</a>
                                                        </li>
                                                        <li>
                                                            Bước 5. Kéo thả layer các năm 2006, 2007, 2017 vào QGIS
                                                            <center>
                                                                <img class="w-50" src="./assets/img/LULCmap_ori.png" alt="LULCmap_ori">
                                                            </center>
                                                        </li>
                                                        <li>
                                                            Bước 6. Tạo shapefile (.shp) dùng để cắt bản đồ khu vực nghiên cứu, xem hướng dẫn chi tiết tại file trình chiếu: <a class="text-decoration-none" target="_blank" href="https://docs.google.com/presentation/d/1Bz8KCJxQLDARuWwCq5RbRLvg_C1XC0D154E2g4RepGM/edit?usp=sharing">Link</a>
                                                        </li>
                                                    </ul> 
                                                </div>
                                            </div>
                                            <!-- ------------------------------------------------- -->
                                            <p>
                                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#lulc_lookup" role="button" aria-expanded="false" aria-controls="lulc_lookup">
                                                    Bảng lulc_lookup.csv
                                                </a>
                                            </p>
                                            <div class="collapse" id="lulc_lookup">
                                                <div class="card card-body mb-3">
                                                    <center>
                                                        <img class="table" src="./assets/img/InVEST/lulc_lookup.png" alt="lulc_lookup_img">
                                                    </center>
                                                    <br>
                                                    Bảng lulc_lookup sử dụng "TRUE" để chỉ ra lớp phủ là sinh cảnh hoặc là lớp phủ muốn chạy tính toán chỉ số blue carbon. 
                                                </div>
                                            </div>
                                            <!-- ------------------------------------------------- -->
                                            <p>
                                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#transient_template" role="button" aria-expanded="false" aria-controls="transient_template">
                                                Biophysical_template.csv
                                                </a>
                                            </p>
                                            <div class="collapse" id="transient_template">
                                                <div class="card card-body mb-3">
                                                    <center>
                                                        <img class="table" src="./assets/img/InVEST/biophysical.jpg" alt="biophysical">
                                                    </center>
                                                    <p>Số liệu được thu từ thực nghiệm hoặc tham khảo từ các bài báo khoa học được công bố</p>
                                                </div>
                                            </div>
                                            <!-- ------------------------------------------------- -->
                                            <p>
                                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#transions_out" role="button" aria-expanded="false" aria-controls="transions_out">
                                                    Bảng transitions_out.csv
                                                </a>
                                            </p>
                                            <div class="collapse" id="transions_out">
                                                <div class="card card-body mb-3">
                                                    <center>
                                                        <img class="table" src="./assets/img/InVEST/transitions_out.jpg" alt="">
                                                    </center>
                                                    <p class="mt-2">
                                                        Sử dụng công cụ <img src="./assets/img/InVEST/CBCpreprocessor.png" alt="cbcpreprocessor" style="width: 200px; height: 30px;"> để tiến hành tạo bảng transitions_out
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- ------------------------------------------------- -->
                                            <!-- <p>
                                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#carbon_pool_initial_template_out" role="button" aria-expanded="false" aria-controls="carbon_pool_initial_template_out">
                                                    Bảng carbon_pool_initial_template_out.csv
                                                </a>
                                            </p>
                                            <div class="collapse" id="carbon_pool_initial_template_out">
                                                <div class="card card-body">
                                                <center>
                                                        <img src="./assets/img/InVEST/Cpoolinitial.png" alt="CpoolInitial_table">
                                                </center>
                                                </div>
                                            </div> -->
                                            
                                    </span>
                                    
                                </div>
                              </div>
                            </div>
                          
                            <div class="card mt-2">
                              <div class="card-header">
                                <a class="collapsed btn" data-bs-toggle="collapse" href="#RunModel">
                                    <b>Chạy mô hình</b>
                                </a>
                              </div>
                              <div id="RunModel" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <span class="text-justify">
                                        <ul>
                                            <li>
                                                Bước 1. Mở chương trình Coastal Blue Carbon
                                                <div class="d-inline-flex">
                                                    <center>
                                                        <img src="./assets/img/InVEST/coastalbluecarbon_open.png" alt="coastalbluecarbon" class="w-50">
                                                    </center>
                                                    <center>
                                                        <img src="./assets/img/InVEST/CBC_interface.png" alt="CBCinterface" class="w-50">
                                                    </center>
                                                </div>
                                            </li>
                                            <li>
                                                Bước 2. Trong cửa sổ mới xuất hiện, ta thực hiện thiết lập tham số theo hướng dẫn sử dụng của InVEST để bắt đầu chạy chương trình
                                                <center>
                                                    <img class="w-50" src="./assets/img/InVEST/addData.png" alt="addData">
                                                </center>
                                            </li>
                                            <li>
                                                Bước 3. Sau khi đã thiết lập hoàn thành các thông số, ấn "Run" để chạy chương trình
                                                <center>
                                                    <img class="w-50" src="./assets/img/InVEST/StartRunModel.jpg" alt="StartRunModel">
                                                </center>
                                            </li>
                                            <li>
                                                Bước 4. Quá trình chạy mô hình diễn ra, sau khi hoàn thành chương trình sẽ thông báo <b class="text-danger">"Model completed successful"</b>, sau đó ấn <b class="text-danger">"Open workspace"</b>
                                                <div class="d-flex">
                                                    <center>
                                                        <img src="./assets/img/InVEST/CBCprocessing.png" alt="CBCprocessing" class="w-50">
                                                    </center>
                                                    <center>
                                                        <img class="w-50" src="./assets/img/InVEST/CBCsuccess.png" alt="CBCsuccess">
                                                    </center>
                                                </div>
                                            </li>
                                            <li>
                                                Bước 5. Trong cửa sổ mới được mở, ta được
                                                <center>
                                                    <img src="./assets/img/InVEST/CBCresult1.png" alt="CBCresult1" class="w-50">
                                                </center>
                                                Trong đó, thư mục "output" chứa các tệp kết quả của chương trình
                                                <center>
                                                    <img src="./assets/img/InVEST/CBCresult2.png" alt="CBCresult2" class="w-50">
                                                </center>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                              </div>
                            </div>
                          
                            <div class="card mt-2">
                                <div class="card-header">
                                  <a class="collapsed btn" data-bs-toggle="collapse" href="#ReadResult">
                                    <b>Đọc kết quả</b>
                                  </a>
                                </div>
                                <div id="ReadResult" class="collapse" data-bs-parent="#accordion">
                                  <div class="card-body">
                                      <span class="text-justify">
                                        Sử dụng QGIS để đọc kết quả được xuất ra sau khi chạy chương trình
                                      </span>
                                      
                                      <div id="accordion" class="mt-2">
                                        <div class="card">
                                            <div class="card-header">
                                                <a href="#carbon_storage" class="collapsed btn" data-bs-toggle="collapse">
                                                    <b>Carbon storage</b>
                                                </a>
                                            </div>
                                            <div id="carbon_storage" class="collapse" data-bs-parent="#accordion">
                                                <div class="card-body">
                                                    <div class="d-inline-flex">
                                                        <center>
                                                            <img src="./assets/img/InVEST/KQ2006.png" alt="kq2006" style="width: 100%;">
                                                        </center>
                                                        <center>
                                                            <img src="./assets/img/InVEST/KQ2007.png" alt="kq2007" style="width: 100%;">
                                                        </center>
                                                        <center>
                                                            <img src="./assets/img/InVEST/KQ2017.png" alt="kq2017" style="width: 100%;">
                                                        </center>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                      <br>
                                      <div id="accordion">
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed btn" data-bs-toggle="collapse" href="#carbon_accumulation">
                                                    <b>Carbon accumulation</b>
                                                </a>
                                            </div>
                                            <div id="carbon_accumulation" class="collapse" data-bs-parent="#accordion">
                                                <div class="card-body">
                                                    <div class="d-inline-flex">
                                                        <center>
                                                            <img src="./assets/img/InVEST/KQ2006_2007.png" style="width: 100%;" alt="kqAccum2006_2007">
                                                        </center>
                                                        <center>
                                                            <img src="./assets/img/InVEST/KQstorage2007_2017.png" style="width: 100%;" alt="kqAccum2007_2017">
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>                                        
                                      </div>                       
                                      <br>
                                      <div class="accordion">
                                        <div class="card">
                                            <div class="card-header">
                                                <a data-bs-toggle="collapse" class="collapsed btn" href="#carbon_emission">                                                      <b>Carbon emissions</b>
                                                </a>
                                            </div>
                                            <div id="carbon_emission" class="collapse" data-bs-parent="#accordion">
                                                <div class="card-body">
                                                    <div class="d-inline-flex">
                                                        <center>
                                                            <img src="./assets/img/InVEST/kqemission2006_2007.png" alt="kqemission2006_2007" style="width: 100%;">
                                                        </center>
                                                        <center>
                                                            <img src="./assets/img/InVEST/kqemission2007_2017.png" alt="kqemission2007_2017" style="width: 100%;">
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                      </div>
                                      
                                  </div>
                                </div>
                            </div>
                        </div>
                        <!-- --------------------------------------------------------------------------------------- -->
                    </div>
                </div>
                `