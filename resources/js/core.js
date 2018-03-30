'use strict';
M.AutoInit();
const side = document.querySelector('.sidenav');
const   instanceside = M.Sidenav.init(side,{});
if(document.querySelector('.fixed-action-btn')!==undefined && document.querySelector('.fixed-action-btn')!==null){
    var elem = document.querySelector('.fixed-action-btn');
    var instance = new M.FloatingActionButton(elem, {
    toolbarEnabled: true
  });
}


