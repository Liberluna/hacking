export type Id =string
export type Question ={
    title: string,
    id: Id,
    level: number,
    url: string,
    releases: Id[],
}
export type Questions = Question[]

const questions: Questions =[
    {
        "title":"First question",
        "id": "1",
        "level": 0,
        "url":"https://example.com",
        "releases":[

        ]
    }
]
export default questions.reverse()
