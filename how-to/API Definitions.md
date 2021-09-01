#API Definitions
by Justin Hu, 2021/08/31

---
Format:
- Name
- URL
- HTTP Method:  GET/POST/PUT/DELETE
- Params:
- Return:
---

## Political Association

1. Get Summary Info
- URL: /api/v1/pa/summary
- Method: Get
- Params:  ?company='Champion'
- Return  
  ```
  {   
      "rep" : 23750,    
      "dem": 1744
  }
  ```

2. Get Detailed Info
- URL: /api/v1/pa/detailed
- Method: Get
- Params:  ?company='Champion'
- Return
```
{
   "data": [{
            "year": 2016,
            "rep": 23750,
            "dem": 1744,
            "indi": 1
        },
            {
            "year": 2018,
            "rep": 63227,
            "dem": 917,
            "indi": 0.95
        },
            {
             "year": 2020,
            "rep": 254474,
            "dem": 19394,
            "indi": 0.96
        }
    ],
    "citation": [{
        "arthor": "none",
        "title": "J Crew Group",
        "publihser": "OpenSecrets",
        "pages": "34",
        "date": "none",
        "url": "https://www.opensecrets.org/orgs/h-m-co/summary?id=D000042667"
    }]
}
```

Notes: 
1. ciatation may contains multiple items
