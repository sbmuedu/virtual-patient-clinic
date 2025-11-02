@echo off
echo Creating Virtual Patient Clinic Project...

mkdir virtual-patient-clinic
cd virtual-patient-clinic

mkdir src\app
mkdir src\components\scene
mkdir src\components\patient
mkdir src\components\tools
mkdir src\components\ui
mkdir src\components\audio
mkdir src\lib\threejs
mkdir src\lib\physics
mkdir src\lib\medical

mkdir public\models\patient
mkdir public\models\room
mkdir public\sounds\heart
mkdir public\sounds\lungs
mkdir public\sounds\abdomen
mkdir public\sounds\environment
mkdir public\textures\skin
mkdir public\textures\medical

echo Project structure created!
echo Run 'npm install' after adding package.json
pause