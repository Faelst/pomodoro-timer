import { useContext } from 'react'
import { Container, HistoryList, Status } from './styles'
import { CyclesContext } from '../../context/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <Container>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.finishedAt && (
                    <Status statusColor="green">Finalizado</Status>
                  )}

                  {cycle.interruptedAt && (
                    <Status statusColor="red">Interrompido</Status>
                  )}

                  {!cycle.finishedAt && !cycle.interruptedAt && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </Container>
  )
}
