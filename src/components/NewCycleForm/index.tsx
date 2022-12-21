import { Form, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <Form>
      <label htmlFor="name">Vou trabalhar em</label>
      <TaskInput
        type="text"
        placeholder="Dê um nome para seu projeto"
        list="tasks"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="tasks">
        <option value="Projeto 1" />
      </datalist>

      <label htmlFor="email">durante</label>
      <MinutesAmountInput
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', {
          required: true,
          min: 5,
          max: 60,
          valueAsNumber: true,
        })}
      />

      <span>minutos.</span>
    </Form>
  )
}
