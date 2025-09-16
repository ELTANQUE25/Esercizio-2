import Button from '../atoms/Button'

export default function FilterGroup({ setFilter }) {
  return (
    <div className="flex gap-2 my-4">
      <Button onClick={() => setFilter('all')}>Tutti</Button>
      <Button onClick={() => setFilter('active')}>Attivi</Button>
      <Button onClick={() => setFilter('completed')}>Completati</Button>
    </div>
  )
}
