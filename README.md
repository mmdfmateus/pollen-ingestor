# pollen-ingestor
Web API for ingesting an csv file with pollen information, as part of a distributed system.

# Sample request
curl --location --request POST 'http://localhost:9000/api/v1/upload-csv' --form 'file=@"/Path/To/Csv/File.csv"'