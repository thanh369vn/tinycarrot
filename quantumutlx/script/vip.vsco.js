var body = $response.body;
var url = $request.url;

const path1 = '/api/subscriptions/2.1/user-subscriptions/';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.user_subscription["is_active"] = true;
  	obj.user_subscription.sub32["name"] = 2;
	body = JSON.stringify(obj);  
 }

$done({body});

// test vip VSCO by Tiny.
