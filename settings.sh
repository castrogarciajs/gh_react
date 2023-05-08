#! /bin/bash

echo "que deseas realizar ?"

read create

if [[ $create ]] 
then
    mkdir examples
else
    echo "vuelve pronto"    
fi    