### Roster Details<br />
Team Name: Nexus<br />
Roster: adamS, Blytz, BTN, s0und, XELLOW<br />
Global Rank: [81](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [54]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  877.4<br />
<br />
Final Rank Value (877.4) = Starting Rank Value (971.7) + Head To Head Adjustments (-94.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.264[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.298<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 971.7
- 400 + ( ( 0.298 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 971.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           81 |       60 | 2025-08-29 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -11.53 | Blytz, BTN, fnl, s0und, XELLOW     |
|           80 |       65 | 2025-08-29 | INFINITE          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.90 | Blytz, BTN, fnl, s0und, XELLOW     |
|           79 |      154 | 2025-08-23 | Reason            | L   | 1.000      | -            | -                | -                | -         |   -14.80 | adamS, Blytz, BTN, s0und, XELLOW   |
|           78 |      180 | 2025-08-21 | Betera            | L   | 1.000      | -            | -                | -                | -         |   -15.51 | adamS, Blytz, BTN, s0und, XELLOW   |
|           77 |      216 | 2025-08-19 | SPARTA            | L   | 1.000      | -            | -                | -                | -         |   -15.76 | Blytz, BTN, lauNX, s0und, XELLOW   |
|           76 |      234 | 2025-08-18 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -7.85 | adamS, Blytz, lauNX, s0und, XELLOW |
|           75 |      267 | 2025-08-17 | Sangal            | W   | 1.000      | 0.486        | 0.026 (0.012)    | 0.777 (0.378)    | 0 (0.000) |    14.83 | adamS, Blytz, lauNX, s0und, XELLOW |
|           74 |      375 | 2025-08-14 | GUN5              | W   | 1.000      | 0.486        | 0.041 (0.020)    | 0.658 (0.320)    | 0 (0.000) |    14.97 | adamS, Blytz, lauNX, s0und, XELLOW |
|           73 |      413 | 2025-08-13 | JiJieHao          | L   | 1.000      | -            | -                | -                | -         |   -12.50 | adamS, Blytz, lauNX, s0und, XELLOW |
|           72 |      504 | 2025-08-11 | Reason            | L   | 1.000      | -            | -                | -                | -         |   -17.12 | adamS, Blytz, lauNX, s0und, XELLOW |
|           71 |      513 | 2025-08-10 | Partizan          | L   | 1.000      | -            | -                | -                | -         |   -11.33 | adamS, Blytz, lauNX, s0und, XELLOW |
|           70 |      620 | 2025-08-04 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -17.97 | Blytz, BTN, lauNX, s0und, XELLOW   |
|           69 |      646 | 2025-08-02 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -13.75 | Blytz, BTN, lauNX, s0und, XELLOW   |
|           68 |      688 | 2025-07-31 | Betera            | W   | 0.987      | 0.435        | -                | 0.718 (0.308)    | 0 (0.000) |    12.06 | Blytz, BTN, lauNX, s0und, XELLOW   |
|           67 |      699 | 2025-07-30 | Partizan          | L   | 0.978      | -            | -                | -                | -         |   -14.29 | Blytz, BTN, lauNX, s0und, XELLOW   |
|           66 |     1261 | 2025-06-23 | Gentle Mates      | L   | 0.734      | -            | -                | -                | -         |    -3.58 | BTN, lauNX, ragga, s0und, XELLOW   |
|           65 |     1269 | 2025-06-22 | TNL               | W   | 0.728      | 0.435        | 0.142 (0.045)    | 1.000 (0.316)    | 0 (0.000) |    17.59 | BTN, lauNX, ragga, s0und, XELLOW   |
|           64 |     1288 | 2025-06-21 | GUN5              | W   | 0.720      | 0.435        | 0.041 (0.013)    | 0.658 (0.206)    | 0 (0.000) |    10.47 | BTN, lauNX, ragga, s0und, XELLOW   |
|           63 |     1334 | 2025-06-18 | KHAN              | L   | 0.700      | -            | -                | -                | -         |   -16.46 | BTN, lauNX, ragga, s0und, XELLOW   |
|           62 |     1354 | 2025-06-17 | Astrum            | L   | 0.692      | -            | -                | -                | -         |   -20.12 | BTN, lauNX, ragga, s0und, XELLOW   |
|           61 |     1365 | 2025-06-16 | GUN5              | W   | 0.687      | 0.480        | 0.041 (0.014)    | 0.658 (0.217)    | 0 (0.000) |     8.94 | BTN, lauNX, ragga, s0und, XELLOW   |
|           60 |     1370 | 2025-06-16 | The Glecs         | W   | 0.686      | -            | -                | -                | 0 (0.000) |     4.52 | BTN, lauNX, ragga, s0und, XELLOW   |
|           59 |     1373 | 2025-06-16 | FAVBET            | W   | 0.685      | -            | -                | -                | 0 (0.000) |     8.37 | BTN, lauNX, ragga, s0und, XELLOW   |
|           58 |     1438 | 2025-06-14 | HEROIC Academy    | W   | 0.672      | -            | -                | -                | 0 (0.000) |     4.45 | BTN, lauNX, ragga, s0und, XELLOW   |
|           57 |     1466 | 2025-06-13 | Leo               | W   | 0.666      | -            | -                | -                | -         |     2.68 | BTN, lauNX, ragga, s0und, XELLOW   |
|           56 |     1492 | 2025-06-12 | FAVBET            | L   | 0.660      | -            | -                | -                | -         |   -12.80 | BTN, lauNX, ragga, s0und, XELLOW   |
|           55 |     1498 | 2025-06-12 | Sashi             | L   | 0.659      | -            | -                | -                | -         |   -11.02 | BTN, lauNX, ragga, s0und, XELLOW   |
|           54 |     1504 | 2025-06-11 | RUBY              | L   | 0.655      | -            | -                | -                | -         |   -13.52 | BTN, lauNX, ragga, s0und, XELLOW   |
|           53 |     1511 | 2025-06-11 | KOLESIE           | W   | 0.652      | 0.435        | 0.044 (0.013)    | -                | -         |    13.76 | BTN, lauNX, ragga, s0und, XELLOW   |
|           52 |     1527 | 2025-06-10 | Fisher College    | W   | 0.645      | -            | -                | -                | -         |     2.79 | BTN, lauNX, ragga, s0und, XELLOW   |
|           51 |     1582 | 2025-06-07 | Fire Flux         | L   | 0.625      | -            | -                | -                | -         |   -14.84 | BTN, lauNX, ragga, s0und, XELLOW   |
|           50 |     1650 | 2025-05-31 | PARIVISION        | W   | 0.580      | 0.435        | 0.123 (0.031)    | 0.977 (0.246)    | -         |    10.71 | BTN, lauNX, ragga, s0und, XELLOW   |
|           49 |     1655 | 2025-05-30 | SINNERS           | W   | 0.574      | -            | -                | -                | -         |     6.56 | BTN, lauNX, ragga, s0und, XELLOW   |
|           48 |     1671 | 2025-05-29 | CYBERSHOKE        | W   | 0.565      | 0.435        | -                | 0.987 (0.242)    | -         |     7.68 | BTN, lauNX, ragga, s0und, XELLOW   |
|           47 |     1672 | 2025-05-28 | Passion UA        | L   | 0.561      | -            | -                | -                | -         |    -5.68 | BTN, lauNX, ragga, s0und, XELLOW   |
|           46 |     1680 | 2025-05-27 | Betclic           | W   | 0.555      | -            | -                | -                | -         |    10.81 | BTN, lauNX, ragga, s0und, XELLOW   |
|           45 |     1689 | 2025-05-27 | Ninjas in Pyjamas | L   | 0.553      | -            | -                | -                | -         |    -1.44 | BTN, lauNX, ragga, s0und, XELLOW   |
|           44 |     1743 | 2025-05-23 | Monte             | W   | 0.527      | 0.435        | -                | 0.947 (0.217)    | -         |    10.75 | BTN, lauNX, ragga, s0und, XELLOW   |
|           43 |     1796 | 2025-05-21 | Zero Tenacity     | W   | 0.511      | -            | -                | -                | -         |     6.99 | BTN, lauNX, ragga, s0und, XELLOW   |
|           42 |     1842 | 2025-05-19 | ENCE              | L   | 0.500      | -            | -                | -                | -         |    -2.18 | BTN, lauNX, ragga, s0und, XELLOW   |
|           41 |     1859 | 2025-05-18 | Sangal            | W   | 0.493      | -            | -                | -                | -         |     7.17 | BTN, lauNX, ragga, s0und, XELLOW   |
|           40 |     1888 | 2025-05-16 | ENCE              | L   | 0.481      | -            | -                | -                | -         |    -2.25 | BTN, lauNX, ragga, s0und, XELLOW   |
|           39 |     1939 | 2025-05-14 | ECLOT             | W   | 0.467      | -            | -                | -                | -         |     6.04 | BTN, lauNX, ragga, s0und, XELLOW   |
|           38 |     1978 | 2025-05-13 | ECLOT             | L   | 0.460      | -            | -                | -                | -         |    -8.64 | BTN, lauNX, ragga, s0und, XELLOW   |
|           37 |     2017 | 2025-05-12 | Fire Flux         | W   | 0.451      | -            | -                | -                | -         |     3.60 | BTN, lauNX, ragga, s0und, XELLOW   |
|           36 |     2028 | 2025-05-11 | RUBY              | W   | 0.447      | -            | -                | -                | -         |     5.87 | BTN, lauNX, ragga, s0und, XELLOW   |
|           35 |     2091 | 2025-05-09 | CYBERSHOKE        | W   | 0.432      | -            | -                | -                | -         |     6.49 | BTN, lauNX, ragga, s0und, XELLOW   |
|           34 |     2102 | 2025-05-08 | GUN5              | L   | 0.428      | -            | -                | -                | -         |    -7.34 | BTN, lauNX, ragga, s0und, XELLOW   |
|           33 |     2133 | 2025-05-07 | Sashi             | L   | 0.421      | -            | -                | -                | -         |    -6.91 | BTN, lauNX, ragga, s0und, XELLOW   |
|           32 |     2174 | 2025-05-06 | CYBERSHOKE        | L   | 0.413      | -            | -                | -                | -         |    -7.34 | BTN, lauNX, ragga, s0und, XELLOW   |
|           31 |     2182 | 2025-05-06 | Passion UA        | W   | 0.412      | 0.435        | 0.074 (0.013)    | -                | -         |     9.97 | BTN, lauNX, ragga, s0und, XELLOW   |
|           30 |     2198 | 2025-05-05 | Sashi             | L   | 0.407      | -            | -                | -                | -         |    -6.90 | BTN, lauNX, ragga, s0und, XELLOW   |
|           29 |     2309 | 2025-04-30 | CYBERSHOKE        | W   | 0.374      | -            | -                | -                | -         |     5.04 | BTN, lauNX, ragga, s0und, XELLOW   |
|           28 |     2370 | 2025-04-28 | Eternal Fire      | W   | 0.360      | -            | -                | -                | -         |     3.21 | BTN, lauNX, ragga, s0und, XELLOW   |
|           27 |     2458 | 2025-04-24 | GUN5              | L   | 0.334      | -            | -                | -                | -         |    -5.74 | BTN, lauNX, ragga, s0und, XELLOW   |
|           26 |     2465 | 2025-04-23 | Partizan          | L   | 0.327      | -            | -                | -                | -         |    -5.03 | BTN, lauNX, ragga, s0und, XELLOW   |
|           25 |     2479 | 2025-04-22 | TNL               | L   | 0.321      | -            | -                | -                | -         |    -3.04 | BTN, lauNX, ragga, s0und, XELLOW   |
|           24 |     2496 | 2025-04-21 | SINNERS           | W   | 0.314      | -            | -                | -                | -         |     4.04 | BTN, lauNX, ragga, s0und, XELLOW   |
|           23 |     2525 | 2025-04-19 | ECLOT             | L   | 0.301      | -            | -                | -                | -         |    -5.76 | ADRON, BTN, ragga, s0und, XELLOW   |
|           22 |     2529 | 2025-04-19 | JANO              | W   | 0.299      | -            | -                | -                | -         |     0.84 | BTN, lauNX, ragga, s0und, XELLOW   |
|           21 |     2539 | 2025-04-18 | Metizport         | W   | 0.294      | -            | -                | -                | -         |     4.18 | ADRON, BTN, ragga, s0und, XELLOW   |
|           20 |     2543 | 2025-04-18 | LA MASIA          | W   | 0.293      | -            | -                | -                | -         |     1.38 | ADRON, BTN, ragga, s0und, XELLOW   |
|           19 |     2566 | 2025-04-17 | ENCE              | W   | 0.287      | 0.657        | 0.151 (0.028)    | 1.000 (0.189)    | -         |     8.09 | ADRON, BTN, ragga, s0und, XELLOW   |
|           18 |     2575 | 2025-04-17 | Spirit Academy    | W   | 0.286      | 0.657        | 0.064 (0.012)    | -                | -         |     5.19 | ADRON, BTN, ragga, s0und, XELLOW   |
|           17 |     2584 | 2025-04-17 | BetBoom           | L   | 0.285      | -            | -                | -                | -         |    -0.59 | ADRON, BTN, ragga, s0und, XELLOW   |
|           16 |     2675 | 2025-04-13 | PARIVISION        | L   | 0.259      | -            | -                | -                | -         |    -3.41 | BTN, lauNX, ragga, s0und, XELLOW   |
|           15 |     2682 | 2025-04-12 | SKYFURY           | L   | 0.255      | -            | -                | -                | -         |    -7.31 | BTN, lauNX, ragga, s0und, XELLOW   |
|           14 |     2911 | 2025-04-03 | LA MASIA          | W   | 0.194      | -            | -                | -                | -         |     0.92 | ADRON, BTN, ragga, s0und, XELLOW   |
|           13 |     2922 | 2025-04-03 | ENCE              | L   | 0.193      | -            | -                | -                | -         |    -0.67 | ADRON, BTN, ragga, s0und, XELLOW   |
|           12 |     2933 | 2025-04-03 | BetBoom           | L   | 0.191      | -            | -                | -                | -         |    -0.41 | ADRON, BTN, ragga, s0und, XELLOW   |
|           11 |     2983 | 2025-04-02 | Partizan          | L   | 0.186      | -            | -                | -                | -         |    -2.84 | ADRON, BTN, ragga, s0und, XELLOW   |
|           10 |     2992 | 2025-04-02 | ECLOT             | W   | 0.185      | -            | -                | -                | -         |     2.34 | ADRON, BTN, ragga, s0und, XELLOW   |
|            9 |     3203 | 2025-03-28 | AMKAL             | L   | 0.153      | -            | -                | -                | -         |    -3.71 | BTN, lauNX, ragga, s0und, XELLOW   |
|            8 |     3252 | 2025-03-27 | Fire Flux         | L   | 0.148      | -            | -                | -                | -         |    -3.58 | BTN, lauNX, ragga, s0und, XELLOW   |
|            7 |     3327 | 2025-03-26 | Sangal            | L   | 0.140      | -            | -                | -                | -         |    -2.81 | ADRON, BTN, ragga, s0und, XELLOW   |
|            6 |     3673 | 2025-03-13 | 9 Pandas          | L   | 0.054      | -            | -                | -                | -         |    -1.29 | ADRON, BTN, ragga, s0und, XELLOW   |
|            5 |     3712 | 2025-03-11 | fnatic            | L   | 0.040      | -            | -                | -                | -         |    -0.09 | ADRON, BTN, ragga, s0und, XELLOW   |
|            4 |     3729 | 2025-03-10 | FUT               | W   | 0.035      | -            | -                | -                | -         |     0.60 | ADRON, BTN, ragga, s0und, XELLOW   |
|            3 |     3773 | 2025-03-09 | Monte             | W   | 0.028      | -            | -                | -                | -         |     0.14 | ADRON, BTN, ragga, s0und, XELLOW   |
|            2 |     3887 | 2025-03-08 | 500               | L   | 0.019      | -            | -                | -                | -         |    -0.52 | ADRON, BTN, ragga, s0und, XELLOW   |
|            1 |     3949 | 2025-03-07 | Ninjas in Pyjamas | L   | 0.013      | -            | -                | -                | -         |    -0.03 | ADRON, BTN, ragga, s0und, XELLOW   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,252.47)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-24 |      0.740 | $4,000.00      | $2,958.39       |
| 2025-05-31 |      0.580 | $25,000.00     | $14,500.56      |
| 2025-04-20 |      0.308 | $15,000.00     | $4,617.12       |
| 2025-04-03 |      0.194 | $5,000.00      | $971.33         |
| 2025-03-11 |      0.041 | $5,000.00      | $205.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
