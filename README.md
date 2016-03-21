# UI Developer Technical Exercise

# Approach
I have used Angular to present the JSON object to the user. I used Karma with a Jasmine framework to test drive the controller and a couple of factories. One factory fetches the JSON object, the other alters the JSON to include the delay if one exists. This removes the need for any logic in the view or controller. I've added some very light styling with a css stylesheet. Further improvements to be made are listed later in this README.

# Installation
0. Clone the repo.
0. Install dependencies `$ npm install` and `$ bower install`

# Use
0. Serve the app, I recommend using http-server which can be installed with `$ npm install http-server -g`, and the launched with `http-server`
0. Visit `localhost:8080`

# Tests
0. Run `$ karma start karma.conf.js`

# Screenshot
![Imgur](http://i.imgur.com/qbT0kYI.png)

# Improvements
0. Include graphics to represent the train and it's stations.
0. Add a time object to allow the train to move in real time depending on where it is on the track.
0. Have classes be dependent on the time to allow the font colours to change depending on the time object.



Using the supplied live departure board data (ldb.json), create a web page that faithfully reproduces the mock-up (see mockup.png).

We expect you to test drive your code, ensuring data integrity and consistent mark-up generation.

###ldb.json

```javascript
{
    "journey": {
        "origin": "London Euston",
        "destination": "Manchester Piccadilly",
        "scheduled": "14:00"
    },
    "callingPoints": [
        {
            "station": "London Euston",
            "scheduled": "14:00",
            "expected": "14:00",
            "actual": "14:00",
            "platform": ""
        },
        {
            "station": "Stoke-On-Trent",
            "scheduled": "15:25",
            "expected": "15:35",
            "actual": "15:35",
            "platform": "2"
        },
        {
            "station": "Macclesfield",
            "scheduled": "15:41",
            "expected": "15:50",
            "platform": "1"
        },
        {
            "station": "Stockport",
            "scheduled": "15:56",
            "expected": "16:03",
            "platform": "3"
        },
        {
            "station": "Manchester Piccadilly",
            "scheduled": "16:07",
            "expected": "16:11",
            "platform": "7"
        }
    ]
}
```

###mockup.png

![mockup.png](https://bytebucket.org/ttl-engineering/recruitment_test_webdev/raw/d48db490ba18aeff1ce257aa6103d1cb72dcd98b/mockup.png?token=a4d1987725e9dd4ffea165d06559cc6a1c4715a6)
