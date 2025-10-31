import { Card,CardContent } from "./card"
import Image from "next/image"

export default function MyHero() {
    return (
        <Card>
            <CardContent className={"flex flex-col "}>
                <Image src={"https://cataas.com/cat?width=600&height=600"} width={460} height={300} alt="cat" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda doloribus ipsum neque nesciunt fugit ut perspiciatis iure quibusdam, repudiandae enim commodi distinctio, dolorem nemo voluptatibus corporis ducimus, hic maiores explicabo? Reprehenderit iusto velit eligendi reiciendis doloremque labore alias excepturi ut minima! Explicabo esse enim ratione obcaecati accusamus, quam est corrupti. Quasi reprehenderit sit impedit. Nostrum sit est odio, voluptas dolore reiciendis minima nam accusantium amet placeat deserunt facere molestiae veniam obcaecati, excepturi vel quia explicabo incidunt fugiat ad! Accusamus, a.</p>
            </CardContent>
        </Card>
    )
}