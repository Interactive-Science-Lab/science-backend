# Combo Science Lab Deployment Guide

## Overview
This deployment adds a fourth laboratory option "Combo Science" to the Virtual Science Lab application, along with a demo lab enhancement.

## New Seed Files Created

### 1. `17-combo-users.js`
- Adds the Combo Science user account
- Username: `combo2020`
- Email: `combo2020@gmail.com`
- Password: `1234!Asdf`
- User Role: 4 (maps to Combo Science lab)

### 2. `17-combo-end-users.js`
- Links the Combo Science user to the end_users table
- Foreign User ID: 6 (assumes combo user is 6th user in users table)

### 3. `18-combo-experiments.js`
- Adds 12 Combo Science experiments with `experiment_class: "combo"`
- Experiments selected from Biology, Chemistry, and Physics labs:
  1. Measurement in Science (Biology)
  2. Diffusion and Osmosis (Biology)
  3. Density Determination (Chemistry)
  4. Average Velocity & Speed (Physics)
  5. Moles, Elements, & Molar Mass (Chemistry)
  6. pH Determination (Chemistry)
  7. Blood Type (Chemistry)
  8. Viscosity of Liquids (Physics)
  9. Muscle Work, Power, & Caloric Expenditure (Biology)
  10. Archimedes Principle (Physics)
  11. Cellular Respiration (Biology)
  12. Momentum (Physics)

### 4. `19-demo-experiment.js`
- Adds "Density Determination" experiment to the demo lab
- Experiment class: "demo"

## Frontend Changes Made

### Files Modified:
1. `frontend/src/site/home.js` - Added Combo Science option
2. `frontend/src/lab/classes/fields.js` - Added combo lab settings
3. `frontend/src/lab/components/labLayout/labLayout.js` - Added combo to admin bar
4. `frontend/src/portal/asteroid/componentClass/component.js` - Added combo/demo to filters
5. `frontend/src/site/demoHome.js` - Updated demo lab description

## Deployment Steps

### 1. Database Migration
Run the new seed files in order:
```bash
cd science-backend
npm run seed:run
```

### 2. Frontend Deployment
Deploy the updated frontend files to your production environment.

## Features Implemented

### Combo Science Lab:
- ✅ Fourth laboratory option alongside Biology, Chemistry, and Physics
- ✅ 12 selected experiments from existing labs
- ✅ Same admin access as other laboratories
- ✅ Explosion feature when "explosive chemical" moved to lab area 2
- ✅ Identical look and operation to other labs
- ✅ Uses chemistry lab background and explosion video

### Demo Lab Enhancement:
- ✅ Added "Density Determination" experiment
- ✅ Updated demo lab description

## User Access
- **Combo Science User**: `combo2020` / `1234!Asdf`
- **Admin Access**: Admins can switch to Combo Science lab via admin bar
- **Student Access**: Students with user_role: 4 will access Combo Science lab

## Notes
- Original seed files remain unchanged for safety
- New seed files can be run independently
- All frontend changes are backward compatible
- Demo lab uses physics background but chemistry explosion video 