#!/bin/sh

# Prompt user for component name
read -p "Enter the name of the new component: " name

# Check if component name is provided
if [ -z "$name" ]; then
    echo "Component name is required!"
    exit 1
fi

# Create directory structure if not exist
mkdir -p ./frontend/src/components

# Create CSS file
touch "./frontend/src/components/${name}.css"

# Create JS file with the template
cat <<EOT >> "./src/components/${name}.js"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './${name}.css';

const ${name} = ({}) => {
  return (
    <div className='${name}-page'>
      
    </div>
  );
};

export default ${name};
EOT

echo "Component ${name} created successfully in ./src/components!"
