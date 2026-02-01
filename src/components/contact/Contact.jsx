import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';


export default function Contact() {
return (
  <div className="flex flex-column items-center justify-center p-8 gap-6 w-full">
    
    <h1 className="text-3xl font-semibold">
      Entre em contato conosco
    </h1>

    <div className="flex flex-column md:flex-row gap-3 w-full max-w-3xl">
      <InputText
        placeholder="Digite seu nome"
        className="w-full"
      />
      <InputText
        placeholder="Digite seu email"
        className="w-full"
      />
    </div>

    <div className="w-full max-w-3xl">
      <InputText
        placeholder="Digite o título"
        className="w-full"
      />
    </div>

    <div className="w-full max-w-3xl flex flex-column gap-3">
      <InputTextarea
        placeholder="Assunto"
        rows={5}
        className="w-full"
      />

   
    </div>
    
    <div className='flex justify-center'>
         <Button
        label="Enviar"
        className="w-100"
      />
    </div>

  </div>
);

}