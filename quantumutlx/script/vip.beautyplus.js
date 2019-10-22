var body = $response.body;
var url = $request.url;

const path1 = '/v1/pur_verify_receipt';
const path2 = '/v1/subs_offer_elg';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj = {
	"status": 0,
	"expires_date": "2099-06-06 11:57:41 Etc\/GMT"
};
};
if (url.indexOf(path2) != -1) {
	obj = {
	"status": 0,
	"subs_status": 2,
	"vip_expires_date_ms": "4084430261000",
	"vip_product_id": "com.commsource.beautyplus.subscription.1year.25discount.new.users.1205testA",
	"timestamp": 1571765204000
};
};
$done({body: JSON.stringify(obj)});

// Vip BeautyPlus by Tiny.
