import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

const StackPage = () => {
    return (
        <main className="max-w-2xl mx-auto px-4 my-6 lg:px-0">
            <section className="flex flex-col space-y-4">
                <div className="space-y-2">
                    <h1 className="text-lg font-semibold lg:text-xl">Технологический стек</h1>
                    <Image
                    alt="NextUI hero Image"
                    src="https://cdn.discordapp.com/attachments/1073897662149054547/1216391866145046558/ziyou_ren_A_3D_image_of_a_20-year-old_Asian_male_character_robo_e6ad3927-8a7f-427d-95fd-8e9ddd9b5c55.png?ex=66003834&is=65edc334&hm=96afbbf3e568ec1ae59995fd29136a945b3c36af80d8e8c69fdbed0831ed3d12&"
                    className="w-full h-80 object-cover"
                />
                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Python</h3>
                        <p className="text-base lg:text-sm">Используется для написания скриптов парсинга и может быть использован для обработки данных</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Telethon</h3>
                        <p className="text-base lg:text-sm">Библиотека для работы с Telegram API, позволяющая осуществлять сбор данных из Telegram каналов</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Next.js</h3>
                        <p className="text-base lg:text-sm">Фреймворк на основе React для построения пользовательского интерфейса с серверным рендерингом</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">NextUI</h3>
                        <p className="text-base lg:text-sm">UI библиотека для Next.js, облегчающая создание визуально привлекательных интерфейсов</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Node.js</h3>
                        <p className="text-base lg:text-sm">Среда выполнения JavaScript на сервере для создания бэкенд логики</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">MongoDB/PostgreSQL</h3>
                        <p className="text-base lg:text-sm">Выбор базы данных будет зависеть от требований к обработке и хранению данных. MongoDB может быть предпочтительнее для гибкой структуры данных, в то время как PostgreSQL может быть выбран для комплексной работы с реляционными данными и обеспечения целостности данных</p>
                    </div>
                </div>

                <div className="space-y-2">
                <Image
                    alt="NextUI hero Image"
                    src="https://cdn.discordapp.com/attachments/1073897662149054547/1216392348586737784/ziyou_ren_A_3D_image_of_a_20-year-old_Asian_male_character_robo_e1002759-ced8-484d-9287-a2866760f445.png?ex=660038a7&is=65edc3a7&hm=0d45c72dd21a93f97012bb9b7c5e556a36409f277c6e0573cbc9cb2936a6951a&"
                    className="w-full h-80 object-cover"
                />
                    <h1 className="text-lg font-semibold lg:text-xl">Взаимодействие компонентов</h1>
                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Фронтенд (Next.js/NextUI)</h3>
                        <p className="text-base lg:text-sm">будет взаимодействовать с бэкендом через REST API или GraphQL, обеспечивая динамическое обновление пользовательского интерфейса без необходимости перезагрузки страницы</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Бэкенд (Node.js/Python)</h3>
                        <p className="text-base lg:text-sm">будет отвечать за обработку запросов от фронтенда, выполнение логики парсинга данных (Telethon/Python), обработку и хранение данных в базе данных (MongoDB/PostgreSQL)</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">База данных (MongoDB/PostgreSQL)</h3>
                        <p className="text-base lg:text-sm">будет хранить все необходимые данные, обеспечивая их быстрый доступ и обновление со стороны бэкенда</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <p className="text-base lg:text-sm">Эта архитектура и технологический стек обеспечат гибкую, масштабируемую и эффективную систему для автоматизации процесса создания, поиска и публикации новостных данных</p>
                    </div>

                    <div className="flex justify-between">
                        <Link isBlock showAnchorIcon href="/technology" color="secondary" size="sm">
                        Архитектура и технологии
                        </Link>

                        {/* <Link isBlock showAnchorIcon href="/technology/stack" color="secondary" size="sm">
                        Технологический стек
                        </Link> */}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default StackPage