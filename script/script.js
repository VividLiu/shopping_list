var gVegeCnt = 2, gMeatCnt = 0, gDiaryCnt = 0;

function addItem(){
	var cate = $("#addSelect").val();
	var item = $("#addInput").val();

	if(cate == ""){
		alert("Please choose a category.");
		return false;
	}

	if(item == ""){
		alert("Please enter an item.");
		return false;
	}

	var list_id = "#" + cate;
	var row_html = "<tr>"+
					"<td class='first'>"+
					"<input type='checkbox' id="+item+" value='brocolli'>"+
					"<label for="+item+">"+item+"</label>"+
				 "</td>"+
				"<td class='second'>"+
					"<span>x&nbsp</span>"+
					"<select>"+
						"<option value=''>--</option>"+
						"<option value='1'>1</option>"+
					"</select>"+
					"<i class='icon-cancel-circled'></i>"+								
				"</td>"+
			"</tr>"

	//append row
	var newText;
	$(list_id +" table").append(row_html);

	//change count number
	if(cate == "vegetable"){
		gVegeCnt++;

		newText = ("("+ gVegeCnt +" items)");
		$(list_id+" span:nth-child(2)").text(newText);
	}else if(cate == "meat"){
		gMeatCnt++;

		newText = ("("+ gMeatCnt +" items)");
		$(list_id+" span:nth-child(2)").text(newText);
	}else{
		gDiaryCnt++;

		newText = ("("+ gDiaryCnt +" items)");
		$(list_id+" span:nth-child(2)").text(newText);
	}

};

function clear(){
	alert("good");
	console.log($("table tr"));
	$("table tr").remove();
};

$(document).ready(function(){
	$("i.icon-th-list").click(function(){
		//alert("expand collapse");
		$(this).parent().siblings("table").slideToggle(1000);
		$(this).siblings("span:nth-child(2)").toggle();
	
	});

	$(".list_container").on("click", "i.icon-cancel-circled", function(){
		//deduct count
		var cate = $(this).parent().parent().parent().parent().parent().attr("id");
		var list_id = "#" + cate;
		//change count number
		if(cate == "vegetable"){
			gVegeCnt--;

			newText = ("("+ gVegeCnt +" items)");
			$(list_id+" span:nth-child(2)").text(newText);
		}else if(cate == "meat"){
			gMeatCnt--;

			newText = ("("+ gMeatCnt +" items)");
			$(list_id+" span:nth-child(2)").text(newText);
		}else{
			gDiaryCnt--;

			newText = ("("+ gDiaryCnt +" items)");
			$(list_id+" span:nth-child(2)").text(newText);
		}
		//remove the row
			$(this).parent().parent().remove();
	});

	$("#clrButton").click(function(){
		$("table tr").remove();

		//update cnt number
		gVegeCnt = gMeatCnt = gDiaryCnt = 0;
		//console.log(gVegeCnt);
		newText = ("("+ gVegeCnt +" items)");
		$("#vegetable" + " span:nth-child(2)").text(newText);

		newText = ("("+ gMeatCnt +" items)");
		$("#meat" + " span:nth-child(2)").text(newText);

		newText = ("("+ gDiaryCnt +" items)");
		$("#diary" + " span:nth-child(2)").text(newText);
	})

});
