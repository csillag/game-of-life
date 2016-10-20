import angular from 'angular';
import angularMeteor from 'angular-meteor';
import gameOfLife from '../imports/components/gameOfLife/gameOfLife';

angular.module('game-of-life', [
    angularMeteor,
    gameOfLife.name
]);
