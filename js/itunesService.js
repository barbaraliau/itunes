var app = angular.module('itunes');

app.service('itunesService', function($http, $q){

    this.getData = function(searchInput) {
    	var deferred = $q.defer();
    	$http ({
    		method: 'JSONP',
    		url: 'https://itunes.apple.com/search?term=' + searchInput + '&callback=JSON_CALLBACK'
    	}).then(function(response) {
    		var modResponse = response.data.results;
    		var mySongs = {};
    		// console.log(modResponse);
    		for (var i = 0; i < modResponse.length; i++) {
    				mySongs[i] = {
    					AlbumArt: modResponse[i].artworkUrl100,
    					Title: modResponse[i].trackName,
    					Artist: modResponse[i].artistName,
    					Collection: modResponse[i].collectionName,
    					CollectionPrice: modResponse[i].collectionPrice,
    					Play: modResponse[i].previewUrl,
    					Type: modResponse[i].kind
    				};	
    		}
    		// console.log(mySongs);
    		deferred.resolve(mySongs);
    	});
    	return deferred.promise;
    };


}); //service end
