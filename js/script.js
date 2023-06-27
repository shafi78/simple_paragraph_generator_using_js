const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sed exercitationem amet ratione beatae provident minima nam facere quaerat aliquam ab hic fugit labore aspernatur rem, repellat eaque obcaecati suscipit. Veritatis a, iure itaque, dicta et id nihil, eos tenetur at aspernatur ullam deleniti voluptatibus tempore nisi consequatur nostrum ut corporis molestias consequuntur? Modi ratione mollitia odio ipsa similique. Dolorum, facilis hic? Quia dignissimos ipsa blanditiis, a unde harum saepe rem minus cum aliquid nihil repudiandae possimus, consequuntur sed corrupti vel alias pariatur debitis commodi impedit omnis ipsam aperiam. Blanditiis perspiciatis ipsam maxime? Saepe delectus quia maxime qui doloremque nemo ducimus eius quibusdam`,

    `animi enim. Eius unde eligendi ratione libero ullam ipsum delectus odit molestias earum ea? Dignissimos similique beatae harum tempora ratione excepturi, omnis asperiores rerum adipisci atque libero soluta sit repellat culpa, est inventore quidem non rem suscipit incidunt, tempore natus laboriosam? Sequi illo saepe dolor accusantium nulla officia ullam iste dolorem qui, ratione adipisci, beatae aliquid aut minus tenetur nobis nostrum officiis optio perferendis porro explicabo obcaecati voluptates laborum. Sit assumenda vero cum a sunt eveniet, corporis nulla quidem velit earum maxime saepe? Modi amet expedita molestias id consequatur magnam in repellendus illum velit dolores cum debitis est accusamus reiciendis libero itaque, maiores distinctio, ad`,
    
    ` dignissimos a! Architecto aperiam qui a blanditiis adipisci suscipit, at reiciendis molestias quae cum facere in animi perferendis culpa fugiat officiis aliquam quasi, quas modi totam dolore recusandae sequi. Molestias sunt inventore ut tenetur harum? Pariatur fugiat debitis beatae optio aspernatur, velit doloribus hic quo molestiae, architecto provident sunt iure quas sit vel minus aliquid obcaecati deserunt veritatis ratione magnam quos ex. Ullam laboriosam alias voluptatem aliquam nobis excepturi? Error, sit soluta quisquam, voluptates fuga modi voluptatem dolores dicta amet, excepturi aut. Quasi eius, totam amet mollitia quo, rem optio vero eum unde debitis voluptate dolorum modi officia ad fugiat inventore laborum! Eius sint aliquid repudiandae`,
    
    ` pariatur vero totam id, facere qui consectetur sapiente distinctio blanditiis voluptates! Est dignissimos aspernatur harum molestiae explicabo necessitatibus veniam in voluptatibus? Deserunt pariatur ducimus asperiores laborum aut, placeat quasi id molestias necessitatibus sint? Nulla eos eaque velit fugit id quos, deserunt facere nobis, consequuntur officiis temporibus error maiores commodi. Omnis, veritatis, numquam autem delectus provident est ab magni nisi error possimus corporis accusantium similique? Officiis reiciendis vel illo aspernatur dolore beatae animi veritatis velit quod, exercitationem, suscipit aliquam a voluptatem nulla quasi? Quod fugiat delectus cum repellat libero quisquam laboriosam voluptas, minus esse architecto reiciendis eum`,
    
    ` rem magnam perspiciatis, inventore doloremque, asperiores quibusdam ea sed beatae saepe. Pariatur praesentium itaque doloribus non quisquam, voluptatibus natus animi inventore voluptatum amet laudantium labore autem ducimus! Nostrum cupiditate veritatis excepturi hic ipsam eius ut at voluptatum eveniet eligendi rem sunt ea, soluta nobis, aspernatur repellat modi! Maiores aliquam enim eos rerum omnis optio, repellat quaerat iste laudantium magnam obcaecati accusantium debitis soluta dicta eaque in, dolor sunt suscipit numquam exercitationem deleniti corporis nesciunt? Veniam inventore facilis quam odio, sequi porro voluptatibus voluptas eligendi magnam asperiores doloribus expedita necessitatibus laboriosam!`,
    
    ` pariatur vero totam id, facere qui consectetur sapiente distinctio blanditiis voluptates! Est dignissimos aspernatur harum molestiae explicabo necessitatibus veniam in voluptatibus? Deserunt pariatur ducimus asperiores laborum aut, placeat quasi id molestias necessitatibus sint? Nulla eos eaque velit fugit id quos, deserunt facere nobis, consequuntur officiis temporibus error maiores commodi. Omnis, veritatis, numquam autem delectus provident est ab magni nisi error possimus corporis accusantium similique? Officiis reiciendis vel illo aspernatur dolore beatae animi veritatis velit quod, exercitationem, suscipit aliquam a voluptatem nulla quasi? Quod fugiat delectus cum repellat libero quisquam laboriosam voluptas, minus esse architecto reiciendis eum`,
    
    `animi enim. Eius unde eligendi ratione libero ullam ipsum delectus odit molestias earum ea? Dignissimos similique beatae harum tempora ratione excepturi, omnis asperiores rerum adipisci atque libero soluta sit repellat culpa, est inventore quidem non rem suscipit incidunt, tempore natus laboriosam? Sequi illo saepe dolor accusantium nulla officia ullam iste dolorem qui, ratione adipisci, beatae aliquid aut minus tenetur nobis nostrum officiis optio perferendis porro explicabo obcaecati voluptates laborum. Sit assumenda vero cum a sunt eveniet, corporis nulla quidem velit earum maxime saepe? Modi amet expedita molestias id consequatur magnam in repellendus illum velit dolores cum debitis est accusamus reiciendis libero itaque, maiores distinctio, ad`
];

function shuffle(array){
    let currentIndex = array.length,
    randomIndex ;

    while (currentIndex != 0)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex-- ;

        [array[currentIndex],array[randomIndex]] = [
            array[randomIndex],array[currentIndex]
        ];
    }
    return array ;
}

console.log(text)

const item = document.querySelector("#items")
const dataContainer = document.querySelector("#data")

const generate = () => {
    console.log(item.value)
    if (isNaN(item.value) || item.value < 0 || item.value > 7)
    {
        alert("Size should be between 0 and 7")
    }
    else {
        const localText = shuffle(text);
        const data = localText.slice(0,item.value) ;
        console.log(data)
        const paras = data.map(
            (d) => {
                document.getElementById("data").style.border = '1px solid black';
                return `<p>${d}</p><br/>`
            }
        )
        console.log(paras)
        console.log(paras.join(""))
        dataContainer.innerHTML = paras.join("");

    }
}