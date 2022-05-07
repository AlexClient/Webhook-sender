function toggle () {
  document.getElementById('arrow').classList.toggle('show-arrow')
  document.getElementById('profile').classList.toggle('show')
}

function send () {
  const date = Date.now()
  const link = document.getElementById('link').value
  const name = document.getElementById('name').value
  const avatar = document.getElementById('avatar').value
  var message = document.getElementById('message').value

  if (!link) {
    new Noty({
      type: 'error',
      text: `Proporcione un enlace de webhook válido`,
      timeout: 3000,
      animation: {
        open: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 450, y: 0 },
              to: { x: 0, y: 0 },
              easing: 'bounce',
              duration: 1000,
              bounces: 4,
              stiffness: 3
            })
            .scale({
              from: { x: 1.2, y: 1 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 4,
              stiffness: 1
            })
            .scale({
              from: { x: 1, y: 1.2 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 6,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        },
        close: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 0, y: 0 },
              to: { x: 450, y: 0 },
              easing: 'bounce',
              duration: 500,
              bounces: 4,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        }
      }
    }).show()
    return
  }

  if (!message) {
    new Noty({
      type: 'error',
      text: `Proporcionar un mensaje de webhook`,
      animation: {
        open: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 450, y: 0 },
              to: { x: 0, y: 0 },
              easing: 'bounce',
              duration: 1000,
              bounces: 4,
              stiffness: 3
            })
            .scale({
              from: { x: 1.2, y: 1 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 4,
              stiffness: 1
            })
            .scale({
              from: { x: 1, y: 1.2 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 6,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        },
        close: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 0, y: 0 },
              to: { x: 450, y: 0 },
              easing: 'bounce',
              duration: 500,
              bounces: 4,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        }
      }
    }).show()
    return
  }

  if (message.length > 2000) {
    message = message.substring(0, 2000)
  }

  if (!link.startsWith('https://discord.com/api/webhooks/')) {
    new Noty({
      type: 'error',
      text: 'Proporcione un enlace de webhook válido',
      timeout: 2000,
      animation: {
        open: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 450, y: 0 },
              to: { x: 0, y: 0 },
              easing: 'bounce',
              duration: 1000,
              bounces: 4,
              stiffness: 3
            })
            .scale({
              from: { x: 1.2, y: 1 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 4,
              stiffness: 1
            })
            .scale({
              from: { x: 1, y: 1.2 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 6,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        },
        close: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 0, y: 0 },
              to: { x: 450, y: 0 },
              easing: 'bounce',
              duration: 500,
              bounces: 4,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        }
      }
    }).show()

    return
  }
  $.ajax({
    type: 'POST',
    url: link,
    data: { content: message, username: name, avatar_url: avatar }
  })
    .done(function (response) {
      new Noty({
        type: 'success',
        text: `Webhook enviado con éxito en ${Date.now() - date}ms`,
        timeout: 400,
        animation: {
          open: function (promise) {
            var n = this
            new Bounce()
              .translate({
                from: { x: 450, y: 0 },
                to: { x: 0, y: 0 },
                easing: 'bounce',
                duration: 1000,
                bounces: 4,
                stiffness: 3
              })
              .scale({
                from: { x: 1.2, y: 1 },
                to: { x: 1, y: 1 },
                easing: 'bounce',
                duration: 1000,
                delay: 100,
                bounces: 4,
                stiffness: 1
              })
              .scale({
                from: { x: 1, y: 1.2 },
                to: { x: 1, y: 1 },
                easing: 'bounce',
                duration: 1000,
                delay: 100,
                bounces: 6,
                stiffness: 1
              })
              .applyTo(n.barDom, {
                onComplete: function () {
                  promise(function (resolve) {
                    resolve()
                  })
                }
              })
          },
          close: function (promise) {
            var n = this
            new Bounce()
              .translate({
                from: { x: 0, y: 0 },
                to: { x: 450, y: 0 },
                easing: 'bounce',
                duration: 500,
                bounces: 4,
                stiffness: 1
              })
              .applyTo(n.barDom, {
                onComplete: function () {
                  promise(function (resolve) {
                    resolve()
                  })
                }
              })
          }
        }
      }).show()
    })
    .fail(function (xhr, status, message) {
      
      if (xhr.status === 429) {
        new Noty({
          type: 'error',
          text: `429 - Demasiadas solicitudes. Re-intentar en ${JSON.parse(xhr.responseText).retry_after}ms`,
          timeout: 2000,
          animation: {
            open: function (promise) {
              var n = this
              new Bounce()
                .translate({
                  from: { x: 450, y: 0 },
                  to: { x: 0, y: 0 },
                  easing: 'bounce',
                  duration: 1000,
                  bounces: 4,
                  stiffness: 3
                })
                .scale({
                  from: { x: 1.2, y: 1 },
                  to: { x: 1, y: 1 },
                  easing: 'bounce',
                  duration: 1000,
                  delay: 100,
                  bounces: 4,
                  stiffness: 1
                })
                .scale({
                  from: { x: 1, y: 1.2 },
                  to: { x: 1, y: 1 },
                  easing: 'bounce',
                  duration: 1000,
                  delay: 100,
                  bounces: 6,
                  stiffness: 1
                })
                .applyTo(n.barDom, {
                  onComplete: function () {
                    promise(function (resolve) {
                      resolve()
                    })
                  }
                })
            },
            close: function (promise) {
              var n = this
              new Bounce()
                .translate({
                  from: { x: 0, y: 0 },
                  to: { x: 450, y: 0 },
                  easing: 'bounce',
                  duration: 500,
                  bounces: 4,
                  stiffness: 1
                })
                .applyTo(n.barDom, {
                  onComplete: function () {
                    promise(function (resolve) {
                      resolve()
                    })
                  }
                })
            }
          }
        }).show()

        return
      }
  
      new Noty({
        type: 'error',
        text: JSON.parse(xhr.responseText).message,
        timeout: 5000,
        animation: {
          open: function (promise) {
            var n = this
            new Bounce()
              .translate({
                from: { x: 450, y: 0 },
                to: { x: 0, y: 0 },
                easing: 'bounce',
                duration: 1000,
                bounces: 4,
                stiffness: 3
              })
              .scale({
                from: { x: 1.2, y: 1 },
                to: { x: 1, y: 1 },
                easing: 'bounce',
                duration: 1000,
                delay: 100,
                bounces: 4,
                stiffness: 1
              })
              .scale({
                from: { x: 1, y: 1.2 },
                to: { x: 1, y: 1 },
                easing: 'bounce',
                duration: 1000,
                delay: 100,
                bounces: 6,
                stiffness: 1
              })
              .applyTo(n.barDom, {
                onComplete: function () {
                  promise(function (resolve) {
                    resolve()
                  })
                }
              })
          },
          close: function (promise) {
            var n = this
            new Bounce()
              .translate({
                from: { x: 0, y: 0 },
                to: { x: 450, y: 0 },
                easing: 'bounce',
                duration: 500,
                bounces: 4,
                stiffness: 1
              })
              .applyTo(n.barDom, {
                onComplete: function () {
                  promise(function (resolve) {
                    resolve()
                  })
                }
              })
          }
        }
      }).show()
    })
}

$(document).ready(function () {
   Swal.fire(
    'Noticia',
    'Este remitente de webhook se creó solo por diversión<br> no abuses / usarlo para hacer daño<br>No soy responsable de ninguna de tus acciones.',
    'info'
  )
  const btntheme = document.getElementById('theme')

  const currentTheme = localStorage.getItem('theme')
  if (!currentTheme) {
    $('#theme').prop('checked', true)
    document.body.classList.toggle('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    if (currentTheme == 'dark') {
      $('#theme').prop('checked', false)
      document.body.classList.toggle('light')
    } else if (currentTheme == 'light') {
      $('#theme').prop('checked', true)
      document.body.classList.toggle('dark')
    }
  }

  btntheme.addEventListener('click', function () {
    document.body.classList.toggle('light')
    var theme = document.body.classList.contains('light') ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
  })
})
