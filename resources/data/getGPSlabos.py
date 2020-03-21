import re
import json

final=open("labs.tsv","a")
final.write("numero_national_de_structure\t"+"libelle\t"+"lat\t"+"long\t"+"domaines\t"+"adresse\t"+"code_postal\t"+"ville\t"+"site_web\n")
with open('labos_data.json', 'r') as f:
    file = json.load(f)
i=0

for line in file:
    if "code_postal" in line['fields'] :
        code_postal=re.sub(r'[\W_]+', '', line['fields']['code_postal'])
        if code_postal.startswith("78") or code_postal.startswith("77") or code_postal.startswith("91") or\
            code_postal.startswith("92") or code_postal.startswith("93") or code_postal.startswith("94") or\
            code_postal.startswith("95") :

            numero=line['fields']['numero_national_de_structure']
            with open('actifsIledeFrance.geojson', 'r') as f:
                file2 = json.load(f)
            for line2 in file2["features"]:
                if "numero_national_de_structure_rnsr" in line2["properties"]:
                    if numero==line2["properties"]["numero_national_de_structure_rnsr"]:
                        libelle=line['fields']['libelle']
                        lat=line2['geometry']['coordinates'][1]
                        long=line2['geometry']['coordinates'][0]

                        domaines=line['fields']['domaine_scientifique'] if "domaine_scientifique" in line['fields'] else ""
                        adresse=line2["properties"]["adresse_postale_du_laboratoire"]
                        code_postal=line2["properties"]["code_postal"]
                        ville=line2["properties"]["ville"]
                        site_web=line['fields']["site_web"] if "site_web" in line['fields'] else ""
                        final.write(numero+"\t"+libelle+"\t"+str(long)+"\t"+str(lat)+"\t"+domaines+"\t"+adresse+"\t"+str(code_postal)+"\t"+ville+"\t"+site_web+"\n")




