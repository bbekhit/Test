// // {
// //       "execution_id": "30433faa-8ef0-40bd-bda9-596c2975cfcd",
// //       "attributes": "{\"gradedDuc\": \"\", \"count\": \"10\", \"entity_type\": \"MOVIE\", \"use_case\": \"PLAY_MOVIE\", \"entity\": \"Baby Boss\", \"template\": \"regarder {MOVIE}\", \"expectedUtsCanonicalId\": \"umc.cmc.3usaay2aleovo8pfsjk03pway\"}",
// //       "date": "20200622",
// //       "date_hour": "2020062221",
// //       "date_hour_minute": "202006222105",
// //       "exec_system": "{\"hostname\":\"e2e-test-runner.web.web.415.7c7g331fk6vnr\",\"type\":\"Linux\",\"platform\":\"linux\",\"arch\":\"x64\",\"release\":\"4.19.61-110.el6pie\",\"uptime\":16761037,\"loadavg\":[8.3984375,6.7275390625,6.44140625],\"totalmem\":540681703424,\"freemem\":157407756288,\"cpus\":40,\"cpu\":[\"Intel(R) Xeon(R) CPU E5-2640 v4 @ 2.40GHz\"]}",
// //       "executed_at": "2020-06-22T21:05:03.952Z",
// //       "execution_batch_id": "78daa550-b4ca-11ea-8f00-43bd3fbfc8b8",
// //       "grades": {
// //           "adam_id": {
// //               "data": {
// //                   "runtime": "no expected Adam ID found"
// //               }
// //           },
// //           "app_extension_id": {
// //               "data": {
// //                   "runtime": "no expected launch or extension id found"
// //               }
// //           },
// //           "domain": {
// //               "success": true,
// //               "data": {
// //                   "runtime": "media",
// //                   "graded": "media",
// //                   "extracted": {
// //                       "actualMldcResults": [
// //                           {
// //                               "input": "Regarder Baby Boss",
// //                               "output": "media",
// //                               "javaType": "com.apple.siri.ace.inspector.model.result.MldcResult"
// //                           }
// //                       ],
// //                       "test": {
// //                           "domain": "media",
// //                           "expectedDomain": "media",
// //                           "actualDomain": "media"
// //                       },
// //                       "domain": "media"
// //                   }
// //               }
// //           },
// //           "duc": {
// //               "success": false,
// //               "data": {
// //                   "runtime": [
// //                       "media#disambiguateResultsPrologue",
// //                       null,
// //                       "media#disambiguateResultsPrologue"
// //                   ],
// //                   "graded": "",
// //                   "extracted": {
// //                       "transcriptOrderedOutput": [
// //                           {
// //                               "aceID": "f6ca25ef-3b09-4c61-a4e7-8c6060756b75",
// //                               "utteranceCount": -1,
// //                               "className": "com.siri.ace.command.assistant.AddViews",
// //                               "content": "media#disambiguateResultsPrologue",
// //                               "textMessage": "Veuillez préciser votre choix. J’ai trouvé deux résultats :",
// //                               "spokenMessage": "Veuillez préciser votre choix. J’ai trouvé deux résultats :"
// //                           },
// //                           {
// //                               "aceID": "f6ca25ef-3b09-4c61-a4e7-8c6060756b75",
// //                               "utteranceCount": -1,
// //                               "className": "com.siri.ace.command.assistant.views.DisambiguationList",
// //                               "content": null,
// //                               "textMessage": null,
// //                               "spokenMessage": null
// //                           },
// //                           {
// //                               "aceID": "",
// //                               "utteranceCount": -1,
// //                               "className": "AddViewsDebugInfo-proto",
// //                               "content": "media#disambiguateResultsPrologue",
// //                               "textMessage": "Disambiguate",
// //                               "spokenMessage": ""
// //                           }
// //                       ],
// //                       "ducs": [
// //                           "media#disambiguateResultsPrologue",
// //                           null,
// //                           "media#disambiguateResultsPrologue"
// //                       ],
// //                       "textMessages": [
// //                           "Veuillez préciser votre choix. J’ai trouvé deux résultats :",
// //                           null,
// //                           "Disambiguate"
// //                       ],
// //                       "spokenMessages": [
// //                           "Veuillez préciser votre choix. J’ai trouvé deux résultats :",
// //                           null,
// //                           ""
// //                       ]
// //                   }
// //               }
// //           },
// //           "mlsp": {
// //               "data": {
// //                   "runtime": "no graded domain found"
// //               }
// //           },
// //           "predicates": {
// //               "success": false,
// //               "notApplicable": false,
// //               "data": {
// //                   "runtime": {
// //                       "passedPredicates": [
// //                           {
// //                               "tags": [
// //                                   "MODALITY",
// //                                   "SPEECH"
// //                               ],
// //                               "ducText": "",
// //                               "assertion": "size(//SpeechRecognized) = 1",
// //                               "assertionOnDebugData": false,
// //                               "javaType": "com.siri.tools.common.ace.predicate.XPathPredicate"
// //                           }
// //                       ],
// //                       "failedPredicates": [
// //                           {
// //                               "assertion": "contains(//FlowChainSummaryDebugInfo//SerializableLinkResultSummary[contains(linkName, \"PlayContentFlow\")]/isStop, \"true\") and (contains(//contentJson, \"umc.cmc.3usaay2aleovo8pfsjk03pway\") or (contains(//views//dialogIdentifier, \"media#noMediaSearchResults\") and contains(//contentJson, '\"query\":\"Baby Boss\"')))",
// //                               "assertionOnDebugData": false,
// //                               "javaType": "com.siri.tools.common.ace.predicate.XPathPredicate"
// //                           }
// //                       ]
// //                   },
// //                   "graded": null,
// //                   "extracted": null
// //               }
// //           },
// //           "speech": {
// //               "success": true,
// //               "score": 0,
// //               "data": {
// //                   "result": "Exact match"
// //               },
// //               "reference": "regarder Baby Boss"
// //           },
// //           "uts_id": {
// //               "success": true,
// //               "data": {
// //                   "runtime": [
// //                       {
// //                           "aceId": "760f96eb-232b-443a-8d0a-9ed1b3921ba1",
// //                           "usefulnessScore": 100,
// //                           "contentJson": {
// //                               "durationMs": 129,
// //                               "requestId": "$90e51022-3643-4d2f-a2e8-27256b91d990",
// //                               "userUtterance": "Regarder Baby Boss",
// //                               "searchResponses": [
// //                                   {
// //                                       "canonicalId": "umc.cmc.3usaay2aleovo8pfsjk03pway",
// //                                       "title": "Baby Boss",
// //                                       "type": "Movie",
// //                                       "rating": {
// //                                           "ratingSystem": "fr_cnc",
// //                                           "utsRating": "FR_CNC_TP",
// //                                           "mediaRating": "FR_CNC_TP",
// //                                           "displayValue": "Tout public"
// //                                       },
// //                                       "releaseDate": 1490745600000,
// //                                       "duration": 5820,
// //                                       "genre": [
// //                                           {
// //                                               "name": "Animation",
// //                                               "id": "umc.gnr.mov.animation",
// //                                               "url": "https://tv.apple.com/fr/genre/animation/umc.gnr.mov.animation"
// //                                           }
// //                                       ],
// //                                       "seasonNumber": null,
// //                                       "episodeNumber": null,
// //                                       "description": "C'est toujours un choc de voir ses parents rentrer à la maison avec un bébé dans les bras, surtout quand il porte une cravate ! Si Tim, sept ans, ne voit pas d'un très bon oeil ce bébé boss débarquer chez lui, il découvre qu'il a en réalité affaire à un espion et que lui seul peut l'aider à accomplir sa mission ultra secrète.",
// //                                       "images": {
// //                                           "coverArt": {
// //                                               "height": 3000,
// //                                               "width": 2000,
// //                                               "type": null,
// //                                               "bgColor": null,
// //                                               "textColor1": null,
// //                                               "textColor2": null,
// //                                               "textColor3": null,
// //                                               "textColor4": null,
// //                                               "url": "https://is1-ssl.mzstatic.com/image/thumb/Video127/v4/c1/17/aa/c117aa93-a826-1432-2c2f-8a428f010cd0/pr_source.lsr/{w}x{h}.{f}",
// //                                               "supportsLayeredImage": true,
// //                                               "hasAlpha": false,
// //                                               "format": "lcr"
// //                                           },
// //                                           "coverArt16X9": {
// //                                               "height": 964,
// //                                               "width": 1712,
// //                                               "type": null,
// //                                               "bgColor": null,
// //                                               "textColor1": null,
// //                                               "textColor2": null,
// //                                               "textColor3": null,
// //                                               "textColor4": null,
// //                                               "url": "https://is4-ssl.mzstatic.com/image/thumb/Video124/v4/f1/e3/3c/f1e33cd7-d241-0917-b9e9-121621234eac/1219155711-WW-AMP_SF.lsr/{w}x{h}.{f}",
// //                                               "supportsLayeredImage": true,
// //                                               "hasAlpha": false,
// //                                               "format": "lcr"
// //                                           },
// //                                           "headshot": null,
// //                                           "castInCharacter": null,
// //                                           "previewFrame": {
// //                                               "height": 2160,
// //                                               "width": 3840,
// //                                               "type": null,
// //                                               "bgColor": null,
// //                                               "textColor1": null,
// //                                               "textColor2": null,
// //                                               "textColor3": null,
// //                                               "textColor4": null,
// //                                               "url": "https://is4-ssl.mzstatic.com/image/thumb/zigAotNwTjT6701tKVOxtw/{w}x{h}.{f}",
// //                                               "supportsLayeredImage": false,
// //                                               "hasAlpha": false,
// //                                               "format": "jpg"
// //                                           },
// //                                           "logo": null,
// //                                           "fullScreenBackground": {
// //                                               "height": 2160,
// //                                               "width": 4320,
// //                                               "type": null,
// //                                               "bgColor": null,
// //                                               "textColor1": null,
// //                                               "textColor2": null,
// //                                               "textColor3": null,
// //                                               "textColor4": null,
// //                                               "url": "https://is5-ssl.mzstatic.com/image/thumb/Features117/v4/94/ef/ee/94efee87-bc3d-ea5c-9dae-755242fdcce5/temp..ptqltbhg.png/{w}x{h}sr.{f}",
// //                                               "supportsLayeredImage": false,
// //                                               "hasAlpha": false,
// //                                               "format": "jpg"
// //                                           },
// //                                           "contentLogo": null,
// //                                           "appIcon": null,
// //                                           "evodFeaturing": null
// //                                       },
// //                                       "fromUTS": true,
// //                                       "fromParsec": false
// //                                   },
// //                                   {
// //                                       "canonicalId": "umc.cmc.4plw402aj3ywr4h1ym3j9w66m",
// //                                       "title": "Baby Boss : les affaires reprennent",
// //                                       "type": "Show",
// //                                       "rating": {
// //                                           "ratingSystem": "fr_tv",
// //                                           "utsRating": "FR_TV_TP",
// //                                           "mediaRating": "FR_TV_TP",
// //                                           "displayValue": "Tout public"
// //                                       },
// //                                       "releaseDate": 1522972800000,
// //                                       "duration": null,
// //                                       "genre": [
// //                                           {
// //                                               "name": "Animation",
// //                                               "id": "umc.gnr.tv.animation",
// //                                               "url": "https://tv.apple.com/fr/genre/animation/umc.gnr.tv.animation"
// //                                           }
// //                                       ],
// //                                       "seasonNumber": null,
// //                                       "episodeNumber": null,
// //                                       "description": "Les affaires reprennent ! Avec un coup de main de son frère et de son complice, Tim, le Baby Boss essaie tant bien que mal de concilier sa vie de famille avec sa vie professionnelle au siège de Baby Corp.",
// //                                       "images": {
// //                                           "coverArt": {
// //                                               "height": 2000,
// //                                               "width": 2000,
// //                                               "type": null,
// //                                               "bgColor": null,
// //                                               "textColor1": null,
// //                                               "textColor2": null,
// //                                               "textColor3": null,
// //                                               "textColor4": null,
// //                                               "url": "https://is5-ssl.mzstatic.com/image/thumb/oZw9uKEEV9KjaTmC4uFAMw/{w}x{h}.{f}",
// //                                               "supportsLayeredImage": false,
// //                                               "hasAlpha": false,
// //                                               "format": "jpg"
// //                                           },
// //                                           "coverArt16X9": {
// //                                               "height": 1080,
// //                                               "width": 1920,
// //                                               "type": null,
// //                                               "bgColor": null,
// //                                               "textColor1": null,
// //                                               "textColor2": null,
// //                                               "textColor3": null,
// //                                               "textColor4": null,
// //                                               "url": "https://is4-ssl.mzstatic.com/image/thumb/S5a87dKvEh-GbHcyHCrPtg/{w}x{h}.{f}",
// //                                               "supportsLayeredImage": false,
// //                                               "hasAlpha": false,
// //                                               "format": "jpg"
// //                                           },
// //                                           "headshot": null,
// //                                           "castInCharacter": null,
// //                                           "previewFrame": {
// //                                               "height": 2160,
// //                                               "width": 3840,
// //                                               "type": null,
// //                                               "bgColor": null,
// //                                               "textColor1": null,
// //                                               "textColor2": null,
// //                                               "textColor3": null,
// //                                               "textColor4": null,
// //                                               "url": "https://is5-ssl.mzstatic.com/image/thumb/IVZqs0ip7AxE6dgWKOHLoA/{w}x{h}.{f}",
// //                                               "supportsLayeredImage": false,
// //                                               "hasAlpha": false,
// //                                               "format": "jpg"
// //                                           },
// //                                           "logo": null,
// //                                           "fullScreenBackground": null,
// //                                           "contentLogo": null,
// //                                           "appIcon": null,
// //                                           "evodFeaturing": null
// //                                       },
// //                                       "fromUTS": true,
// //                                       "fromParsec": false
// //                                   }
// //                               ],
// //                               "utsUrl": "https://uts-api-siri.itunes.apple.com/uts/v2/siri-personalized/search?utsk=cc0e83fca9429d87%3A%3A%3A%3A%3A%3A235656c069bb0efb&caller=siri-internal&sf=143442&v=35&pfm=iPhone&siriLocale=fr_FR&pageSize=50&pfa=AppleTV&locale=fr-FR&title=Baby+Boss&platform=29",
// //                               "utsResultsCount": 2,
// //                               "remoteDeviceUtsUrl": null,
// //                               "remoteDeviceUtsResultsCount": null,
// //                               "parsecUrl": null,
// //                               "parsecResultsCount": null,
// //                               "invocationCount": 1,
// //                               "storefrontId": "143442-3,29",
// //                               "intentUserGenerated": true,
// //                               "auxiliarySearch": false,
// //                               "eventType": "MediaQuery",
// //                               "eventVersion": 1.5
// //                           },
// //                           "eventVersion": 1.5,
// //                           "eventType": "MediaQuery",
// //                           "refId": "$90e51022-3643-4d2f-a2e8-27256b91d990",
// //                           "javaType": "com.siri.ace.command.assistant.EventLogMessageDebugInfo"
// //                       }
// //                   ],
// //                   "graded": "umc.cmc.3usaay2aleovo8pfsjk03pway",
// //                   "extracted": null
// //               }
// //           }
// //       },
// //       "input_id": null,
// //       "results": {
// //           "amp": {
// //               "fuseApiCalls": [],
// //               "fuseApiQueries": [],
// //               "legionAudioSearches": [],
// //               "mediaplayerResults": []
// //           },
// //           "domain": {
// //               "actualMldcResults": [
// //                   {
// //                       "input": "Regarder Baby Boss",
// //                       "output": "media",
// //                       "javaType": "com.apple.siri.ace.inspector.model.result.MldcResult"
// //                   }
// //               ],
// //               "test": {
// //                   "domain": "media",
// //                   "expectedDomain": "media",
// //                   "actualDomain": "media"
// //               },
// //               "domain": "media"
// //           },
// //           "flow": {
// //               "stopped": [],
// //               "restarted": []
// //           },
// //           "ids": {
// //               "connectionId": "027a0089-0157-4831-80d6-1354359cba5b",
// //               "clientConnectionId": "eb6126e4-0ad7-4cb5-bc64-9c3abf403376$",
// //               "aceIdOfStartRequest": "$90e51022-3643-4d2f-a2e8-27256b91d990 ",
// //               "requestId": "$90e51022-3643-4d2f-a2e8-27256b91d990 "
// //           },
// //           "media": {
// //               "deuce": [
// //                   {
// //                       "aceId": "760f96eb-232b-443a-8d0a-9ed1b3921ba1",
// //                       "usefulnessScore": 100,
// //                       "contentJson": {
// //                           "durationMs": 129,
// //                           "requestId": "$90e51022-3643-4d2f-a2e8-27256b91d990",
// //                           "userUtterance": "Regarder Baby Boss",
// //                           "searchResponses": [
// //                               {
// //                                   "canonicalId": "umc.cmc.3usaay2aleovo8pfsjk03pway",
// //                                   "title": "Baby Boss",
// //                                   "type": "Movie",
// //                                   "rating": {
// //                                       "ratingSystem": "fr_cnc",
// //                                       "utsRating": "FR_CNC_TP",
// //                                       "mediaRating": "FR_CNC_TP",
// //                                       "displayValue": "Tout public"
// //                                   },
// //                                   "releaseDate": 1490745600000,
// //                                   "duration": 5820,
// //                                   "genre": [
// //                                       {
// //                                           "name": "Animation",
// //                                           "id": "umc.gnr.mov.animation",
// //                                           "url": "https://tv.apple.com/fr/genre/animation/umc.gnr.mov.animation"
// //                                       }
// //                                   ],
// //                                   "seasonNumber": null,
// //                                   "episodeNumber": null,
// //                                   "description": "C'est toujours un choc de voir ses parents rentrer à la maison avec un bébé dans les bras, surtout quand il porte une cravate ! Si Tim, sept ans, ne voit pas d'un très bon oeil ce bébé boss débarquer chez lui, il découvre qu'il a en réalité affaire à un espion et que lui seul peut l'aider à accomplir sa mission ultra secrète.",
// //                                   "images": {
// //                                       "coverArt": {
// //                                           "height": 3000,
// //                                           "width": 2000,
// //                                           "type": null,
// //                                           "bgColor": null,
// //                                           "textColor1": null,
// //                                           "textColor2": null,
// //                                           "textColor3": null,
// //                                           "textColor4": null,
// //                                           "url": "https://is1-ssl.mzstatic.com/image/thumb/Video127/v4/c1/17/aa/c117aa93-a826-1432-2c2f-8a428f010cd0/pr_source.lsr/{w}x{h}.{f}",
// //                                           "supportsLayeredImage": true,
// //                                           "hasAlpha": false,
// //                                           "format": "lcr"
// //                                       },
// //                                       "coverArt16X9": {
// //                                           "height": 964,
// //                                           "width": 1712,
// //                                           "type": null,
// //                                           "bgColor": null,
// //                                           "textColor1": null,
// //                                           "textColor2": null,
// //                                           "textColor3": null,
// //                                           "textColor4": null,
// //                                           "url": "https://is4-ssl.mzstatic.com/image/thumb/Video124/v4/f1/e3/3c/f1e33cd7-d241-0917-b9e9-121621234eac/1219155711-WW-AMP_SF.lsr/{w}x{h}.{f}",
// //                                           "supportsLayeredImage": true,
// //                                           "hasAlpha": false,
// //                                           "format": "lcr"
// //                                       },
// //                                       "headshot": null,
// //                                       "castInCharacter": null,
// //                                       "previewFrame": {
// //                                           "height": 2160,
// //                                           "width": 3840,
// //                                           "type": null,
// //                                           "bgColor": null,
// //                                           "textColor1": null,
// //                                           "textColor2": null,
// //                                           "textColor3": null,
// //                                           "textColor4": null,
// //                                           "url": "https://is4-ssl.mzstatic.com/image/thumb/zigAotNwTjT6701tKVOxtw/{w}x{h}.{f}",
// //                                           "supportsLayeredImage": false,
// //                                           "hasAlpha": false,
// //                                           "format": "jpg"
// //                                       },
// //                                       "logo": null,
// //                                       "fullScreenBackground": {
// //                                           "height": 2160,
// //                                           "width": 4320,
// //                                           "type": null,
// //                                           "bgColor": null,
// //                                           "textColor1": null,
// //                                           "textColor2": null,
// //                                           "textColor3": null,
// //                                           "textColor4": null,
// //                                           "url": "https://is5-ssl.mzstatic.com/image/thumb/Features117/v4/94/ef/ee/94efee87-bc3d-ea5c-9dae-755242fdcce5/temp..ptqltbhg.png/{w}x{h}sr.{f}",
// //                                           "supportsLayeredImage": false,
// //                                           "hasAlpha": false,
// //                                           "format": "jpg"
// //                                       },
// //                                       "contentLogo": null,
// //                                       "appIcon": null,
// //                                       "evodFeaturing": null
// //                                   },
// //                                   "fromUTS": true,
// //                                   "fromParsec": false
// //                               },
// //                               {
// //                                   "canonicalId": "umc.cmc.4plw402aj3ywr4h1ym3j9w66m",
// //                                   "title": "Baby Boss : les affaires reprennent",
// //                                   "type": "Show",
// //                                   "rating": {
// //                                       "ratingSystem": "fr_tv",
// //                                       "utsRating": "FR_TV_TP",
// //                                       "mediaRating": "FR_TV_TP",
// //                                       "displayValue": "Tout public"
// //                                   },
// //                                   "releaseDate": 1522972800000,
// //                                   "duration": null,
// //                                   "genre": [
// //                                       {
// //                                           "name": "Animation",
// //                                           "id": "umc.gnr.tv.animation",
// //                                           "url": "https://tv.apple.com/fr/genre/animation/umc.gnr.tv.animation"
// //                                       }
// //                                   ],
// //                                   "seasonNumber": null,
// //                                   "episodeNumber": null,
// //                                   "description": "Les affaires reprennent ! Avec un coup de main de son frère et de son complice, Tim, le Baby Boss essaie tant bien que mal de concilier sa vie de famille avec sa vie professionnelle au siège de Baby Corp.",
// //                                   "images": {
// //                                       "coverArt": {
// //                                           "height": 2000,
// //                                           "width": 2000,
// //                                           "type": null,
// //                                           "bgColor": null,
// //                                           "textColor1": null,
// //                                           "textColor2": null,
// //                                           "textColor3": null,
// //                                           "textColor4": null,
// //                                           "url": "https://is5-ssl.mzstatic.com/image/thumb/oZw9uKEEV9KjaTmC4uFAMw/{w}x{h}.{f}",
// //                                           "supportsLayeredImage": false,
// //                                           "hasAlpha": false,
// //                                           "format": "jpg"
// //                                       },
// //                                       "coverArt16X9": {
// //                                           "height": 1080,
// //                                           "width": 1920,
// //                                           "type": null,
// //                                           "bgColor": null,
// //                                           "textColor1": null,
// //                                           "textColor2": null,
// //                                           "textColor3": null,
// //                                           "textColor4": null,
// //                                           "url": "https://is4-ssl.mzstatic.com/image/thumb/S5a87dKvEh-GbHcyHCrPtg/{w}x{h}.{f}",
// //                                           "supportsLayeredImage": false,
// //                                           "hasAlpha": false,
// //                                           "format": "jpg"
// //                                       },
// //                                       "headshot": null,
// //                                       "castInCharacter": null,
// //                                       "previewFrame": {
// //                                           "height": 2160,
// //                                           "width": 3840,
// //                                           "type": null,
// //                                           "bgColor": null,
// //                                           "textColor1": null,
// //                                           "textColor2": null,
// //                                           "textColor3": null,
// //                                           "textColor4": null,
// //                                           "url": "https://is5-ssl.mzstatic.com/image/thumb/IVZqs0ip7AxE6dgWKOHLoA/{w}x{h}.{f}",
// //                                           "supportsLayeredImage": false,
// //                                           "hasAlpha": false,
// //                                           "format": "jpg"
// //                                       },
// //                                       "logo": null,
// //                                       "fullScreenBackground": null,
// //                                       "contentLogo": null,
// //                                       "appIcon": null,
// //                                       "evodFeaturing": null
// //                                   },
// //                                   "fromUTS": true,
// //                                   "fromParsec": false
// //                               }
// //                           ],
// //                           "utsUrl": "https://uts-api-siri.itunes.apple.com/uts/v2/siri-personalized/search?utsk=cc0e83fca9429d87%3A%3A%3A%3A%3A%3A235656c069bb0efb&caller=siri-internal&sf=143442&v=35&pfm=iPhone&siriLocale=fr_FR&pageSize=50&pfa=AppleTV&locale=fr-FR&title=Baby+Boss&platform=29",
// //                           "utsResultsCount": 2,
// //                           "remoteDeviceUtsUrl": null,
// //                           "remoteDeviceUtsResultsCount": null,
// //                           "parsecUrl": null,
// //                           "parsecResultsCount": null,
// //                           "invocationCount": 1,
// //                           "storefrontId": "143442-3,29",
// //                           "intentUserGenerated": true,
// //                           "auxiliarySearch": false,
// //                           "eventType": "MediaQuery",
// //                           "eventVersion": 1.5
// //                       },
// //                       "eventVersion": 1.5,
// //                       "eventType": "MediaQuery",
// //                       "refId": "$90e51022-3643-4d2f-a2e8-27256b91d990",
// //                       "javaType": "com.siri.ace.command.assistant.EventLogMessageDebugInfo"
// //                   }
// //               ],
// //               "mediaQueryEventLog": []
// //           },
// //           "mlsp": {
// //               "actualMlspResults": [
// //                   {
// //                       "input": "Regarder Baby Boss",
// //                       "output": [
// //                           "default,personPlaceId,latitude,domainObjectPlaceName,mediaSportsEventId,longitude,locationAccuracy,mediaMisc,timeZone,mediaExternalId,worldPlaceName,mediaCanonicalShowId # mediaTitle # mediaTitle",
// //                           "default,mediaPlayerRequest # mediaPlayerItem # mediaPlayerItem",
// //                           "default,applicationId # appName # appName"
// //                       ],
// //                       "javaType": "com.apple.siri.ace.inspector.model.result.MlspResult"
// //                   }
// //               ],
// //               "nlParse": "default,personPlaceId,latitude,domainObjectPlaceName,mediaSportsEventId,longitude,locationAccuracy,mediaMisc,timeZone,mediaExternalId,worldPlaceName,mediaCanonicalShowId # mediaTitle # mediaTitle"
// //           },
// //           "nl": "Error converting intent XML to JSON: TypeError: Cannot read property 'intent' of undefined",
// //           "siri_output": {
// //               "transcriptOrderedOutput": [
// //                   {
// //                       "aceID": "f6ca25ef-3b09-4c61-a4e7-8c6060756b75",
// //                       "utteranceCount": -1,
// //                       "className": "com.siri.ace.command.assistant.AddViews",
// //                       "content": "media#disambiguateResultsPrologue",
// //                       "textMessage": "Veuillez préciser votre choix. J’ai trouvé deux résultats :",
// //                       "spokenMessage": "Veuillez préciser votre choix. J’ai trouvé deux résultats :"
// //                   },
// //                   {
// //                       "aceID": "f6ca25ef-3b09-4c61-a4e7-8c6060756b75",
// //                       "utteranceCount": -1,
// //                       "className": "com.siri.ace.command.assistant.views.DisambiguationList",
// //                       "content": null,
// //                       "textMessage": null,
// //                       "spokenMessage": null
// //                   },
// //                   {
// //                       "aceID": "",
// //                       "utteranceCount": -1,
// //                       "className": "AddViewsDebugInfo-proto",
// //                       "content": "media#disambiguateResultsPrologue",
// //                       "textMessage": "Disambiguate",
// //                       "spokenMessage": ""
// //                   }
// //               ],
// //               "ducs": [
// //                   "media#disambiguateResultsPrologue",
// //                   null,
// //                   "media#disambiguateResultsPrologue"
// //               ],
// //               "textMessages": [
// //                   "Veuillez préciser votre choix. J’ai trouvé deux résultats :",
// //                   null,
// //                   "Disambiguate"
// //               ],
// //               "spokenMessages": [
// //                   "Veuillez préciser votre choix. J’ai trouvé deux résultats :",
// //                   null,
// //                   ""
// //               ]
// //           },
// //           "sirikit": {
// //               "resolvedIntentSlots": [],
// //               "confirmIntents": []
// //           },
// //           "speech": {
// //               "speechRecognitionResults": [
// //                   "Regarder Baby Boss"
// //               ]
// //           },
// //           "splunk": {},
// //           "sut": {
// //               "index": 0,
// //               "uri": "https://sa-q02.siri.apple.com",
// //               "privilegeKey": "sirilab123",
// //               "serverVersion": "20.27.109",
// //               "valid": true,
// //               "siriMini": false,
// //               "javaType": "com.apple.siri.ace.inspector.client.SystemUnderTest"
// //           }
// //       },
// //       "runtime": 5626,
// //       "success": false,
// //       "test_id": "fe7c91db-0891-3ae6-a53a-b3648730acd6",
// //       "testsets": [
// //           "NECK-ZEUS-PLAY_MOVIE-NO_HS_TRIGGER-TTS_RECORDING-Top10",
// //           "NECK-ZEUS-PLAY_MOVIE-NO_HS_TRIGGER-TTS_RECORDING-Top10-fr_FR-FR-HYP-uid7777",
// //           "NECK-ZEUS-PLAY_MOVIE-NO_HS_TRIGGER-TTS_RECORDING-Top10-fr_FR-FR-uid7777"
// //       ]
// //   }

// // from catch 675 55 



//   function promise(){
//       return new Promise((resolve, reject) => {
//           setTimeout(() => resolve("first resolve"), 1000)
//       })
//   }

//   promise().then((res) => {
//      return res
//   })
//   .then((res) => console.log("from here", res));

//   let arr = ["bbekhit", "bradtraversy"];
//   let urls = arr.map(name => fetch(`https://api.github.com/users/${name}`));
//   let requests = Promise.all(urls)
//   .then(res => res)
//   .then(res => Promise.all(res.map(item => item.json())))
//   .then(res => res.map(item => alert(item.name)))

// let str = "";
// function promise(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("first resolve"), 1000)
//     })
// }

// promise()
// .then((res) => {
//     str = res;
//     return str;
// })
// .then(res => console.log(res))

// let result = [  '0103cf12-3d34-3690-8a05-79d7690221f1',
//                  '15395eaf-fead-3656-a551-e0f670c86dc8',
//                  '15cf1b6a-7db8-3345-a777-3a51432c6e00',
//                  '210a354b-6405-3296-a9f3-8bae2e67074c',
//                  '2505a190-8641-3ef7-bd5e-6d504c607265',
//                  '29d2b834-dd21-3b53-8efd-236cf73a46c0',
//                  '3e7460e7-95b7-3b73-b8db-63377b4c3050',
//                  '417aa443-758c-3305-acd8-cc18291909f8',
//                  '44bb19c8-3d71-370c-bbc2-07ace21ff622',
//                  '49d682c3-cac5-3202-aa17-2b9093153f2c',
//                  '4c2c3f8b-9a88-3657-b82a-39ff80736064',
//                  '5240eb5d-b504-370c-a9ab-efb84d927850',
//                  '62076b3b-32f9-3edb-83a8-e97b8590f779',
//                  '91f08c6d-7897-3651-92e4-4c47ae52597b',
//                  '92862aa1-d705-32be-b25b-0e18bc862a07',
//                  '99a71ec5-a2f0-3793-aa86-552fea710ea6',
//                  '99f5d716-50d5-3b1f-a519-7a26eaccc2f3',
//                  '9d555529-15aa-37f0-8e9c-e13109697880',
//                  'a04fa10c-c999-33f8-9aca-e455ef84e367',
//                  'ad479b36-ff3d-37aa-9f5c-29a2e52be3df',
//                  'b1c26ca3-c626-3601-b51b-5ab787450a2a',
//                  'b9b7fc29-911e-3bdb-95e0-7f2579f46588',
//                  'bc3de588-d50b-3f55-aa62-80f9e3a7800e',
//                  'cca9a2c4-0582-33a8-b827-541d8e6e6728',
//                  'cd43ae9c-7fce-370f-a27d-b2d279b17418',
//                  'dc9fe4d8-a63d-3696-9203-d1e4bf04949b',
//                  'ed51904c-8933-326e-8954-c2a00bc20300',
//                  'ed7d8437-65d5-3e9b-ae9c-ac0e0584c36f',
//                  'f63ee954-df55-336e-b7f5-1eddc8eb5d5d',
//                  'f73dbc65-ae1a-3220-9d80-9d2b42fbc7b5' ]

//                  function addToTestsetTable(testSetsAdd) {
//                     if (testSetsAdd == null) return;
//                     testSetsAdd.forEach(testSetName => {
//                         executeDb("SELECT name, attributes FROM testset WHERE name = ?", [testSetName])
//                             .then(data => {
//                                 if (data != null && data.rows != null) {
//                                     if (data.rows.length === 0) {
//                                         executeDb("INSERT INTO testset (name, created_at) VALUES (?,?)", [testSetName, new Date()])
//                                     } else {
//                                         const inputId = data.rows[0].input_id || '';
//                                         const attr = JSON.parse(data.rows[0].attributes) || {};
//                                         if (attr.deleted != null && attr.deleted === true) {
//                                             attr.deleted = false;
//                                             executeDb("INSERT INTO testset (name, attributes, input_id) VALUES (?,?,?)", [testSetName, JSON.stringify(attr), inputId]);
//                                         }
//                                     }
//                                 }
//                             })
//                     })


//                     {
//                         "status": "success",
//                         "execution_batch_id": "897c0720-bbd0-11ea-8c8d-29d9f183f299",
//                         "count": 0,
//                         "queued": {
//                             "status": "Failed to queue tests",
//                             "error": {
//                                 "name": "KafkaJSNonRetriableError",
//                                 "retriable": false
//                             }
//                         }
//                     }

//                     {
//                         "status": "success",
//                         "execution_batch_id": "73477930-bbda-11ea-bd95-ab92f2bfddbb",
//                         "count": 0,
//                         "queued": [
//                             {
//                                 "topicName": "siri.music.dev.siri-music.run-test",
//                                 "partition": 26,
//                                 "errorCode": 0,
//                                 "baseOffset": "43513",
//                                 "logAppendTime": "-1",
//                                 "logStartOffset": "40215"
//                             },
//                             {
//                                 "topicName": "siri.music.dev.siri-music.run-test",
//                                 "partition": 30,
//                                 "errorCode": 0,
//                                 "baseOffset": "43544",
//                                 "logAppendTime": "-1",
//                                 "logStartOffset": "40234"
//                             }
//                         ]
//                     }

//                     let testDefinitionsToRetry =  [{ test_id: '0103cf12-3d34-3690-8a05-79d7690221f',
//         execution_batch_id: '72b7e370-bb16-11ea-8e27-17c07c6aa49c',
//         retry_countdown: 1 },
//       { test_id: '15395eaf-fead-3656-a551-e0f670c86dc',
//         execution_batch_id: '72b7e370-bb16-11ea-8e27-17c07c6aa49c',
//         retry_countdown: 1 } ]
 
//         async function queueToKafka(testDefinitions) { // in common
//             const testDefinitionsToRetry = testDefinitions.filter(test => getCountDown(test) > 0);
//             console.log("testDef", testDefinitions);
            
            
//             const topicName = config.kafka.topics.runTest;
        
//             const kafka = getKafkaClient();
        
//             const messages = testDefinitionsToRetry.map(entry => ({value: JSON.stringify(entry)}));
//             const payload = { topic: topicName, messages: messages };
//             console.log("payload", payload);
            
        
//             const producer = kafka.producer();
        
//             let result;
//             await producer.connect();
//             await producer.send(payload)
//                 .then(output => result = output)
//                 .catch(reason => {console.log("ERROR from queueTo",reason);result = { status: "Failed to queue tests", error: reason }});
//             await producer.disconnect();
        
//             return result;
//         }



//         //OR either in test-utils:
//         const getTestIdsForTestSets = async (testsets, limit) => {
//             console.log("HELLO WORLD", testsets)
//             console.log("Getting test IDs for " + JSON.stringify(testsets));
//             if (!Array.isArray(testsets)) testsets = testsets.split(",");
        
//             if (testsets.length === 0) return [];
//             const ids = await getTestIdsForTestset(testsets[0], limit);
//             console.log("IDS", ids);
            
//             console.log(testsets[0] + " length: " + ids.length);
//             if (testsets.length === 1) return ids;
//             const testSetsCopy = JSON.parse(JSON.stringify(testsets));
//             console.log("COPY", testSetsCopy);
            
//             testSetsCopy.shift();
        
//             let result = ids.sort();
//             // for (const testset of testSetsCopy) {
//             //     const current = await getTestIdsForTestset(testset, limit);
//             //     console.log('CURRENT',current);
                
//             //     console.log(testset + " length: " + current.length);
//             //     current.sort();
//             //     result = intersection(result, current);
//             //     console.log("RESULT", result);
                
//             //     if (result.length === 0) return [];
//             // }
//             console.log("Result length " + result.length);
//             console.log("RESULT", result);
//             return result;
//         };

//         GET https://signal.siri.apple.com/executed?date=20200519&input_id=937030&latest=&testset=NECK-ZEUS-VERBLESS_MOVIE-NO_HS_TRIGGER-TTS_RECORDING-CUSTOM-en_US-US-HYP-uid110 

//         https://signal.siri.apple.com/executed?date=20200519&input_id=937100&latest=&testset=NECK-ZEUS-VERBLESS_MOVIE-NO_HS_TRIGGER-TTS_RECORDING-CUSTOM-en_US-US-HYP-uid110

