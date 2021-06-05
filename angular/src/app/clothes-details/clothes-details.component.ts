import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clothes-details',
  templateUrl: './clothes-details.component.html',
  styleUrls: ['./clothes-details.component.css']
})
export class ClothesDetailsComponent implements OnInit {


technics = [{
    title: "數碼直噴",
    subtitle: "類似於打印機,可以在T恤上打印你想的圖案",
    img : "assets/layout/數碼直噴.png",
    desc: ["優點:適合顔色豐富或漸變色的圖案","缺點:實際印花效果比設計圖暗淡,深色底衫須加一層固色塗料，提高塗層牢度，印花表面會有輕微膠質感"]
},
{
    title: "燙印",
    img : "assets/layout/燙印.png",
    subtitle: "把圖案彩印在轉印紙上,用激光刻印,將圖案刻上來，再用機器加熱壓黏合在衣服上",
    desc: ["優點:顔色和細節還原度高","缺點:略有膠質感,影響透氣性,不能用於面積大的圖案"]
},
{
    title: "絲網印刷",
    img : "assets/layout/絲網印刷.png",
    subtitle: "用絲網作為版基,通過感光制版方法,制成帶有圖案的網印版,然後利用刮板將染料擠壓到衣服上",
    desc: ["優點:立體感強,色彩鮮艷","缺點:印刷線條粗,不能印刷很精細的圖案"]
}
]

materials = [
  {
      "title": "天竺棉",
      "desc": "CK T恤使用的面料",
      "img": "assets/material/天竺棉.jpg"
  },
  {
	"title": "速乾款",
	"desc": "運動適用，清爽快乾",
      "img": "assets/material/速乾類.png"
  },
  {
    "title": "100%純棉",
    "desc": "一般T恤使用的面料",
        "img": "assets/material/100_純棉2.png"
  },
  {
      "title": "絲光棉",
      "desc": "光滑且柔順的面料",
      "img": "assets/material/絲光棉.jpg"
  }	
];

variants1= ["D71E24","FB9D21","FBEC53","C6F286","14A97F","56B2D9","2E67C1","28263E","7C3787","FDA9D0","F5C3C2","F2F3F8","C2C5D6","1C1C1C"];


templates = [
  {
    title:"sample1",
    current:12,
    variants:this.variants1.map(variant=>{return {color:variant,img:"assets/sample/" + variant + ".png"};})
  }
]
  constructor(public http: HttpService) { 
    //http.getTemplates("http://localhost:3000/templates").subscribe(data=>{console.log(this.templates=data)});
  } 

  ngOnInit(): void {
  }

 changeVariant = (template,index)=>{
    template.current = index;
 }

}
