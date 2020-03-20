import requests

file = open("villes.txt","r")
file2 = open("coordVilles.json","a")
for line in file:
    array=line.split("(")
    mot=array[0]
    code=array[1].split(")")[0]
    resp = requests.get('https://api.opencagedata.com/geocode/v1/json?q='+mot+'%20'+code+'%20France&key=641c51bed8ab490184632ad8526e29ad&no_annotations=1&language=en')
    if resp.status_code != 200:
        # This means something went wrong.
        print("ouou")
    print('{"pos": ['+str(resp.json()["results"][0]["geometry"]["lat"]) +', '+str(resp.json()["results"][0]["geometry"]["lng"]) + '], "name": "'+ mot+ '"}')
    file2.write('{"pos": ['+str(resp.json()["results"][0]["geometry"]["lng"]) +', '+str(resp.json()["results"][0]["geometry"]["lat"]) + '], "name": "'+ mot+ '", "codepostal":'+code+'},\n')


