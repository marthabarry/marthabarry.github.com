var columns = ["Site","Name","Location","Area","Zip Code","Time/Day","Latitude","Longitude"]


var data = [{"Site":"FM1","Name":"Allston Union Square","Location":"500 Cambridge St.","Area":"Allston","Zip Code":2134,"TimeDay":"Every other Saturday 11:00AM - 3:00PM ","Latitude":"42.3532753","Longitude":"-71.1377981"},
{"Site":"FM2","Name":"Boston University","Location":"775 Commonwealth Ave.","Area":"Allston","Zip Code":2215,"TimeDay":"Thursdays, 12-5 p.m. Aug. 12-Oct.14","Latitude":"42.3506857","Longitude":"-71.1089936"},
{"Site":"FM3","Name":"Harvard Allston","Location":"200 North Harvard St.","Area":"Allston","Zip Code":2134,"TimeDay":"Fridays 3:00PM - 7:00PM ","Latitude":"42.3632472","Longitude":"-71.129713"},
{"Site":"FM4","Name":"Boston City Hall","Location":"1 City Hall Plaza ","Area":"Boston","Zip Code":2108,"TimeDay":"Mondays, Wednesdays 11:00 AM – 6:00 PM ","Latitude":"42.3598913","Longitude":"-71.0582684"},
{"Site":"FM5","Name":"Boston Medical Center","Location":"850 Harrison Ave. ","Area":"Boston","Zip Code":2118,"TimeDay":"Fridays 11:30 AM – 2:30 PM ","Latitude":"42.3348925","Longitude":"-71.0751964"},
{"Site":"FM6","Name":"Copley Square","Location":"261 Dartmouth St.","Area":"Boston","Zip Code":2116,"TimeDay":"Tuesdays, Fridays 11:00 AM – 6:00 PM ","Latitude":"42.3504688","Longitude":"-71.0773319"},
{"Site":"FM7","Name":"Dewey Square","Location":"200 Atlantic Ave.","Area":"Boston","Zip Code":2109,"TimeDay":"Tuesdays, Thursdays 11:30 AM – 6:30 PM ","Latitude":"42.3600008","Longitude":"-71.0517355"},
{"Site":"FM9","Name":"Prudential Center","Location":"800 Boylston St.","Area":"Boston","Zip Code":2199,"TimeDay":"Thursday, 11 a.m.-6 p.m., May 21-Oct. 29","Latitude":"42.3518773","Longitude":"-71.0707478"},
{"Site":"FM10","Name":"Coolidge Corner","Location":"1325 Beacon St.","Area":"Brookline","Zip Code":2446,"TimeDay":"Thursday, 1:30-8 p.m., June 18-Oct. 29","Latitude":"42.3419821","Longitude":"-71.1213476"},
{"Site":"FM11","Name":"Central Square","Location":"43 Columbia St.","Area":"Cambridge","Zip Code":2139,"TimeDay":"Monday, 11:30 a.m.-6 p.m., June 1-Nov. 23","Latitude":"42.36465","Longitude":"-71.099473"},
{"Site":"FM12","Name":"Cambridge Center","Location":"5 Cambridge Center","Area":"Cambridge","Zip Code":2142,"TimeDay":"Wednesday 10-6, May 16 - October 24","Latitude":"42.3627299","Longitude":"-71.0872363"},
{"Site":"FM13","Name":"Charles Square","Location":"1 Bennett St.","Area":"Cambridge","Zip Code":2138,"TimeDay":"Sunday, 11 a.m.-3 p.m., May 24-Nov. 22","Latitude":"42.372258","Longitude":"-71.122667"},
{"Site":"FM14","Name":"Harvard University","Location":"2-28 Cambridge St.","Area":"Cambridge","Zip Code":2138,"TimeDay":"Tuesday, 12:30 p.m. to 6 p.m., June 4-Sept. 10","Latitude":"42.3704578","Longitude":"-71.076049"},
{"Site":"FM15","Name":"Kendall Square","Location":"500 Kendall St.","Area":"Cambridge","Zip Code":2142,"TimeDay":"Thursday 11 a.m. to 2 p.m., June 4-Sept. 10","Latitude":"42.363887","Longitude":"-71.081383"},
{"Site":"FM16","Name":"Cambridgeport","Location":"207 Magazine St.","Area":"Cambridge","Zip Code":2139,"TimeDay":"Saturday 10-2 pm","Latitude":"42.3565381","Longitude":"-71.1141576"},
{"Site":"FM17","Name":"Charlestown","Location":"1 Thompson Sq.","Area":"Charlestown","Zip Code":2129,"TimeDay":"Wednesday, 2-7 p.m., July 15-Oct. 9","Latitude":"42.378049","Longitude":"-71.0522605"},
{"Site":"FM18","Name":"Chelsea","Location":"500 Broadway","Area":"Chelsea","Zip Code":2150,"TimeDay":"Saturdays 10-1, July 16 - October 20","Latitude":"42.393672","Longitude":"-71.033322"},
{"Site":"FM19","Name":"Ashmont","Location":"1900 Dorchester Ave.","Area":"Dorchester","Zip Code":2124,"TimeDay":"Fridays 3-7","Latitude":"42.2863465","Longitude":"-71.0641328"},
{"Site":"FM20","Name":"Bowdoin Geneva","Location":"230 Bowdoin St.","Area":"Dorchester","Zip Code":2122,"TimeDay":"Thursdays 3:00 PM – 6:30 PM ","Latitude":"42.3058044","Longitude":"-71.0677573"},
{"Site":"FM21","Name":"Codman Square","Location":"6 Norfolk St.","Area":"Dorchester","Zip Code":2124,"TimeDay":"Thursdays 1:00 PM – 6:00 PM ","Latitude":"42.2890241","Longitude":"-71.040966"},
{"Site":"FM22","Name":"Dorchester House","Location":"1353 Dorchester Ave. ","Area":"Dorchester","Zip Code":2122,"TimeDay":"Tuesdays 11:30 AM – 1:30 PM ","Latitude":"42.3042901","Longitude":"-71.0591632"},
{"Site":"FM23","Name":"Grove Hall","Location":"461 Blue Hill Ave.","Area":"Dorchester","Zip Code":2186,"TimeDay":"Tuesday 3-7 July 10 -Sept 28","Latitude":"42.250292","Longitude":"-71.1026849"},
{"Site":"FM24","Name":"Dudley Town","Location":"390 Dudley St.","Area":"Dorchester","Zip Code":2119,"TimeDay":"Tuesdays, Thursdays 3:00 PM – 7:00 PM ","Latitude":"42.313132","Longitude":"-71.078439"},
{"Site":"FM25","Name":"Fields Corner","Location":"1520 Dorchester Ave.","Area":"Dorchester","Zip Code":2122,"TimeDay":"Saturdays 9:00 AM – 12:00 PM ","Latitude":"42.2986893","Longitude":"-71.0606375"},
{"Site":"FM26","Name":"Franklin Park","Location":"Franklin Park Rd.","Area":"Dorchester","Zip Code":2120,"TimeDay":"Sunday, 1-4 p.m., Aug. 2-Oct. 25","Latitude":"42.3025239","Longitude":"-71.0868816"},
{"Site":"FM27","Name":"Frederick Douglass Square","Location":"998 Tremont St. ","Area":"Dorchester","Zip Code":2120,"TimeDay":"Saturdays 11:00 AM – 5:00 PM ","Latitude":"42.336667","Longitude":"-71.084281"},
{"Site":"FM28","Name":"Peabody","Location":"1963 Dorchester Av.","Area":"Dorchester","Zip Code":2124,"TimeDay":"Friday, 3:00 pm - 7:00 pm","Latitude":"42.283885","Longitude":"-71.0648317"},
{"Site":"FM29","Name":"ReVision Urban Farm Stand","Location":"1062 Blue Hill Ave. ","Area":"Dorchester","Zip Code":2124,"TimeDay":"Thursdays & Fridays 2:30PM - 6:30PM, Saturdays 10:00AM - 2:00PM ","Latitude":"42.2879976","Longitude":"-71.0899336"},
{"Site":"FM30","Name":"East Boston","Location":"230 Meridian St.","Area":"East Boston","Zip Code":2128,"TimeDay":"Thursdays 3:00 PM – 6:30 PM ","Latitude":"42.3756759","Longitude":"-71.0391037"},
{"Site":"FM31","Name":"Everett","Location":"430 Broadway","Area":"Everett","Zip Code":2134,"TimeDay":"Friday, Noon-5 p.m., July 17-Oct. 9","Latitude":"42.4069933","Longitude":"-71.0555733"},
{"Site":"FM33","Name":"Jamaica Plain","Location":"677 Centre St. ","Area":"Jamaica Plain","Zip Code":2130,"TimeDay":"Tuesdays 12:00 PM – 5:00pm, Saturdays 12:00 PM – 3:00 PM ","Latitude":"42.312213","Longitude":"-71.114533"},
{"Site":"FM34","Name":"Loring-Greenough House","Location":"12 South St.","Area":"Jamaica Plain","Zip Code":2130,"Time/Day":"Thursdays 2:00 PM – 6:00 PM ","Latitude":"42.309498","Longitude":"-71.1148879"},
{"Site":"FM35","Name":"Mattapan","Location":"525 River St. ","Area":"Mattapan","Zip Code":2126,"Time/Day":"Saturdays 10:00 AM – 1:00 PM ","Latitude":"42.2676302","Longitude":"-71.0939548"},
{"Site":"FM36","Name":"Mission Hill - Brigham Circle","Location":"720 Huntington Ave.","Area":"Mission Hill","Zip Code":2115,"Time/Day":"Thursdays 11:00 AM – 6:00 PM ","Latitude":"42.3342407","Longitude":"-71.1043655"},
{"Site":"FM37","Name":"Revere Beach","Location":"300 Ocean Ave.","Area":"Revere","Zip Code":2151,"Time/Day":"Thursday, Noon-6 p.m., July 16-Oct. 31","Latitude":"42.408203","Longitude":"-70.992267"},
{"Site":"FM38","Name":"Roslindale","Location":"1-9 Cummins Highway","Area":"Roslindale","Zip Code":2131,"Time/Day":"Saturdays 9:00 AM – 1:30 PM ","Latitude":"42.285964","Longitude":"-71.1279069"},
{"Site":"FM39","Name":"Davis Square","Location":"50 Day St.","Area":"Somerville","Zip Code":2144,"Time/Day":"Wednesday 12-6, May 23-Nov 21","Latitude":"42.3958371","Longitude":"-71.123117"},
{"Site":"FM40","Name":"Union Square","Location":"26 Union Sq.","Area":"Somerville","Zip Code":2143,"Time/Day":"Saturday 9-1, June 9 - November 1","Latitude":"42.3800421","Longitude":"-71.0967682"},
{"Site":"FM41","Name":"Childrens' Museum","Location":"308 Congress St.","Area":"South Boston","Zip Code":2210,"Time/Day":"Sunday, 1:00 pm - 4:00 pm","Latitude":"42.3520559","Longitude":"-71.0515925"},
{"Site":"FM42","Name":"South Boston","Location":"W 446 W. Broadway St. ","Area":"South Boston","Zip Code":2127,"Time/Day":"Mondays, 12:00 PM – 6:00 PM ","Latitude":"42.336213","Longitude":"-71.0468119"},
{"Site":"FM43","Name":"South End","Location":"540 Harrison Ave.","Area":"South End","Zip Code":2118,"Time/Day":"Sunday, 10 a.m.-4 p.m., May 16-Oct. 25","Latitude":"42.3415066","Longitude":"-71.0668932"}]