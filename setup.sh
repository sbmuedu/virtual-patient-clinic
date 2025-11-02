#!/bin/bash
echo "🎯 Setting up Virtual Patient Clinic..."

# Clone repository
git clone https://github.com/your-username/virtual-patient-clinic.git
cd virtual-patient-clinic

# Install dependencies
npm install

# Create necessary directories
mkdir -p public/models/patient
mkdir -p public/sounds/heart
mkdir -p public/sounds/lungs

# Copy sample files (if available)
cp -r ../sample-models/* public/models/patient/ || true
cp -r ../sample-sounds/* public/sounds/ || true

echo "✅ Setup complete!"
echo "🚀 Run: npm run dev"
echo "📚 Check PROJECT_SETUP.md for detailed instructions"