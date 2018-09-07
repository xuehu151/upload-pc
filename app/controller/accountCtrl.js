/**
 * Created by Administrator on 2018/7/20.
 */
function accountCtrl ( $scope, $state) {


    var persona = $scope.persona = {
        url : {},
        data : {},
        goBackPrev : function () {
            $state.go('shareCapture')
        },
        PersonalData : function () {
            $state.go('shareCapture')
        }

    }



}

angular
    .module('uploadimg')
    .controller('accountCtrl', accountCtrl);

