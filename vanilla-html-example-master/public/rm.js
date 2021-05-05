const er = []
var dt = new Date();
var strt = (("0"+(dt.getMonth()+1)).slice(-2)) +"-"+ (("0"+dt.getDate()).slice(-2)) +"-"+ (dt.getFullYear())
var url =`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=049&date=${strt}`
fetch(url)
.then(re=>re.json())
.then(list=>{
	list.centers.forEach(opp=>{
		er.push({name:opp.name,sess:opp.sessions.filter(io=>io.min_age_limit != 45)})
		})
		//console.log(er)
		var sm = []
		er.forEach(ind=>{
			if(ind.sess != 0){
				sm.push(ind)
			} 
			
		})
			
		sm.forEach(item=>{
			var node = document.createElement("LI");                 // Create a <li> node
			var xm = document.createElement("SPAN");
			xm.className = "badge badge-primary badge-pill"
			node.className = "list-group-item d-flex justify-content-between align-items-center"
			var txt2 = document.createTextNode(item.sess.length)
			var textnode = document.createTextNode(item.name);         // Create a text node
			node.appendChild(textnode);                              // Append the text to <li>
			xm.appendChild(txt2)
			node.appendChild(xm)
			document.getElementById("myList").appendChild(node);
		})
		

})

/* console.log(ki.name)
		for(var i = 0;i<ki.sessions.length;i++){
			console.log(ki.sessions[i]) */