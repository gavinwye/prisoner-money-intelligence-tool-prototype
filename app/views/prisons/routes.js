module.exports = function (router, content) {


  router.post('/prisons/add-prisons', function (req, res) {
    res.redirect('/prisons/')
  })

  router.post('/prisons/all-prisons', function (req, res) {
    res.redirect('/prisons/')
  })

  router.post('/prisons/success', function (req, res) {
    res.redirect('/')
  })

  // END__######################################################################################################
}
