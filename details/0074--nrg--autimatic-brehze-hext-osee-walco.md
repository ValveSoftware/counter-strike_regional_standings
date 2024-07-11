### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, oSee, Walco<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [19]( ../standings_americas.md)<br />
Final Rank Value:  1003.6<br />
<br />
Final Rank Value (1003.6) = Starting Rank Value (882.4) + Head To Head Adjustments (121.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.4
- 400 + ( ( 0.229 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 882.4


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
|           72 |      372 | 2024-06-09 | M80              | W   | 0.987      | 0.143        | 0.218 (0.031)    | -                | 0 (0.000) |    25.91 | autimatic, Brehze, HexT, oSee, Walco |
|           71 |      434 | 2024-06-08 | Party Astronauts | W   | 0.981      | 0.143        | 0.062 (0.009)    | -                | 0 (0.000) |    19.05 | autimatic, Brehze, HexT, oSee, Walco |
|           70 |      490 | 2024-06-07 | Party Astronauts | L   | 0.974      | -            | -                | -                | -         |   -11.53 | autimatic, Brehze, HexT, oSee, Walco |
|           69 |      533 | 2024-06-06 | Party Astronauts | L   | 0.969      | -            | -                | -                | -         |   -13.17 | autimatic, Brehze, HexT, oSee, Walco |
|           68 |      545 | 2024-06-06 | Wildcard         | W   | 0.968      | 0.143        | 0.073 (0.010)    | -                | 0 (0.000) |    17.53 | autimatic, Brehze, HexT, oSee, Walco |
|           67 |      547 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.967      | -            | -                | -                | 0 (0.000) |     7.76 | autimatic, Brehze, HexT, oSee, Walco |
|           66 |      568 | 2024-06-06 | Wildcard         | L   | 0.967      | -            | -                | -                | -         |   -12.17 | autimatic, Brehze, HexT, oSee, Walco |
|           65 |      601 | 2024-06-05 | LAG              | W   | 0.963      | 0.477        | 0.021 (0.009)    | 0.396 (0.182)    | 0 (0.000) |    11.79 | autimatic, Brehze, HexT, oSee, Walco |
|           64 |      613 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.961      | -            | -                | -                | 0 (0.000) |     8.28 | autimatic, Brehze, HexT, oSee, Walco |
|           63 |      651 | 2024-06-04 | Nouns            | L   | 0.956      | -            | -                | -                | -         |   -10.71 | autimatic, Brehze, HexT, oSee, Walco |
|           62 |      946 | 2024-05-23 | Nouns            | L   | 0.876      | -            | -                | -                | -         |   -10.52 | autimatic, Brehze, HexT, oSee, Walco |
|           61 |      963 | 2024-05-22 | Elevate          | L   | 0.869      | -            | -                | -                | -         |   -10.80 | autimatic, Brehze, HexT, oSee, Walco |
|           60 |      968 | 2024-05-22 | Elevate          | L   | 0.869      | -            | -                | -                | -         |   -11.63 | autimatic, Brehze, HexT, oSee, Walco |
|           59 |      991 | 2024-05-22 | Legacy           | W   | 0.867      | 0.384        | 0.160 (0.053)    | 0.508 (0.169)    | 0 (0.000) |    17.52 | autimatic, Brehze, HexT, oSee, Walco |
|           58 |     1014 | 2024-05-21 | Take Flyte       | L   | 0.862      | -            | -                | -                | -         |   -20.20 | autimatic, Brehze, HexT, oSee, Walco |
|           57 |     1016 | 2024-05-21 | Take Flyte       | W   | 0.862      | 0.477        | -                | 0.283 (0.116)    | 0 (0.000) |     6.69 | autimatic, Brehze, HexT, oSee, Walco |
|           56 |     1047 | 2024-05-20 | M80              | L   | 0.856      | -            | -                | -                | -         |    -4.88 | autimatic, Brehze, HexT, oSee, Walco |
|           55 |     1052 | 2024-05-20 | M80              | L   | 0.855      | -            | -                | -                | -         |    -5.10 | autimatic, Brehze, HexT, oSee, Walco |
|           54 |     1110 | 2024-05-18 | Nouns            | L   | 0.843      | -            | -                | -                | -         |   -13.10 | autimatic, Brehze, HexT, oSee, Walco |
|           53 |     1115 | 2024-05-18 | Party Astronauts | W   | 0.841      | 0.303        | 0.062 (0.016)    | 0.589 (0.150)    | 0 (0.000) |    13.14 | autimatic, Brehze, HexT, oSee, Walco |
|           52 |     1149 | 2024-05-17 | BOSS             | W   | 0.835      | -            | -                | -                | 0 (0.000) |     7.50 | autimatic, Brehze, HexT, oSee, Walco |
|           51 |     1217 | 2024-05-15 | LAG              | W   | 0.822      | 0.477        | -                | 0.396 (0.155)    | -         |     8.61 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     1225 | 2024-05-15 | LAG              | W   | 0.822      | 0.477        | -                | 0.396 (0.155)    | -         |     9.19 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     1270 | 2024-05-14 | One More         | W   | 0.816      | -            | -                | -                | -         |     5.25 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     1276 | 2024-05-14 | One More         | W   | 0.815      | -            | -                | -                | -         |     5.51 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     1340 | 2024-05-12 | Take Flyte       | W   | 0.802      | -            | -                | -                | -         |     7.63 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     1342 | 2024-05-12 | Elevate          | W   | 0.801      | 0.270        | 0.041 (0.009)    | 0.596 (0.129)    | -         |    16.02 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     1372 | 2024-05-11 | Take Flyte       | W   | 0.794      | -            | -                | -                | -         |     7.62 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     1374 | 2024-05-11 | BOSS             | W   | 0.794      | -            | -                | -                | -         |     9.70 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     1476 | 2024-05-06 | Party Astronauts | W   | 0.762      | 0.477        | 0.062 (0.022)    | 0.589 (0.214)    | -         |    15.28 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     1477 | 2024-05-06 | Party Astronauts | L   | 0.762      | -            | -                | -                | -         |    -8.70 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     1712 | 2024-04-25 | Wildcard         | L   | 0.689      | -            | -                | -                | -         |    -9.54 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     1714 | 2024-04-25 | Wildcard         | W   | 0.689      | 0.477        | 0.073 (0.024)    | 0.569 (0.187)    | -         |    12.46 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     1950 | 2024-04-17 | OMiT             | L   | 0.635      | -            | -                | -                | -         |   -12.93 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     2009 | 2024-04-15 | Mythic           | W   | 0.622      | -            | -                | -                | -         |     7.49 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     2010 | 2024-04-15 | Mythic           | W   | 0.622      | -            | -                | -                | -         |     7.90 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     2096 | 2024-04-10 | BOSS             | W   | 0.589      | -            | -                | -                | -         |     8.22 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     2101 | 2024-04-10 | BOSS             | L   | 0.589      | -            | -                | -                | -         |   -10.59 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     2155 | 2024-04-09 | Carpe Diem       | W   | 0.582      | -            | -                | -                | -         |     5.72 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     2158 | 2024-04-09 | Carpe Diem       | W   | 0.582      | -            | -                | -                | -         |     5.98 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     2458 | 2024-03-27 | Nouns            | W   | 0.496      | 0.477        | 0.086 (0.020)    | 0.484 (0.114)    | -         |    10.38 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     2463 | 2024-03-27 | Nouns            | L   | 0.496      | -            | -                | -                | -         |    -5.30 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     2510 | 2024-03-26 | MIGHT            | W   | 0.489      | -            | -                | -                | -         |     2.26 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     2515 | 2024-03-26 | MIGHT            | W   | 0.489      | -            | -                | -                | -         |     2.31 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     2681 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.416      | -            | -                | -                | -         |     5.72 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     2683 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.416      | -            | -                | -                | -         |    -7.55 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     2701 | 2024-03-14 | Limitless        | W   | 0.409      | -            | -                | -                | -         |     3.03 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     2706 | 2024-03-14 | Limitless        | W   | 0.409      | -            | -                | -                | -         |     3.11 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     2779 | 2024-03-12 | Carpe Diem       | L   | 0.395      | -            | -                | -                | -         |    -7.79 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     3034 | 2024-03-02 | MIBR             | L   | 0.327      | -            | -                | -                | -         |    -0.22 | Brehze, daps, FaNg, HexT, oSee       |
|           22 |     3053 | 2024-03-01 | Imperial         | L   | 0.321      | -            | -                | -                | -         |    -0.35 | Brehze, daps, FaNg, HexT, oSee       |
|           21 |     3159 | 2024-02-24 | Wildcard         | L   | 0.282      | -            | -                | -                | -         |    -3.61 | Brehze, daps, FaNg, HexT, oSee       |
|           20 |     3162 | 2024-02-24 | Limitless        | W   | 0.282      | -            | -                | -                | -         |     2.15 | Brehze, daps, FaNg, HexT, oSee       |
|           19 |     3168 | 2024-02-24 | Mythic           | W   | 0.282      | -            | -                | -                | -         |     4.14 | Brehze, daps, FaNg, HexT, oSee       |
|           18 |     3204 | 2024-02-22 | Party Astronauts | L   | 0.269      | -            | -                | -                | -         |    -3.10 | Brehze, daps, FaNg, HexT, oSee       |
|           17 |     3208 | 2024-02-22 | Wildcard         | W   | 0.268      | -            | -                | -                | -         |     5.06 | Brehze, daps, FaNg, HexT, oSee       |
|           16 |     3256 | 2024-02-20 | Party Astronauts | L   | 0.256      | -            | -                | -                | -         |    -2.98 | Brehze, daps, FaNg, HexT, oSee       |
|           15 |     3281 | 2024-02-19 | Party Astronauts | W   | 0.250      | -            | -                | -                | -         |     5.02 | Brehze, daps, FaNg, HexT, oSee       |
|           14 |     3283 | 2024-02-19 | Mythic           | W   | 0.249      | -            | -                | -                | -         |     3.78 | Brehze, daps, FaNg, HexT, oSee       |
|           13 |     3584 | 2024-02-03 | Elevate          | L   | 0.142      | -            | -                | -                | -         |    -1.16 | Brehze, daps, FaNg, HexT, oSee       |
|           12 |     3610 | 2024-02-02 | Party Astronauts | W   | 0.136      | -            | -                | -                | -         |     2.76 | Brehze, daps, FaNg, HexT, oSee       |
|           11 |     3614 | 2024-02-02 | Wildcard         | L   | 0.135      | -            | -                | -                | -         |    -1.68 | Brehze, daps, FaNg, HexT, oSee       |
|           10 |     3616 | 2024-02-02 | Party Astronauts | W   | 0.135      | -            | -                | -                | -         |     2.76 | Brehze, daps, FaNg, HexT, oSee       |
|            9 |     3992 | 2024-01-18 | Wildcard         | L   | 0.035      | -            | -                | -                | -         |    -0.44 | Brehze, daps, FaNg, HexT, oSee       |
|            8 |     3996 | 2024-01-18 | Elevate          | W   | 0.035      | -            | -                | -                | -         |     0.82 | Brehze, daps, FaNg, HexT, oSee       |
|            7 |     4042 | 2024-01-17 | squids           | W   | 0.029      | -            | -                | -                | -         |     0.06 | Brehze, daps, FaNg, HexT, oSee       |
|            6 |     4093 | 2024-01-16 | Elevate          | L   | 0.022      | -            | -                | -                | -         |    -0.18 | Brehze, daps, FaNg, HexT, oSee       |
|            5 |     4099 | 2024-01-16 | regain           | W   | 0.021      | -            | -                | -                | -         |     0.07 | Brehze, daps, FaNg, HexT, oSee       |
|            4 |     4139 | 2024-01-15 | TSM Shimmer      | W   | 0.015      | -            | -                | -                | -         |     0.15 | Brehze, daps, FaNg, HexT, oSee       |
|            3 |     4168 | 2024-01-14 | Rocket           | L   | 0.010      | -            | -                | -                | -         |    -0.28 | Brehze, daps, FaNg, HexT, oSee       |
|            2 |     4178 | 2024-01-14 | LOS              | W   | 0.008      | -            | -                | -                | -         |     0.02 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     4194 | 2024-01-13 | Nouns            | L   | 0.002      | -            | -                | -                | -         |    -0.02 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,650.15)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.989 | $4,250.00      | $4,203.78       |
| 2024-05-18 |      0.843 | $1,000.00      | $842.51         |
| 2024-05-12 |      0.802 | $2,000.00      | $1,603.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
