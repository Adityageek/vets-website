export const getCompareCalculatorState = (
  calculator,
  institution,
  constants,
) => {
  const {
    tuitionInState,
    tuitionOutOfState,
    books,
    calendar,
    type,
  } = institution;
  let { yellowRibbonPrograms } = institution;
  let yellowRibbonDegreeLevelOptions = [];
  let yellowRibbonDivisionOptions = [];
  let yellowRibbonDegreeLevel = '';
  let yellowRibbonDivision = '';
  let yellowRibbonAmount = 0;
  let yellowRibbonMaxAmount;
  let yellowRibbonMaxNumberOfStudents;
  let yellowRibbonProgramIndex;
  if (yellowRibbonPrograms.length > 0) {
    yellowRibbonPrograms = yellowRibbonPrograms.map((program, index) => ({
      ...program,
      index,
    }));
    yellowRibbonDegreeLevelOptions = [
      ...new Set(yellowRibbonPrograms.map(program => program.degreeLevel)),
    ];
    // first value of degree level is selected by default; only display division options associated with this degree level
    yellowRibbonDivisionOptions = [
      ...new Set(
        yellowRibbonPrograms
          .filter(
            program =>
              program.degreeLevel === yellowRibbonDegreeLevelOptions[0],
          )
          .map(program => program.divisionProfessionalSchool),
      ),
    ];
    yellowRibbonAmount = yellowRibbonPrograms[0].contributionAmount;
    yellowRibbonMaxAmount = yellowRibbonAmount;
    yellowRibbonDegreeLevel = yellowRibbonPrograms[0].degreeLevel;
    yellowRibbonDivision = yellowRibbonPrograms[0].divisionProfessionalSchool;
    yellowRibbonMaxNumberOfStudents = yellowRibbonPrograms[0].numberOfStudents;
    yellowRibbonProgramIndex = yellowRibbonPrograms[0].index;
  }
  let giBillBenefit = calculator.giBillBenefit;
  // Set default GI BILL benefit status to the lowest rate (DOD or BAH)
  if (institution.country === 'USA') {
    giBillBenefit =
      institution.dodBah && institution.dodBah < institution.bah ? 'no' : 'yes';
  } else {
    giBillBenefit =
      constants.AVGDODBAH && constants.AVGDODBAH < constants.AVGVABAH
        ? 'no'
        : 'yes';
  }
  return {
    ...calculator,
    giBillBenefit,
    type,
    beneficiaryLocationBah: null,
    beneficiaryLocationGrandfatheredBah: null,
    tuitionInState: tuitionInState || 0,
    tuitionOutOfState: tuitionOutOfState || 0,
    tuitionFees: tuitionInState || 0,
    inStateTuitionFees: tuitionInState || 0,
    books: books || 0,
    calendar: calendar || 'semesters',
    yellowRibbonAmount,
    yellowRibbonDegreeLevel,
    yellowRibbonDivision,
    yellowRibbonDegreeLevelOptions,
    yellowRibbonDivisionOptions,
    yellowRibbonMaxAmount,
    yellowRibbonMaxNumberOfStudents,
    yellowRibbonPrograms,
    yellowRibbonProgramIndex,
  };
};