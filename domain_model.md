| Classes          | Properties| Methods             | Notes                             | 
|                  |           |                     |                                   |                         
|   Cohort Manager |  array    | createCohort(name)  | Creates new instance of cohort    |
|                  |           | searchForCohort('') | Searches by name                  |                        
|                  |           | removeCohort('')    | Removes cohort by name            |                          
|                  |           |                     |                                   |                         
|   Cohort         |   id      | addStudent()        | Adds a student to cohort instance |                        
|                  |   array   |                     |- May be accessed through manager- |                         
|                  |           |                     |                                   |                          
|                  |           | removeStudent()     | Removes student from cohort inst..|                         
|                  |           |                     |- May be accessed through manager- |                         
|                  |           |                     |                                   |                         
|                  |           | FindStudentByID     | Searches for student by their ID  |
|                  |           |                     |                                   |
|                  |           |                     |                                   |
|   Student        |   array   |   studentID         | acts as a database of students    |
|                  |           |   firstName         |                                   |
|                  |           |   lastName          |                                   |
|                  |           |   githubUser        |                                   |
|                  |           |   email             |                                   |



The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name (done)
- Search for a cohort by cohort name (done)
- Add student to a specific cohort (done)  
- Remove a cohort by cohort name     (done)
- Remove student from a specific cohort (done)
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```

