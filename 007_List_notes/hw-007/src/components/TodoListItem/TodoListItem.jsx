import React from 'react';
import './TodoListItem.scss';
import styles from '../TodoApp/_variables.scss';
import Button from '../Button/Button';
import { useDispatch} from 'react-redux';
import { checkTodoListItemAction, deleteTodoListItemAction } from '../../redux-store/actions';

const TodoListItem = (props) => {
    const { taskName, isDone, key } = props.task;
    const dispatch = useDispatch();

    let icontype, taskClassName;
    if (isDone) {
        icontype = 'checkmark';
        taskClassName = 'list-item-task list-item-task--done';
    }
    else {
        icontype = null;
        taskClassName = 'list-item-task';
    }

    const hadleCheckmarkOnClick = () => {
        dispatch(checkTodoListItemAction(key));
    }

    const hadleDeleteBtnOnClick = () => {
        dispatch(deleteTodoListItemAction(key));
    }

    return (
        <li key={key} className={'todo-list-item'}>
            <Button 
                className={'checkmark-task-btn'}
                size={'16'}
                color={styles.primaryColor}
                iconType={icontype}
                onClick={hadleCheckmarkOnClick}
            >
            </Button>
            <p className={taskClassName}>{taskName}</p>
            <Button 
                className={'delete-task-btn'}
                size={'16'}
                color={styles.primaryColor}
                iconType={'cross'}
                onClick={hadleDeleteBtnOnClick}
            >
            </Button>
        </li>
    );
};

export default TodoListItem;