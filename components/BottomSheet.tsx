import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
//
export const BSheet = ( {onClose}:{onClose:()=>void} ) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet 
      snapPoints={["90%"]}

      enablePanDownToClose

      handleIndicatorStyle={{height:0}}

     onClose={onClose}


        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}
         >
          <Text style={{position:'relative', top:40,zIndex:10,color:"white",fontSize:24}}>FUK U🎉</Text>
          <Image style={{height:"100%" , width:"100%"}} source={{uri:"https://iili.io/dbMpCqQ.png"}}/>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

