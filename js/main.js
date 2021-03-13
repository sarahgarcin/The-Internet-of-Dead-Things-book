class generatePattern extends Paged.Handler{
	constructor(chunker, polisher, caller){
		super(chunker, polisher, caller);
	}
	afterRendered(pages){
		var counter = 0;
		pages.forEach(page => {	
			console.log('page');
			var container = page.element.querySelector('.p5sketch');
			
			if(container != null){
				counter++;
				var div 		= document.createElement('div');
				div.id 			= "myContainer" + counter;
						
				p5one(div);
				container.appendChild(div);
			}
		});
	}
}
Paged.registerHandlers(generatePattern);


function p5one(div) {
	const s = ( p ) => {
		p.setup = function() {
		  var canvas = p.createCanvas(600, 800);
		  canvas.style("visibility", "visible");
		  p.noStroke();
		  for(var x= 0; x< p.width; x+=p.width/80){
		    for(var y= 0; y< p.height; y+=p.height/40){
		      var randomColor1 = p.int(p.random(10));
		      var randomColor2 = p.int(p.random(4));
		      var randomColor3 = p.int(p.random(2));
		      // première partie à gauche
		      if(y > 0 && x < p.height/5){
		        if(randomColor1 === 0){
		          p.fill(255);
		        }
		        else{
		          p.fill(0);
		        }
		      }
		      // deuxième partie à gauche
		      if(x > p.height/5 && x < p.height/5*2){
		        if(randomColor2 === 0){
		          p.fill(255);
		        }
		        else{
		          p.fill(0);
		        }
		      }
		      // centre x
		      if(x > p.height/5*2 && x < p.height/5*3){
		          if(randomColor3 === 0){
		            p.fill(255);
		          }
		          else{
		            p.fill(0);
		          }
		      }
		      if(x > p.height/5*3 && x < p.height/5*4){
		          if(randomColor2 === 0){
		            p.fill(255);
		          }
		          else{
		            p.fill(0);
		          }
		      }
		      if(x > p.height/5*4 && x < p.height){
		          if(randomColor1 === 0){
		            p.fill(255);
		          }
		          else{
		            p.fill(0);
		          }
		      }
		      

		      p.rect(x, y, p.width/80, p.height/40 );
		    }
		  }
		}
	};

	let myp5 = new p5(s, div);
}