//TweenMax.set($(".masker"), {autoAlpha:.8, ease:Power1.easeInOut});
TweenMax.to($(".switchOnRolled"), .5, {repeat:-1, autoAlpha:0, ease:Power1.easeInOut});


var scrollTL = new TimelineMax();
scrollTL.timeScale(1);

//scrollTL.add( TweenMax.staggerTo(sym.$(".introElements"), .5, {autoAlpha:0, ease:Power1.easeOut}, -.25) );


///// lightMove 1
scrollTL.add( TweenMax.to($(".flashlight"), 1, {x:360, y:82, rotation:-128, transformOrigin:"34% 62%", ease:Power2.easeInOut}), "lightMove1" );

///// light on
scrollTL.add( TweenMax.from([$(".beam")], .001, {autoAlpha:0, ease:Power1.easeOut}), "lightOn" ); 
scrollTL.add( TweenMax.from([$(".wallItems")], .001, {autoAlpha:0, ease:Power1.easeOut}), "lightOn" );

///// lightMove 2
scrollTL.add( TweenMax.to($(".flashlight"), 2, {x:-50, y:282, rotation:-20, transformOrigin:"34% 62%", ease:Power2.easeInOut}), "lightMove2+=2" );
//scrollTL.add( TweenMax.to($(".masker"), 2, {x:-50, y:282, rotation:-20, transformOrigin:"-31% 90%", ease:Power2.easeInOut}), "lightMove2+=2" );
scrollTL.add( TweenMax.from([$(".wallMsg2")], 1, {autoAlpha:0, ease:Power1.easeIn}), "lightMove2+=2" );
scrollTL.add( TweenMax.to([$(".wallMsg1")], 2, {autoAlpha:0, ease:Power1.easeIn}), "lightMove2+=2" );

///// lightMove3
scrollTL.add( TweenMax.to($(".flashlight"), 2, {x:-525, y:382, rotation:-10, transformOrigin:"34% 62%", ease:Power2.easeInOut}), "lightMove3+=2" );
//scrollTL.add( TweenMax.to($(".masker"), 2, {x:-525, y:382, rotation:-10, transformOrigin:"-31% 90%", ease:Power2.easeInOut}), "lightMove3+=2" );
scrollTL.add( TweenMax.from([$(".wallMsg3")], 1, {autoAlpha:0, ease:Power1.easeIn}), "lightMove3+=2" );
scrollTL.add( TweenMax.to([$(".wallMsg2")], 2, {autoAlpha:0, ease:Power1.easeIn}), "lightMove3+=2" );
scrollTL.add( TweenMax.from([$(".switchHolder")], 4, {autoAlpha:0, ease:Power1.easeIn}), "lightMove3+=2" );

///// lightMove4
scrollTL.add( TweenMax.to($(".flashlight"), 2, {x:-300, y:382, rotation:-10, transformOrigin:"5% 95%", ease:Power2.easeInOut}), "lightMove4+=1" );
//scrollTL.add( TweenMax.to($(".masker"), 2, {x:-300, y:382, rotation:-10, transformOrigin:"-31% 90%", ease:Power2.easeInOut}), "lightMove4+=1" );

//scrollTL.add( TweenMax.from(sym.$(".flipArrow"), 1, {autoAlpha:0, rotation:20, transformOrigin:"77% 118%", ease:Power2.easeOut}), "arrowIn+=.5" );
//scrollTL.add( TweenMax.from(sym.$(".flipText"), 1, {x:100, autoAlpha:0, ease:Power2.easeOut}), "arrowIn+=.5" );
///// button in
scrollTL.add( TweenMax.from(sym.$(".flipButton"), .001, {y:400, autoAlpha:0, ease:Linear.easeNone}), "arrowIn" );
