### Roster Details<br />
Team Name: HYPERSPIRIT<br />
Roster: ADRON, Ciocardau, d1maje, ragga, starplajerz<br />
Global Rank: [129](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [87]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  887.5<br />
<br />
Final Rank Value (887.5) = Starting Rank Value (882.7) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.213[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.7
- 400 + ( ( 0.256 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 882.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |      247 | 2026-06-16 | Sashi           | L   | 1.000      | -            | -                | -                | -         |    -6.64 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           61 |      364 | 2026-06-12 | brazylijski luz | W   | 1.000      | 0.371        | -                | 0.419 (0.155)    | 0 (0.000) |    12.75 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           60 |      447 | 2026-06-08 | INOX Division   | L   | 1.000      | -            | -                | -                | -         |    -8.05 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           59 |      451 | 2026-06-08 | Leo             | L   | 1.000      | -            | -                | -                | -         |   -14.21 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           58 |      475 | 2026-06-07 | Atreides        | W   | 1.000      | 0.344        | -                | 0.764 (0.263)    | 0 (0.000) |    14.61 | Ciocardau, d1maje, GEOHYPE, ragga, starplajerz |
|           57 |      538 | 2026-06-04 | HEROIC Academy  | L   | 0.988      | -            | -                | -                | -         |   -21.35 | Ciocardau, d1maje, GEOHYPE, ragga, starplajerz |
|           56 |      553 | 2026-06-04 | PsychoFace      | W   | 0.985      | 0.371        | 0.028 (0.010)    | 1.000 (0.365)    | 0 (0.000) |    17.51 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           55 |      567 | 2026-06-03 | Atreides        | W   | 0.980      | 0.344        | -                | 0.764 (0.258)    | 0 (0.000) |    14.25 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           54 |      715 | 2026-05-29 | CYBERSHOKE      | L   | 0.947      | -            | -                | -                | -         |    -6.83 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           53 |      830 | 2026-05-26 | DragonClaw      | W   | 0.928      | 0.396        | 0.026 (0.010)    | 0.535 (0.197)    | -         |    18.49 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           52 |      867 | 2026-05-25 | Bebop           | W   | 0.921      | 0.396        | -                | 0.704 (0.257)    | -         |    14.08 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           51 |     1515 | 2026-05-05 | Rebels          | L   | 0.786      | -            | -                | -                | -         |    -7.35 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           50 |     1538 | 2026-05-04 | Ursa            | L   | 0.778      | -            | -                | -                | -         |    -7.09 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           49 |     1551 | 2026-05-03 | Rebels          | W   | 0.774      | 0.384        | 0.008 (0.003)    | 0.614 (0.183)    | -         |    17.22 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           48 |     1566 | 2026-05-03 | aAa             | L   | 0.772      | -            | -                | -                | -         |   -12.29 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           47 |     1653 | 2026-05-01 | ex-MANA         | L   | 0.760      | -            | -                | -                | -         |   -12.78 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           46 |     1706 | 2026-04-30 | Walczaki        | L   | 0.752      | -            | -                | -                | -         |    -4.13 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           45 |     1719 | 2026-04-30 | Clutchain fe    | W   | 0.751      | 0.344        | 0.012 (0.003)    | -                | -         |     5.53 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           44 |     1759 | 2026-04-29 | ex-MANA         | L   | 0.745      | -            | -                | -                | -         |   -13.14 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           43 |     1787 | 2026-04-28 | HEROIC Academy  | L   | 0.740      | -            | -                | -                | -         |   -14.96 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           42 |     1982 | 2026-04-25 | 9INE            | L   | 0.719      | -            | -                | -                | -         |    -6.65 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           41 |     2343 | 2026-04-09 | bond1e          | W   | 0.613      | -            | -                | -                | -         |     2.37 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           40 |     2434 | 2026-04-06 | KOLESIE         | W   | 0.594      | 0.384        | 0.026 (0.006)    | 0.839 (0.191)    | -         |    13.33 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           39 |     3035 | 2026-03-29 | Honvéd          | W   | 0.542      | 0.384        | 0.014 (0.003)    | -                | -         |     6.43 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           38 |     3064 | 2026-03-29 | Drama           | L   | 0.540      | -            | -                | -                | -         |   -14.93 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           37 |     3096 | 2026-03-29 | INFINITE        | L   | 0.539      | -            | -                | -                | -         |    -1.45 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           36 |     3217 | 2026-03-27 | ASTRAL          | L   | 0.527      | -            | -                | -                | -         |    -4.94 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           35 |     3243 | 2026-03-26 | Drama           | W   | 0.522      | -            | -                | -                | -         |     1.95 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           34 |     3301 | 2026-03-25 | Gentle Mates    | L   | 0.514      | -            | -                | -                | -         |    -1.85 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           33 |     3348 | 2026-03-24 | ECSTATIC        | W   | 0.508      | 0.435        | 0.025 (0.006)    | -                | 1 (0.508) |    10.16 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           32 |     3372 | 2026-03-24 | CYBERSHOKE      | W   | 0.506      | 0.435        | 0.020 (0.004)    | 0.586 (0.129)    | 1 (0.506) |    12.06 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           31 |     3374 | 2026-03-24 | ECSTATIC        | L   | 0.506      | -            | -                | -                | -         |    -5.49 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           30 |     3530 | 2026-03-21 | HAVU            | L   | 0.488      | -            | -                | -                | -         |    -9.42 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           29 |     3593 | 2026-03-20 | Eternal Fire    | W   | 0.481      | 0.384        | 0.011 (0.002)    | 0.632 (0.117)    | -         |    11.18 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           28 |     3659 | 2026-03-19 | Rune Eaters     | W   | 0.473      | -            | -                | -                | -         |     3.72 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           27 |     3710 | 2026-03-18 | AIRLYA          | W   | 0.466      | -            | -                | -                | -         |     0.87 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           26 |     3742 | 2026-03-17 | TDK             | L   | 0.460      | -            | -                | -                | -         |    -2.73 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           25 |     3785 | 2026-03-16 | aimclub         | W   | 0.454      | -            | -                | -                | -         |     7.04 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           24 |     3843 | 2026-03-15 | cirahvi         | L   | 0.446      | -            | -                | -                | -         |   -10.14 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           23 |     4070 | 2026-03-10 | aimclub         | W   | 0.412      | -            | -                | -                | -         |     6.59 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           22 |     4112 | 2026-03-09 | Hashiras        | W   | 0.407      | -            | -                | -                | -         |     4.13 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           21 |     4567 | 2026-02-28 | ECSTATIC        | L   | 0.347      | -            | -                | -                | -         |    -4.07 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           20 |     4667 | 2026-02-26 | ASTRAL          | L   | 0.334      | -            | -                | -                | -         |    -2.23 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           19 |     4735 | 2026-02-25 | GenOne          | W   | 0.326      | -            | -                | -                | 1 (0.326) |     4.67 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           18 |     4736 | 2026-02-25 | FlyQuest        | L   | 0.326      | -            | -                | -                | -         |    -2.05 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           17 |     4756 | 2026-02-24 | M1X KS          | W   | 0.321      | -            | -                | -                | 1 (0.321) |     1.63 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           16 |     4768 | 2026-02-24 | Eternal Fire    | L   | 0.320      | -            | -                | -                | -         |    -2.88 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           15 |     4780 | 2026-02-24 | M1X KS          | W   | 0.319      | -            | -                | -                | 1 (0.319) |     1.60 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           14 |     4870 | 2026-02-22 | FAVBET          | W   | 0.307      | -            | -                | -                | -         |     4.04 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           13 |     4994 | 2026-02-20 | PsychoFace      | L   | 0.293      | -            | -                | -                | -         |    -3.65 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           12 |     5344 | 2026-02-14 | Bebop           | L   | 0.252      | -            | -                | -                | -         |    -5.09 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           11 |     5419 | 2026-02-12 | Ursa            | W   | 0.240      | 0.384        | 0.013 (0.001)    | -                | -         |     3.73 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           10 |     5463 | 2026-02-11 | Fuzos           | W   | 0.232      | -            | -                | -                | -         |     1.72 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            9 |     5938 | 2026-01-25 | Eternal Fire    | W   | 0.120      | -            | -                | -                | -         |     0.48 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            8 |     6175 | 2026-01-18 | AaB             | W   | 0.074      | -            | -                | -                | -         |     0.28 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            7 |     6252 | 2026-01-16 | Famalicão       | L   | 0.062      | -            | -                | -                | -         |    -1.42 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            6 |     6255 | 2026-01-16 | BIG             | L   | 0.062      | -            | -                | -                | -         |    -0.12 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            5 |     6273 | 2026-01-16 | Famalicão       | W   | 0.061      | -            | -                | -                | 1 (0.061) |     0.52 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            4 |     6343 | 2026-01-14 | MASONIC         | L   | 0.048      | -            | -                | -                | -         |    -0.29 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            3 |     6377 | 2026-01-13 | The Last Resort | W   | 0.039      | -            | -                | -                | -         |     0.57 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            2 |     6393 | 2026-01-11 | cirahvi         | L   | 0.026      | -            | -                | -                | -         |    -0.60 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            1 |     6404 | 2026-01-10 | Phantom         | W   | 0.020      | -            | -                | -                | -         |     0.12 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,547.33)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-26 |      0.728 | $3,500.00      | $2,547.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
