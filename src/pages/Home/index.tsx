import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import * as z from 'zod'

import { NewCycleForm } from '../../components/NewCycleForm'
import { Countdown } from '../../components/Countdown'

import { Container, ResetCountdownButton, StartCountdownButton } from './styles'
import { CyclesContext } from '../../context/CyclesContext'

const newCycleFormSchema = z.object({
  task: z.string().min(1, 'Informe uma tarefa'),
  minutesAmount: z.number().int().min(5).max(60),
})

export type NewCycleFormData = z.infer<typeof newCycleFormSchema>

export function Home() {
  const { activeCycle, handleCreateNewCycle, handleInterruptCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { watch, handleSubmit } = newCycleForm

  const isSubmitDisabled = !watch('task')

  return (
    <Container>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <ResetCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Encerrar ciclo
          </ResetCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Iniciar ciclo
          </StartCountdownButton>
        )}
      </form>
    </Container>
  )
}
