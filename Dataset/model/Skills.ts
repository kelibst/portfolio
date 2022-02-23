class Skill {
    languages: object;
    name: string
    constructor(languages: object, name: string) {
        this.languages = languages,
        this.name = name
    }
}

class Project {
    name: string
    image: string
    link: string
    liveLink: string
    stack: Array<string>
    
    constructor(name: string, image: string, link: string, liveLink: string, stack: Array<string>) {
        this.name = name,
        this.image = image,
        this.link = link,
        this.liveLink = liveLink
        this.stack = stack
    }
}

export {Skill, Project}