let data = [{"NoonName":"上午","DeptName":"家庭醫學科","SectionName":"20診","EmployeeName":"杜明勳","CurNum":"14"},{"NoonName":"上午","DeptName":"外科","SectionName":"27診","EmployeeName":"張宏泰","CurNum":"26"},{"NoonName":"上午","DeptName":"外科","SectionName":"31診","EmployeeName":"陳培桓","CurNum":"27"},{"NoonName":"上午","DeptName":"外科","SectionName":"29診","EmployeeName":"沈茂昌","CurNum":"31"},{"NoonName":"上午","DeptName":"外科","SectionName":"32診","EmployeeName":"蔣百聰","CurNum":"15"},{"NoonName":"上午","DeptName":"外科","SectionName":"30診","EmployeeName":"洪振翔","CurNum":"34"},{"NoonName":"上午","DeptName":"小兒科","SectionName":"11診","EmployeeName":"許文馨","CurNum":"先到先看"},{"NoonName":"上午","DeptName":"小兒科","SectionName":"12診","EmployeeName":"溫美紅","CurNum":"先到先看"},{"NoonName":"上午","DeptName":"婦產科","SectionName":"19診","EmployeeName":"林兌篷","CurNum":"32"},{"NoonName":"上午","DeptName":"骨科","SectionName":"15診","EmployeeName":"林富成","CurNum":"86"},{"NoonName":"上午","DeptName":"骨科","SectionName":"16診","EmployeeName":"陳品全","CurNum":"32"},{"NoonName":"上午","DeptName":"泌尿科","SectionName":"24診","EmployeeName":"翁偉哲","CurNum":"30"},{"NoonName":"上午","DeptName":"耳鼻喉科","SectionName":"35診","EmployeeName":"童維康","CurNum":"10"},{"NoonName":"上午","DeptName":"眼科","SectionName":"37診","EmployeeName":"侯姿宇","CurNum":"16"},{"NoonName":"上午","DeptName":"身心科","SectionName":"21診","EmployeeName":"陳億倖","CurNum":"41"},{"NoonName":"上午","DeptName":"復健科","SectionName":"22診","EmployeeName":"鄭旭昇","CurNum":"44"},{"NoonName":"上午","DeptName":"胃腸肝膽科","SectionName":"42診","EmployeeName":"賴俊煌","CurNum":"73"},{"NoonName":"上午","DeptName":"胸腔內科","SectionName":"43診","EmployeeName":"連偉立","CurNum":"58"},{"NoonName":"上午","DeptName":"胸腔內科","SectionName":"45診","EmployeeName":"林奇模","CurNum":"35"},{"NoonName":"上午","DeptName":"腎臟內科","SectionName":"41診","EmployeeName":"張銘珊","CurNum":"18"},{"NoonName":"上午","DeptName":"神經內科","SectionName":"46診","EmployeeName":"張家禎","CurNum":"49"},{"NoonName":"上午","DeptName":"風濕免疫科","SectionName":"48診","EmployeeName":"王鈺維","CurNum":"5"},{"NoonName":"上午","DeptName":"牙科","SectionName":"牙科二診","EmployeeName":"張瑞昌","CurNum":"13"},{"NoonName":"上午","DeptName":"中醫科","SectionName":"50診","EmployeeName":"洪偉君","CurNum":"38"},{"NoonName":"下午","DeptName":"外科","SectionName":"27診","EmployeeName":"張宏泰","CurNum":"8"},{"NoonName":"下午","DeptName":"外科","SectionName":"31診","EmployeeName":"李世超","CurNum":"52"},{"NoonName":"下午","DeptName":"外科","SectionName":"30診","EmployeeName":"嚴子禎","CurNum":"29"},{"NoonName":"下午","DeptName":"小兒科","SectionName":"11診","EmployeeName":"莊上林","CurNum":"先到先看"},{"NoonName":"下午","DeptName":"小兒科","SectionName":"13診","EmployeeName":"李冠賢","CurNum":"先到先看"},{"NoonName":"下午","DeptName":"骨科","SectionName":"17診","EmployeeName":"余文","CurNum":"13"},{"NoonName":"下午","DeptName":"泌尿科","SectionName":"24診","EmployeeName":"蕭夙娟","CurNum":"22"},{"NoonName":"下午","DeptName":"耳鼻喉科","SectionName":"35診","EmployeeName":"薛智峰","CurNum":"5"},{"NoonName":"下午","DeptName":"復健科","SectionName":"23診","EmployeeName":"李婉嘉","CurNum":"35"},{"NoonName":"下午","DeptName":"心智科","SectionName":"21診","EmployeeName":"陳億倖","CurNum":"11"},{"NoonName":"下午","DeptName":"感染科","SectionName":"43診","EmployeeName":"蔡東原","CurNum":"37"},{"NoonName":"下午","DeptName":"肌少症與骨鬆特診","SectionName":"15診","EmployeeName":"林富成","CurNum":"1"},{"NoonName":"下午","DeptName":"胸腔內科","SectionName":"45診","EmployeeName":"歐亭芸","CurNum":"14"},{"NoonName":"下午","DeptName":"牙科","SectionName":"牙科一診","EmployeeName":"楊正媺","CurNum":"4"},{"NoonName":"下午","DeptName":"中醫科","SectionName":"49診","EmployeeName":"李育權","CurNum":"32"},{"NoonName":"夜間","DeptName":"外科","SectionName":"27診","EmployeeName":"王乃玉","CurNum":"0"},{"NoonName":"夜間","DeptName":"小兒科","SectionName":"12診","EmployeeName":"李偉揚","CurNum":"先到先看"}]

let total = data.length;

for(let i=0; i<total; i++){
    if(data[i].CurNum>1){
    let doctor = data[i].EmployeeName;
    let wait = data[i].CurNum;
    console.log(doctor+'醫師的診間目前還須等候'+wait+'位');
 }
}