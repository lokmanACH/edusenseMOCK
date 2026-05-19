# Mock Data Quick Reference Guide

## File Structure

```
data/
├── mockUsers.ts          ← 15 users (teachers, students, admin)
├── mockClasses.ts        ← 9 classes across 5 subjects
├── mockExams.ts          ← 25+ exams with realistic content
├── mockSubmissions.ts    ← Student submission scenarios
├── mockAnalysis.ts       ← OCR/analysis results
├── mockReports.ts        ← Grading and feedback data
├── mockScenarios.ts      ← Scenario selection system
├── mockData.ts           ← Re-exports all above
└── classesData.ts        ← Legacy compatibility file

lib/
├── api.ts                ← Mock API with all endpoints
├── auth.ts               ← Authentication helpers
└── useScenarioSelector.ts ← Scenario selection hook
```

## Data Categories

### Users (mockUsers.ts)
- **TEACHERS** (4): Sarah, Ahmed, Meriem, Lina
- **STUDENTS_EXCELLENT** (2): Ben Mohamed Ali, Saad Azzem Maher
- **STUDENTS_AVERAGE** (3): Amira, Karim, Lina
- **STUDENTS_WEAK** (3): Omar, Sara, Achouche
- **STUDENTS_MULTILINGUAL** (2): Rania, Yacine
- **ADMIN** (1): System admin
- **ALL_USERS**: Combined list
- **ALL_STUDENTS**: All students only

### Classes (mockClasses.ts)
- **MATH_CLASSES** (2): Algebra, Advanced
- **PHYSICS_CLASSES** (2): Mechanics, Waves
- **CHEMISTRY_CLASSES** (2): Fundamentals, Reactions
- **HISTORY_CLASSES** (1): Revolutions
- **LANGUAGE_CLASSES** (3): English, French, Multilingual
- **ALL_CLASSES**: Combined list
- **CLASSES_BY_ID**: Map by class ID
- **CLASSES_BY_TEACHER**: Map by teacher ID

### Exams (mockExams.ts)
- **MATH_EXAMS** (5): Linear, Quadratic, Probability, Derivatives, Integration
- **SCIENCE_EXAMS** (6): Newton's Laws, Energy, Waves, Periodic Table, Reactions, Solutions
- **HISTORY_EXAMS** (3): Algeria, Industrial, WWII
- **LANGUAGE_EXAMS** (3): English grammar, writing, French
- **MULTILINGUAL_EXAMS** (2): Arabic-French, Trilingual
- **ALL_EXAMS**: Combined list
- **EXAMS_BY_CLASS**: Map by class ID

### Submissions (mockSubmissions.ts)
- **SUBMISSION_SCENARIOS**: 10 scenario objects
  - excellent_clean, excellent_physics
  - average_decent, average_incomplete, average_messy
  - weak_low_confidence, weak_empty, weak_wrong_numbering
  - multilingual_mixed, multilingual_tables
  - processing_pending
- **PARTIAL_ANSWER_EXAMPLES**: Text samples
- **SUBMISSION_QUALITY_DESCRIPTIONS**: Text descriptions

### Analysis (mockAnalysis.ts)
- **OCR_SCENARIOS**: 10 OCR result scenarios
  - high_confidence, medium_confidence, low_confidence
  - with_tables, with_formulas, mixed_language
  - processing_failure, with_missing_regions, with_suggestions
- **FEEDBACK_TEMPLATES**: 5 feedback templates
  - excellent, good, average, poor, processing_error

### Reports (mockReports.ts)
- **GRADING_SCENARIOS**: 5 comprehensive report scenarios
  - excellent_student_math, good_student_physics
  - average_student_chemistry
  - weak_student_with_issues
  - low_ocr_confidence_report
  - multilingual_student_report
- **DASHBOARD_PERFORMANCE_DATA**: Aggregated metrics

### Scenarios (mockScenarios.ts)
- **DEMO_SCENARIOS** (12): Named scenario objects
  - excellent_student, weak_student, average_student
  - low_ocr_confidence, incomplete_submission
  - math_exam, science_table_exam, physics_exam
  - multilingual, history_essay_exam, language_writing_exam
  - teacher_dashboard, student_dashboard, processing_workflow
- **SCENARIO_CATEGORIES**: Organized groups
- **Helper functions**: getScenarioById, getAllScenarios, etc.

## Key Statistics

| Category | Count | Details |
|----------|-------|---------|
| Users | 15 | 4 teachers, 10 students, 1 admin |
| Classes | 9 | Across 5 subjects |
| Exams | 25+ | Diverse types and difficulties |
| Submissions | 10 | Different quality levels |
| Teachers | 4 | Each specializing in different subjects |
| Student Levels | 4 | Excellent, Average, Weak, Multilingual |
| Scenarios | 12 | Pre-configured demo flows |
| Languages | 3 | Arabic, French, English |

## Common Tasks

### Get All Teachers
```typescript
import { TEACHERS } from '@/data/mockUsers';
TEACHERS.forEach(teacher => console.log(teacher.name));
```

### Get Classes for a Teacher
```typescript
import { CLASSES_BY_TEACHER } from '@/data/mockClasses';
const teacherClasses = CLASSES_BY_TEACHER['teacher_001'];
```

### Get Exams for a Class
```typescript
import { EXAMS_BY_CLASS } from '@/data/mockExams';
const classExams = EXAMS_BY_CLASS['mathematics-grade-10'];
```

### Access Grading Scenario
```typescript
import { GRADING_SCENARIOS } from '@/data/mockReports';
const scenario = Object.values(GRADING_SCENARIOS)[0];
```

### Get Specific Scenario
```typescript
import { getScenarioById } from '@/data/mockScenarios';
const scenario = getScenarioById('excellent_student');
```

### Get All Scenarios by Category
```typescript
import { getScenariosByCategory } from '@/data/mockScenarios';
const byLevel = getScenariosByCategory('By Student Level');
```

## Login Quick Links

### Teacher View
- Email: `sarah.bennacer@edusense.demo`
- Password: `demo123`
- Expected: 7 classes, 65 students, multiple analytics

### Excellent Student
- Email: `benmohammedali@edusense.demo`
- Password: `demo123`
- Expected: A+ grades, 92% average, clean submissions

### Struggling Student
- Email: `omar.faris@edusense.demo`
- Password: `demo123`
- Expected: F grades, 38% average, OCR challenges

### Multilingual Student
- Email: `rania.hadjadj@edusense.demo`
- Password: `demo123`
- Expected: Arabic-French content, 81% average

## Data Validation Checklist

- [ ] All student IDs map to enrollments
- [ ] All exam IDs map to classes
- [ ] All enrollment IDs map to students
- [ ] All classes have valid teachers
- [ ] Scores range from 0-100
- [ ] Dates are ISO format
- [ ] OCR confidence 0-1 range
- [ ] No circular references
- [ ] All exports available

## Performance Notes

- Mock API simulates 180ms network delay
- Data loads from localStorage if available
- defaultDb() called on first load
- Subsequent loads use cached database
- Clear localStorage to reset to defaults
- Supports up to 100+ concurrent users in theory

## Extension Points

To add more data:
1. Create new object in appropriate mock file
2. Add to corresponding array export
3. Update aggregation maps if needed
4. Test with api endpoints
5. Document in this file

## Related Files

- `MOCK_DATA_DOCUMENTATION.md` - Full detailed guide
- `lib/api.ts` - API endpoint implementations
- `lib/auth.ts` - Authentication system
- `data/mockData.ts` - Main export file

---
Use this guide as a reference when working with mock data or adding new scenarios.
