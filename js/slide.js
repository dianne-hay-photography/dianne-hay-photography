/*
function playMP3( i ) {
    
    if ( !i )
        i = 0;
    
    if ( !$( 'slide_' + i + '_has_audio' ) )
    {
        $('flashme').setHTML( flashHTML );
        return;
    }
    
    var url = '/Resources/Macmahon/Demo/MP3s/Voiceover__' + i + '.mp3';
    
    var flashHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" ' +
        'width="320" ' +
        'height="70" ' +
        'title="Voiceover">' +
        '<param name="movie" value="/Resources/Macmahon/Demo/mp3player.swf" />' +
        '<param name="quality" value="high" />' +
        '<param name="salign" value="TL" />' +
        '<param name="scale" value="noScale" />' +
        '<param name="FlashVars" value="path='+url+'" />' +
        '<embed src="/Resources/Macmahon/Demo/mp3player.swf" ' +
        'quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" ' +
        'width="320" ' +
        'height="70"' +
        'salign="TL" ' +
        'scale="noScale" ' +
        'FlashVars="path='+url+'"' +
        '></embed>' +
        '</object>' ;

    $('flashme').setHTML( flashHTML );
}
*/

window.addEvent( 'domready', function() {
	
    $$( 'a' ).each( function( a ) {
	
	if ( a.hasClass( 'fade_my_span' ) )
	{
	    var hoverEl = a.getElement( 'span' );
	    
	    if ( hoverEl )
	    {
	        hoverEl.setStyle( 'opacity', 0 ).setStyle( 'display', 'block' );
	    
	        a.addEvent( 'mouseenter', function() {
		    hoverEl.fade( 'in' );
	        });
	        a.addEvent( 'mouseleave', function() {
		    hoverEl.fade( 'out' );
	        });
	    }
	}
	
        if ( $( 'scrollMe' ) )
        {
            if ( /#\d+/.test( a.get( 'href' ) ) )
            {
                a.addEvent( 'click', function( event ) {
                    if ( event ) event.stop();
    	            var i = Number( this.get( 'href' ).split('#')[1] );
    	            $( 'scrollMe' ).tween( 'margin-left', $( 'scrollMe' ).getParent().getSize().x * i * -1 );
    	            //playMP3( i );
    	            return false;
                });
            }
        }
    });
    
    if ( $( 'scrollMe' ) )
    {
        if ( window.location.hash && /#\d+/.test( window.location.hash ) )
        {
            var i = Number( window.location.hash.split('#')[1] );
            $( 'scrollMe' ).setStyle( 'margin-left', $( 'scrollMe' ).getParent().getSize().x * i * -1 );
            //playMP3( i );
        }
        //else
            //playMP3.delay( 1000 );
    }

});
