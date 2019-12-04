let { paramaterData } = require("../routes/fakeData");

let chuanHoaData = function(data) {
	console.log("START CHUAN HOA");

	console.log(data);

    let giaTriChuaThuanNhat = []

    for (key in data){
        giaTriChuaThuanNhat.push(data[key]["x"], data[key]["y"], data[key]["z"])
    }   
    console.log(giaTriChuaThuanNhat)
    console.log("Sau khi thuan nhat")
    let giaTriDaThuanNhat = dinhLuongGiaTriNgonNguKhiKhongBietIC(giaTriChuaThuanNhat)
    console.log(giaTriDaThuanNhat)
    console.log("END CHUAN HOA");
    
    let index = 0
    for (key in data){
        data[key]["x"] = {
            type:"number",
            value:giaTriDaThuanNhat[index++]
        }
        data[key]["y"] = {
            type:"number",
            value:giaTriDaThuanNhat[index++]
        }
        data[key]["z"] = {
            type:"number",
            value:giaTriDaThuanNhat[index++]
        }
    }
    console.log(data)

	return data;
};

let fakeDataTest = [
	{ type: "number", value: 48 },
	{ type: "language", value: "Thap" },
	{ type: "number", value: 53 },
	{ type: "language", value: "RatThap" },
	{ type: "language", value: "Cao" },
	{ type: "number", value: 80 },
	{ type: "language", value: "RatCao" },
	{ type: "number", value: 30 },
	{ type: "number", value: 80 },
	{ type: "number", value: 50 },
	{ type: "language", value: "RatCao" },
	{ type: "language", value: "ItThap" },
	{ type: "number", value: 55 },
	{ type: "number", value: 50 }
];

let dinhLuongGiaTriNgonNguKhiKhongBietIC = data => {
	console.log("START DINH LUONG KHI KO BIET IC");
	// console.log(data);

	let D = data
		.filter(item => {
			return item.type === "number";
		})
		.map(item => item.value);
	let LD = data
		.filter(item => {
			return item.type === "language";
		})
		.map(item => item.value);

	// console.log(D)
	// console.log(LD)

	let w1 = Math.min(...D);
	let w2 = Math.max(...D);

	let fm_RatCao = parseFloat(
		(
			paramaterData.fm.RatCao * paramaterData.cacDoanNgonNgu.HonCao[1]
		).toFixed(2)
	);
	let I_RatCao = [
		parseFloat(
			(paramaterData.cacDoanNgonNgu.HonCao[1] + fm_RatCao).toFixed(2)
		),
		1
	];
	// console.log(paramaterData.cacDoanNgonNgu.HonCao[1]+1)
	// console.log(fm_RatCao+1)
	// console.log(fm_RatCao+1)console.log(I_RatCao)

	let fm_RatThap = parseFloat(
		(
			paramaterData.fm.RatThap * paramaterData.cacDoanNgonNgu.HonThap[0]
		).toFixed(2)
	);
	let I_RatThap = [0, fm_RatThap];

	let w_Min = I_RatThap[1] * 100 + 2;
	let w_Max = I_RatCao[0] * 100 + 1;

	console.log(w_Min, w_Max);

	let IC_w = [];

	for (key in data) {
		if (data[key]["type"] === "number") {
			IC_w.push(
				parseFloat(
					(
						1 -
						(w_Max - data[key]["value"]) / (w_Max - w_Min)
					).toFixed(2)
				)
			);
		} else if (data[key]["value"] === "RatThap") {
			IC_w.push(0);
		} else {
			IC_w.push(paramaterData.cacDoanNgonNgu[data[key]["value"]][1]);
		}
	}
	// console.log(IC_w);

	data_DuocDinhLuong = IC_w.map(item => {
		return parseFloat(((w_Max - w_Min) * item + w_Min).toFixed(0));
    });
    // console.log(data_DuocDinhLuong)

    return data_DuocDinhLuong
};

// dinhLuongGiaTriNgonNguKhiKhongBietIC(fakeDataTest);

exports.chuanHoaData = chuanHoaData;
