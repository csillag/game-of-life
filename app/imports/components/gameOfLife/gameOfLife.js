import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './gameOfLife.html';

import { getLife } from '../../data/life';

const life = getLife();

class GameOfLifeCtrl {
    constructor($scope) {
        $scope.viewModel(this);

        // Range function copied from
        // http://stackoverflow.com/questions/11873570/angularjs-for-loop-with-numbers-ranges
        $scope.range = function(min, max, step) {
            step = step || 1;
            let input = [];
            for (let i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };
        
        this.helpers({
            size() { return life.getSize(); },
            lifeMap() { return life.getMap(); }
        });

        $scope.isPopulated = function(x, y) {
            return true;            
        }
                     
    }

    reset() { life.reset() }

    evolve() { life.evolve()  }

    onCellClick(x, y) {
        life.switchPopulated(x, y);
    }
}

export default angular.module('gameOfLife', [
    angularMeteor
])
    .component('gameOfLife', {
        templateUrl: 'imports/components/gameOfLife/gameOfLife.html',
        controller: GameOfLifeCtrl
    });

