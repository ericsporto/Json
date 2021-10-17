const objs = [
    {
        "nome": "Eric",
        "idade": 39,
        "hobbies": ["música", "musculação", "programação"],
        "esta_trabalhando": true,
        "sabe_programar": {
            "python": "sim",
            "javaScript": "sim",
            "html e css": "sim"
        }
    },
    {
        "nome": "Val",
        "idade": 37,
        "hobbies": ["aulas", "roça"],
        "esta_trabalhando": false,
        "sabe_programar": {
            "python": null,
            "javaScript": "não",
            "html e css": "não"
        }
    }
    
]
console.log(objs)

// JSON
// Converter objeto para json
const jsonData = JSON.stringify(objs)
console.log(jsonData)

//Converter json para objeto
const objData = JSON.parse(jsonData)
console.log(objData)

