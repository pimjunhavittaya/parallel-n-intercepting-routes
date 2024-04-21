import {Card} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Login</h1>
      <Card className="p-5 w-[500px]">
        <div className="flex flex-col gap-4">
          <Input type="email" placeholder="Email"/>
          <Input type="password" placeholder="Password"/>
          <Button type="submit">Login</Button>
        </div>
      </Card>
    </div>
  )
}
