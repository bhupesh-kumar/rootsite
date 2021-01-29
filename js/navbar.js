// target is to put the active opt on left side and rest on right side. 

// active object position (To be on Left)
var activeOpt = 1

class optObj{
    constructor(pos,name,data){

        var _optPosition = pos;
        var _optName = name;
        var _optData = data;

        this.getPosition = function(){
            return _optPosition;
        }

        this.getData = function(){
            return _optData;
        }

        this.getName()= function(){
            return _optName;
        }
    }

    set setPosition( newPos){
        this._optPosition = newPos;
    }
} 

//  create options Object


