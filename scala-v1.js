


var arrayBB = [ 1.0  , 1.8  , 1.1 , 3.1, 2.0, 7.7 ]

var arrayCC = [ 1.4  , 1.25  , 2.4 ,  3.0 ]

var arrayDD = []




























function GetPercentValueFromNumbers(Offset,arrayAA){
    //var Size = arrayAA.length
    var Percent = 1.0 / ( arrayAA.length - 1 )
    ////Offset = Offset + Percent
    ///var off = 0.0
    ///var index = 0
    ///var result = 0.0
    ///var prev = 0
    //var back = 1
    


    var Count = Math.round(( Offset - Percent ) / Percent) + 0
    
    //console.log('Count',Count)
    
    var Leaf = ( Offset - (Count*Percent) ) / Percent

    //console.log('Count',Count)

    var value = arrayAA[Count+1] - arrayAA[Count]
    value = arrayAA[Count] + (value*Leaf)
    if(isNaN(value)){

        var Count = Math.round(( Offset - Percent ) / Percent) + 1
        
        //console.log('Count',Count)
        
        var Leaf = ( Offset - (Count*Percent) ) / Percent

        //console.log('Count',Count)

        var value = arrayAA[Count+1] - arrayAA[Count]
        value = arrayAA[Count] + (value*Leaf)

    }

    //if(Offset==Percent)value=Percent

    console.log('Offset',Offset,value)

/*
    //hile(index<Size){
      ///  if(off>=Offset){
            console.log('diff',off,Offset)
            var diff = Offset-(Percent*index)
            var val = arrayAA[index] - arrayAA[index-1]
            console.log(':::',diff,val,index)
            result = arrayAA[index] + ( val * diff)
            //break
       // }
        //prev=arrayAA[index]
        ////
       // if(off<Offset){
            off+=Percent
            index++
      //  }
   // }
    console.log(Offset,'=',result)*/
}



GetPercentValueFromNumbers(0.0,arrayBB)
GetPercentValueFromNumbers(0.01,arrayBB)
GetPercentValueFromNumbers(0.25,arrayBB)
GetPercentValueFromNumbers(0.5,arrayBB)
GetPercentValueFromNumbers(0.75,arrayBB)
GetPercentValueFromNumbers(1.0,arrayBB)
