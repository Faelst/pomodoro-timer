import { useContext } from 'react'
import { Container, HistoryList, Status } from './styles'
import { CyclesContext } from '../../context/CyclesContext'

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
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status statusColor="yellow">concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </Container>
  )
}
