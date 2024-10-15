### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Global Rank: [27](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [17]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  1196.8<br />
<br />
Final Rank Value (1196.8) = Starting Rank Value (1164.2) + Head To Head Adjustments (32.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.582[<sup>1</sup>](#table2)
- Bounty Collected: 0.488[<sup>2</sup>](#table1)
- Opponent Network: 0.244[<sup>2</sup>](#table1)
- LAN Wins: 0.260[<sup>2</sup>](#table1)

The average of these factors is 0.393<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1164.2
- 400 + ( ( 0.393 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1164.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |       53 | 2024-10-11 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -26.83 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           51 |      204 | 2024-10-05 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -7.77 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           50 |      216 | 2024-10-05 | Rooster           | W   | 1.000      | 0.500        | -                | 0.290 (0.145)    | 1 (1.000) |     2.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           49 |      256 | 2024-10-04 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |   -14.84 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           48 |      458 | 2024-09-28 | GamerLegion       | W   | 1.000      | 0.435        | 0.250 (0.109)    | 0.610 (0.265)    | 0 (0.000) |    10.44 | KaiR0N-, Magnojez, s1ren, SELLTER, zorte |
|           47 |      468 | 2024-09-28 | 3DMAX             | W   | 1.000      | 0.435        | 0.426 (0.185)    | 0.739 (0.321)    | 0 (0.000) |    22.92 | KaiR0N-, Magnojez, s1ren, SELLTER, zorte |
|           46 |      498 | 2024-09-27 | Sangal            | W   | 1.000      | 0.435        | 0.201 (0.087)    | 0.543 (0.236)    | -         |    21.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           45 |      552 | 2024-09-26 | Monte Gen         | W   | 1.000      | 0.435        | -                | 0.506 (0.220)    | -         |     8.20 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           44 |     1178 | 2024-09-06 | Cloud9            | L   | 0.941      | -            | -                | -                | -         |   -19.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           43 |     1189 | 2024-09-06 | CYBERSHOKE        | L   | 0.939      | -            | -                | -                | -         |   -22.40 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           42 |     1220 | 2024-09-05 | Gaimin Gladiators | W   | 0.933      | 0.384        | -                | 0.586 (0.210)    | -         |     5.78 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           41 |     1311 | 2024-09-02 | Monte             | W   | 0.914      | 0.384        | -                | 0.822 (0.289)    | -         |     7.50 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           40 |     1583 | 2024-08-26 | LEON              | W   | 0.867      | -            | -                | -                | -         |     0.99 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           39 |     1645 | 2024-08-25 | Falcons           | L   | 0.859      | -            | -                | -                | -         |    -6.48 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           38 |     1659 | 2024-08-24 | paiN              | L   | 0.854      | -            | -                | -                | -         |    -4.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           37 |     1873 | 2024-08-18 | SINNERS           | W   | 0.814      | 0.435        | 0.165 (0.058)    | 1.000 (0.354)    | -         |     9.56 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           36 |     1877 | 2024-08-18 | Endpoint          | W   | 0.813      | 0.435        | -                | 0.590 (0.209)    | -         |     5.40 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           35 |     1891 | 2024-08-17 | Young Ninjas      | W   | 0.808      | -            | -                | -                | -         |     3.18 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           34 |     1922 | 2024-08-16 | DMS               | W   | 0.800      | 0.435        | -                | 0.557 (0.194)    | -         |     3.00 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           33 |     3654 | 2024-06-07 | Astralis          | L   | 0.334      | -            | -                | -                | -         |    -2.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           32 |     3721 | 2024-06-06 | Eternal Fire      | W   | 0.327      | 0.715        | 0.932 (0.218)    | -                | 1 (0.327) |    10.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           31 |     3733 | 2024-06-06 | Complexity        | W   | 0.326      | 0.715        | 0.300 (0.070)    | -                | 1 (0.326) |     9.51 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           30 |     3769 | 2024-06-05 | BIG               | W   | 0.321      | 0.715        | 0.203 (0.047)    | -                | 1 (0.321) |     8.56 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           29 |     3779 | 2024-06-05 | FURIA             | L   | 0.320      | -            | -                | -                | -         |    -0.61 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           28 |     3791 | 2024-06-05 | fnatic            | W   | 0.319      | 0.715        | 0.217 (0.050)    | -                | 1 (0.319) |     5.17 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           27 |     4067 | 2024-05-25 | B8                | L   | 0.247      | -            | -                | -                | -         |    -4.98 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           26 |     4093 | 2024-05-24 | DMS               | W   | 0.239      | -            | -                | -                | -         |     1.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           25 |     4182 | 2024-05-21 | Eternal Fire      | L   | 0.221      | -            | -                | -                | -         |    -0.13 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           24 |     4208 | 2024-05-20 | MIBR              | W   | 0.215      | 0.769        | 0.205 (0.034)    | -                | -         |     5.29 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           23 |     4217 | 2024-05-20 | Astralis          | L   | 0.214      | -            | -                | -                | -         |    -1.52 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           22 |     4230 | 2024-05-20 | MIBR              | W   | 0.212      | 0.769        | 0.205 (0.033)    | -                | -         |     5.24 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           21 |     4387 | 2024-05-15 | Falcons           | L   | 0.181      | -            | -                | -                | -         |    -1.27 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           20 |     4458 | 2024-05-14 | MOUZ              | L   | 0.173      | -            | -                | -                | -         |    -0.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           19 |     4497 | 2024-05-12 | B8                | L   | 0.161      | -            | -                | -                | -         |    -3.34 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           18 |     4504 | 2024-05-12 | 9 Pandas          | W   | 0.160      | -            | -                | -                | -         |     1.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           17 |     4536 | 2024-05-11 | Metizport         | W   | 0.153      | -            | -                | -                | -         |     0.90 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           16 |     4554 | 2024-05-10 | ex-Enterprise     | W   | 0.146      | -            | -                | -                | -         |     0.59 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           15 |     4614 | 2024-05-07 | FlyQuest          | L   | 0.127      | -            | -                | -                | -         |    -1.47 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           14 |     4666 | 2024-05-04 | AMKAL             | L   | 0.107      | -            | -                | -                | -         |    -2.35 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           13 |     4671 | 2024-05-04 | 9 Pandas          | W   | 0.107      | -            | -                | -                | -         |     0.91 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           12 |     4694 | 2024-05-03 | Insilio           | W   | 0.099      | -            | -                | -                | -         |     0.73 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           11 |     4734 | 2024-05-01 | EYEBALLERS        | W   | 0.087      | -            | -                | -                | -         |     0.22 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           10 |     4764 | 2024-04-30 | 3DMAX             | L   | 0.079      | -            | -                | -                | -         |    -0.27 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            9 |     4837 | 2024-04-26 | M80               | W   | 0.055      | -            | -                | -                | 1 (0.055) |     1.24 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            8 |     4851 | 2024-04-26 | Falcons           | W   | 0.053      | -            | -                | -                | 1 (0.053) |     1.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            7 |     4875 | 2024-04-25 | Vitality          | L   | 0.047      | -            | -                | -                | -         |    -0.03 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            6 |     4906 | 2024-04-23 | M80               | W   | 0.035      | -            | -                | -                | 1 (0.035) |     0.78 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            5 |     5010 | 2024-04-19 | Cloud9            | L   | 0.008      | -            | -                | -                | -         |    -0.25 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            4 |     5025 | 2024-04-19 | Eternal Fire      | L   | 0.007      | -            | -                | -                | -         |    -0.00 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            3 |     5052 | 2024-04-18 | Apeks             | W   | 0.001      | -            | -                | -                | -         |     0.00 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            2 |     5057 | 2024-04-18 | Apogee            | W   | 0.001      | -            | -                | -                | -         |     0.00 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            1 |     5062 | 2024-04-18 | Partizan          | W   | 0.001      | -            | -                | -                | -         |     0.00 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,892.77)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-09-28 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-08-18 |      0.814 | $22,000.00     | $17,913.54      |
| 2024-06-09 |      0.347 | $20,000.00     | $6,949.32       |
| 2024-05-26 |      0.254 | $2,000.00      | $508.23         |
| 2024-05-23 |      0.234 | $12,500.00     | $2,928.14       |
| 2024-05-12 |      0.161 | $10,000.00     | $1,611.79       |
| 2024-05-12 |      0.161 | $17,500.00     | $2,812.94       |
| 2024-05-04 |      0.107 | $10,000.00     | $1,074.48       |
| 2024-05-02 |      0.094 | $1,000.00      | $94.34          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
