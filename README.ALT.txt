README.ALT.txt

Alternative to loading and exporting saved windows using Simple Window Saver and Storage Area Explorer

Summary
===================

It is possible to export and import saved windows from Simple Window Saver when used in conjunction with the Storage Area Explorer chrome extension


Chrome Extensions required:

* Simple Window Saver
* Storage Area Explorer

Steps to export/import windows
==============================

1. Make sure you have Simple Window Saver and Storage Area Explorer installed
2. Save some windows using Simple Window Saver
3. Under Manage Extensions, make sure Developer Mode is "on".
4. Find the Simple Window Saver extension in the Manage Extension page and click on the "background page" under Inspect Views. This will launch the Developer Console
5. Navigate to the Storage Explorer tab
6. Under window.localStorage, you should see all the windows that are saved. Tap the "Export" button and export the windows to a json file
7. From here, you can also tap the "Import" button to import the same json file into the window.localStorage area
8. Afer Importing a new json file, go back to the Manage Extension page and disable and re-enable the Simple Window Saver Extension. This will force the extension to refresh the windows imported into the window.localStorage 

