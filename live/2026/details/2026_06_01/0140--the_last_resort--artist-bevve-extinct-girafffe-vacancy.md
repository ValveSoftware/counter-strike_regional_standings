### Roster Details<br />
Team Name: The Last Resort<br />
Roster: arTisT, bevve, Extinct, Girafffe, Vacancy<br />
Global Rank: [140](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [93]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  910.5<br />
<br />
Final Rank Value (910.5) = Starting Rank Value (882.5) + Head To Head Adjustments (28.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.235[<sup>2</sup>](#table1)
- LAN Wins: 0.186[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.5
- 400 + ( ( 0.253 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 882.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      188 | 2026-05-26 | Dripmen          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.09 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           54 |      323 | 2026-05-23 | EAC              | L   | 1.000      | -            | -                | -                | -         |    -7.48 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           53 |      807 | 2026-05-08 | Atreides         | L   | 1.000      | -            | -                | -                | -         |   -15.43 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           52 |      820 | 2026-05-07 | INOX Division    | L   | 1.000      | -            | -                | -                | -         |    -8.58 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           51 |      831 | 2026-05-06 | Lavked           | L   | 1.000      | -            | -                | -                | -         |   -10.16 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           50 |      864 | 2026-05-04 | HEROIC Academy   | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.440 (0.191)    | 0 (0.000) |    10.52 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           49 |      871 | 2026-05-04 | M1X KS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.47 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           48 |      906 | 2026-05-03 | AM               | L   | 1.000      | -            | -                | -                | -         |    -5.75 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           47 |      960 | 2026-05-02 | cirahvi          | W   | 0.998      | 0.303        | 0.004 (0.001)    | 0.560 (0.169)    | 0 (0.000) |     7.40 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           46 |     1004 | 2026-05-01 | GenOne           | L   | 0.992      | -            | -                | -                | -         |   -16.02 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           45 |     1114 | 2026-04-28 | EAC              | W   | 0.974      | 0.435        | 0.011 (0.005)    | 0.768 (0.325)    | 0 (0.000) |    24.57 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           44 |     1158 | 2026-04-27 | Phantom          | L   | 0.967      | -            | -                | -                | -         |   -10.27 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           43 |     1217 | 2026-04-26 | Just Players     | W   | 0.961      | 0.384        | 0.005 (0.002)    | 0.641 (0.237)    | 0 (0.000) |    13.26 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           42 |     1236 | 2026-04-26 | MANA             | W   | 0.959      | 0.303        | -                | 0.712 (0.207)    | -         |    16.55 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           41 |     1298 | 2026-04-25 | Nemesis          | L   | 0.954      | -            | -                | -                | -         |    -2.29 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           40 |     1353 | 2026-04-24 | Famalicão        | W   | 0.947      | -            | -                | -                | -         |     9.76 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           39 |     1400 | 2026-04-23 | ex-Zero Tenacity | W   | 0.940      | 0.384        | -                | 0.815 (0.294)    | -         |    12.34 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           38 |     1407 | 2026-04-23 | MANA             | L   | 0.939      | -            | -                | -                | -         |   -11.74 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           37 |     1424 | 2026-04-22 | Young Ninjas     | L   | 0.933      | -            | -                | -                | -         |   -13.84 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           36 |     1443 | 2026-04-21 | INOX Division    | L   | 0.926      | -            | -                | -                | -         |   -12.14 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           35 |     1502 | 2026-04-18 | HEROIC Academy   | W   | 0.906      | 0.303        | 0.004 (0.001)    | -                | -         |    14.22 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           34 |     2061 | 2026-04-02 | DONSTU           | L   | 0.801      | -            | -                | -                | -         |   -17.93 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           33 |     2143 | 2026-04-01 | PsychoFace       | L   | 0.794      | -            | -                | -                | -         |    -5.87 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           32 |     2254 | 2026-03-31 | Johnny Speeds    | L   | 0.786      | -            | -                | -                | -         |    -4.25 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           31 |     2331 | 2026-03-30 | BIG EQUIPA       | W   | 0.780      | -            | -                | -                | -         |     3.31 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           30 |     2383 | 2026-03-29 | DONSTU           | W   | 0.774      | -            | -                | -                | -         |     6.06 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           29 |     2877 | 2026-03-21 | CTRL             | W   | 0.720      | -            | -                | -                | 1 (0.720) |     2.27 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           28 |     2902 | 2026-03-21 | MANA             | W   | 0.719      | 0.435        | -                | 0.712 (0.222)    | -         |    13.28 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           27 |     2930 | 2026-03-20 | rottweilers      | L   | 0.715      | -            | -                | -                | -         |   -18.90 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           26 |     2994 | 2026-03-19 | Leo              | W   | 0.706      | 0.384        | 0.006 (0.002)    | -                | -         |    10.11 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           25 |     3005 | 2026-03-19 | Rune Eaters      | W   | 0.705      | 0.435        | 0.006 (0.002)    | 0.688 (0.211)    | -         |    14.16 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           24 |     3031 | 2026-03-18 | HEROIC Academy   | W   | 0.700      | 0.384        | 0.004 (0.001)    | -                | -         |    10.78 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           23 |     3053 | 2026-03-18 | ex-RUBY          | W   | 0.698      | 0.435        | 0.033 (0.010)    | 0.989 (0.300)    | -         |    16.59 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           22 |     3071 | 2026-03-17 | Nemiga           | L   | 0.694      | -            | -                | -                | -         |    -1.86 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           21 |     3131 | 2026-03-16 | Clutchain fe     | W   | 0.686      | 0.384        | 0.012 (0.003)    | -                | -         |     5.03 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           20 |     3168 | 2026-03-15 | HEROIC Academy   | W   | 0.680      | -            | -                | -                | -         |    12.16 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           19 |     3267 | 2026-03-13 | Lilmix           | W   | 0.666      | -            | -                | -                | -         |     9.29 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           18 |     3296 | 2026-03-12 | PsychoFace       | L   | 0.661      | -            | -                | -                | -         |    -4.32 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           17 |     3328 | 2026-03-12 | Bebop            | W   | 0.659      | 0.384        | -                | 0.757 (0.192)    | -         |    10.76 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           16 |     3577 | 2026-03-07 | NEW VISION       | L   | 0.627      | -            | -                | -                | -         |   -12.09 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           15 |     3662 | 2026-03-05 | Clutchain        | W   | 0.614      | -            | -                | -                | -         |     3.00 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           14 |     4093 | 2026-02-24 | BUFF3D UP        | W   | 0.554      | -            | -                | -                | -         |     1.29 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           13 |     4212 | 2026-02-22 | Dripmen          | W   | 0.540      | -            | -                | -                | 1 (0.540) |     5.94 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           12 |     4265 | 2026-02-21 | CTRL             | W   | 0.534      | -            | -                | -                | 1 (0.534) |     2.48 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           11 |     4383 | 2026-02-19 | Fuzos            | L   | 0.520      | -            | -                | -                | -         |   -10.35 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           10 |     4841 | 2026-02-10 | Bebop            | L   | 0.459      | -            | -                | -                | -         |    -8.34 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            9 |     4853 | 2026-02-09 | home             | L   | 0.454      | -            | -                | -                | -         |   -12.45 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            8 |     5119 | 2026-01-31 | EAC              | L   | 0.394      | -            | -                | -                | -         |    -1.78 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            7 |     5327 | 2026-01-23 | CPH Wolves       | W   | 0.344      | -            | -                | -                | -         |     1.09 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            6 |     5570 | 2026-01-17 | Phantom          | L   | 0.299      | -            | -                | -                | -         |    -1.41 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            5 |     5716 | 2026-01-13 | HYPERSPIRIT      | L   | 0.272      | -            | -                | -                | -         |    -3.29 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            4 |     5733 | 2026-01-11 | Acend            | L   | 0.259      | -            | -                | -                | -         |    -0.61 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            3 |     5735 | 2026-01-11 | BRUTE            | W   | 0.259      | -            | -                | -                | -         |     0.91 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            2 |     5757 | 2026-01-07 | cirahvi          | L   | 0.233      | -            | -                | -                | -         |    -4.76 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            1 |     6107 | 2025-12-06 | Dripmen          | W   | 0.021      | -            | -                | -                | 1 (0.021) |     0.19 | arTisT, bevve, Extinct, Unicorn, Vacancy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,811.78)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-21 |      0.720 | $2,297.00      | $1,654.75       |
| 2026-02-22 |      0.540 | $3,909.00      | $2,110.61       |
| 2025-12-06 |      0.021 | $2,237.00      | $46.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
