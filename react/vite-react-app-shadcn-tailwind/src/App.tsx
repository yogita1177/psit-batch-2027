import { DatePicker } from './components/mycomponents/DatePicker';
import { MyTable } from './components/mycomponents/MyTable';
import { NavigationMenuDemo } from './components/mycomponents/NavigationMenuDemo';
import { Button } from './components/ui/button';

function App() {
  return (
    <>
      <div className='flex justify-around bg-black'>
        <img className='m-5' src='vite.svg' alt='' />
        <NavigationMenuDemo />
      </div>

      <div className='w-6xl m-24'>
        <MyTable />
      </div>

      <div className='flex m-24'>
        <div>
          <DatePicker />
        </div>

        <div className='ml-2'>
          <Button>Search</Button>
        </div>
      </div>
    </>
  );
}

export default App;
