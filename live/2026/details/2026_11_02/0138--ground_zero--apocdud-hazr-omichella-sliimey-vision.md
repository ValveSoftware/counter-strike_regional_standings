### Roster Details<br />
Team Name: Ground Zero<br />
Roster: apocdud, hazr, Omichella, sliimey, vision<br />
Global Rank: [138](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [16]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  911.4<br />
<br />
Final Rank Value (911.4) = Starting Rank Value (941.3) + Head To Head Adjustments (-29.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.496[<sup>2</sup>](#table1)

The average of these factors is 0.289<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 941.3
- 400 + ( ( 0.289 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 941.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      198 | 2026-10-26 | NEXVOID           | L   | 1.000      | -            | -                | -                | -         |    -6.01 | apocdud, Omichella, sliimey, tucks, vision |
|           41 |      200 | 2026-10-25 | Off Chops         | L   | 1.000      | -            | -                | -                | -         |   -14.81 | apocdud, Omichella, sliimey, tucks, vision |
|           40 |      618 | 2026-10-16 | Off Chops         | L   | 1.000      | -            | -                | -                | -         |   -17.02 | apocdud, hazr, Omichella, sliimey, vision  |
|           39 |      620 | 2026-10-15 | Abyssal           | L   | 1.000      | -            | -                | -                | -         |   -14.13 | apocdud, hazr, Omichella, sliimey, vision  |
|           38 |      783 | 2026-10-10 | Abyssal           | L   | 1.000      | -            | -                | -                | -         |   -15.20 | apocdud, hazr, Omichella, sliimey, vision  |
|           37 |      786 | 2026-10-10 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |    -4.92 | apocdud, hazr, Omichella, sliimey, vision  |
|           36 |      792 | 2026-10-10 | Abyssal           | W   | 1.000      | 0.318        | 0.013 (0.004)    | 0.307 (0.098)    | 1 (1.000) |    15.81 | apocdud, hazr, Omichella, sliimey, vision  |
|           35 |      842 | 2026-10-09 | BGNS Orange       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.83 | apocdud, hazr, Omichella, sliimey, vision  |
|           34 |      848 | 2026-10-09 | KZG               | W   | 1.000      | 0.318        | 0.001 (0.000)    | -                | 1 (1.000) |     6.33 | apocdud, hazr, Omichella, sliimey, vision  |
|           33 |     1382 | 2026-09-28 | Off Chops         | L   | 0.965      | -            | -                | -                | -         |   -15.68 | apocdud, hazr, Omichella, sliimey, vision  |
|           32 |     1430 | 2026-09-27 | Rooster           | W   | 0.959      | 0.278        | 0.006 (0.002)    | 0.261 (0.069)    | 0 (0.000) |     9.70 | apocdud, hazr, Omichella, sliimey, vision  |
|           31 |     1493 | 2026-09-26 | Abyssal           | W   | 0.952      | 0.278        | 0.013 (0.003)    | 0.307 (0.081)    | 0 (0.000) |    16.16 | apocdud, hazr, Omichella, sliimey, vision  |
|           30 |     1583 | 2026-09-25 | Off Chops         | L   | 0.945      | -            | -                | -                | -         |   -15.40 | apocdud, hazr, Omichella, sliimey, vision  |
|           29 |     1726 | 2026-09-23 | Abyssal           | W   | 0.932      | 0.278        | 0.013 (0.003)    | 0.307 (0.079)    | -         |    16.37 | apocdud, hazr, Omichella, sliimey, vision  |
|           28 |     2696 | 2026-09-01 | Off Chops         | L   | 0.785      | -            | -                | -                | -         |   -13.40 | apocdud, hazr, Omichella, sliimey, vision  |
|           27 |     2734 | 2026-08-31 | ex-Arcade         | W   | 0.778      | 0.278        | -                | 0.168 (0.036)    | -         |     2.57 | apocdud, hazr, Omichella, sliimey, vision  |
|           26 |     2798 | 2026-08-30 | Off Chops         | L   | 0.772      | -            | -                | -                | -         |   -14.03 | apocdud, hazr, Omichella, sliimey, vision  |
|           25 |     2898 | 2026-08-28 | Rooster           | W   | 0.758      | 0.278        | 0.006 (0.001)    | 0.261 (0.055)    | -         |     8.12 | apocdud, hazr, Omichella, sliimey, vision  |
|           24 |     2993 | 2026-08-26 | LFO 8             | W   | 0.745      | -            | -                | -                | -         |     2.72 | apocdud, hazr, Omichella, sliimey, vision  |
|           23 |     3360 | 2026-08-13 | Abyssal           | W   | 0.659      | 0.305        | 0.013 (0.003)    | 0.307 (0.062)    | -         |    11.88 | hazr, Omichella, sliimey, tucks, vision    |
|           22 |     3384 | 2026-08-12 | Mindfreak         | W   | 0.652      | 0.305        | -                | 0.186 (0.037)    | -         |     6.10 | hazr, Omichella, sliimey, tucks, vision    |
|           21 |     3392 | 2026-08-11 | Abyssal           | L   | 0.645      | -            | -                | -                | -         |    -8.62 | hazr, Omichella, sliimey, tucks, vision    |
|           20 |     3396 | 2026-08-10 | Mindfreak         | W   | 0.639      | 0.305        | -                | 0.186 (0.036)    | -         |     5.77 | hazr, Omichella, sliimey, tucks, vision    |
|           19 |     3561 | 2026-08-06 | Abyssal           | W   | 0.612      | 0.305        | 0.013 (0.002)    | 0.307 (0.057)    | -         |    11.31 | apocdud, hazr, Omichella, sliimey, vision  |
|           18 |     3582 | 2026-08-05 | BGNS Orange       | W   | 0.605      | -            | -                | -                | -         |     1.99 | apocdud, hazr, Omichella, sliimey, vision  |
|           17 |     4094 | 2026-07-18 | FlyQuest          | L   | 0.489      | -            | -                | -                | -         |    -1.81 | apocdud, hazr, Omichella, sliimey, tucks   |
|           16 |     4117 | 2026-07-18 | THUNDER dOWNUNDER | W   | 0.485      | 0.316        | 0.002 (0.000)    | -                | 1 (0.485) |     4.70 | apocdud, hazr, Omichella, sliimey, tucks   |
|           15 |     4119 | 2026-07-17 | Mindfreak         | W   | 0.484      | -            | -                | -                | 1 (0.484) |     5.07 | apocdud, hazr, Omichella, sliimey, tucks   |
|           14 |     4121 | 2026-07-17 | THUNDER dOWNUNDER | L   | 0.482      | -            | -                | -                | -         |   -10.67 | apocdud, hazr, Omichella, sliimey, tucks   |
|           13 |     4148 | 2026-07-17 | ex-Arcade         | W   | 0.479      | -            | -                | -                | 1 (0.479) |     1.47 | apocdud, hazr, Omichella, sliimey, tucks   |
|           12 |     4157 | 2026-07-17 | FlyQuest          | L   | 0.478      | -            | -                | -                | -         |    -1.82 | apocdud, hazr, Omichella, sliimey, tucks   |
|           11 |     4159 | 2026-07-17 | ex-Arcade         | W   | 0.477      | -            | -                | -                | 1 (0.477) |     1.41 | apocdud, hazr, Omichella, sliimey, tucks   |
|           10 |     4290 | 2026-07-10 | Lynn Vision       | L   | 0.433      | -            | -                | -                | -         |    -2.91 | apocdud, hazr, Omichella, sliimey, tucks   |
|            9 |     4646 | 2026-06-18 | Rooster           | L   | 0.285      | -            | -                | -                | -         |    -5.44 | apocdud, hazr, Omichella, sliimey, tucks   |
|            8 |     4667 | 2026-06-16 | Rooster           | W   | 0.271      | 0.306        | 0.006 (0.000)    | -                | -         |     3.40 | apocdud, hazr, Omichella, sliimey, tucks   |
|            7 |     4682 | 2026-06-15 | MARKandLARRY      | W   | 0.265      | -            | -                | -                | -         |     1.28 | apocdud, hazr, Omichella, sliimey, tucks   |
|            6 |     4817 | 2026-06-11 | Ding Cuts         | W   | 0.238      | -            | -                | -                | -         |     0.53 | apocdud, hazr, Omichella, sliimey, vision  |
|            5 |     4830 | 2026-06-10 | Masked Regime     | W   | 0.232      | -            | -                | -                | -         |     0.34 | apocdud, hazr, Omichella, sliimey, tucks   |
|            4 |     5300 | 2026-05-25 | Kaleido           | L   | 0.126      | -            | -                | -                | -         |    -3.08 | apocdud, Omichella, pz, tucks, vision      |
|            3 |     5726 | 2026-05-12 | Chinggis Warriors | L   | 0.043      | -            | -                | -                | -         |    -1.17 | apocdud, Omichella, pz, tucks, vision      |
|            2 |     5756 | 2026-05-12 | Rare Atom         | W   | 0.039      | -            | -                | -                | 1 (0.039) |     0.59 | apocdud, Omichella, pz, tucks, vision      |
|            1 |     5801 | 2026-05-11 | TYLOO             | L   | 0.031      | -            | -                | -                | -         |    -0.18 | apocdud, Omichella, pz, tucks, vision      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,949.30)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-11 |      1.000 | $1,067.00      | $1,067.00       |
| 2026-09-01 |      0.785 | $1,000.00      | $784.93         |
| 2026-08-13 |      0.659 | $2,805.00      | $1,847.10       |
| 2026-07-18 |      0.489 | $1,724.00      | $843.34         |
| 2026-06-18 |      0.285 | $1,428.00      | $406.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
