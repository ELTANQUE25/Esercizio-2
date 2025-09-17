import Button from '../atoms/Button'

export default function FilterGroup({ setFilter }) {
  return (
    <div className="flex gap-2 my-4">
      <Button className='filter-button' onClick={() => setFilter('all')}>Tutti</Button>
      <Button className='filter-button'   onClick={() => setFilter('active')}>Attivi</Button>
      <Button className='filter-button'   onClick={() => setFilter('completed')}>Completati</Button>
    </div>
  )
}
