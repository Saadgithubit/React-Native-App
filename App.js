import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [list ,setList]=useState([])
  const [text ,setText]=useState('')
  const [editMode,setEditMode]=useState(true)
  const [updatedText,setUpdatedText]=useState()

  const onChangeText=(text)=>{
    setText(text)
  }
  const onSubmit=()=>{
    const copyList=[...list]
    copyList.push(text)
    setList(copyList)
    setText('')
  }
  const deleteItem=(index)=>{
    const copyList=[...list]
    copyList.splice(index,1)
    setList(copyList)
  }
  const editItem=(index)=>{
    const value=list[index]
    setText(value)
    setUpdatedText(index)
    setEditMode(false)
  }
  const onUpdate=()=>{
    const copyList=[...list]
    copyList[updatedText]=text
    setList(copyList)
    setText('')
    setEditMode(true)
  }
  return (

      <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Todo List</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Value"
        textAlign='center'
        pointerEvents='box-only'
      />
      {editMode ? <Button
  onPress={onSubmit}
  title="Submit"
  color="#841584"
/>:<Button
  onPress={onUpdate}
  title="Update"
  color="#841584"
/>}
<View >{list.map((item,index)=>{
  return <Text style={styles.container1} key={index}>{item}
  <Button
  onPress={()=>deleteItem(index)}
  title="Delete"
  color="#841584"
/>
<Button
  onPress={()=>editItem(index)}
  title="Edit"
  color="#841584"
/>
</Text>
})}</View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width:'80%',
    margin: 25,
    borderWidth: 1,
    padding: 10,
  },
  container1:{
    marginTop:20,
    display:'flex',
    gap:30,
  },
  text:{
    fontSize:30,
    backgroundColor:'black',
    width:'100%',
    color:'#fff',
    textAlign:'center'
  },

});