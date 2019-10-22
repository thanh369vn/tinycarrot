
var obj = JSON.parse($response.body);
let id = obj.receipt['adam_id'];
if(id == 1454351170){
        obj = {
          	"receipt": {
		"receipt_type": "Production",
		"adam_id": 1454351172,
		"app_item_id": 1454351172,
		"bundle_id": "com.video.magicam4",
		"application_version": "77",
		"download_id": 32064290042342,
		"version_external_identifier": 832981086,
		"receipt_creation_date": "2019-10-22 09:45:27 Etc/GMT",
		"receipt_creation_date_ms": "1571737527000",
		"receipt_creation_date_pst": "2019-10-22 02:45:27 America/Los_Angeles",
		"request_date": "2019-10-22 09:47:59 Etc/GMT",
		"request_date_ms": "1571737679284",
		"request_date_pst": "2019-10-22 02:47:59 America/Los_Angeles",
		"original_purchase_date": "2019-10-22 09:45:27 Etc/GMT",
		"original_purchase_date_ms": "1571737527000",
		"original_purchase_date_pst": "2019-10-22 02:45:27 America/Los_Angeles",
		"original_application_version": "77",
		"in_app": []
	},
	"status": 0,
	"environment": "Production"
        };
};
$done({body: JSON.stringify(obj)});

// Testing...
