// Arrays
let playerList = [ ];
let TableSelection = "JumpStats";

let type;
let crouch = "false";

// Steam
let steam64;
let steamBigInt;
let playerName;

$( document).ready( function( ) {
	$( "#jumptype-bind").change( function( ) {
		if( this.checked )
		{
			crouch = "true";
			
			if ( type == "lj" ) 
			{
				showLJ( );
			}
			else if ( type == "bhop" ) 
			{
				showBHOP( );
			}
			else if ( type == "multibhop" ) 
			{
				showMBHOP( );
			}
			else if ( type == "wj" ) 
			{
				showWJ( );
			}
			else if ( type == "dropbhop" ) 
			{
				showDBHOP( );
			}
			else if ( type == "ljblock" ) 
			{
				showLJBlock( );
			}
		}
		else
		{
			crouch = "false";
			
			if ( type == "lj" )
			{
				showLJ( );
			}
			else if ( type == "bhop" ) 
			{
				showBHOP( );
			}
			else if ( type == "multibhop" ) 
			{
				showMBHOP( );
			}
			else if ( type == "wj" ) 
			{
				showWJ( );
			}
			else if ( type == "dropbhop" ) 
			{
				showDBHOP( );
			}
			else if ( type == "ljblock" ) 
			{
				showLJBlock( );
			}
		}
	});
	
	type = "lj";
	showLJ( );
	
	document.addEventListener( 'click', ( event) => {
		crouch = "false";
		if ( event.target.id === "jumptype-button-lj" )
		{
			// url = LJurl;
			type = "lj";
			showLJ( );
		}
		
		if ( event.target.id === "jumptype-button-bhop" ) 
		{
			// url = BHOPurl;
			type = "bhop";
			showBHOP( );
			$( 'input:checkbox').prop( 'checked', false );
		}
		
		if ( event.target.id === "jumptype-button-mbhop" ) 
		{
			// url = MBHOPurl;
			type = "multibhop";
			showMBHOP( );
			$( 'input:checkbox').prop( 'checked', false );
		}
		
		if ( event.target.id === "jumptype-button-wj" ) 
		{
			// url = WJurl;
			type = "wj";
			showWJ( );
			$( 'input:checkbox').prop( 'checked', false );
		}
		
		if ( event.target.id === "jumptype-button-ljblock" ) 
		{
			// url = WJurl;
			type = "ljblock";
			showLJBlock( );
			$( 'input:checkbox').prop( 'checked', false );
		}
		
		if ( event.target.id === "jumptype-button-dbhop" ) 
		{
			// url = DBHOPurl;
			type = "dropbhop";
			showDBHOP( );
			$( 'input:checkbox').prop( 'checked', false );
		}
	});
});

function showLJ( )
{
	LoadTable( );
	document.getElementById( "jumptype-button-lj" ).style.color = "#fff";
	
	document.getElementById( "changeme" ).innerHTML = "Jumpstats - Longjump";
	document.getElementById( "JumpStats" ).innerHTML = "<tbody><tr><th>Rank</th><th>Player</th><th>Distance</th><th>Strafes</th><th>Sync</th><th>Pre</th><th>Max</th></tr>";
	// document.getElementById( "JumpStats" ).innerHTML = "<thead><tr><th>Rank</th><th>Player</th><th>Distance</th><th>Strafes</th><th>Sync</th><th>Pre</th><th>Max</th></tr></thead><tbody>";
	document.getElementById( "jumptype-button-bhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-mbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-wj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-dbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-ljblock" ).style.color = menucolor;
}

function showBHOP( ) 
{
	LoadTable( );
	document.getElementById( "jumptype-button-bhop" ).style.color = "#fff";
	document.getElementById( "changeme" ).innerHTML = "Jumpstats - BunnyHop";
	document.getElementById( "JumpStats" ).innerHTML = "<tbody><tr><th>Rank</th><th>Player</th><th>Distance</th><th>Strafes</th><th>Sync</th><th>Pre</th><th>Max</th></tr>";
	document.getElementById( "jumptype-button-lj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-mbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-wj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-dbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-ljblock" ).style.color = menucolor;
}

function showMBHOP( ) 
{
	LoadTable( );
	document.getElementById( "jumptype-button-mbhop" ).style.color = "#fff";
	document.getElementById( "changeme" ).innerHTML = "Jumpstats - Multibhop";
	document.getElementById( "JumpStats" ).innerHTML = "<tbody><tr><th>Rank</th><th>Player</th><th>Distance</th><th>Strafes</th><th>Sync</th><th>Pre</th><th>Max</th></tr>";
	document.getElementById( "jumptype-button-lj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-bhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-wj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-dbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-ljblock" ).style.color = menucolor;
}

function showWJ( )
{
	LoadTable( );
	document.getElementById( "jumptype-button-wj" ).style.color = "#fff";
	document.getElementById( "changeme" ).innerHTML = "Jumpstats - Weirdjump";
	document.getElementById( "JumpStats" ).innerHTML = "<tbody><tr><th>Rank</th><th>Player</th><th>Distance</th><th>Strafes</th><th>Sync</th><th>Pre</th><th>Max</th></tr>";
	
	document.getElementById( "jumptype-button-lj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-bhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-mbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-dbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-ljblock" ).style.color = menucolor;
}

function showDBHOP( ) 
{
	LoadTable( );
	document.getElementById( "jumptype-button-dbhop" ).style.color = "#fff";
	document.getElementById( "changeme" ).innerHTML = "Jumpstats - Drop Bhop";
	document.getElementById( "JumpStats" ).innerHTML = "<tbody><tr><th>Rank</th><th>Player</th><th>Distance</th><th>Strafes</th><th>Sync</th><th>Pre</th><th>Max</th></tr>";
	
	document.getElementById( "jumptype-button-lj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-bhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-mbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-wj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-ljblock" ).style.color = menucolor;
}

function showLJBlock( ) 
{
	LoadTable( );
	document.getElementById( "jumptype-button-ljblock" ).style.color = "#fff";
	document.getElementById( "changeme" ).innerHTML = "Jumpstats - Longjump Block";
	document.getElementById( "JumpStats" ).innerHTML = "<tbody><tr><th>Rank</th><th>Player</th><th>Block</th><th>Distance</th><th>Strafes</th><th>Sync</th><th>Pre</th><th>Max</th></tr>";
	
	document.getElementById( "jumptype-button-lj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-bhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-mbhop" ).style.color = menucolor;
	document.getElementById( "jumptype-button-wj" ).style.color = menucolor;
	document.getElementById( "jumptype-button-dbhop" ).style.color = menucolor;
}

function toggle( object ) 
{
	object.disabled = true;
	setTimeout( function( )
	{
		object.disabled = false;
	}, 500 );
}

function LoadTable( ) 
{
		$.ajax( {
			type: "GET",
			url: "jumptype.php?jumptype="+type+"&is_crouch_boost="+crouch+"",
			beforeSend: function( data ) {
				document.getElementById( "loader" ).style.display = "block";
				document.getElementById( "changeme" ).style.display = "none";
				document.getElementById( "JumpStats" ).style.display = "none";
				document.getElementById( "jumptype-bindp" ).style.display = "none";
				document.getElementById( "kz" ).style.display = "none";
			},
			success: function( data1 )
			{
				setTimeout( function( ) 
				{
					var pessoasJson = JSON.parse( data1 );
					JSON.stringify( pessoasJson );
				
					let position = 0;
					playerList = [ ];
					if ( data1.Distance == 0 )
					{
						let row = document.getElementById( TableSelection ).insertRow( -1 );
						let cell1 = row.insertCell( 0 );
						cell1.innerHTML = "No jumps recorded";
						cell1.style = "color: white;";
						return;
					}
					
					for( x in pessoasJson )
					{
						var data = pessoasJson[ x ];
						if ( data.distance > 300 || data.distance > 400 ) 
							continue;
						else
						{
							if ( document.getElementById( TableSelection ).rows.length > 20 ) { break; }
							if ( playerList.includes( pessoasJson[ x ].player_name ) ) { continue; }
							if ( playerList.includes( pessoasJson[ x ].distance > 380 ) ) { continue; }
							else
							{
								steamid = ( data.steam_id ).split( ":" );
								steam64 = BigInteger( steamid[ 2 ] );
								steam64 = BigInteger( steam64.multiply( 2 ).toString( ) );
								if ( steamid[ 1 ] === "1" ) 
								{
									steamBigInt = BigInteger( '76561197960265729' );
								}
								else 
								{
									steamBigInt = BigInteger( '76561197960265728' );
								}
								
								var $p = data.img['0'];
								if ( $p == null && $p == undefined )
								{
									$p = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg";
								}
														
								// If name is longer than 20, but not longer than 23, length = 17 + ...
								// If name is longer than 23, Distance = 15 + ...
								if ( data.player_name.toString( ).length > 15 ) 
								{
									if ( data.player_name.toString( ).length > 18 ) 
									{
										playerName = data.player_name.substr( 0, 11 ) + "...";
									}
									else 
									{ 
										playerName = data.player_name.substr( 0, 14 ) + "..."; 
									}
								}
								else { playerName = data.player_name; }

								playerName1 = data.player_name; 
								
								if ( type == 'ljblock' )
								{
									// playerName = data.player_name; 
				
									SteamLink = "https://steamcommunity.com/profiles/" + steam64.add( steamBigInt ).toString( );
														
									let row = document.getElementById( TableSelection ).insertRow( -1 );
											
									position++;
									
									if ( position == 1 )
									{
										row.insertCell( 0 ).innerHTML = "<img src='https://cdn.streamelements.com/assets/extension/gif/t1.gif'style='height: 37px; padding-left: 0px; padding-right: 10px;'></img><div class='avatar-content'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "'title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' style='color: gold;' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}
									else if ( position == 2 ) 
									{
										row.insertCell( 0 ).innerHTML = "<img src='https://cdn.streamelements.com/assets/extension/gif/t2.gif'style='height: 37px; padding-left: 0px;padding-right: 10px;'></img><div class='avatar-content'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "'title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' style='color: #EEBA11;' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}
									else if ( position == 3 )
									{
										row.insertCell( 0 ).innerHTML = "<img src='https://cdn.streamelements.com/assets/extension/gif/t3.gif'style='height: 37px; padding-left: 0px;padding-right: 10px;'></img><div class='avatar-content'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "'title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' style='color: #cd7f32;' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}
									else if ( position < 10 )
									{
										row.insertCell( 0 ).innerHTML = "<div class='numberCircle' style='margin-left: 10px;'>" + position + "</div><div class='avatar-content' style='margin-left: 17px;'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "' title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}
									else {
										row.insertCell( 0 ).innerHTML = "<div class='numberCircle' style='margin-left: 10px;'>" + position + "</div><div class='avatar-content' style='margin-left: 16px;'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "' title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}					
									
									playerList.push( playerName );
									row.insertCell( 2 ).innerHTML = data.block;
									row.insertCell( 3 ).innerHTML = data.distance;
									row.insertCell( 4 ).innerHTML = data.strafes;
									row.insertCell( 5 ).innerHTML = data.sync;
									row.insertCell( 6 ).innerHTML = data.pre;
									row.insertCell( 7 ).innerHTML = data.max;
									
									document.getElementById( "loader" ).style.display = "none";
									document.getElementById( "changeme" ).style.display = "block";
									document.getElementById( "JumpStats" ).style.display = "block";
									document.getElementById( "jumptype-bindp" ).style.display = "block";
									document.getElementById( "kz" ).style.display = "block";
								}
								else 
								{
									// playerName = data.player_name;
				
									SteamLink = "https://steamcommunity.com/profiles/" + steam64.add( steamBigInt ).toString( );
														
									let row = document.getElementById( TableSelection ).insertRow( -1 );
											
									position++;
					
									if ( position == 1 )
									{
										row.insertCell( 0 ).innerHTML = "<img src='https://cdn.streamelements.com/assets/extension/gif/t1.gif'style='height: 37px; padding-left: 0px; padding-right: 10px;'></img><div class='avatar-content'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "'title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' style='color: gold;' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}
									else if ( position == 2 ) 
									{
										row.insertCell( 0 ).innerHTML = "<img src='https://cdn.streamelements.com/assets/extension/gif/t2.gif'style='height: 37px; padding-left: 0px;padding-right: 10px;'></img><div class='avatar-content'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "'title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' style='color: #EEBA11;' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}
									else if ( position == 3 )
									{
										row.insertCell( 0 ).innerHTML = "<img src='https://cdn.streamelements.com/assets/extension/gif/t3.gif'style='height: 37px; padding-left: 0px;padding-right: 10px;'></img><div class='avatar-content'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "'title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' style='color: #cd7f32;' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}
									else if ( position < 10 )
									{
										row.insertCell( 0 ).innerHTML = "<div class='numberCircle' style='margin-left: 10px;'>" + position + "</div><div class='avatar-content' style='margin-left: 17px;'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "' title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}
									else {
										row.insertCell( 0 ).innerHTML = "<div class='numberCircle' style='margin-left: 10px;'>" + position + "</div><div class='avatar-content' style='margin-left: 16px;'><a target='_blank' href=" + SteamLink + "><img class='avatar-img' src='" + $p + "' title='" + playerName1 + "' ></img></a></div>";
										row.insertCell( 1 ).innerHTML = "<a class='profile' target='_blank' href=" + SteamLink + ">" + playerName + "</a>";
									}

									playerList.push( playerName );
									row.insertCell( 2 ).innerHTML = data.distance;
									row.insertCell( 3 ).innerHTML = data.strafes;
									row.insertCell( 4 ).innerHTML = data.sync;
									row.insertCell( 5 ).innerHTML = data.pre;
									row.insertCell( 6 ).innerHTML = data.max;
									
									document.getElementById( "loader" ).style.display = "none";
									document.getElementById( "changeme" ).style.display = "block";
									document.getElementById( "JumpStats" ).style.display = "block";
									document.getElementById( "jumptype-bindp" ).style.display = "block";
									document.getElementById( "kz" ).style.display = "block";
								}
							}
						}
					}
				}, 150 );
			}
		});
}
