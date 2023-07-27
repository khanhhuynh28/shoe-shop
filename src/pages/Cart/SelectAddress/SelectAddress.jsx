import { useState } from "react";
import "./style.css";
export function SelectAddress() {
    const [selectedProvince, setSelectedProvince] = useState('');

    // const districts = getDistricts(selectedProvince);
    return (
        <div className='select-address'>
            <select
                className="form-select"
                id="provinceOptions"
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}>
                <option value="">-- Chọn tỉnh --</option>
                <option value="70">TP Hồ Chí Minh</option>
                <option value="90">TP Cần Thơ</option>
                <option value="81">Đồng Nai</option>
                <option value="82">Bình Dương</option>
                <option value="83">Bình Phước</option>
                <option value="84">Tây Ninh</option>
                <option value="85">Long An</option>
                <option value="86">Tiền Giang</option>
                <option value="87">Đồng Tháp</option>
                <option value="79">Bà Rịa Vũng Tàu</option>
                <option value="80">Bình Thuận</option>
                <option value="88">An Giang</option>
                <option value="89">Vĩnh Long</option>
                <option value="91">Hậu Giang</option>
                <option value="92">Kiên Giang</option>
                <option value="93">Bến Tre</option>
                <option value="94">Trà Vinh</option>
                <option value="95">Sóc Trăng</option>
                <option value="96">Bạc Liêu</option>
                <option value="97">Cà Mau</option>
                <option value="67">Lâm Đồng</option>
                <option value="66">Ninh Thuận</option>
                <option value="65">Khánh Hoà</option>
                <option value="64">Đắk Nông</option>
                <option value="63">Đắk Lăk</option>
                <option value="62">Phú Yên</option>
                <option value="60">Gia Lai</option>
                <option value="59">Bình Định</option>
                <option value="58">Kon Tum</option>
                <option value="10"> TP Hà Nội</option>
                <option value="16">Hưng Yên</option>
                <option value="17">Hải Dương</option>
                <option value="18"> TP Hải Phòng</option>
                <option value="20">Quảng Ninh</option>
                <option value="22">Bắc Ninh</option>
                <option value="23">Bắc Giang</option>
                <option value="24">Lạng Sơn</option>
                <option value="25">Thái Nguyên</option>
                <option value="26">Bắc Kạn</option>
                <option value="27">Cao Bằng</option>
                <option value="28">Vĩnh Phúc</option>
                <option value="29">Phú Thọ</option>
                <option value="30">Tuyên Quang</option>
                <option value="31">Hà Giang</option>
                <option value="32">Yên Bái</option>
                <option value="33">Lào Cai</option>
                <option value="35">Hoà Bình</option>
                <option value="36">Sơn La</option>
                <option value="38">Điện Biên</option>
                <option value="39">Lai Châu</option>
                <option value="40">Hà Nam</option>
                <option value="41">Thái Bình</option>
                <option value="42">Nam Định</option>
                <option value="43">Ninh Bình</option>
                <option value="44">Thanh Hoá</option>
                <option value="46">Nghệ An</option>
                <option value="48">Hà Tĩnh</option>
                <option value="51">Quảng Bình</option>
                <option value="52">Quảng Trị</option>
                <option value="53">Thừa Thiên Huế</option>
                <option value="55">TP Đà Nẵng</option>
                <option value="56">Quảng Nam</option>
                <option value="57">Quảng Ngãi</option>
            </select>
            <select className="form-select" id="districtSelect">
                <option value="">--Chọn Quận/huyện</option>
                {/* {districts.map((district) => (
                    <option value={district.id}>{district.name}</option>
                ))} */}
            </select>
            <select className="form-select" id="wardSelect">

                <option value="">--Chọn Xã/Phường</option></select>
        </div>
    )
}