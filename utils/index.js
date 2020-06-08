/* let tencentcloud = require("tencentcloud-sdk-nodejs");
		let SmsClient = tencentcloud.sms.v20190711.Client;
		let models = tencentcloud.sms.v20190711.Models;
		let Credential = tencentcloud.common.Credential;
		let ClientProfile = tencentcloud.common.ClientProfile;
		let HttpProfile = tencentcloud.common.HttpProfile;
		let cred = new Credential("AKIDRhkX4LQBBvPdaGu7eutchbEjzlIwnfki", "soVxJOJxshiTxB8wUXJtFKAoKgnw3uUp");
		let httpProfile = new HttpProfile();
		httpProfile.endpoint = "sms.tencentcloudapi.com";
		let clientProfile = new ClientProfile();
		clientProfile.httpProfile = httpProfile;
		let client = new SmsClient(cred, "ap-beijing", clientProfile);
		let req = new models.SendSmsRequest();
		module.exports = {
			sendSMS(tel, code) {

				let params = '{"PhoneNumberSet":["+86' + tel + '"],"TemplateID":"593006","Sign":"长伴人力资源","TemplateParamSet":["' +
					code + '"],"SmsSdkAppid":"1400361751"}'
				req.from_json_string(params);
				client.SendSms(req, function(errMsg, response) {
					if (errMsg) {
						console.log(errMsg);
						return;
					}
					console.log(response.to_json_string());
				});
			}
		} */






		/* var CryptoJS = require("crypto-js");
		function getTemp() {
			return Math.round(new Date().getTime() / 1000);
		}
		function getNum(max,min=0){
			return Math.round(Math.random()*(max-min)+min);
		}

		function sortObj2Str(obj){
			
			return Object.keys(obj).sort((a,b) => a.localeCompare(b)).map(key => (key+"="+obj[key])).join('&');
		}

		module.exports = {
			sendSMS(tel, code) {
				let host = 'cvm.tencentcloudapi.com';
				let params = {
					Action: 'SendSms',
					Nonce:getNum(1000),
					'PhoneNumberSet.0': '+86' + tel,
					Region:'ap-beijing',
					SecretId:'AKIDRhkX4LQBBvPdaGu7eutchbEjzlIwnfki',
					Sign: '长伴人力资源',
					Signature:'',
					SmsSdkAppid: '1400361751',
					TemplateID: 593006,
					'TemplateParamSet.0': code,
					Timestamp: getTemp(),
					Version: '2019-07-11'
				}
				var str = sortObj2Str(params)
				str = ['GET',host,'/?',str].join('')
				console.log(str);
				let secretKey = 'soVxJOJxshiTxB8wUXJtFKAoKgnw3uUp';
				str = CryptoJS.HmacSHA1(str,secretKey)
				str = CryptoJS.enc.Base64.stringify(str);
				console.log(str)
				params.Signature = str;
				console.log(params)
				uni.request({
					url: 'https://'+host,
					data: params,
					success: (res) => {
						console.log(res.data);
					}
					,
					fail: (err) => {
						console.log(err);
					}
				})
			}
		}
		 */
