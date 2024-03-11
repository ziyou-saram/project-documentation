import React from 'react'
import { Image, Link } from "@nextui-org/react";

const RequirmentsPage = () => {
    return (
        <main className="max-w-2xl mx-auto px-4 my-6 lg:px-0">
            <section className="flex flex-col space-y-4">
                <Image
                    alt="NextUI hero Image"
                    src="https://cdn.discordapp.com/attachments/1073897662149054547/1216389684104790137/ziyou_ren_A_3D_image_of_a_20-year-old_Asian_male_character_robo_0ffc39c1-0cee-45af-abda-c6e5ef31e53f.png?ex=6600362c&is=65edc12c&hm=30b607c033df09ece6ccd6d590074804201a62117395701444015d0b31f4ae29&"
                    className="w-full h-80 object-cover"
                />
                <div className="space-y-2">
                    <h1 className="text-lg font-semibold lg:text-xl">Функциональные требования</h1>
                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Парсинг данных</h3>
                        <p className="text-base lg:text-sm">Разработка механизма для парсинга данных из предварительно определённого списка Telegram каналов и других источников</p>
                        <p className="text-base lg:text-sm">Сбор метаданных (просмотры, комментарии, лайки) для последующей сортировки и анализа</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Обработка данных</h3>
                        <p className="text-base lg:text-sm">Сортировка собранных данных по количеству просмотров, комментариев и лайков</p>
                        <p className="text-base lg:text-sm">Автоматическая категоризация и тегирование данных на основе собранной информации</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Публикация данных</h3>
                        <p className="text-base lg:text-sm">Разработка функционала для автоматической публикации обработанных новостей в телеграм-канале</p>
                    </div>

                    <div className="space-y-2 py-2">
                        <h3 className="text-base font-medium">Видеоконтент</h3>
                        <p className="text-base lg:text-sm">Предусмотреть механизм хранения и каталогизации новостных видео и репортажей в базе данных для последующего доступа и скачивания пользователями</p>
                    </div>

                    <div className="flex justify-between">
                        <Link isBlock showAnchorIcon href="/" color="secondary" size="sm">
                            Введение
                        </Link>

                        <Link isBlock showAnchorIcon href="/technology" color="secondary" size="sm">
                        Архитектура и технологии
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RequirmentsPage