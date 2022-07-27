/*
* @Author: yanni
* @Date:   2019-03-02 16:33:32
* @Last Modified by:   yanni
* @Last Modified time: 2019-03-03 16:13:47
*/
let re=fs.createRead;
function web (webname) {
  this.webname=webname;
  this.show=function  () {
    console.log('name'+this.webname)
  }
}

web.prototype.info=function  (url) {
  console.log('urlshi'+url);
};

function antzone () {
  // body...
}
antzone.prototype=new web('mayi');
let an=new antzone();
console.log(an.webname);
an.show();
an.info('lllll');
