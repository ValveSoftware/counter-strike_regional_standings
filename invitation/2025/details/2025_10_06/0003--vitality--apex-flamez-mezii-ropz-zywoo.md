### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [3](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [1]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  1869.3<br />
<br />
Final Rank Value (1869.3) = Starting Rank Value (1812.5) + Head To Head Adjustments (56.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.794[<sup>2</sup>](#table1)
- Opponent Network: 0.342[<sup>2</sup>](#table1)
- LAN Wins: 0.748[<sup>2</sup>](#table1)

The average of these factors is 0.721<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1812.5
- 400 + ( ( 0.721 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1812.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      890 | 2025-09-07 | G2            | L   | 1.000      | -            | -                | -                | -         |   -16.36 | apEX, flameZ, mezii, ropz, ZywOo |
|           37 |      930 | 2025-09-06 | MOUZ          | W   | 1.000      | 0.675        | 0.982 (0.663)    | 0.493 (0.333)    | 1 (1.000) |    13.00 | apEX, flameZ, mezii, ropz, ZywOo |
|           36 |      995 | 2025-09-01 | FaZe          | W   | 0.966      | -            | -                | -                | -         |     6.47 | apEX, flameZ, mezii, ropz, ZywOo |
|           35 |     1065 | 2025-08-29 | GamerLegion   | W   | 0.947      | -            | -                | -                | -         |     4.66 | apEX, flameZ, mezii, ropz, ZywOo |
|           34 |     1141 | 2025-08-27 | M80           | W   | 0.932      | 0.561        | -                | 0.684 (0.358)    | -         |     1.00 | apEX, flameZ, mezii, ropz, ZywOo |
|           33 |     1198 | 2025-08-24 | Falcons       | L   | 0.912      | -            | -                | -                | -         |   -17.44 | apEX, flameZ, mezii, ropz, ZywOo |
|           32 |     1205 | 2025-08-23 | The MongolZ   | L   | 0.907      | -            | -                | -                | -         |   -11.36 | apEX, flameZ, mezii, ropz, ZywOo |
|           31 |     1233 | 2025-08-21 | TYLOO         | W   | 0.894      | 1.000        | 0.767 (0.686)    | 0.366 (0.327)    | 1 (0.894) |     5.37 | apEX, flameZ, mezii, ropz, ZywOo |
|           30 |     1268 | 2025-08-20 | Liquid        | W   | 0.887      | 1.000        | 0.546 (0.484)    | 0.476 (0.422)    | 1 (0.887) |     6.66 | apEX, flameZ, mezii, ropz, ZywOo |
|           29 |     1373 | 2025-08-16 | The MongolZ   | L   | 0.861      | -            | -                | -                | -         |   -10.85 | apEX, flameZ, mezii, ropz, ZywOo |
|           28 |     1424 | 2025-08-15 | Liquid        | W   | 0.854      | 0.769        | 0.546 (0.358)    | 0.476 (0.312)    | 1 (0.854) |     6.47 | apEX, flameZ, mezii, ropz, ZywOo |
|           27 |     1648 | 2025-08-10 | Legacy        | W   | 0.821      | 0.624        | -                | 0.519 (0.266)    | -         |     1.76 | apEX, flameZ, mezii, ropz, ZywOo |
|           26 |     1700 | 2025-08-08 | NRG           | W   | 0.807      | 0.624        | -                | 0.591 (0.298)    | -         |     0.64 | apEX, flameZ, mezii, ropz, ZywOo |
|           25 |     1775 | 2025-08-02 | MOUZ          | L   | 0.768      | -            | -                | -                | -         |   -14.14 | apEX, flameZ, mezii, ropz, ZywOo |
|           24 |     1841 | 2025-07-29 | The MongolZ   | W   | 0.740      | 1.000        | 1.000 (0.740)    | 0.486 (0.359)    | 1 (0.740) |    14.25 | apEX, flameZ, mezii, ropz, ZywOo |
|           23 |     1889 | 2025-07-27 | G2            | W   | 0.727      | 1.000        | 0.781 (0.568)    | 0.592 (0.430)    | 1 (0.727) |    10.90 | apEX, flameZ, mezii, ropz, ZywOo |
|           22 |     1923 | 2025-07-26 | Astralis      | W   | 0.720      | 1.000        | 0.813 (0.585)    | 0.439 (0.316)    | 1 (0.720) |     7.75 | apEX, flameZ, mezii, ropz, ZywOo |
|           21 |     2399 | 2025-06-22 | The MongolZ   | W   | 0.495      | 1.000        | 1.000 (0.495)    | -                | 1 (0.495) |    10.25 | apEX, flameZ, mezii, ropz, ZywOo |
|           20 |     2414 | 2025-06-21 | MOUZ          | W   | 0.488      | 1.000        | 0.982 (0.479)    | -                | 1 (0.488) |     6.78 | apEX, flameZ, mezii, ropz, ZywOo |
|           19 |     2430 | 2025-06-20 | Natus Vincere | W   | 0.481      | 1.000        | 0.935 (0.450)    | -                | 1 (0.481) |     6.81 | apEX, flameZ, mezii, ropz, ZywOo |
|           18 |     2538 | 2025-06-14 | Virtus.pro    | W   | 0.442      | -            | -                | -                | -         |     1.20 | apEX, flameZ, mezii, ropz, ZywOo |
|           17 |     2593 | 2025-06-13 | 3DMAX         | W   | 0.433      | -            | -                | -                | -         |     4.07 | apEX, flameZ, mezii, ropz, ZywOo |
|           16 |     2608 | 2025-06-12 | Nemiga        | W   | 0.428      | -            | -                | -                | -         |     0.27 | apEX, flameZ, mezii, ropz, ZywOo |
|           15 |     2625 | 2025-06-12 | Legacy        | L   | 0.427      | -            | -                | -                | -         |   -12.59 | apEX, flameZ, mezii, ropz, ZywOo |
|           14 |     2838 | 2025-05-25 | MOUZ          | W   | 0.308      | -            | -                | -                | -         |     4.44 | apEX, flameZ, mezii, ropz, ZywOo |
|           13 |     2850 | 2025-05-24 | Falcons       | W   | 0.302      | -            | -                | -                | -         |     4.41 | apEX, flameZ, mezii, ropz, ZywOo |
|           12 |     2903 | 2025-05-21 | The MongolZ   | W   | 0.283      | -            | -                | -                | -         |     6.33 | apEX, flameZ, mezii, ropz, ZywOo |
|           11 |     2932 | 2025-05-20 | GamerLegion   | W   | 0.275      | -            | -                | -                | -         |     1.44 | apEX, flameZ, mezii, ropz, ZywOo |
|           10 |     2963 | 2025-05-19 | Legacy        | W   | 0.268      | -            | -                | -                | -         |     0.47 | apEX, flameZ, mezii, ropz, ZywOo |
|            9 |     3345 | 2025-05-04 | Falcons       | W   | 0.168      | -            | -                | -                | -         |     2.56 | apEX, flameZ, mezii, ropz, ZywOo |
|            8 |     3374 | 2025-05-03 | Spirit        | W   | 0.161      | -            | -                | -                | -         |     2.27 | apEX, flameZ, mezii, ropz, ZywOo |
|            7 |     3423 | 2025-05-01 | MOUZ          | W   | 0.146      | -            | -                | -                | -         |     2.16 | apEX, flameZ, mezii, ropz, ZywOo |
|            6 |     3447 | 2025-04-30 | Wildcard      | W   | 0.140      | -            | -                | -                | -         |     0.13 | apEX, flameZ, mezii, ropz, ZywOo |
|            5 |     3521 | 2025-04-27 | Falcons       | W   | 0.119      | -            | -                | -                | -         |     1.84 | apEX, flameZ, mezii, ropz, ZywOo |
|            4 |     3560 | 2025-04-26 | The MongolZ   | W   | 0.112      | -            | -                | -                | -         |     2.55 | apEX, flameZ, mezii, ropz, ZywOo |
|            3 |     3602 | 2025-04-23 | Falcons       | W   | 0.092      | -            | -                | -                | -         |     1.43 | apEX, flameZ, mezii, ropz, ZywOo |
|            2 |     3620 | 2025-04-22 | Liquid        | W   | 0.084      | -            | -                | -                | -         |     1.12 | apEX, flameZ, mezii, ropz, ZywOo |
|            1 |     3632 | 2025-04-21 | FlyQuest      | W   | 0.078      | -            | -                | -                | -         |     0.09 | apEX, flameZ, mezii, ropz, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($619,991.11)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-07 |      1.000 | $60,000.00     | $60,000.00      |
| 2025-08-24 |      0.913 | $70,000.00     | $63,880.14      |
| 2025-08-17 |      0.867 | $25,625.00     | $22,216.07      |
| 2025-08-03 |      0.774 | $108,000.00    | $83,576.14      |
| 2025-06-22 |      0.495 | $500,000.00    | $247,507.52     |
| 2025-05-25 |      0.308 | $285,000.00    | $87,919.60      |
| 2025-05-04 |      0.168 | $125,000.00    | $20,947.74      |
| 2025-04-27 |      0.119 | $285,000.00    | $33,943.90      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
