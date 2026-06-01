### Roster Details<br />
Team Name: illwill<br />
Roster: 7Kick, adamS, dycha, hAdji, nEMANHA<br />
Global Rank: [60](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [43]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1205.5<br />
<br />
Final Rank Value (1205.5) = Starting Rank Value (1086.9) + Head To Head Adjustments (118.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.167[<sup>2</sup>](#table1)
- LAN Wins: 0.551[<sup>2</sup>](#table1)

The average of these factors is 0.361<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1086.9
- 400 + ( ( 0.361 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1086.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |     3170 | 2026-03-15 | Metizport       | L   | 0.680      | -            | -                | -                | -         |   -15.29 | 7Kick, adamS, dycha, FinigaN, hAdji  |
|           60 |     3200 | 2026-03-14 | NOVAQ           | W   | 0.674      | -            | -                | -                | -         |     4.00 | 7Kick, adamS, dycha, FinigaN, hAdji  |
|           59 |     3272 | 2026-03-13 | Ursa            | W   | 0.665      | 0.384        | -                | 0.962 (0.246)    | -         |     3.81 | 7Kick, adamS, dycha, FinigaN, hAdji  |
|           58 |     3734 | 2026-03-04 | BIG             | L   | 0.606      | -            | -                | -                | -         |    -5.15 | 7Kick, adamS, dycha, fostar, hAdji   |
|           57 |     3795 | 2026-03-03 | DragonClaw      | W   | 0.598      | 0.435        | 0.031 (0.008)    | 0.505 (0.131)    | -         |     3.71 | 7Kick, adamS, dycha, fostar, hAdji   |
|           56 |     4105 | 2026-02-24 | GamerLegion     | L   | 0.553      | -            | -                | -                | -         |    -1.10 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           55 |     4118 | 2026-02-24 | SINNERS         | W   | 0.552      | 0.342        | 0.119 (0.022)    | -                | 1 (0.552) |    13.11 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           54 |     4130 | 2026-02-24 | AM              | W   | 0.552      | 0.435        | -                | 0.725 (0.174)    | -         |     9.87 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           53 |     4139 | 2026-02-23 | ECSTATIC        | W   | 0.548      | 0.342        | 0.040 (0.007)    | -                | 1 (0.548) |     8.05 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           52 |     4150 | 2026-02-23 | BC.Game         | W   | 0.547      | 0.342        | 0.047 (0.009)    | -                | 1 (0.547) |     6.94 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           51 |     4160 | 2026-02-23 | GamerLegion     | L   | 0.546      | -            | -                | -                | -         |    -0.91 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           50 |     4163 | 2026-02-23 | Phantom         | W   | 0.545      | 0.342        | -                | 0.736 (0.137)    | 1 (0.545) |     7.30 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           49 |     4188 | 2026-02-22 | Sashi           | W   | 0.541      | -            | -                | -                | 1 (0.541) |     8.43 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           48 |     4193 | 2026-02-22 | 9INE            | W   | 0.541      | -            | -                | -                | 1 (0.541) |     4.65 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           47 |     4203 | 2026-02-22 | BC.Game         | W   | 0.540      | 0.342        | 0.047 (0.009)    | -                | 1 (0.540) |     7.58 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           46 |     4213 | 2026-02-22 | BOSS            | W   | 0.540      | -            | -                | -                | 1 (0.540) |     3.17 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           45 |     4220 | 2026-02-22 | MASONIC         | W   | 0.540      | -            | -                | -                | 1 (0.540) |     6.50 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           44 |     4229 | 2026-02-22 | Alliance        | L   | 0.539      | -            | -                | -                | -         |    -3.08 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           43 |     4242 | 2026-02-22 | OlyBet          | W   | 0.539      | -            | -                | -                | -         |     2.47 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           42 |     4259 | 2026-02-21 | Leo             | W   | 0.535      | -            | -                | -                | -         |     2.50 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           41 |     4308 | 2026-02-20 | Omega           | L   | 0.528      | -            | -                | -                | -         |    -8.53 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           40 |     4317 | 2026-02-20 | Lavked          | W   | 0.528      | 0.384        | -                | 1.000 (0.203)    | -         |     3.81 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           39 |     4325 | 2026-02-20 | cirahvi         | W   | 0.527      | -            | -                | -                | -         |     2.25 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           38 |     4372 | 2026-02-19 | DragonClaw      | W   | 0.521      | -            | -                | -                | -         |     4.99 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           37 |     4378 | 2026-02-19 | PsychoFace      | L   | 0.520      | -            | -                | -                | -         |   -10.86 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           36 |     4424 | 2026-02-18 | INOX Division   | W   | 0.514      | 0.384        | -                | 0.900 (0.178)    | -         |     3.50 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           35 |     4485 | 2026-02-17 | KOLESIE         | W   | 0.508      | 0.384        | 0.033 (0.006)    | -                | -         |     8.70 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           34 |     4511 | 2026-02-17 | BRUTE           | W   | 0.505      | -            | -                | -                | -         |     2.47 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           33 |     4521 | 2026-02-16 | Bebop           | L   | 0.501      | -            | -                | -                | -         |   -13.49 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           32 |     4542 | 2026-02-16 | VP.Prodigy      | W   | 0.500      | -            | -                | -                | -         |     0.93 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           31 |     4588 | 2026-02-15 | Fuzos           | W   | 0.494      | -            | -                | -                | -         |     1.53 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           30 |     4654 | 2026-02-14 | Monte           | L   | 0.487      | -            | -                | -                | -         |    -1.98 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           29 |     4675 | 2026-02-14 | Famalicão       | L   | 0.486      | -            | -                | -                | -         |   -13.42 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           28 |     4678 | 2026-02-14 | KOLESIE         | W   | 0.485      | -            | -                | -                | 1 (0.485) |     8.44 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           27 |     4710 | 2026-02-13 | ENCE            | W   | 0.480      | -            | -                | -                | -         |     3.62 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           26 |     4718 | 2026-02-13 | Monte           | L   | 0.479      | -            | -                | -                | -         |    -2.02 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           25 |     4727 | 2026-02-13 | ENCE            | W   | 0.478      | -            | -                | -                | -         |     3.48 | 7Kick, adamS, dycha, hAdji, nEMANHA  |
|           24 |     4973 | 2026-02-05 | ECSTATIC        | W   | 0.427      | 0.435        | 0.040 (0.007)    | -                | -         |     6.98 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           23 |     4977 | 2026-02-05 | Nuclear TigeRES | W   | 0.426      | 0.435        | 0.047 (0.009)    | 0.748 (0.138)    | -         |    10.19 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           22 |     4995 | 2026-02-04 | Betclic         | W   | 0.421      | -            | -                | -                | -         |     8.55 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           21 |     5038 | 2026-02-03 | Nemesis         | W   | 0.411      | 0.435        | 0.141 (0.025)    | 0.978 (0.175)    | -         |     9.30 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           20 |     5171 | 2026-01-30 | EAC             | W   | 0.385      | 0.435        | -                | 0.768 (0.129)    | -         |     7.81 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           19 |     5189 | 2026-01-29 | 1win            | L   | 0.380      | -            | -                | -                | -         |    -3.13 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           18 |     5201 | 2026-01-28 | ex-RUBY         | W   | 0.375      | 0.435        | -                | 0.989 (0.161)    | -         |     3.56 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           17 |     5245 | 2026-01-27 | ECSTATIC        | W   | 0.365      | 0.435        | 0.040 (0.006)    | -                | -         |     6.58 | 7Kick, adamS, fostar, hAdji, smooya  |
|           16 |     5261 | 2026-01-26 | Nemiga          | L   | 0.358      | -            | -                | -                | -         |    -2.55 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           15 |     5309 | 2026-01-24 | Ursa            | L   | 0.347      | -            | -                | -                | -         |    -7.76 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           14 |     5323 | 2026-01-24 | FAVBET          | W   | 0.345      | -            | -                | -                | -         |     2.24 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           13 |     5352 | 2026-01-23 | MOUZ NXT        | W   | 0.340      | -            | -                | -                | -         |     5.16 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           12 |     5371 | 2026-01-23 | BET-M           | W   | 0.339      | -            | -                | -                | -         |     7.78 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           11 |     5403 | 2026-01-22 | TNC             | L   | 0.334      | -            | -                | -                | -         |    -6.61 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|           10 |     5441 | 2026-01-21 | AM              | W   | 0.328      | -            | -                | -                | -         |     0.88 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            9 |     5458 | 2026-01-21 | ALLINNERS       | W   | 0.326      | -            | -                | -                | -         |     0.86 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            8 |     5473 | 2026-01-20 | Clutchain fe    | W   | 0.320      | -            | -                | -                | -         |     0.88 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            7 |     5518 | 2026-01-18 | Sangal          | W   | 0.306      | -            | -                | -                | -         |     0.95 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            6 |     5574 | 2026-01-17 | Ursa            | W   | 0.299      | -            | -                | -                | -         |     2.58 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            5 |     5595 | 2026-01-16 | Petardka        | W   | 0.294      | -            | -                | -                | -         |     0.34 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            4 |     5656 | 2026-01-15 | UNiTY           | L   | 0.288      | -            | -                | -                | -         |    -7.67 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            3 |     5684 | 2026-01-14 | BASEMENT BOYS   | W   | 0.281      | -            | -                | -                | -         |     6.27 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            2 |     5713 | 2026-01-13 | MASONIC         | W   | 0.272      | -            | -                | -                | -         |     5.20 | 7Kick, adamS, fostar, hAdji, nEMANHA |
|            1 |     5727 | 2026-01-12 | Universe        | W   | 0.264      | -            | -                | -                | -         |     0.17 | 7Kick, adamS, fostar, hAdji, nEMANHA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,248.63)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.681 | $1,500.00      | $1,021.75       |
| 2026-03-05 |      0.614 | $2,000.00      | $1,228.33       |
| 2026-02-24 |      0.555 | $1,750.00      | $970.54         |
| 2026-02-24 |      0.553 | $2,965.00      | $1,640.56       |
| 2026-02-14 |      0.487 | $2,500.00      | $1,216.63       |
| 2026-02-05 |      0.427 | $22,000.00     | $9,395.29       |
| 2026-01-30 |      0.388 | $2,000.00      | $775.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
