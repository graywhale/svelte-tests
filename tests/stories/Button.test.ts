import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'
import Button from "@/stories/Button.svelte";

const label = "Click Me"

test("Check Button Label", () => {
    const {getByText} = render(Button, {label, backgroundColor: 0xffffff})
    expect(getByText(label)).toBeInTheDocument()
})
//
// test('Check Button Click Event', async () => {
//     const {getByText} = render(Button, {label})
//     const button = getByText('Button')
//
//     await fireEvent.click(button)
//     expect(button).toHaveTextContent('Button Clicked')
// })
