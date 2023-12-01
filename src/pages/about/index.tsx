export default function About(){

    const person = [
        {
            name: "Nelton Menata",
            profession: "Programador",
            age: "23"
        },
        {
            name: "Abel Cassinda",
            profession: "Programador",
            age: "25"
        },
        {
            name: "Vanilson Adão",
            profession: "Design",
            age: "29"
        },
        {
            name: "Adilson Antonio",
            profession: "Web Developer",
            age: "23"
        },
        {
            name: "Jonas Ferreira",
            profession: "Marketing",
            age: "23"
        },
        {
            name: "Vasco Vimbau",
            profession: "Musico",
            age: "24"
        },
        {
            name: "Isaias Malusco",
            profession: "Pedreiro",
            age: "35"
        },
        
    ]

    return (
        <div>
            <div>
                <h1>
                    About App
                </h1>
                <table className="text-center">
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Profissão</td>
                            <td>Idade</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            person.map((data, index)=>{
                                return (<tr key={index} className={`${index % 2 == 0 ? "bg-zinc-700":"bg-zinc-900"}`}>
                                    <td className="p-2">{data.name}</td>
                                    <td className="p-2">{data.profession}</td>
                                    <td className="p-2">{data.age}</td>
                                </tr>)
                            })
                      }
                        </tbody>
                </table>
            </div>
        </div>
    );
}