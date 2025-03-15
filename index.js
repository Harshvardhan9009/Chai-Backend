require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "Harshvardhan9009",
    "id": 174765062,
    "node_id": "U_kgDOCmq0Bg",
    "avatar_url": "https://avatars.githubusercontent.com/u/174765062?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Harshvardhan9009",
    "html_url": "https://github.com/Harshvardhan9009",
    "followers_url": "https://api.github.com/users/Harshvardhan9009/followers",
    "following_url": "https://api.github.com/users/Harshvardhan9009/following{/other_user}",
    "gists_url": "https://api.github.com/users/Harshvardhan9009/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Harshvardhan9009/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Harshvardhan9009/subscriptions",
    "organizations_url": "https://api.github.com/users/Harshvardhan9009/orgs",
    "repos_url": "https://api.github.com/users/Harshvardhan9009/repos",
    "events_url": "https://api.github.com/users/Harshvardhan9009/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Harshvardhan9009/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Harshvardhan  Salunkhe",
    "company": null,
    "blog": "https://github.com/Harshvardhan9009/Harshvardhan9009-main",
    "location": "Pune,India",
    "email": null,
    "hireable": null,
    "bio": "Experienced Full Stack Web Developer and Dedicated Contributor to Open Source Projects.",
    "twitter_username": "Harshsalunkhe90",
    "public_repos": 6,
    "public_gists": 0,
    "followers": 1,
    "following": 11,
    "created_at": "2024-07-05T04:00:13Z",
    "updated_at": "2025-03-13T14:08:20Z"
  

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('harshvardhandotcom')
})

app.get('/login',(req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req,  res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 


