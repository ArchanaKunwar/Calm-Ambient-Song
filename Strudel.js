setcpm(80/4)

$:arrange(
  
  [8,stack(
    note("0 2 4 5 7 9 11 12").scale("C:minor").palindrome()
  .sound("< gm_music_box gm_celesta gm_epiano1 gm_piano gm_acoustic_bass gm_flute gm_string_ensemble_1 gm_music_box >")
    .gain(0.7)
  )],

  [4, stack(
    note("a4 ~ c5 ~ e5 ~ c5 ~")
      .sound("gm_music_box")
      .room(0.7)
      .delay(0.8)
      .gain(0.50)
      ._pianoroll({ labels: 1 }),

    note("a2 ~ ~ ~ e2 ~ ~ ~")
      .sound("gm_celesta")
      .lpf(2000)
      .room(0.7)
      .gain(0.3)._pianoroll()
      
  )],

  [8,stack(
    note("a4 ~ c5 ~ e5 ~ c5 ~ a4 ~ g4 ~ e4 ~ ~ ~")
      .sound("gm_epiano1")
      .room(0.6)
      .delay(0.3)
      .gain(0.4)
      ._pianoroll({ labels: 1 }),

    note("<[a3,c4,e4] [f3,a3,c4] [c4,e4,g4] [g3,b3,d4]>")
      .sound("gm_piano")
      .struct("x ~ x ~ x ~ x ~")
      .room(0.6)
      .gain(0.2)
      ._pianoroll(),

    note("<a1 f1 c2 g1>")
      .sound("gm_acoustic_bass")
      .lpf(400)
      .release(1)
      .gain(0.5)
      ._pianoroll(),
    
    sound("<bd ~ ~ ~, ~ ~ sd ~, ~ hh ~ hh>")
      .bank("RolandTR808")
      .gain(0.22)
      ._punchcard()
  )],

  [4,stack(
    note("e5 ~ g5 ~ a5 ~ g5 ~ e5 ~ d5 ~ c5 ~ ~ ~")
      .sound("gm_flute")
      .room(0.7)
      .delay(0.35)
      .gain(0.3)
      ._pianoroll({ labels: 1 }),

    note("<[a3,c4,e4] [f3,a3,c4] [c4,e4,g4] [g3,b3,d4]>")
      .sound("gm_piano")
      .struct("x ~ x x ~ x ~ x")
      .room(0.5)
      .gain(0.2)
      ._pianoroll(),

    note("<a1 f1 c2 g1>")
      .sound("gm_acoustic_bass")
      .lpf(400)
      .release(1)
      .gain(0.5)
      ._pianoroll(),

    sound("<bd ~ ~ ~, ~ ~ sd ~, ~ hh ~ hh>")
      .bank("RolandTR808")
      .gain(0.22)
      ._punchcard()
  )],

  [8,stack(
    note("e5 ~ a5 ~ g5 ~ e5 ~ d5 ~ c5 ~ a4 ~")
      .sound("gm_string_ensemble_1")
    .attack(0.05)
      .release(1.5)
      .room(0.8)
      .gain(0.28)
      ._pianoroll({ labels: 1 }),

    note("<[a3,c4,e4] [f3,a3,c4] [c4,e4,g4] [g3,b3,d4]>")
      .sound("gm_piano")
      .struct("x ~ x x ~ x ~ x")
      .room(0.5)
      .gain(0.22)
      ._pianoroll(),

    note("<[a2,c3,e3] [f2,a2,c3] [c3,e3,g3] [g2,b2,d3]>")
      .sound("gm_pad_warm")
      .attack(1)
      .release(2)
      .room(1)
      .gain(0.12)
    ._pianoroll()
      ._pitchwheel(),

    note("<a1 f1 c2 g1>")
      .sound("gm_acoustic_bass")
      .lpf(400)
      .release(1)
      .gain(0.5)
      ._pianoroll(),

    sound("<bd ~ ~ ~, ~ ~ sd ~, ~ hh ~ hh>")
      .bank("RolandTR808")
      .gain(0.25)
      ._punchcard()
    
    
  )],

  [8,stack(

    note("e5 ~ a5 ~ g5 ~ e5 ~ d5 ~ c5 ~ a4 ~")
      .sound("gm_string_ensemble_1")
      .attack(0.05)
      .release(1.5)
      .room(0.8)
      .gain(0.28)
      ._pianoroll({ labels: 1 }),

    note("a5 ~ g5 ~ e5 ~ c5 ~ d5 ~ e5 ~ a4 ~")
      .sound("gm_vibraphone")
      .room(0.8).delay(0.4)
      .gain(0.18)
      ._pianoroll(),

    note("<[a3,c4,e4] [f3,a3,c4] [c4,e4,g4] [g3,b3,d4]>")
      .sound("gm_piano")
      .struct("x ~ x x ~ x ~ x")
      .room(0.5)
      .gain(0.22)
      ._pianoroll(),

    note("<[a2,c3,e3] [f2,a2,c3] [c3,e3,g3] [g2,b2,d3]>")
      .sound("gm_pad_warm")
      .attack(1)
      .release(2)
      .room(1)
      .gain(0.12)
      ._pitchwheel(),

    note("<a1 f1 c2 g1>")
      .sound("gm_acoustic_bass")
      .lpf(400)
      .release(1)
      .gain(0.5)
      ._pianoroll(),

    sound("<bd ~ ~ ~, ~ ~ sd ~, ~ hh ~ hh>")
      .bank("RolandTR808")
      .gain(0.25)
      ._punchcard()
      
    
  )],


  [6,stack(
    note("0 2 4 5 7 9 11 12").scale("C:minor").palindrome()
  .sound("< gm_music_box gm_accordion gm_acoustic_bass gm_acoustic_guitar_nylon gm_acoustic_guitar_steel gm_music_box >")
    .gain(0.8)
  )],

  [4,stack(
    note("a4 ~ c5 ~ e4 ~ c4 ~")
      .sound("gm_music_box")
      .room(1) 
      .delay(0.5)
      .gain(saw.range(0.35, 0).slow(4))
    ._pianoroll({ labels: 1 }),

    note("a2 ~ ~ ~")
      .sound("gm_celesta")
      .lpf(1200)
      .room(0.9)
      .gain(saw.range(0.2, 0).slow(4))
    ._pianoroll()

    
 
  )],

  [2,stack(
    note("c4").sound("gm_celesta").room(1).release(2)
  )],

)




