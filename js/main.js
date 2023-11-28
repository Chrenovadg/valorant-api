
const obtenerAgente = async () => {
        const resp = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
        const dataApi = await resp.json()

        const { data } = dataApi
        console.log(data[1])
        console.log(data[1].abilities[0].description)
        console.log(data[1].abilities[0].displayIcon)
        console.log(data[1].abilities[0].displayName)
        console.log(data[1].role.assetPath)
        console.log(data[1].role.description)
        console.log(data[1].role.displayIcon)
        console.log(data[1].role.displayName)
        /* console.log(data[1].displayIconSmall)
        console.log(data[1].fullPortrait)
        console.log(data[1].fullPortraitV2) */

        let agentesCards = ''
        
        data.forEach( agente => {
            let agenteNombre = agente.displayName
            let agenteDesc = agente.description
            let agenteFace = agente.displayIconSmall
            let agenteFull = agente.fullPortrait
            let agenteRoleIcon = agente.role.displayIcon
            let agenteRoleName = agente.role.displayName
            /* let agenteImgPortrait = agente.bustPortrait */
            

            agentesCards += `
            <div class="card">
                <img src="${agenteFace}" alt="Imagen del agente" class="card-img">
                <div class="card-body">
                    <img src="${ agenteRoleIcon }" alt="Imagen del agente" class="card-img">
                    <p class="card-text"> ${agenteRoleName} </p>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${agenteNombre}</h5>
                    <p class="card-text">${agenteDesc}</p>
                </div>
            </div>
            `
        });

        document.querySelector('.container').innerHTML = agentesCards;
}

obtenerAgente()
