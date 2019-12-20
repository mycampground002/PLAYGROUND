import * as React from 'react';

interface TodoListItemProps {
  title: string;
  content: string;
  complete: boolean;
};

function TodoListItem({ todo }: TodoListItemProps) {
  return (
    <div>TodoListItem!!?!</div>
  )
}

export default TodoListItem;