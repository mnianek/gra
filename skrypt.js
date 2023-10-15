//współrzędne początkowe kulki
x=50; y=50;
//kierunki początkowe
kx='prawo'; ky='dol';
//współrzędne lewego górnego rogu paska
px=770; py=0;
ppx=0; ppy=0;
punktyg1=-1;
punktyg2=0;
monety=0;
function f(){
	c=document.getElementById('c');
	plansza=c.getContext('2d');
	

	//czyszczenie kulki
	plansza.fillStyle='rgb(71, 237, 71)';
	plansza.beginPath();
	plansza.arc(x,y,25,(Math.PI/180)*0,(Math.PI/180)*360);
	plansza.fill();
	//ruch kulki
	if(kx=='prawo' && x<765){
		x+=10;
	}
	if(kx=='lewo' && x>25){
		x-=10;
	}
	if(ky=='dol' && y<570){
		y+=10;
	}
	if(ky=='gora' && y>30){
		y-=10;
	}
	//rysowanie kulki
	plansza.fillStyle='red';
	plansza.beginPath();
	plansza.arc(x,y,24,(Math.PI/180)*0,(Math.PI/180)*360);
	plansza.fill();
	
	//odbijanie kulki od ścian
	if(x>=740 && y>py && y<py+200){
		kx='lewo';
		punktyg2++;
	}
	if(x<=60 && y>ppy && y<ppy+200){
		kx='prawo';
		punktyg1++;
	}
	if(y>=570){
		ky='gora';
	}
	if(y<=30){
		ky='dol';
	}
	if(x>=765 || x<=25	){
		window.alert('Koniec gry, łączna liczba punktów: '+(punktyg2+punktyg1)+".\nDostałeś "+((punktyg2+punktyg1)*50)+" monet");
		monety+=(punktyg2+punktyg1)*50;
		clearInterval(z);
		window.location.reload();
	}
	document.getElementById('g1').value="Gracz 1: "+punktyg1;
	document.getElementById('g2').value="Gracz 2: "+punktyg2;
}
z=setInterval('f()',30);
function g(event){
	c=document.getElementById('c');
	plansza=c.getContext('2d');
	klawisz=event.keyCode;

	//prawy pasek

	//czyszczenie paska
	plansza.clearRect(px,py,30,200);
	//przesuwanie paska góra-dół
	if(klawisz==40 && py<=350){
		py+=50;
	}
	if(klawisz==38 && py>=50){
		py-=50;
	}
	//rysowanie paska
	plansza.fillStyle='gray';
	plansza.fillRect(px,py,30,200);

	//lewy pasek

	//czyszczenie paska
	plansza.clearRect(ppx,ppy,30,200);
	//przesuwanie paska góra-dół
	if(klawisz==83 && ppy<=350){
		ppy+=50;
	}
	if(klawisz==87 && ppy>=50){
		ppy-=50;
	}
	//rysowanie paska
	plansza.fillStyle='gray';
	plansza.fillRect(ppx,ppy,30,200);
	
}
function sklep(){
	document.getElementById('monety').value="Ilość monet: ";
}