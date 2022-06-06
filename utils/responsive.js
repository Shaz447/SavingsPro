import { Dimensions,PixelRatio } from "react-native";


const {width,height} = Dimensions.get("screen");


const widthToDP = number =>{
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth)/100);
};


const heightToDP = number =>{
    let givenHeight = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight)/100);
  };

const listenToOrientationChanges = ref =>{
    Dimensions.addEventListener('change',newDimension =>{
        width =newDimension.screen.width;
        height=newDimension.screen.height;
        ref.setState({
            orientation : height > width ? 'portrait' : 'landscape'
        });
    })

   
}


const removeOrientationChanges = ()=>{
    Dimensions.removeEventListener('change')
}


const getDynamicStyles =(portraitStyle,landscapeStyle)=>{
    const isPortrait = height > width
    if(isPortrait){
        return portraitStyle;
    }else{
        return landscapeStyle
    }
}


export {widthToDP,heightToDP,listenToOrientationChanges,removeOrientationChanges,getDynamicStyles};