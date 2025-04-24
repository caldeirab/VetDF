import { useState } from "react";
import { 
  Phone, 
  Clock, 
  Mail,
  Dog,
  Cat,
  Rabbit,
  Bone,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { GaleriaImagens } from "@/components/GaleriaImagens";
import { CartaoServico } from "@/components/CartaoServico";
import { LogoWhatsapp } from "@/components/icones/LogoWhatsapp";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      {/* Atendimento 24H no topo */}
      <header className="z-50 bg-white shadow-sm">
  <div className="container mx-auto px-4 py-2 flex justify-between items-center">
    <div className="flex items-center">
      <div className="flex items-center shadow-lg p-2 rounded-md">
        <img src="/vetdf-logo.jpg" alt="VET DF Logo" className="h-auto max-h-12" />
      </div>
    </div>
    <Button 
      className="bg-green-500 hover:bg-green-600 flex items-center gap-2"
      onClick={() => window.open(`https://wa.me/5561995995728?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta para meu pet.")}`, "_blank")}
    >
      <LogoWhatsapp className="h-5 w-5" />
      WhatsApp
    </Button>
  </div>
  <div className="bg-red-600 text-white text-center text-sm font-semibold py-2 animate-blink w-full">
    ATENDIMENTO 24H
  </div>
</header>



      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl mx-auto w-64">
                <img src="/vet-dog.jpeg" alt="Veterinário cuidando de um cão" className="w-full h-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center"><span className="text-red-600">Ortopedias e Radiologia Veterinária Especializadas</span></h1>
              <div className="flex justify-center">
                <br>
                </br>
                <Button 
                 
                  className="bg-green-500 hover:bg-green-600 text-white text-lg py-6 px-8 flex items-center gap-2"
                  onClick={() => window.open(`https://wa.me/5561995995728?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta para meu pet.")}`, "_blank")}
                >
                  <LogoWhatsapp className="h-6 w-6" />
                  Fale Conosco no WhatsApp
                  
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Animais */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-800 mb-4"><span className="text-red-600 font-semibold">Nossos serviços especializados em ortopedia e radiologia estão disponíveis para diversos tipos de animais, 24H.</span></h1>
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    <Dog className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="mt-4">Cães</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600">Cuidados ortopédicos especializados para todas as raças de cães, de pequeno a grande portes.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    <Cat className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="mt-4">Gatos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600">Tratamentos suaves e eficazes para gatos com condições ortopédicas.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    <Rabbit className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="mt-4">Silvestres</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600">Tratamento especializado para animais silvestres com necessidades ortopédicas.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-4">CIRURGIAS DE EMERGÊNCIA E IMEDIATAS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CartaoServico 
                titulo="Cirurgia Ortopédica"
                descricao="Procedimentos cirúrgicos avançados para fraturas, lesões ligamentares e problemas articulares."
                icone={<Bone className="h-10 w-10 text-teal-600" />}
                recursos={[
                  "Reparo e fixação de fraturas de ossos longos",
                  "Cirurgia de ligamento cruzado",
                  "Tratamento de displasia de quadril e cotovelo",
                  "Cirurgia de coluna",
                  "Cirurgia de bucomaxilofacial (cirurgia de face, maxilares e boca)",
                  "Cirurgia de mandibula e maxilar",
                  "Neurocirurgia geral"
                ]}
              />

              <CartaoServico 
                titulo="Radiologia Diagnóstica"
                descricao="Diagnóstico preciso com equipamentos de imagem modernos."
                icone={<Activity className="h-10 w-10 text-teal-600" />}
                recursos={[
                  "Raios-X digitais",
                  "Diagnóstico por ultrassom"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section id="galeria" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Galeria de Casos</h2>
              <p className="text-red-600 max-w-2xl mx-auto">Conheça nossos casos de sucesso em ortopedia e radiologia veterinária.</p>
            </div>
            <GaleriaImagens />
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Entre em Contato</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Telefone</h3>
                  <p className="text-red-600">+55 (61) 99599-5728</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-red-600">vetdf.ortopedia@gmail.com</p>
                </div>
              </div>

                    <div className="flex items-center gap-4">
  <div className="flex items-center justify-center w-8 h-8">
    <Clock className="h-6 w-6 text-teal-600" />
  </div>
  <div>
    <h3 className="font-bold text-gray-800">Horário de Funcionamento <span className="text-red-600">24h</span>
</h3>
    <ul className="text-gray-600">
      <li><span className="text-red-600">Segunda a Domingo</span>
      </li>
      
    </ul>
  </div>
</div>
              
              <div className="mt-8 flex justify-center">
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white text-lg py-6 px-8 flex items-center gap-2"
                  onClick={() => window.open(`https://wa.me/5561995995728?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta para meu pet.")}`, "_blank")}
                >
                  <LogoWhatsapp className="h-6 w-6" />
                  Agendar Consulta via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img src="/vetdf-logo.jpg" alt="VET DF Logo" className="h-16 mb-4" />
            <p className="text-gray-400 text-center max-w-xl">Cuidados veterinários especializados em ortopedia e radiologia para cães, gatos e silvestres.</p>
            <div className="border-t border-gray-700 mt-6 pt-6 text-center w-full">
              <p className="text-gray-400 text-base md:text-lg">&copy; {new Date().getFullYear()} VET DF. Todos os direitos reservados. Desenvolvido por britodeiv.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <BotaoWhatsApp numeroTelefone="5561995995728" mensagem="Olá, gostaria de agendar uma consulta para meu pet." />
   
    </div>
  );
};

export default Index;
