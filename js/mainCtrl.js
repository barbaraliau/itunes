var app = angular.module('itunes');

app.controller('mainCtrl', function($scope, itunesService){


  $scope.gridOptions = { 
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Title', displayName: 'Title'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
        {field: 'Type', displayName: 'Type'}
      ]
  };

    
   $scope.getSongData = function() {
    itunesService.getData($scope.searchInput).then(function(data) {
      $scope.songData = data;
      
    })
  };



}); //controller END




