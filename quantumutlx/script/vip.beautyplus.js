var body = $response.body;
var url = $request.url;

const path1 = '/v1/subs_offer_elg/';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj["subs_status"] = 2;
	obj["vip_product_id"] = com.commsource.beautyplus.subscription.1year.25discount.new.users.1205testA;
	obj["vip_expires_date_ms"] = 4084430261000;
	
	body = JSON.stringify(obj);  
 }

$done({body});
