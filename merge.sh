#!/bin/bash

# The directory where your repo resides
REPO_DIR="/path/to/your/repo"

# The name of your main branch (e.g., main or master)
MAIN_BRANCH="main"

# Go to repo directory
cd $REPO_DIR

# Fetch all updates
git fetch

# Get the list of branches. Here, I'm assuming you want all branches.
# You can modify the command if you have a specific naming pattern for your feature branches.
BRANCHES=$(git branch -r | grep -vE "HEAD|${MAIN_BRANCH}")

# Checkout main branch and pull latest
git checkout $MAIN_BRANCH
git pull

# Loop through branches and merge them
for branch in $BRANCHES; do
    echo "Merging $branch into $MAIN_BRANCH..."
    
    # Merge each branch into main. You can add --no-ff if you don't want fast-forward merges.
    git merge $branch

    # Check if merge was successful
    if [ $? -ne 0 ]; then
        echo "Error merging $branch. Fix the conflicts and run the script again."
        exit 1
    fi
done

echo "All branches merged successfully!"

# Push main branch if you want
# git push origin $MAIN_BRANCH
