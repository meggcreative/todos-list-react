import {takeLatest, takeEvery, call, put, select, delay} from "redux-saga/effects";
import {fetchExampleTasks,selectTasks,setTasks } from "../tasksSlice";
import { getExampleTasks} from "../getExampleTasks";


function* fetchExampleTasksHandler () {
    try {
        yield delay (1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "coś poszło nie tak!");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorageHandler, tasks)
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
};