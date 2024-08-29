function clock(){
let d= new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
let h_rotation=(30*h)+(m*0.5);
let s_rotation=6*s;
let m_rotation=6*m;
hr.style.transform=`rotate("+h_rotation+"deg)`;
min.style.transform=`rotate(${m_rotation}deg)`;
sec.style.transform=`rotate(${s_rotation}deg)`;
}
clock();
setInterval(clock,1000);