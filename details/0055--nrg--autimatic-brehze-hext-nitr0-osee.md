### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, nitr0, oSee<br />
Global Rank: [55](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1033.2<br />
<br />
Final Rank Value (1033.2) = Starting Rank Value (869.8) + Head To Head Adjustments (163.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.8
- 400 + ( ( 0.228 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 869.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |       45 | 2024-08-04 | Elevate          | W   | 1.000      | 0.303        | 0.030 (0.009)    | 0.509 (0.154)    | 0 (0.000) |    12.02 | autimatic, Brehze, HexT, nitr0, oSee |
|           76 |       50 | 2024-08-04 | Wildcard         | W   | 1.000      | 0.303        | 0.055 (0.017)    | 0.484 (0.147)    | 0 (0.000) |    17.27 | autimatic, Brehze, HexT, nitr0, oSee |
|           75 |       84 | 2024-08-03 | BOSS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.95 | autimatic, Brehze, HexT, nitr0, oSee |
|           74 |      191 | 2024-07-31 | BOSS             | W   | 1.000      | 0.477        | 0.014 (0.007)    | 0.318 (0.152)    | 0 (0.000) |     8.51 | autimatic, Brehze, HexT, nitr0, oSee |
|           73 |      195 | 2024-07-31 | BOSS             | W   | 1.000      | 0.477        | -                | 0.318 (0.152)    | 0 (0.000) |     9.14 | autimatic, Brehze, HexT, nitr0, oSee |
|           72 |      239 | 2024-07-30 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -15.59 | autimatic, Brehze, HexT, nitr0, oSee |
|           71 |      244 | 2024-07-30 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -17.03 | autimatic, Brehze, HexT, nitr0, oSee |
|           70 |      532 | 2024-07-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -15.54 | autimatic, Brehze, HexT, nitr0, oSee |
|           69 |      536 | 2024-07-21 | Nouns            | W   | 1.000      | 0.303        | 0.057 (0.017)    | 0.566 (0.171)    | 0 (0.000) |    14.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           68 |      562 | 2024-07-20 | BOSS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.17 | autimatic, Brehze, HexT, nitr0, oSee |
|           67 |      630 | 2024-07-18 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.376 (0.179)    | 0 (0.000) |     8.15 | autimatic, Brehze, HexT, nitr0, oSee |
|           66 |      634 | 2024-07-18 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.376 (0.179)    | 0 (0.000) |     8.73 | autimatic, Brehze, HexT, nitr0, oSee |
|           65 |      696 | 2024-07-17 | Mythic           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.94 | autimatic, Brehze, HexT, nitr0, oSee |
|           64 |      701 | 2024-07-17 | Mythic           | W   | 1.000      | -            | -                | -                | -         |     7.38 | autimatic, Brehze, HexT, nitr0, oSee |
|           63 |      758 | 2024-07-16 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | -                | 0.304 (0.145)    | -         |     5.54 | autimatic, Brehze, HexT, nitr0, oSee |
|           62 |      763 | 2024-07-16 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | -                | 0.304 (0.145)    | -         |     5.83 | autimatic, Brehze, HexT, nitr0, oSee |
|           61 |      813 | 2024-07-15 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     7.31 | autimatic, Brehze, HexT, nitr0, oSee |
|           60 |      816 | 2024-07-15 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     7.79 | autimatic, Brehze, HexT, nitr0, oSee |
|           59 |     1274 | 2024-06-09 | M80              | W   | 0.814      | 0.143        | 0.188 (0.022)    | -                | -         |    22.00 | autimatic, Brehze, HexT, oSee, Walco |
|           58 |     1336 | 2024-06-08 | Party Astronauts | W   | 0.807      | -            | -                | -                | -         |    15.30 | autimatic, Brehze, HexT, oSee, Walco |
|           57 |     1392 | 2024-06-07 | Party Astronauts | L   | 0.801      | -            | -                | -                | -         |   -10.04 | autimatic, Brehze, HexT, oSee, Walco |
|           56 |     1435 | 2024-06-06 | Party Astronauts | L   | 0.796      | -            | -                | -                | -         |   -11.16 | autimatic, Brehze, HexT, oSee, Walco |
|           55 |     1447 | 2024-06-06 | Wildcard         | W   | 0.794      | -            | -                | -                | -         |    14.56 | autimatic, Brehze, HexT, oSee, Walco |
|           54 |     1449 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.794      | -            | -                | -                | -         |     6.22 | autimatic, Brehze, HexT, oSee, Walco |
|           53 |     1470 | 2024-06-06 | Wildcard         | L   | 0.793      | -            | -                | -                | -         |   -10.11 | autimatic, Brehze, HexT, oSee, Walco |
|           52 |     1503 | 2024-06-05 | LAG              | W   | 0.789      | -            | -                | -                | -         |    10.00 | autimatic, Brehze, HexT, oSee, Walco |
|           51 |     1515 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.788      | -            | -                | -                | -         |     6.54 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     1553 | 2024-06-04 | Nouns            | L   | 0.783      | -            | -                | -                | -         |    -9.92 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     1848 | 2024-05-23 | Nouns            | L   | 0.703      | -            | -                | -                | -         |    -9.52 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     1865 | 2024-05-22 | Elevate          | L   | 0.696      | -            | -                | -                | -         |    -8.70 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     1870 | 2024-05-22 | Elevate          | L   | 0.696      | -            | -                | -                | -         |    -9.23 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     1893 | 2024-05-22 | Legacy           | W   | 0.694      | 0.384        | 0.122 (0.032)    | 0.621 (0.165)    | -         |    13.25 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     1916 | 2024-05-21 | Phoenix          | L   | 0.689      | -            | -                | -                | -         |   -16.20 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     1918 | 2024-05-21 | Phoenix          | W   | 0.689      | -            | -                | -                | -         |     5.41 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     1949 | 2024-05-20 | M80              | L   | 0.682      | -            | -                | -                | -         |    -3.19 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     1954 | 2024-05-20 | M80              | L   | 0.682      | -            | -                | -                | -         |    -3.29 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     2012 | 2024-05-18 | Nouns            | L   | 0.669      | -            | -                | -                | -         |   -11.08 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     2017 | 2024-05-18 | Party Astronauts | W   | 0.668      | 0.303        | 0.041 (0.008)    | -                | -         |    10.33 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     2051 | 2024-05-17 | BOSS             | W   | 0.662      | -            | -                | -                | -         |     6.42 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     2119 | 2024-05-15 | LAG              | W   | 0.649      | -            | -                | -                | -         |     7.19 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     2127 | 2024-05-15 | LAG              | W   | 0.649      | -            | -                | -                | -         |     7.58 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     2172 | 2024-05-14 | Take Flyte       | W   | 0.642      | -            | -                | -                | -         |     4.65 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     2178 | 2024-05-14 | Take Flyte       | W   | 0.642      | -            | -                | -                | -         |     4.84 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     2242 | 2024-05-12 | Phoenix          | W   | 0.629      | -            | -                | -                | -         |     5.90 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     2244 | 2024-05-12 | Elevate          | W   | 0.628      | -            | -                | -                | -         |    12.48 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     2274 | 2024-05-11 | Phoenix          | W   | 0.621      | -            | -                | -                | -         |     5.86 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     2276 | 2024-05-11 | BOSS             | W   | 0.621      | -            | -                | -                | -         |     7.73 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     2378 | 2024-05-06 | Party Astronauts | W   | 0.589      | 0.477        | 0.041 (0.011)    | -                | -         |    11.20 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     2379 | 2024-05-06 | Party Astronauts | L   | 0.589      | -            | -                | -                | -         |    -7.45 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     2614 | 2024-04-25 | Wildcard         | L   | 0.516      | -            | -                | -                | -         |    -7.43 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     2616 | 2024-04-25 | Wildcard         | W   | 0.515      | 0.477        | 0.055 (0.013)    | -                | -         |     9.03 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     2852 | 2024-04-17 | Akimbo           | L   | 0.461      | -            | -                | -                | -         |    -9.70 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     2911 | 2024-04-15 | Mythic           | W   | 0.449      | -            | -                | -                | -         |     4.85 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     2912 | 2024-04-15 | Mythic           | W   | 0.448      | -            | -                | -                | -         |     5.03 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     2998 | 2024-04-10 | BOSS             | W   | 0.416      | -            | -                | -                | -         |     5.75 | autimatic, Brehze, HexT, oSee, Walco |
|           22 |     3003 | 2024-04-10 | BOSS             | L   | 0.415      | -            | -                | -                | -         |    -7.52 | autimatic, Brehze, HexT, oSee, Walco |
|           21 |     3057 | 2024-04-09 | Carpe Diem       | W   | 0.409      | -            | -                | -                | -         |     3.04 | autimatic, Brehze, HexT, oSee, Walco |
|           20 |     3060 | 2024-04-09 | Carpe Diem       | W   | 0.409      | -            | -                | -                | -         |     3.12 | autimatic, Brehze, HexT, oSee, Walco |
|           19 |     3360 | 2024-03-27 | Nouns            | W   | 0.323      | 0.477        | 0.057 (0.009)    | -                | -         |     5.92 | autimatic, Brehze, HexT, oSee, Walco |
|           18 |     3365 | 2024-03-27 | Nouns            | L   | 0.322      | -            | -                | -                | -         |    -4.32 | autimatic, Brehze, HexT, oSee, Walco |
|           17 |     3412 | 2024-03-26 | MIGHT            | W   | 0.316      | -            | -                | -                | -         |     1.37 | autimatic, Brehze, HexT, oSee, Walco |
|           16 |     3417 | 2024-03-26 | MIGHT            | W   | 0.316      | -            | -                | -                | -         |     1.39 | autimatic, Brehze, HexT, oSee, Walco |
|           15 |     3583 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.243      | -            | -                | -                | -         |     2.79 | autimatic, Brehze, HexT, oSee, Walco |
|           14 |     3585 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.242      | -            | -                | -                | -         |    -4.93 | autimatic, Brehze, HexT, oSee, Walco |
|           13 |     3603 | 2024-03-14 | Limitless        | W   | 0.236      | -            | -                | -                | -         |     1.70 | autimatic, Brehze, HexT, oSee, Walco |
|           12 |     3608 | 2024-03-14 | Limitless        | W   | 0.236      | -            | -                | -                | -         |     1.72 | autimatic, Brehze, HexT, oSee, Walco |
|           11 |     3681 | 2024-03-12 | Carpe Diem       | L   | 0.222      | -            | -                | -                | -         |    -5.20 | autimatic, Brehze, HexT, oSee, Walco |
|           10 |     3936 | 2024-03-02 | MIBR             | L   | 0.154      | -            | -                | -                | -         |    -0.23 | Brehze, daps, FaNg, HexT, oSee       |
|            9 |     3955 | 2024-03-01 | Imperial         | L   | 0.148      | -            | -                | -                | -         |    -0.49 | Brehze, daps, FaNg, HexT, oSee       |
|            8 |     4061 | 2024-02-24 | Wildcard         | L   | 0.109      | -            | -                | -                | -         |    -1.53 | Brehze, daps, FaNg, HexT, oSee       |
|            7 |     4064 | 2024-02-24 | Limitless        | W   | 0.109      | -            | -                | -                | -         |     0.79 | Brehze, daps, FaNg, HexT, oSee       |
|            6 |     4070 | 2024-02-24 | Mythic           | W   | 0.108      | -            | -                | -                | -         |     1.34 | Brehze, daps, FaNg, HexT, oSee       |
|            5 |     4106 | 2024-02-22 | Party Astronauts | L   | 0.095      | -            | -                | -                | -         |    -1.25 | Brehze, daps, FaNg, HexT, oSee       |
|            4 |     4110 | 2024-02-22 | Wildcard         | W   | 0.095      | -            | -                | -                | -         |     1.67 | Brehze, daps, FaNg, HexT, oSee       |
|            3 |     4158 | 2024-02-20 | Party Astronauts | L   | 0.083      | -            | -                | -                | -         |    -1.09 | Brehze, daps, FaNg, HexT, oSee       |
|            2 |     4183 | 2024-02-19 | Party Astronauts | W   | 0.077      | -            | -                | -                | -         |     1.41 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     4185 | 2024-02-19 | Mythic           | W   | 0.075      | -            | -                | -                | -         |     0.94 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,393.81)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-07-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      0.816 | $4,250.00      | $3,467.30       |
| 2024-05-18 |      0.669 | $1,000.00      | $669.22         |
| 2024-05-12 |      0.629 | $2,000.00      | $1,257.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
