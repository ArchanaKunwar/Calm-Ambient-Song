arrange(

  [4,stack(
    note("g3").sound("gm_seashore")
      .attack(2).release(2).gain(0.25)._scope(),

    note("e5 ~ ~ g5 ~ ~ ~ c6 ~ ~ ~ ~ ~ ~ ~")
      .sound("gm_bird_tweet")
      .room(0.9).gain(0.35)._pianoroll(),
    note("<[g2,b2,d3] [e2,g2,b2]>")
      .sound("gm_pad_new_age")
      .attack(2).release(4).room(1).gain(0.12)._pitchwheel()
    

  )],


  


  
  [4,stack(
    note("<[g3,b3,d4] [e3,g3,b3] [c3,e3,g3] [d3,f#3,a3]>")
      .sound("gm_acoustic_guitar_nylon")
      .attack(0.02)
      .release(1.5)
      .room(0.7)
      .gain(0.5)
      .pianoroll({ labels: 1 }),


    s("white")
      .lpf(sine.range(200, 2000).slow(16))
      .gain(0.06)
      .room(1)
      .pan(sine.range(-0.5, 0.5).slow(8))
      ._scope(),

    note("c6 e6 g6")
      .sound("gm_celesta")
      .room(1)
      .gain(0.08)
      .slow(4)
      .struct("x ~ ~ ~ x ~ ~ ~")
      ._pianoroll()

    

    
  )],

  [8, stack(
    note("<[g3,b3,d4] [e3,g3,b3] [c3,e3,g3] [d3,f#3,a3]>")
      .sound("gm_acoustic_guitar_nylon")
      .attack(0.01)
      .release(1.2)
      .room(0.6)
      .gain(0.5)
      ._pianoroll({ labels: 1 }),

    note("<g2 e2 c2 d2>")
      .sound("gm_acoustic_bass")
      .lpf(400)
      .release(0.8)
      .gain(0.4)
      ._pianoroll(),

    note("g1 ~ ~ ~ d2 ~ ~ ~")
      .sound("sine")
      .lpf(150)
      .attack(2)
      .release(4)
      .gain(0.25)
      .room(0.6)
      ._scope(),

    sound("<bd ~ ~ ~ ~ sd ~>")
      .bank("RolandTR808")
      .gain(0.18)
      .room(0.6)
      .lpf(500)
      ._punchcard(),

    s("white")
      .lpf(sine.range(200, 2000).slow(16))
      .gain(0.06)
      .room(0.8)
      .pan(sine.range(-0.5, 0.5).slow(8))
      ._scope(),

    note("c6 e6 g6")
      .sound("gm_celesta")
      .room(0.3)
      .gain(0.16)
      .slow(4)
      .struct("x ~ ~ ~ x ~ ~ ~")
      ._pianoroll()
  )],


  [8, stack(
    note("<[g3,b3,d4] [e3,g3,b3] [c3,e3,g3] [d3,f#3,a3]>")
      .sound("gm_acoustic_guitar_nylon")
      .attack(0.01)
      .release(0.3)
      .room(0.7)
      .gain(0.5)
      ._pianoroll({ labels: 1 }),

    note("<g2 e2 c2 d2>")
      .sound("gm_acoustic_bass")
      .lpf(400)
      .release(0.5)
      .gain(0.45)
      ._pianoroll(),

    note("g1 ~ ~ ~ d2 ~ ~ ~")
      .sound("sine")
      .lpf(150)
      .attack(1.5)
      .release(4)
      .gain(0.4)
      .room(0.3)
      ._scope(),

    sound("<bd ~ ~ ~ ~ sd ~>")
      .bank("RolandTR808")
      .gain(0.2)
      ._punchcard(),

    note("g4 ~ b4 ~ d5 ~ b4 ~ e4 ~ g4 ~ b4 ~ c5 ~ e5 ~ g5 ~ e5 ~ d5 ~ f#4 ~ a4 ~ d5 ~")
      .sound("gm_acoustic_guitar_steel")
      .room(0.4)
      .delay(0.3)
      .gain(0.25)
      ._pianoroll({ labels: 1 }),

    note("g5 b5 d6 a5 g5 e5 d5 ~")
      .sound("gm_music_box")
      .room(0.5)
      .delay(0.6)
      .gain(0.23)
      .slow(2)
      ._pianoroll(),

    s("white")
      .lpf(sine.range(300, 2500).slow(16))
      .gain(0.05)
      .room(1)
      .pan(sine.range(-0.5, 0.5).slow(8))
      ._scope()
  )],

  [4, stack(
    note("g1 ~ ~ ~ d2 ~ ~ ~")
      .sound("sine")
      .lpf(150)
      .attack(2)
      .release(4)
      .gain(0.35)
      .room(0.8)
      ._scope(),

    note("g5 b5 d6 a5 g5 e5 d5 ~")
      .sound("gm_music_box")
      .room(1)
      .delay(0.4)
      .gain(0.22)
      .slow(2)
      ._pianoroll(),

    s("white")
      .lpf(sine.range(200, 3000).slow(8))
      .gain(0.08)
      .room(1)
      .pan(sine.range(-0.6, 0.6).slow(8))
      ._scope(),

    note("c6 e6 g6")
      .sound("gm_celesta")
      .room(1)
      .gain(0.1)
      .slow(4)
      .struct("x ~ ~ ~ x ~ ~ ~")
      ._pianoroll()
  )],


  [6,stack(
    note("c4").sound("gm_seashore").gain(0.2)._scope(),
    note("~ ~ e5 ~ ~ g5 ~ ~ ~ c6 ~ ~ ~ ~ ~ ~")
      .sound("gm_bird_tweet")
      .room(0.9).gain(0.3)._pianoroll(),

    note("<[c4,e4,g4] [a3,c4,e4] [f3,a3,c4] [g3,b3,d4]>")
      .sound("gm_acoustic_guitar_steel")
      .struct("x ~ x x ~ x ~ x")
      .room(0.5).gain(0.3)._pianoroll(),

    note("c5 ~ e5 ~ g5 ~ e5 ~ a4 ~ c5 ~ e5 ~ c5 ~")
      .sound("gm_flute")
      .room(0.7).delay(0.3).gain(0.3)._pianoroll(),

    note("<c2 a1 f1 g1>")
      .sound("gm_acoustic_bass")
      .lpf(400).release(0.8).gain(0.4)._pianoroll(),

    note("<[c3,e3,g3] [a2,c3,e3] [f2,a2,c3] [g2,b2,d3]>")
      .sound("gm_pad_new_age")
      .attack(1.5).release(3).room(1).gain(0.1)._pitchwheel(),

  )],



  

  [4,stack(
    note("<[g3,b3,d4] [e3,g3,b3] [c3,e3,g3] [d3,f#3,a3]>")
      .sound("gm_acoustic_guitar_nylon")
      .attack(0.05)
      .release(2.5)
      .room(0.5)
      .gain(saw.range(0.6, 0).slow(4)) // gentle fade out
      .pianoroll(),

    s("white")
      .lpf(sine.range(200, 1500).slow(8))
      .gain(saw.range(0.06, 0).slow(4))
      .room(0.6)
      .pan(sine.range(-0.5, 0.5).slow(8))
      ._scope(),

    note("g5 b5 d6")
      .sound("gm_music_box")
      .room(0.3)
      .gain(saw.range(0.18, 0).slow(4))
      .slow(2)
      ._pianoroll()

    
  )],

  [4, stack(
    note("<[g3,b3,d4] [e3,g3,b3] [c3,e3,g3] [d3,f#3,a3]>")
      .sound("gm_acoustic_guitar_nylon")
      .attack(0.05).release(2.5).room(0.9)
      .gain(saw.range(0.5, 0).slow(4))
      ._pianoroll(),

    note("g3").sound("gm_seashore")
      .attack(1).release(3)
      .gain(saw.range(0.2, 0).slow(4))
      ._scope(),

    note("c6 ~ ~ ~ ~ ~ ~ ~")
      .sound("gm_bird_tweet")
      .room(1).gain(saw.range(0.25, 0).slow(4))
      ._pianoroll(),

    note("<[g2,b2,d3]>")
      .sound("gm_pad_new_age")
      .attack(2).release(5).room(1)
      .gain(saw.range(0.1, 0).slow(4))
      ._pitchwheel()
  )]
)
