Alphabets= { 
	"español": { 
		'a': [1, 
				['a', 0], 
				['á', 1], 
				['ä', 2] 
			], 
		'b': [1, 
				['b', 0] 
			] 
		, 
		'c': [1, 
				['c', 0] 
			] 
		, 
		'd': [1, 
				['d', 0] 
			] 
		, 
		'e': [1, 
				['e', 0], 
				['é', 1], 
				['ë', 2] 
			] 
		, 
		'f': [2, 
				['f', 0] 
			] 
		, 
		'g': [1, 
				['g', 0] 
			] 
		, 
		'h': [2, 
				['h', 0] 
			] 
		, 
		'i': [1, 
				['i', 0], 
				['í', 1], 
				['ï', 2] 
			] 
		, 
		'j': [2, 
				['j', 0] 
			] 
		, 
		'k': [1, 
				['k', 0] 
			] 
		, 
		'l': [2, 
				['l', 0] 
			] 
		, 
		'm': [2, 
				['m', 0] 
			] 
		, 
		'n': [2, 
				['n', 0] 
			] 
		, 
		'ñ': [2, 
				['ñ', 0] 
			] 
		, 
		'o': [1, 
				['o', 0], 
				['ó', 1], 
				['ö', 2] 
			] 
		, 
		'p': [1, 
				['p', 0] 
			] 
		, 
		'q': [1, 
				['q', 0] 
			] 
		, 
		'r': [2, 
				['r', 0] 
			] 
		, 
		's': [2, 
				['s', 0] 
			] 
		, 
		't': [1, 
				['t', 0] 
			] 
		, 
		'u': [1, 
				['u', 0], 
				['ú', 1], 
				['ü', 2], 
			] 
		, 
		'v': [2, 
				['v', 0] 
			] 
		, 
		'w': [3, 
				['w', 0] 
			] 
		, 
		'x': [2, 
				['x', 0] 
			] 
		, 
		'y': [3, 
				['y', 0] 
			] 
		, 
		'z': [2, 
				['z', 0] 
			] 
		/* 
		"español": [ 
			['a', [2, 
				['á', 1]  
			]], 
		] 
		*/ 
	}, "english": [ 

	] 
}; 
   
getDedications= function(language){ 
	s= 0; 
	Name= []; 
	Name[s]= 0; 
	n= ""; 
	name= document.getElementsByTagName("textarea")[0].value; 
	syl= ""; 
	Syl= []; 
	i= 0; 
	text= document.getElementsByTagName("textarea")[1].value.toLowerCase(); 
                    
	for(e in text){ 
		if(text[e] != "-" && text[e] != " " && parseInt(e) != text.length - 1){ 
			syl+= text[e]; 
		}else{ 
			Syl[i]= syl; 
			i++; 
			text[e] == " "? syl= "": 1; 
		} 
	} 
      
	names= function(){ 
		for(u in name){ 
			if(name[u] != " "){ 
				for(r in Alphabets[language]){ 
					for(eForensics in Alphabets[language][r]){ 
						parseInt(eForensics) != 0? name[u].toLowerCase() == Alphabets[language][r][eForensics][0]? Name[s]+= Alphabets[language][r][0] + Alphabets[language][r][0] * Alphabets[language][r][eForensics][1]: 17288: 1981; 
					} 
				} 
			}else{ 
				parseInt(u) != name.length - 1? s++: 12; 
				parseInt(u) != name.length - 1? Name[s]= 0: 1; 
			} 
		} 
	} 
      
	dedications= function(){ 
		names(); 
		dedication= ""; 
		naM= 0; 
                
		for(q in Syl){ 
			sT= parseInt(q); 
			nuMber= 0; 

			dedication+= Syl[sT] + " "; 

			for(er_R in Name){ 
				nuMber+= Name[er_R]; 
				final_nuMber= nuMber + sT; 
                                           
				while(final_nuMber >= Syl.length){ 
					final_nuMber-= Syl.length; 
				} 
                  
				dedication+= Syl[final_nuMber] + " "; 
			} 
              
			document.getElementsByTagName("textarea")[2].value= document.getElementsByTagName("textarea")[2].value +  "\n" + dedication; 
                            
			dedication= ""; 
		} 
	} 
      
	dedications(); 
} 
  
//onClipEvent(load){ 
function update(){ 
    document.getElementsByTagName("body")[0].style.cursor != "nw-resize"? document.getElementsByTagName("body")[0].style.cursor= "nw-resize": document.getElementsByTagName("body")[0].style.cursor= "ne-resize"; 
} 
  
rwrrw= ""; 
mousedown= false; 
dsrcrs= ["#339dc1", "#ff6711", "#339dc1", "#339dc1", "#339dc1", "#339dc1", "#339dc1", "#339dc1", "#d3ef30", "#2253ed", "#21ff34", "#339dc1"]; 
//} 
    
//onClipEvent(enterframe){ 
setInterval(function(){ 
    update(); 
}, 0.00); 
          
document.addEventListener("keydown", function(i){                                                                                                               

}); 
    
document.addEventListener("mousedown", function(i){ 
    mousedown= true; 
                     
    //i.target == lastChild? lastChild.innerHTML= lastChild.innerHTML + "<div style= 'width: 4.78px; height: 4.78px; background-color: " + "#339dc1" + "; position: absolute; left: " + i.layerX + "px; top: " + i.layerY +  "px; '></div>": 1; 
                     
    /*(i.keyCode == 17 && lastChild.outerHTML.indexOf("Rwawwr") == 9)? lastChild.outerHTML= "": 3251; */ 
}); 
    
document.addEventListener("mouseup", function(i){ 
    mousedown= false; 
                      
    /*me= w.keyCode; */ 
}); //The question, the quest off...  
    
document.addEventListener("mousemove", function(i){                                                 
    L= parseInt(Math.random() * dsrcrs.length); 
                                                
    MNSWMTG= parseInt(Math.random() * 2) == 0? "1": "1000000"; 
                                                               
    PpPE= dsrcrs[L] == "#339dc1"? "; z-index: 2": "; border-radius: 50%; z-index: " + MNSWMTG; 
                                                                                               
    (mousedown)? document.getElementsByTagName("body")[0].innerHTML= document.getElementsByTagName("body")[0].innerHTML + "<div style= 'width: 5.78px; height: 5.78px; background-color: " + dsrcrs[L] + PpPE + "; position: absolute; left: " + i.layerX + "px; top: " + i.layerY +  "px; '></div>": 13781; 
}); 
    
document.addEventListener("keyup", function(i){                                                

}); 
//} 
    