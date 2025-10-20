import { useTranslation } from "react-i18next";
import { technologyIcons } from "../../data/icons";

type Tecnologia = {
    nombre: string;
    icono: React.ReactNode;
};

type Categoria = {
    titulo: string;
    tecnologias: Tecnologia[];
};

const tecnologiasPorCategoria: Categoria[] = [
    {
        titulo: "technologies.fronted",
        tecnologias: [
            { nombre: "HTML", icono: technologyIcons.find(t => t.nombre === "HTML")?.icono! },
            { nombre: "CSS", icono: technologyIcons.find(t => t.nombre === "CSS3")?.icono! },
            { nombre: "JavaScript", icono: technologyIcons.find(t => t.nombre === "JavaScript")?.icono! },
            { nombre: "React", icono: technologyIcons.find(t => t.nombre === "React")?.icono! },
        ]
    },
    {
        titulo: "technologies.backend",
        tecnologias: [
            { nombre: "C#", icono: technologyIcons.find(t => t.nombre === "C#")?.icono! },
            { nombre: ".NET", icono: technologyIcons.find(t => t.nombre === ".NET")?.icono! },
            { nombre: "Node", icono: technologyIcons.find(t => t.nombre === "Node.js")?.icono! },
            { nombre: "Python", icono: technologyIcons.find(t => t.nombre === "Python")?.icono! },
        ]
    },
    {
        titulo: "technologies.tools",
        tecnologias: [
            { nombre: "Git", icono: technologyIcons.find(t => t.nombre === "Git")?.icono! },
            { nombre: "GitHub", icono: technologyIcons.find(t => t.nombre === "GitHub")?.icono! },
            { nombre: "SQL", icono: technologyIcons.find(t => t.nombre === "SQL")?.icono! },
            { nombre: "NoSQL", icono: technologyIcons.find(t => t.nombre === "MongoDB")?.icono! },
            { nombre: "Postman", icono: technologyIcons.find(t => t.nombre === "Postman")?.icono! },
        ]
    },
    {
        titulo: "technologies.others",
        tecnologias: [
            { nombre: "Docker", icono: technologyIcons.find(t => t.nombre === "Docker")?.icono! },
            { nombre: "TypeScript", icono: technologyIcons.find(t => t.nombre === "TypeScript")?.icono! },
            { nombre: "Linux", icono: technologyIcons.find(t => t.nombre === "Linux")?.icono! },
        ]
    }
];



function Technology() {
    const { t } = useTranslation();
    return (
        <>
            <section className="dark:text-white dark:bg-black min-h-screen flex items-center justify-center flex-col px-4" id="technologies">
                <h2 className="w-full mb-4 text-4xl sm:text-3xl md:text-4xl lg:text-5xl px-4 text-center">{t("technologies.title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {tecnologiasPorCategoria.map((categoria, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-4 mx-4 my-6 p-4  rounded-lg border-1  border-gray-500  ">
                            <h3 className="flex align-center text-2xl py-4.5">{t(categoria.titulo)}</h3>
                            <div className="flex align-center justify-center gap-4 flex-wrap">
                                {categoria.tecnologias.map((tec, j) => (
                                    <div className="flex flex-col items-center w-20 gap-4" key={j}>
                                        <div className=" w-16 h-16 flex items-center justify-center">{tec.icono}</div>
                                        <span className="text-center text-sm">{tec.nombre}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
} export default Technology;