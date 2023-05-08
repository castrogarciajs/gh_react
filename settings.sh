#! /bin/bash

echo "que deseas realizar ?"

read create
read tests

# if [[ $create ]] 
# then
#     mkdir examples
# else
#     echo "vuelve pronto"    
# fi    

if [[ $tests ]]
then
    npm run tests
else
    echo "vuelve pronto"
fi