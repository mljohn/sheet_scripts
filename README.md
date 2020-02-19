# sheet_scripts
Scripts for Google Sheets

Scripts adapted from the ones I found here: https://gist.github.com/arthurattwell/aa5afc178624bdd6f46c2d0d28d06136

# Purpose
These scripts will allow the user to choose which values to sum from a sidebar, provided the sheet is set up properly.

I use this script to add certain bonuses to my skill checks while playing a role playing game.

# Instructions
  * Copy the scripts to your Google Sheet
    * Click on `Toosl > Script editor`
    * Name the project
    * Create new script file by clicking on `File > New > Script file`. Name it `mulit-select.gs`
    * Copy this `multi-select.gs` to your `multi-select.gs`
    * Create new HTML file by clicking on `File > New > HTML file`. Name it `dialog.html`
    * Copy this `dialog.html` to your `dialog.html`
    * Refresh your sheet. A new menu `Scripts` should appear at the top of the sheet
  * Use the script
    * Create a name ranged 2 cells wide and as long as you need. The first column should be a description of the value. The second column __needs__ to be an integer value.
    * Add a note to the cell you want the total value to appear. The note should be the name of the range you created.
    * Click on that cell to make it active. Click on `Scripts` menu at the top, then click on `Multi-select for this cell...`. A sidebar should appear that lists the descriptions and their associated values with checkboxes.
    * Click the boxes on the values you want to be summed, then hit the `Select` button. The sum of the values you chose should appear in the cell you called the script from.
    
# Notes
  * The note added to the cell to hold the sum needs to exactly match the named range that holds the values you want summed.
  * This script will work on multiple cells for any number of named ranges; 1 range per cell. 
  * Once the sidebar is open, you can choose any cell that has been set up with a named range and a note and hit the `Refresh` button. The script will restart for that cell.
  * To zero out the sum, run the script on the cell and hit `Submit` without choosing any values.
  * And example spreadsheet can be found at [https://docs.google.com/spreadsheets/d/1zEEsUKjWleupO67kMkqgsgCslbQrWm_IISgUYqjjI1U/edit?usp=sharing]
  
  I welcome feedback and comments.
