import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'
import Button from "@/stories/Button.svelte";

const label = "Button"

test("Check Button Label", () => {
    const {getByText} = render(Button, {label, backgroundColor: 0xffffff})
    expect(getByText(label)).toBeInTheDocument()
})

test('Check Button Click Event', async () => {
    const {getByText} = render(Button, {label, backgroundColor: 0xffffff})
    const button = getByText('Button')

    let fireToMe = false
    button.addEventListener("click", () => {
        fireToMe = true
    })

    await fireEvent.click(button)
    expect(fireToMe).toEqual(true)
})
