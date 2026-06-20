import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const items = [
  {
    value: "Moderno",
    trigger: "Moderno: Tecnologías de hoy",
    content:
      "Usar tecnologías que tengan buena documentación y un alcance amplio en internet, para asegurar que el proyecto sea fácil de mantener y escalar a largo plazo.",
  },
  {
    value: "Creativo",
    trigger: "Creativo: Explorar fuera de lo común",
    content:
      "Buscar una ídea que haga la diferencia entre mis aplicaciones y la del resto del mercado",
  },
  {
    value: "Eficiente",
    trigger: "Eficiente: Útil y no desechable",
    content:
      "Demostrarle al usuario que el producto que tiene en sus manos le permitirá optimizar sus recursos, tales como tiempo, dinero y personal",
  },
]

export function Focus() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Enfoques</CardTitle>
        <CardDescription>
          Enfoques para mis desarrollos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["plans"]}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
