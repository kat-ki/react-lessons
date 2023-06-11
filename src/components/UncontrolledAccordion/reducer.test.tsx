import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })

    //expected result
    expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })

    //expected result
    expect(newState.collapsed).toBe(false);
})

test('reduce should throw error because of incorrect action type', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    expect(() => {
        reducer(state, { type: 'FakeType' })
    }).toThrowError();
    //expected result

})