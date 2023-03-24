
var version = "/v3/";

module.exports = function(router) {

  // q1 Work on release
  router.post(version + 'q1-work-on-release', function (req, res) {
    if (req.session.data['work-on-release'] == "Yes")
  {
    res.redirect(version + 'q2-qualifications-overview')
  }
  else
  {
    res.redirect(version + 'light-q2-why-not-work')
  }
  })

  // FULL q2 Qualifications overview
  router.post(version + 'q2-qualifications-overview', function (req, res) {
    res.redirect(version + 'q3-highest-education')
  })

  // FULL q3 Qualifications overview
  router.post(version + 'q3-highest-education', function (req, res) {
    if (req.session.data['highest-education'] == "Primary school")
  {
    res.redirect(version + 'q5-vocational')
  }
  else if (req.session.data['highest-education'] == "Secondary school, left before taking exams")
  {
    res.redirect(version + 'q5-vocational')
  }
  else
  {
    res.redirect(version + 'q4a-level-of-qual')
  }
  })

  // FULL q4a Level of qualification
  router.post(version + 'q4a-level-of-qual', function (req, res) {
    res.redirect(version + 'q4b-add-qual')
  })

  // FULL q4b Add qualification
  router.post(version + 'q4b-add-qual', function (req, res) {
    res.redirect(version + 'q2-qualifications-overview-2')
  })

  // FULL q2 Qualifications overview - with educational added
  router.post(version + 'q2-qualifications-overview-2', function (req, res) {
    res.redirect(version + 'q5-vocational')
  })

  // q5 Vocational and other qualifications
  router.post(version + 'q5-vocational', function (req, res) {
    res.redirect(version + 'q6-work-before')
  })

  // FULL q6 Work before?
  router.post(version + 'q6-work-before', function (req, res) {
    res.redirect(version + 'q7a-experience-sectors')
  })

  // FULL q7a Experience sectors
  router.post(version + 'q7a-experience-sectors', function (req, res) {
    res.redirect(version + 'q7b-experience-details')
  })

  // FULL q7b Experience details (one of this screen per sectors checkbox selected?? Not working yet)
  router.post(version + 'q7b-experience-details', function (req, res) {
    res.redirect(version + 'q8a-job-sectors')
  })

  // FULL q8a Experience details (one of this screen per sectors checkbox selected?? Not working yet)
  router.post(version + 'q8a-job-sectors', function (req, res) {
    res.redirect(version + 'q8b-job-details')
  })

module.exports = router




}
