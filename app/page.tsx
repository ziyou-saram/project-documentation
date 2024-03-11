import { Image, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 my-6 lg:px-0">
      <section className="flex flex-col space-y-4">
        <Image
          alt="NextUI hero Image"
          src="https://cdn.discordapp.com/attachments/1073897662149054547/1206250684262121492/ziyou_ren_A_3D_image_of_a_20-year-old_Asian_male_character_robo_90d7910c-f7b9-4eec-be47-08bc8824c86e.png?ex=65f702fe&is=65e48dfe&hm=b5cf75569b67786b5c2c7e7055ce1b832c6ef3c44432d486aed9a1aa027e7799&"
          className="w-full h-80 object-cover"
        />
        <div className="space-y-2">
          <h1 className="text-lg font-semibold lg:text-xl">Введение</h1>
          <div className="space-y-2 py-2">
            <h3 className="text-base font-medium">Цель документа</h3>
            <p className="text-base lg:text-sm">Описание цели и общих требований к проекту создания веб-платформы для парсинга новостных данных с Telegram каналов, аккаунтов Instagram, новостных веб-порталов, их обработки и публикации на аккаунте заказчика. Включение возможности наложения плашек на видеоконтент.</p>
          </div>

          <div className="space-y-2 py-2">
            <h3 className="text-base font-medium">Описание проекта</h3>
            <p className="text-base lg:text-sm">Проект представляет собой разработку веб-платформы, предназначенной для автоматизации процесса сбора новостных данных из различных источников, включая Telegram каналы, Instagram аккаунты и новостные веб-порталы. Платформа будет обрабатывать собранные данные и публиковать их на аккаунте заказчика. В дальнейшем планируется добавление функционала наложения плашек на видеоконтент для показа на ТВ.</p>
          </div>

          <div className="flex justify-end">
            {/* <Link isBlock showAnchorIcon href="#" color="secondary" size="sm">
              Secondary
            </Link> */}

            <Link isBlock showAnchorIcon href="/requirments" color="secondary" size="sm">
            Функциональные требования
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
