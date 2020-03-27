$(document).ready(function(){
const getQueryParams = ( params, url ) => {

let href = url;
//this expression is to get the query strings
let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
let queryString = reg.exec(href);
return queryString ? queryString[1] : null;
};

let getEmailId = getQueryParams('email', window.location.href);
if(getEmailId){
$('.fm-showSec').addClass('displayShow');
$('.sometime-hide').addClass('displayNone');
// let checkAllready = getCookie('fmAssociate')
// if(checkAllready)
document.cookie = "fmAssociate="+getEmailId;
}



function getCookie(name) {
var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
if (match) return match[2];
}
let checkExists = getCookie('fmAssociate')

if(checkExists){
$('.sometime-hide').addClass('displayNone');
$('.fm-showSec').addClass('displayShow');
}


$('#fm-buy,#fm-rent').click(function(e){
let reffEmailID = getCookie('fmAssociate')
debugger

if(reffEmailID){
  FM.trackCustomEvent("Looking to Rent",
  {
  "email": reffEmailID,
  "price": 100.21,
  })
}
  })
})