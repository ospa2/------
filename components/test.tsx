import { stringify } from 'querystring';
import React, { useState, useEffect } from 'react';
import { Calendar } from './ui/calendar';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useStore } from './hooks/userContext';

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
function DataFetcher() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [n, setN] = useState(1)
  const [n2, setN2] = useState('1')
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const {count, setC} = useStore()

  // Асинхронная функция для получения данных
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+n);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result); // Устанавливаем данные в состояние
    } catch (err) {
      setError(err.message); // Обрабатываем ошибку
    } finally {
      setLoading(false); // Отключаем индикатор загрузки
      setN(n+1)
      
    }
  };
  useEffect(() => {
    console.log(loading, n2)

  }, [loading, n2])
  // Используем useEffect для вызова асинхронной функции при монтировании компонента
  useEffect(() => {
    fetchData();
  }, []); // Пустой массив зависимостей, чтобы функция вызывалась один раз при монтировании
  

  return (
    <>
      <Button onClick={(e)=>fetchData()}>
        <h1>{n2}</h1>
      </Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
       <h1>Fetched Data:</h1>
      {loading && <Skeleton className="w-[200px] h-[20px] rounded-full mb-1"/>}
      {loading && <Skeleton className="w-full h-[20px] rounded-full mb-1"/>}
      {loading && <Skeleton className="w-[250px] h-[20px] rounded-full"/>}
      
      {data && !loading && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
      <Progress value={n}/>
      <Progress value={date?.getDate()*3} className='my-2'/>
      <Select onValueChange={(value)=>setN2(value.toString())}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    <Popover>
  <PopoverTrigger className='ml-4'>Open</PopoverTrigger>
    <PopoverContent><Progress value={n}/>
    <Progress value={date?.getDate()*3} className='my-2'/></PopoverContent>
  </Popover>
  <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    setC(currentValue)
                    
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </>
  );
}

export default DataFetcher;
