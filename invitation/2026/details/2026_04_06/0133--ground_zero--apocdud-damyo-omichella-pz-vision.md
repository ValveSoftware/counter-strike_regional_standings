### Roster Details<br />
Team Name: Ground Zero<br />
Roster: apocdud, damyo, Omichella, pz, vision<br />
Global Rank: [133](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [14]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  948.8<br />
<br />
Final Rank Value (948.8) = Starting Rank Value (995.9) + Head To Head Adjustments (-47.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.500[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 995.9
- 400 + ( ( 0.305 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 995.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      170 | 2026-04-01 | DEPO              | L   | 1.000      | -            | -                | -                | -         |   -24.50 | apocdud, Omichella, pz, sliimey, vision |
|           45 |      219 | 2026-04-01 | Abyssal           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.27 | apocdud, Omichella, pz, sliimey, vision |
|           44 |      304 | 2026-03-31 | 11mins            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.57 | apocdud, Omichella, pz, sliimey, vision |
|           43 |      307 | 2026-03-31 | Abyssal           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.80 | apocdud, Omichella, pz, sliimey, vision |
|           42 |      537 | 2026-03-26 | Rooster           | L   | 1.000      | -            | -                | -                | -         |   -21.08 | apocdud, damyo, Omichella, pz, vision   |
|           41 |      593 | 2026-03-25 | SemperFi          | L   | 1.000      | -            | -                | -                | -         |    -7.66 | apocdud, damyo, Omichella, pz, vision   |
|           40 |      716 | 2026-03-23 | Mindfreak         | W   | 1.000      | 0.278        | 0.014 (0.004)    | 0.327 (0.091)    | 0 (0.000) |    15.14 | apocdud, damyo, Omichella, pz, vision   |
|           39 |      823 | 2026-03-21 | Vantage           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.13 | apocdud, damyo, HUGH, Omichella, pz     |
|           38 |     1022 | 2026-03-16 | Arcade            | L   | 1.000      | -            | -                | -                | -         |   -20.55 | apocdud, damyo, Omichella, pz, vision   |
|           37 |     1026 | 2026-03-16 | SemperFi          | L   | 1.000      | -            | -                | -                | -         |    -7.82 | apocdud, damyo, Omichella, pz, vision   |
|           36 |     1057 | 2026-03-16 | Rooster           | W   | 1.000      | 0.328        | 0.006 (0.002)    | 0.229 (0.075)    | 1 (1.000) |     7.34 | apocdud, damyo, Omichella, pz, vision   |
|           35 |     1060 | 2026-03-16 | THUNDER dOWNUNDER | L   | 1.000      | -            | -                | -                | -         |    -5.46 | apocdud, damyo, Omichella, pz, vision   |
|           34 |     1063 | 2026-03-15 | Rooster           | W   | 1.000      | 0.328        | 0.006 (0.002)    | 0.229 (0.075)    | 1 (1.000) |     7.50 | apocdud, damyo, Omichella, pz, vision   |
|           33 |     1105 | 2026-03-14 | THUNDER dOWNUNDER | L   | 1.000      | -            | -                | -                | -         |    -5.89 | apocdud, damyo, Omichella, pz, vision   |
|           32 |     1145 | 2026-03-13 | Mindfreak         | W   | 1.000      | 0.351        | 0.014 (0.005)    | 0.327 (0.115)    | 1 (1.000) |    16.51 | apocdud, damyo, Omichella, pz, vision   |
|           31 |     1148 | 2026-03-13 | SemperFi          | L   | 1.000      | -            | -                | -                | -         |    -8.33 | apocdud, damyo, Omichella, pz, vision   |
|           30 |     1249 | 2026-03-12 | Rooster           | W   | 1.000      | 0.351        | 0.006 (0.002)    | 0.229 (0.080)    | 1 (1.000) |     8.09 | apocdud, damyo, Omichella, pz, vision   |
|           29 |     1252 | 2026-03-12 | THUNDER dOWNUNDER | L   | 1.000      | -            | -                | -                | -         |    -5.42 | apocdud, damyo, Omichella, pz, vision   |
|           28 |     1257 | 2026-03-11 | Rooster           | W   | 1.000      | 0.351        | 0.006 (0.002)    | 0.229 (0.080)    | 1 (1.000) |     8.33 | apocdud, damyo, Omichella, pz, vision   |
|           27 |     1335 | 2026-03-09 | Lynn Vision       | L   | 1.000      | -            | -                | -                | -         |    -7.00 | apocdud, damyo, Omichella, pz, vision   |
|           26 |     1403 | 2026-03-08 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |    -6.55 | apocdud, damyo, Omichella, pz, vision   |
|           25 |     1878 | 2026-02-27 | Mindfreak         | L   | 0.946      | -            | -                | -                | -         |   -15.74 | apocdud, damyo, Omichella, pz, vision   |
|           24 |     1889 | 2026-02-26 | THUNDER dOWNUNDER | L   | 0.944      | -            | -                | -                | -         |    -4.20 | apocdud, damyo, Omichella, pz, vision   |
|           23 |     1963 | 2026-02-25 | Abyssal           | L   | 0.937      | -            | -                | -                | -         |   -25.53 | apocdud, damyo, Omichella, pz, vision   |
|           22 |     1966 | 2026-02-25 | THUNDER dOWNUNDER | L   | 0.936      | -            | -                | -                | -         |    -5.07 | apocdud, damyo, Omichella, pz, vision   |
|           21 |     1987 | 2026-02-25 | Mindfreak         | W   | 0.933      | 0.317        | 0.014 (0.004)    | 0.327 (0.097)    | -         |    11.81 | apocdud, damyo, Omichella, pz, vision   |
|           20 |     2039 | 2026-02-24 | THUNDER dOWNUNDER | L   | 0.926      | -            | -                | -                | -         |    -4.99 | apocdud, damyo, Omichella, pz, vision   |
|           19 |     2080 | 2026-02-23 | Mindfreak         | W   | 0.919      | 0.278        | 0.014 (0.004)    | 0.327 (0.084)    | -         |    12.41 | apocdud, damyo, Omichella, pz, vision   |
|           18 |     2089 | 2026-02-23 | Arcade            | W   | 0.918      | 0.317        | -                | 0.279 (0.081)    | -         |     8.74 | apocdud, damyo, Omichella, pz, vision   |
|           17 |     2162 | 2026-02-22 | THUNDER dOWNUNDER | L   | 0.912      | -            | -                | -                | -         |    -4.67 | apocdud, damyo, Omichella, pz, vision   |
|           16 |     2256 | 2026-02-20 | Mindfreak         | W   | 0.899      | 0.278        | 0.014 (0.003)    | 0.327 (0.082)    | -         |    12.71 | apocdud, damyo, Omichella, pz, vision   |
|           15 |     2359 | 2026-02-18 | Arcade            | W   | 0.886      | -            | -                | -                | -         |     9.52 | apocdud, damyo, Omichella, pz, vision   |
|           14 |     3919 | 2025-12-12 | Rooster           | L   | 0.436      | -            | -                | -                | -         |    -9.29 | apocdud, damyo, Omichella, pz, vision   |
|           13 |     3924 | 2025-12-12 | Mindfreak         | L   | 0.435      | -            | -                | -                | -         |    -7.52 | apocdud, damyo, Omichella, pz, vision   |
|           12 |     4015 | 2025-12-06 | FURY              | W   | 0.398      | -            | -                | -                | -         |     0.69 | apocdud, damyo, Omichella, pz, vision   |
|           11 |     4018 | 2025-12-06 | Rooster           | W   | 0.397      | -            | -                | -                | -         |     3.96 | apocdud, damyo, Omichella, pz, vision   |
|           10 |     4252 | 2025-11-27 | THUNDER dOWNUNDER | W   | 0.332      | 0.314        | 0.043 (0.004)    | -                | -         |     8.79 | apocdud, damyo, Omichella, pz, vision   |
|            9 |     4268 | 2025-11-26 | Mindfreak         | W   | 0.326      | -            | -                | -                | -         |     4.84 | apocdud, damyo, Omichella, pz, vision   |
|            8 |     4271 | 2025-11-26 | LITE              | W   | 0.325      | -            | -                | -                | -         |     1.10 | apocdud, damyo, Omichella, pz, vision   |
|            7 |     4289 | 2025-11-25 | Arcade            | W   | 0.319      | -            | -                | -                | -         |     4.06 | apocdud, damyo, Omichella, pz, vision   |
|            6 |     4332 | 2025-11-24 | Mindfreak         | L   | 0.312      | -            | -                | -                | -         |    -5.20 | apocdud, damyo, Omichella, pz, vision   |
|            5 |     4428 | 2025-11-21 | Rooster           | W   | 0.292      | -            | -                | -                | -         |     3.13 | apocdud, damyo, Omichella, pz, vision   |
|            4 |     4636 | 2025-11-12 | Rooster           | L   | 0.232      | -            | -                | -                | -         |    -6.46 | apocdud, damyo, Omichella, pz, vision   |
|            3 |     4663 | 2025-11-11 | SemperFi          | L   | 0.226      | -            | -                | -                | -         |    -1.27 | apocdud, damyo, Omichella, pz, vision   |
|            2 |     5363 | 2025-10-24 | Mindfreak         | W   | 0.106      | -            | -                | -                | -         |     1.56 | apocdud, damyo, Omichella, pz, vision   |
|            1 |     5413 | 2025-10-23 | FURY              | W   | 0.099      | -            | -                | -                | -         |     0.18 | apocdud, damyo, Omichella, pz, vision   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,933.07)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-17 |      1.000 | $708.00        | $708.00         |
| 2026-03-15 |      1.000 | $2,118.00      | $2,118.00       |
| 2026-02-28 |      0.951 | $884.00        | $840.94         |
| 2026-02-24 |      0.926 | $1,000.00      | $925.82         |
| 2025-12-13 |      0.444 | $330.00        | $146.50         |
| 2025-11-27 |      0.332 | $3,592.00      | $1,193.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
