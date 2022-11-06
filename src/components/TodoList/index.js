import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { todoRemainingSelector } from '../../redux/selectors';
import Todo from '../Todo';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();

  const handleAddButtonTodo = () => {
    dispatch(addTodo({
      name: todoName,
      id: Math.floor(Math.random() * 1000),
      priority: priority,
      completed: false
    }))

    setTodoName('');
    setPriority('Medium')
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }

  const onPriorityChange = (value) => {
    setPriority(value);
  }

  console.log('todoList', todoList);


  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        { todoList.map(todo => <Todo key={todo.id} name= {todo.name} prioriry={todo.priority} />) }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={onPriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
