### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: draken, HEAP, jocab, Lekr0, Sapec<br />
Global Rank: [61](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [44]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1146.1<br />
<br />
Final Rank Value (1146.1) = Starting Rank Value (1294.1) + Head To Head Adjustments (-148.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.306[<sup>2</sup>](#table1)
- LAN Wins: 0.744[<sup>2</sup>](#table1)

The average of these factors is 0.451<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1294.1
- 400 + ( ( 0.451 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1294.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           76 |      182 | 2025-12-17 | magic            | L   | 1.000      | -            | -                | -                | -         |   -13.76 | draken, HEAP, jocab, Lekr0, Sapec      |
|           75 |      212 | 2025-12-15 | RUBY             | W   | 1.000      | 0.384        | 0.046 (0.018)    | 0.962 (0.370)    | -         |    10.52 | draken, HEAP, jocab, Lekr0, Sapec      |
|           74 |      245 | 2025-12-12 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |    -4.62 | draken, HEAP, jocab, Lekr0, Sapec      |
|           73 |      272 | 2025-12-10 | ECLOT            | W   | 1.000      | 0.435        | 0.075 (0.032)    | 0.677 (0.294)    | -         |    12.12 | draken, HEAP, jocab, Lekr0, Sapec      |
|           72 |      290 | 2025-12-09 | Oramond          | L   | 1.000      | -            | -                | -                | -         |   -13.63 | draken, HEAP, jocab, Lekr0, Sapec      |
|           71 |      293 | 2025-12-09 | VP.Prodigy       | W   | 1.000      | -            | -                | -                | -         |     4.62 | draken, HEAP, jocab, Lekr0, Sapec      |
|           70 |      311 | 2025-12-08 | EYEBALLERS       | L   | 1.000      | -            | -                | -                | -         |    -6.48 | draken, HEAP, jocab, Lekr0, Sapec      |
|           69 |      327 | 2025-12-07 | 500              | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |    11.37 | draken, HEAP, jocab, Lekr0, Sapec      |
|           68 |      330 | 2025-12-07 | 500              | W   | 1.000      | 0.371        | -                | 1.000 (0.371)    | -         |    12.35 | draken, HEAP, jocab, Lekr0, Sapec      |
|           67 |      401 | 2025-12-04 | FORZE Reload     | W   | 0.987      | -            | -                | -                | -         |     7.16 | draken, HEAP, jocab, Lekr0, Sapec      |
|           66 |      413 | 2025-12-04 | NOVAQ            | W   | 0.985      | 0.371        | -                | 0.826 (0.302)    | -         |    10.37 | draken, HEAP, jocab, Lekr0, Sapec      |
|           65 |      434 | 2025-12-02 | SPARTA           | L   | 0.974      | -            | -                | -                | -         |   -18.10 | draken, HEAP, jocab, Lekr0, Sapec      |
|           64 |      869 | 2025-11-15 | EYEBALLERS       | L   | 0.860      | -            | -                | -                | -         |    -7.32 | draken, HEAP, Lekr0, Licale, Sapec     |
|           63 |      884 | 2025-11-14 | Metizport        | L   | 0.854      | -            | -                | -                | -         |   -17.47 | draken, HEAP, Lekr0, Licale, Sapec     |
|           62 |      933 | 2025-11-12 | EYEBALLERS       | W   | 0.842      | 0.400        | 0.103 (0.035)    | 1.000 (0.337)    | 1 (0.842) |    19.73 | draken, HEAP, Lekr0, Licale, Sapec     |
|           61 |      947 | 2025-11-12 | FUT Academy      | W   | 0.840      | -            | -                | -                | 1 (0.840) |     1.02 | draken, HEAP, Lekr0, Licale, Sapec     |
|           60 |     1116 | 2025-11-07 | ENCE             | L   | 0.808      | -            | -                | -                | -         |    -5.86 | draken, HEAP, Lekr0, Licale, Sapec     |
|           59 |     1125 | 2025-11-07 | Inner Circle     | W   | 0.807      | 0.335        | 0.069 (0.019)    | -                | 1 (0.807) |    19.50 | draken, HEAP, Lekr0, Licale, Sapec     |
|           58 |     1142 | 2025-11-07 | Young Ninjas     | W   | 0.806      | -            | -                | -                | 1 (0.806) |     1.82 | draken, HEAP, Lekr0, Licale, Sapec     |
|           57 |     1157 | 2025-11-07 | Minkens finest   | W   | 0.806      | -            | -                | -                | 1 (0.806) |     0.42 | draken, HEAP, Lekr0, Licale, Sapec     |
|           56 |     1169 | 2025-11-07 | Metizport        | W   | 0.806      | -            | -                | -                | 1 (0.806) |     9.52 | draken, HEAP, Lekr0, Licale, Sapec     |
|           55 |     1188 | 2025-11-07 | Acend            | L   | 0.805      | -            | -                | -                | -         |   -15.51 | draken, HEAP, Lekr0, Licale, Sapec     |
|           54 |     1433 | 2025-10-29 | Nexus            | L   | 0.746      | -            | -                | -                | -         |   -15.14 | draken, HEAP, Lekr0, Licale, Sapec     |
|           53 |     1466 | 2025-10-28 | CYBERSHOKE       | L   | 0.739      | -            | -                | -                | -         |    -8.75 | draken, HEAP, Lekr0, Licale, Sapec     |
|           52 |     1600 | 2025-10-25 | ARCRED           | L   | 0.721      | -            | -                | -                | -         |   -18.11 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           51 |     1616 | 2025-10-25 | 33               | W   | 0.719      | -            | -                | -                | -         |     8.36 | draken, HEAP, Lekr0, Licale, Sapec     |
|           50 |     1667 | 2025-10-24 | magic            | L   | 0.714      | -            | -                | -                | -         |   -15.20 | draken, HEAP, Lekr0, Licale, Sapec     |
|           49 |     1668 | 2025-10-24 | ALLINNERS        | L   | 0.714      | -            | -                | -                | -         |   -20.31 | draken, HEAP, Lekr0, Licale, Sapec     |
|           48 |     1741 | 2025-10-22 | ARCRED           | W   | 0.701      | 0.435        | -                | 0.736 (0.224)    | -         |     3.86 | draken, HEAP, Lekr0, Licale, Sapec     |
|           47 |     1746 | 2025-10-22 | 33               | L   | 0.700      | -            | -                | -                | -         |   -15.87 | draken, HEAP, Lekr0, Licale, Sapec     |
|           46 |     1779 | 2025-10-20 | Sangal           | L   | 0.686      | -            | -                | -                | -         |   -11.93 | draken, HEAP, Lekr0, Licale, Sapec     |
|           45 |     1828 | 2025-10-17 | Alliance         | L   | 0.667      | -            | -                | -                | -         |    -8.95 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           44 |     1863 | 2025-10-16 | Partizan         | W   | 0.661      | -            | -                | -                | -         |     2.75 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           43 |     1900 | 2025-10-15 | Sangal           | L   | 0.654      | -            | -                | -                | -         |   -12.74 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           42 |     1986 | 2025-10-12 | BetBoom          | L   | 0.632      | -            | -                | -                | -         |    -3.86 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           41 |     2006 | 2025-10-11 | Sashi            | W   | 0.626      | 0.487        | -                | 0.694 (0.211)    | -         |     9.96 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           40 |     2016 | 2025-10-10 | Alliance         | W   | 0.621      | 0.384        | 0.052 (0.012)    | -                | -         |    10.92 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           39 |     2093 | 2025-10-09 | JiJieHao         | L   | 0.612      | -            | -                | -                | -         |   -16.11 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           38 |     2125 | 2025-10-08 | Partizan         | W   | 0.607      | -            | -                | -                | -         |     1.58 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           37 |     2196 | 2025-10-07 | SINNERS          | W   | 0.599      | 0.435        | 0.190 (0.050)    | -                | -         |     7.71 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           36 |     2230 | 2025-10-06 | ARCRED           | W   | 0.594      | -            | -                | -                | -         |     2.78 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           35 |     2302 | 2025-10-05 | Sangal           | W   | 0.587      | 0.487        | -                | 0.853 (0.243)    | -         |     7.03 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           34 |     2354 | 2025-10-04 | FAVBET           | W   | 0.580      | 0.435        | 0.049 (0.012)    | -                | -         |     4.52 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           33 |     2401 | 2025-10-03 | ARCRED           | W   | 0.572      | -            | -                | -                | -         |     2.71 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           32 |     2403 | 2025-10-03 | GUN5             | L   | 0.572      | -            | -                | -                | -         |    -7.59 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           31 |     2431 | 2025-10-02 | CYBERSHOKE       | W   | 0.566      | 0.487        | 0.062 (0.017)    | 1.000 (0.276)    | -         |    11.75 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           30 |     2499 | 2025-09-30 | Tricked          | L   | 0.553      | -            | -                | -                | -         |   -16.28 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           29 |     2516 | 2025-09-30 | 1win             | W   | 0.552      | -            | -                | -                | -         |     3.06 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           28 |     2596 | 2025-09-28 | 9INE             | L   | 0.538      | -            | -                | -                | -         |    -4.10 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           27 |     2651 | 2025-09-27 | Friendly Campers | W   | 0.532      | 0.354        | 0.109 (0.020)    | -                | 1 (0.532) |    13.10 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           26 |     2662 | 2025-09-27 | ENCE             | W   | 0.531      | -            | -                | -                | 1 (0.531) |    11.83 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           25 |     2685 | 2025-09-26 | Partizan         | W   | 0.526      | -            | -                | -                | 1 (0.526) |     2.90 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           24 |     2698 | 2025-09-26 | kONO             | W   | 0.526      | -            | -                | -                | 1 (0.526) |     1.72 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           23 |     2735 | 2025-09-25 | KHAN             | L   | 0.520      | -            | -                | -                | -         |   -14.96 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           22 |     2799 | 2025-09-22 | Eternal Fire     | L   | 0.501      | -            | -                | -                | -         |   -13.75 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           21 |     2885 | 2025-09-19 | JiJieHao         | L   | 0.480      | -            | -                | -                | -         |   -13.04 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           20 |     2983 | 2025-09-16 | SENZA            | W   | 0.460      | -            | -                | -                | -         |     0.50 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           19 |     3007 | 2025-09-15 | Monte            | L   | 0.454      | -            | -                | -                | -         |    -6.72 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           18 |     3108 | 2025-09-13 | ARCRED           | L   | 0.439      | -            | -                | -                | -         |   -12.25 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           17 |     3134 | 2025-09-12 | FUT              | L   | 0.434      | -            | -                | -                | -         |    -2.12 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           16 |     3157 | 2025-09-12 | Sangal           | L   | 0.432      | -            | -                | -                | -         |    -9.39 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           15 |     3188 | 2025-09-11 | FAVBET           | L   | 0.428      | -            | -                | -                | -         |   -11.78 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           14 |     3242 | 2025-09-10 | RUBY             | L   | 0.421      | -            | -                | -                | -         |   -11.23 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           13 |     3248 | 2025-09-10 | Passion UA       | W   | 0.420      | -            | -                | -                | -         |     0.41 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           12 |     3289 | 2025-09-09 | 9INE             | L   | 0.414      | -            | -                | -                | -         |    -4.23 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           11 |     3608 | 2025-08-27 | ENCE             | L   | 0.328      | -            | -                | -                | -         |    -3.91 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|           10 |     3644 | 2025-08-26 | magic            | W   | 0.320      | -            | -                | -                | -         |     2.24 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|            9 |     3841 | 2025-08-16 | 9INE             | L   | 0.254      | -            | -                | -                | -         |    -2.68 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|            8 |     3932 | 2025-08-14 | BIG              | W   | 0.241      | -            | -                | -                | -         |     0.29 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|            7 |     4046 | 2025-08-12 | SAW              | W   | 0.227      | 0.384        | 0.315 (0.028)    | -                | -         |     6.14 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|            6 |     4206 | 2025-08-07 | Inner Circle     | L   | 0.192      | -            | -                | -                | -         |    -2.35 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|            5 |     4211 | 2025-08-06 | ex-Zero Tenacity | W   | 0.187      | -            | -                | -                | -         |     0.66 | draken, HEAP, Lekr0, Sapec, Svedjehed  |
|            4 |     4233 | 2025-08-04 | Nexus            | W   | 0.174      | -            | -                | -                | -         |     1.98 | draken, Lekr0, Meinz, Sapec, Svedjehed |
|            3 |     4249 | 2025-08-03 | 9INE             | L   | 0.166      | -            | -                | -                | -         |    -1.74 | draken, Lekr0, Meinz, Sapec, Svedjehed |
|            2 |     4299 | 2025-07-31 | Monte            | W   | 0.147      | -            | -                | -                | -         |     2.12 | draken, Lekr0, Meinz, Sapec, Svedjehed |
|            1 |     4308 | 2025-07-30 | CYBERSHOKE       | L   | 0.141      | -            | -                | -                | -         |    -1.53 | draken, Lekr0, Meinz, Sapec, Svedjehed |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,643.71)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-12-10 |      1.000 | $3,000.00      | $3,000.00       |
| 2025-11-15 |      0.861 | $1,324.00      | $1,139.74       |
| 2025-10-20 |      0.687 | $1,750.00      | $1,202.73       |
| 2025-10-13 |      0.641 | $2,936.00      | $1,881.85       |
| 2025-09-28 |      0.541 | $275.00        | $148.69         |
| 2025-09-01 |      0.361 | $750.00        | $270.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
