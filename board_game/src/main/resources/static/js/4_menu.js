$( function() {
    $('#check_dialog') . dialog( {
    	title:$(".dialog_call").val(),
        closeOnEscape:false,
        dialogClass:"no-close",
        resizable:false,
        modal:true,
    	autoOpen: false,
        buttons:{
        	"はい":function(){
        		$(this).dialog('close');
        		window.location.href="5_othello.html";

        	},
        	"いいえ":function(){
        		$(this).dialog('close');
        	}
        }
    } );
    $( '.dialog_call' ) . click( function() {
        $( '#check_dialog' ) . dialog( 'open' );
        return false;
    } );
    $('#check_dialog_logout') . dialog( {
    	title:"ログアウトします",
        closeOnEscape:false,
        dialogClass:"no-close",
        resizable:false,
        modal:true,
    	autoOpen: false,
        buttons:{
        	"はい":function(){
        		$(this).dialog('close');
        		window.location.href="1_login.html";

        	},
        	"いいえ":function(){
        		$(this).dialog('close');
        	}
        }
    } );
    $( '.dialog_call_logout' ) . click( function() {
        $( '#check_dialog_logout' ) . dialog( 'open' );
        return false;
    } );
} );

