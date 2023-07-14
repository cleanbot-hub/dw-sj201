$(document).ready(function() {
	fn_createSns1();
	fn_createSns2();
	fn_createSns3();


	function fn_contentsSubStr(str, len) {
		return str.substring(0,len) + '...';
	}
	/** 유튜브 **/
	function fn_createSns1() {
		var ytId = "UCM0bkdVdcUU0aAxaINABE3w";
		var ytKey = "AIzaSyDAp2EcyXPNGSCNsQzjK61prDFBgtERSJw";
		var ytName = "withoworld";


		/** 할당량 소모를 줄이기 위해 채널에서 최신 재생목록을 가져온 후 재생목록에서 최신 영상 1개 호출 **/
		$.ajax({ 
			type : "GET", 
			dataType : "JSON", 
			url : "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&key=" + ytKey + "&forUsername=" + ytName,
			contentType : "application/json", 
			success : function(ch) { 
				
				var playlistId = ch.items[0].contentDetails.relatedPlaylists.uploads;

				$.ajax({ 
					type : "GET", 
					dataType : "JSON", 
					url : "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,id&maxResults=1&key=" + ytKey + "&playlistId=" + playlistId,
					contentType : "application/json", 
					success : function(result) { 
						var ytDt = result.items[0].snippet;
						var contents = fn_contentsSubStr(ytDt.description, 82);
						var yLink = "https://www.youtube.com/watch?v=" + ytDt.resourceId.videoId;
						var html = '';
						//html += '<li>';
						html += '<a href="' + yLink + '" target="_blank">';
						html += '<div class="box">';
						html += '<div class="photo">';
						html += '<img src="' + ytDt.thumbnails.high.url + '" />';
						html += '<span class="sns"><img src="/asset/img/main_new/sns_ic4.png" alt="유튜브"></span>';
						html += '</div>';
						html += '<div class="infor">';
						html += '<span class="txt"><b>' +ytDt.title+ '</b><br/>' + contents + '</span>';
						html += '</div>';
						html += '</div>';
						html += '</a>';
						//html += '</li>';
						$('#oworldSns1').html(html);
					}
				});
			}
		});

	}
	/** 인스타 **/
	function fn_createSns2() {
		var inKey = "IGQVJXNmc3YjBST0luc09YZAW41ZAjlRTTJJS2lZAZAmpqNG1YUUZAwOGpUZATNwaGlMQ0prOTN1d1FkMC1tRUROekZAOVGN1OEM2YkVJazRMaUpKLVptdEVnT0l6d1A2bFNoTS1yTThUU1NzQWFhdVJEZAXNGUgZDZD";
		var inFields = "id,media_type,media_url,permalink,thumbnail_url,username,caption";
		$.ajax({ 
			type : "GET", 
			dataType : "JSON", 
			url : "https://graph.instagram.com/me/media?access_token=" + inKey + "&fields=" + inFields + "&limit=1", 
			cache: false,  
			success : function(result) { 
				var inDt = result.data[0];
				var contents = fn_contentsSubStr(inDt.caption, 105);
				var imgUrl = '';
				if(inDt.media_type === "VIDEO") {
					imgUrl = inDt.thumbnail_url;
				} else {
					imgUrl = inDt.media_url
				}

				var html = '';
				//html += '<li>';
				html += '<a href="' + inDt.permalink + '" target="_blank">';
				html += '<div class="box">';
				html += '<div class="photo">';
				html += '<img src="' + imgUrl + '" />';
				html += '<span class="sns"><img src="/asset/img/main_new/sns_ic3.png" alt="인스타그램"></span>';
				html += '</div>';
				html += '<div class="infor">';
				html += '<span class="txt">' + contents + '</span>';
				html += '</div>';
				html += '</div>';
				html += '</a>';
				//html += '</li>';
				$('#oworldSns2').html(html);

			}
		});
	}

	/** 페이스북 **/
	function fn_createSns3() {
		var fbKey = "EAAGpZAm3fOTMBAG2xGwXcZBZAgLE8UZB3TD4S2SDsCUZCGatQWZB6fZBM83WZAd6DZCqhZCxJiuGLNleECM34K6avsbgm95yxZB20SshZBpJP4dI2CESlyZC63cqLhqXfqX2qEZCupZA4BXBGjg7bTsvICexye8tJoaKPui7SegDrr9Q7gZB18CiR8QZA4CnX";
		var fbFields = "id,permalink_url,created_time,message,full_picture,title";
		$.ajax({ 
			type : "GET", 
			dataType : "JSON", 
			//url : "https://graph.facebook.com/v12.0/me/posts?access_token=" + fbKey + "&fields=" + fbFields + "&limit=1", 
			url : "https://graph.facebook.com/v16.0/AmazingOworld/feed?access_token=" + fbKey + "&fields=" + fbFields + "&limit=1",
			contentType : "application/json", 
			success : function(result) { 
				var fbDt = result.data[0];
				var contents = fn_contentsSubStr(fbDt.message, 105);

				var html = '';
				//html += '<li>';
				html += '<a href="' + fbDt.permalink_url + '" target="_blank">';
				html += '<div class="box">';
				html += '<div class="photo">';
				html += '<img src="' + fbDt.full_picture + '" />';
				html += '<span class="sns"><img src="/asset/img/main_new/sns_ic1.png" alt="페이스북"></span>';
				html += '</div>';
				html += '<div class="infor">';
				html += '<span class="txt">' + contents + '</span>';
				html += '</div>';
				html += '</div>';
				html += '</a>';
				//html += '</li>';
				$('#oworldSns3').html(html);
			}
		});
	}

});