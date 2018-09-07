/**
 * Created by Administrator on 2018/7/20.
 */
function shareCaptureCtrl ( $scope, $state, Upload ) {
    $scope.imgshows = [];
    $scope.imgshows50 = [];
    $scope.imgshows100 = [];
    $scope.imgshows500 = [];
    var photoUrl = ipUrl + '/user/uploadFile';

    var shareCapture = $scope.shareCapture = {
        url : {},
        data : {},
        indexNum : '',
        delShowHide : false,
        goBackPrev : function () {
            $state.go('account')
        },
        amendPersonData : function () {
            $state.go('account')
        },
        UploadScreenshot : function () {
            console.info(5555)

        },
        DeleteImg : function ( index, imgs ) {
            switch ( this.indexNum ){
                case 1:
                    $scope.imgshows.splice(index, 1);
                    console.info($scope.imgshows);
                    break;
                case 50:
                     $scope.imgshows50.splice(index, 1);
                    break;
                case 100:
                     $scope.imgshows100.splice(index, 1);
                    break;
                case 500:
                     $scope.imgshows500.splice(index, 1);
                    break;
            }

        },
        addimage : function ( num ) {
            console.info(num);
            this.indexNum = num;
        }


    };


    $scope.getFile = function ( file ) {
        console.info(file)
        console.info(shareCapture.indexNum);
        Upload.upload({
            url : photoUrl,
            data : {
                photoFile : file
            }
        })
            .then(function ( resp ) {
                    var fileUrl = resp.data;
                    switch ( shareCapture.indexNum ) {
                        case 1:
                            $scope.imgshows.push(fileUrl.object.showImage);
                            break;
                        case 50:
                            $scope.imgshows50.push(fileUrl.object.showImage);
                            break;
                        case 100:
                            $scope.imgshows100.push(fileUrl.object.showImage);
                            break;
                        case 500:
                            $scope.imgshows500.push(fileUrl.object.showImage);
                            break;
                        default:
                    }
                    console.log(fileUrl)
                },
                function ( resp ) {
                    console.log(resp.data, "上传失败");
                },
                function ( evt ) {//上传进度
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ');
                });
    };


}

function fileModel ( $parse ) {
    return {
        restrict : 'A',
        link : function ( scope, element, attrs, ngModel ) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function ( event ) {
                scope.$apply(function () {
                    modelSetter(scope, element[ 0 ].files[ 0 ]);
                });
                scope.file = (event.srcElement || event.target).files[ 0 ];
                scope.getFile(scope.file);
                // $('#uploadfile').val(''); //发现拍照上传后再次拍照不会调用change方法，加入这行代码可解决
            });
        }
    };
}


angular
    .module('uploadimg')
    .directive('fileModel', fileModel)
    .controller('shareCaptureCtrl', shareCaptureCtrl);

