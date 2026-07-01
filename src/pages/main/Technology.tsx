import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { technologyIcons } from "../../data/icons";

function Technology() {
    const { t } = useTranslation();

    const tecnologiasPorCategoria = useMemo(() => {
        const icon = Object.fromEntries(technologyIcons.map(t => [t.nombre, t.icono]));
        return [
            {
                titulo: "technologies.fronted",
                tecnologias: [
                    { nombre: "HTML5", icono: icon["HTML5"] },
                    { nombre: "CSS", icono: icon["CSS3"] },
                    { nombre: "JavaScript", icono: icon["JavaScript"] },
                    { nombre: "React", icono: icon["React"] },
                    { nombre: "Angular", icono: icon["Angular"] },
                ]
            },
            {
                titulo: "technologies.backend",
                tecnologias: [
                    { nombre: "C#", icono: icon["C#"] },
                    { nombre: ".NET", icono: icon[".NET"] },
                    { nombre: "Node", icono: icon["Node.js"] },
                    { nombre: "Python", icono: icon["Python"] },
                    { nombre: "NestJS", icono: icon["NestJS"] },
                ]
            },
            {
                titulo: "technologies.tools",
                tecnologias: [
                    { nombre: "Git", icono: icon["Git"] },
                    { nombre: "GitHub", icono: icon["GitHub"] },
                    { nombre: "SQL", icono: icon["SQL"] },
                    { nombre: "NoSQL", icono: icon["MongoDB"] },
                    { nombre: "Postman", icono: icon["Postman"] },
                ]
            },
            {
                titulo: "technologies.others",
                tecnologias: [
                    { nombre: "Docker", icono: icon["Docker"] },
                    { nombre: "TypeScript", icono: icon["TypeScript"] },
                    { nombre: "Linux", icono: icon["Linux"] },
                ]
            }
        ];
    }, []);

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
    );
}

export default Technology;
