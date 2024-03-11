import React from 'react'
import { Image, Link } from "@nextui-org/react";

const RequirmentsPage = () => {
    return (
        <main className="max-w-2xl mx-auto px-4 my-6 lg:px-0">
            <section className="flex flex-col space-y-4">
                <div className="space-y-2">
                    <h1 className="text-lg font-semibold lg:text-xl">Архитектура и технологии</h1>
                    <Image
                    alt="NextUI hero Image"
                    src="https://cdn.discordapp.com/attachments/1073897662149054547/1216390912327028736/ziyou_ren_A_3D_image_of_a_20-year-old_Asian_male_smiling_charac_cce4f59f-6aab-417e-ad7d-81fd57b1ff6e.png?ex=66003750&is=65edc250&hm=28bd361df93a9717ee6dcb80b1986ce4120d9e0e688124881d5ac8bf7b600906&"
                    className="w-full h-80 object-cover"
                />
                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Архитектура системы</h3>
                        <h3 className="text-base font-medium">Фронтенд</h3>
                        <p className="text-base lg:text-sm">Использование Next.js для разработки серверно-отрисованных React приложений позволит создать быстродействующий и оптимизированный интерфейс пользователя</p>
                        <p className="text-base lg:text-sm">NextUI будет использоваться для обеспечения современного и удобного пользовательского интерфейса с использованием готовых компонентов</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Бэкенд</h3>
                        <p className="text-base lg:text-sm">Node.js будет основой для серверной части, что позволит создать эффективный и масштабируемый бэкенд</p>
                        <p className="text-base lg:text-sm">Python в сочетании с библиотекой Telethon будет использоваться для разработки сервиса парсинга данных из Telegram. Python также может быть использован для реализации дополнительной логики обработки данных, если это будет необходимо</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">База данных</h3>
                        <p className="text-base lg:text-sm">Выбор между MongoDB и PostgreSQL будет зависеть от конкретных требований к структуре данных и предпочтений в работе с базой данных. MongoDB — это NoSQL база данных, которая хорошо подходит для хранения документо-ориентированных или полуструктурированных данных. PostgreSQL — мощная реляционная СУБД, которая лучше подходит для сложных запросов и работы со структурированными данными</p>
                    </div>

                    <div className="flex justify-between">
                        <Link isBlock showAnchorIcon href="/requirments" color="secondary" size="sm">
                        Функциональные требования
                        </Link>

                        <Link isBlock showAnchorIcon href="/technology/stack" color="secondary" size="sm">
                        Технологический стек
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RequirmentsPage