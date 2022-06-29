import React from "react";
import { images } from "../../constants";

import './MeetTheCeo.scss'

const MeetTheCeo = () => {
  return (
    <div className="makosail__ceo section__padding">
      <div className="makosail__ceo-image">
        <img src={images.profile} alt="makosail ceo" />
      </div>
      <div className="makosail__ceo-content">
        <h1 className="gradient__text">
          Founder's Message
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem possimus perferendis cupiditate dolor nam laboriosam harum perspiciatis placeat iste nobis. Commodi molestias dolore enim doloribus magni dicta maxime incidunt illo?
        Porro officiis rem voluptatem aliquid saepe, aut dolorum repellat, corporis eaque, voluptates quam. Voluptatem quidem, consequatur tempora velit laudantium possimus maxime ducimus ut exercitationem magnam, at atque autem, ea ratione.
        Explicabo aspernatur neque maiores ea! Recusandae ea, ratione alias quis incidunt vel eos omnis beatae nisi fugiat animi cum debitis blanditiis consequatur numquam vero repudiandae distinctio id nostrum modi aliquam.
        Consectetur blanditiis quam cum necessitatibus nulla quidem, voluptatem excepturi illo hic, alias itaque obcaecati, cupiditate odit deserunt. Placeat, similique quae, ex qui voluptas cumque sit deserunt, dolor soluta dolore voluptatem.
        Quo molestiae consequuntur tempore! Repellendus id quisquam commodi enim modi quibusdam aut ipsa et ducimus eum deleniti nesciunt nostrum aliquid sunt numquam, iure eveniet velit voluptatibus dolores? Veritatis, nostrum voluptatem!
        Saepe voluptas, repellat optio, impedit tenetur vitae laboriosam adipisci inventore possimus tempora quasi voluptatibus magni, natus fugiat atque commodi recusandae cumque dignissimos esse eius laudantium ipsum! Enim odio itaque eaque.
        Aut dolor velit minus, consequuntur maxime nostrum optio iusto numquam quam dicta porro qui quidem, eum pariatur odio quod id ipsa sint tempore blanditiis adipisci officia eos minima. Ex, veritatis.
        Eos, aperiam ullam numquam optio dicta, non culpa nisi illo esse fuga vel est quo in. Sequi doloremque reprehenderit distinctio temporibus laborum ex explicabo, nihil modi non libero adipisci ipsa!
        Quod temporibus sed unde cumque. Fugiat optio neque numquam minus eligendi animi corporis recusandae voluptate omnis, consequuntur alias deleniti assumenda hic quibusdam amet! Natus, delectus beatae autem quis repudiandae optio.
        Voluptatem commodi dolorum animi earum obcaecati neque saepe. Rerum quidem assumenda soluta, cupiditate aspernatur iusto dolores, aliquid alias dolorum ipsam necessitatibus quibusdam hic corporis voluptatibus nam natus. Esse, saepe dolorum.</p>

        <h4 className="gradient__text">John Doe Abraham</h4>
        <h4 className="gradient__text">Founder</h4>
      </div>
    </div>
  )
}

export default MeetTheCeo