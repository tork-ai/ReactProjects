import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Todo from './components/Todo';

// Iliyas Altynbek 20MD0121
export default function App() {

  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    Keyboard.dismiss();
    setTodoList([...todoList, todo])
    setTodo(null);
  }

  const deleteTodo = (index) => {
    let list = [...todoList];
    list.splice(index, 1);
    setTodoList(list)
  }

  return (
    <View style= {styles.container}>

      <View style = {styles.todoWrapper}>
        <Text style= {styles.sectionTitle}>Today's tasks</Text>
        <View style= {styles.items}>
          {
            todoList.map((task, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => deleteTodo(index)}>
                  <Todo text={task} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

    <KeyboardAvoidingView behavior = {Platform.OS === "ios" ? "padding" : "height"}
    style = {styles.writeTodoWrapper}>
      <TextInput style={styles.input} placeholder={'Write a new task'}  value={todo} onChangeText={todo => setTodo(todo)}/>
      <TouchableOpacity onPress={() => addTodo()}>
          <View style={styles.addWrapper}>
            <Text>Add</Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FCDCD',
  },
  todoWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },
  writeTodoWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
