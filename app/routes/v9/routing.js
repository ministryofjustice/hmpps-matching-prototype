
var version = "/v9/";

module.exports = function(router) {

//  Matching list - unfiltered
router.post(version + 'matching-list', function (req, res) {
  res.redirect(version + 'matching-list-expanded')
})

//  Manage application - updating status
router.post(version + 'manage-progress-update', function (req, res) {
  res.redirect(version + 'manage-progress-updated')
})

//  Job upload - multi page 1
router.post(version + 'upload-add-job-multi-1', function (req, res) {
  res.redirect(version + 'upload-add-job-multi-2')
})

//  Job upload - multi page 2
router.post(version + 'upload-add-job-multi-2', function (req, res) {
  res.redirect(version + 'upload-add-job-multi-3')
})

//  Job upload - multi page 3
router.post(version + 'upload-add-job-multi-3', function (req, res) {
  res.redirect(version + 'upload-add-job-multi-4')
})

//  Job upload - multi page 4
router.post(version + 'upload-add-job-multi-4', function (req, res) {
  res.redirect(version + 'upload-add-job-multi-check')
})


//   // q1 Work on release
//   router.post(version + 'q1-work-on-release', function (req, res) {
//     if (req.session.data['work-on-release'] == "Yes")
//   {
//     res.redirect(version + 'q2-qualifications-overview')
//   }
//   else
//   {
//     res.redirect(version + 'light-q2-why-not-work')
//   }
//   })
//
//   // LIGHT q2 Why not work
//   router.post(version + 'light-q2-why-not-work', function (req, res) {
//     res.redirect(version + 'light-q3-qualifications-overview')
//   })
//
//   // LIGHT q3 Qualifications overview (with question around adding)
//   router.post(version + 'light-q3-qualifications-overview', function (req, res) {
//     if (req.session.data['add-quals-decision'] == "Yes")
//   {
//     res.redirect(version + 'q4a-level-of-qual')
//   }
//   else
//   {
//     res.redirect(version + 'q5-vocational')
//   }
//   })
//
//   // LIGHT q4 In prison work
//   router.post(version + 'light-q4-in-prison-work', function (req, res) {
//     res.redirect(version + 'light-q5-in-prison-training')
//   })
//
//   // LIGHT q5 In prison training
//   router.post(version + 'light-q5-in-prison-training', function (req, res) {
//     res.redirect(version + 'q10a-goals-type')
//   })
//
//   // FULL q2 Qualifications overview
//   router.post(version + 'q2-qualifications-overview', function (req, res) {
//     res.redirect(version + 'q3-highest-education')
//   })
//
//   // FULL q3 Qualifications overview
//   router.post(version + 'q3-highest-education', function (req, res) {
//     if (req.session.data['highest-education'] == "Primary school")
//   {
//     res.redirect(version + 'q5-vocational')
//   }
//   else if (req.session.data['highest-education'] == "Secondary school, left before taking exams")
//   {
//     res.redirect(version + 'q5-vocational')
//   }
//   else if (req.session.data['highest-education'] == "Not sure")
//   {
//     res.redirect(version + 'q5-vocational')
//   }
//   else if (req.session.data['highest-education'] == "Undergraduate degree at university")
//   {
//     res.redirect(version + 'q4b-add-qual')
//   }
//   else if (req.session.data['highest-education'] == "Postgraduate degree at university")
//   {
//     res.redirect(version + 'q4b-add-qual')
//   }
//   else
//   {
//     res.redirect(version + 'q4a-level-of-qual')
//   }
//   })
//
//   // FULL q4a Level of qualification
//   router.post(version + 'q4a-level-of-qual', function (req, res) {
//     res.redirect(version + 'q4b-add-qual')
//   })
//
//   // FULL q4b Add qualification
//   router.post(version + 'q4b-add-qual', function (req, res) {
//     res.redirect(version + 'q2-qualifications-overview-2')
//   })
//
//   // FULL q2 Qualifications overview - with educational added
//   router.post(version + 'q2-qualifications-overview-2', function (req, res) {
//     res.redirect(version + 'q5-vocational')
//   })
//
//   // q5 Vocational and other qualifications
//   router.post(version + 'q5-vocational', function (req, res) {
//     if (req.session.data['work-on-release'] == "Yes")
//   {
//     res.redirect(version + 'q6-work-before')
//   }
//   else
//   {
//     res.redirect(version + 'light-q4-in-prison-work')
//   }
//   })
//
//   // FULL q6 Work before?
//   router.post(version + 'q6-work-before', function (req, res) {
//     res.redirect(version + 'q7a-experience-sectors')
//   })
//
//   // FULL q7a Experience sectors
//   router.post(version + 'q7a-experience-sectors', function (req, res) {
//     res.redirect(version + 'q7b-experience-details')
//   })
//
//   // FULL q7b Experience details (one of this screen per sectors checkbox selected?? Not working yet)
//   router.post(version + 'q7b-experience-details', function (req, res) {
//     res.redirect(version + 'q8a-job-sectors')
//   })
//
//   // FULL q8a Job sectors
//   router.post(version + 'q8a-job-sectors', function (req, res) {
//     res.redirect(version + 'q8b-job-details')
//   })
//
//   // FULL q8b Job details
//   router.post(version + 'q8b-job-details', function (req, res) {
//     res.redirect(version + 'q9a-skills')
//   })
//
//   // FULL q9a Skills
//   router.post(version + 'q9a-skills', function (req, res) {
//     res.redirect(version + 'q9b-interests')
//   })
//
//   // FULL q9b Interests
//   router.post(version + 'q9b-interests', function (req, res) {
//     res.redirect(version + 'q10a-goals-type')
//   })
//
//   // q10a Goals type
//   router.post(version + 'q10a-goals-type', function (req, res) {
//     res.redirect(version + 'q10b-goals-add')
//   })
//
//   // q10b Goals add
//   router.post(version + 'q10b-goals-add', function (req, res) {
//     res.redirect(version + 'q10c-goals-overview')
//   })
//
//   // q10c Goals overview
//   router.post(version + 'q10c-goals-overview', function (req, res) {
//    if (req.session.data['goalsReview'] == "true")
//   {
//     res.redirect(version + 'profile/after-induction/damien-adams')
//   }
//   else
//   {
//     res.redirect(version + 'check-answers')
//   }
//   })
//
//
//   // Check answers
//   router.post(version + 'check-answers', function (req, res) {
//     res.redirect(version + 'profile/after-induction/damien-adams')
//   })
//
// module.exports = router




}
