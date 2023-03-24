
var version = "/v3/";

module.exports = function(router) {

  // q1 Work on release
  router.post(version + 'q1-work-on-release', function (req, res) {
    if (req.session.data['work-on-release'] == "Yes")
  {
    res.redirect(version + 'full-q2-qualifications-overview')
  }
  else
  {
    res.redirect(version + 'light-q2-why-not-work')
  }
  })

  // FULL q2 Qualifications overview
  router.post(version + 'full-q2-qualifications-overview', function (req, res) {
    res.redirect(version + 'full-q3-highest-education')
  })

  // FULL q3 Qualifications overview
  router.post(version + 'full-q3-highest-education', function (req, res) {
    res.redirect(version + 'full-q4a-level-of-qual')
  })

  // FULL q4a Level of qualification
  router.post(version + 'full-q4a-level-of-qual', function (req, res) {
    res.redirect(version + 'full-q4b-add-qual')
  })

  // FULL q4b Add qualification
  router.post(version + 'full-q4b-add-qual', function (req, res) {
    res.redirect(version + 'full-q2-qualifications-overview')
  })


module.exports = router




}
