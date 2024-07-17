### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, nitr0, oSee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
Final Rank Value:  1023.1<br />
<br />
Final Rank Value (1023.1) = Starting Rank Value (889.2) + Head To Head Adjustments (133.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 889.2
- 400 + ( ( 0.228 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 889.2


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
|           67 |       20 | 2024-07-16 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.12 | autimatic, Brehze, HexT, nitr0, oSee |
|           66 |       25 | 2024-07-16 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.29 | autimatic, Brehze, HexT, nitr0, oSee |
|           65 |       75 | 2024-07-15 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           64 |       78 | 2024-07-15 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.70 | autimatic, Brehze, HexT, nitr0, oSee |
|           63 |      536 | 2024-06-09 | M80              | W   | 0.947      | 0.143        | 0.219 (0.030)    | -                | 0 (0.000) |    25.47 | autimatic, Brehze, HexT, oSee, Walco |
|           62 |      598 | 2024-06-08 | Party Astronauts | W   | 0.941      | 0.143        | 0.063 (0.008)    | -                | 0 (0.000) |    18.34 | autimatic, Brehze, HexT, oSee, Walco |
|           61 |      654 | 2024-06-07 | Party Astronauts | L   | 0.934      | -            | -                | -                | -         |   -11.07 | autimatic, Brehze, HexT, oSee, Walco |
|           60 |      697 | 2024-06-06 | Party Astronauts | L   | 0.929      | -            | -                | -                | -         |   -12.55 | autimatic, Brehze, HexT, oSee, Walco |
|           59 |      709 | 2024-06-06 | Wildcard         | W   | 0.928      | 0.143        | 0.064 (0.009)    | -                | 0 (0.000) |    17.45 | autimatic, Brehze, HexT, oSee, Walco |
|           58 |      711 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.928      | -            | -                | -                | 0 (0.000) |     5.46 | autimatic, Brehze, HexT, oSee, Walco |
|           57 |      732 | 2024-06-06 | Wildcard         | L   | 0.927      | -            | -                | -                | -         |   -11.17 | autimatic, Brehze, HexT, oSee, Walco |
|           56 |      765 | 2024-06-05 | LAG              | W   | 0.923      | 0.477        | 0.020 (0.009)    | 0.417 (0.183)    | 0 (0.000) |    12.34 | autimatic, Brehze, HexT, oSee, Walco |
|           55 |      777 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.921      | -            | -                | -                | 0 (0.000) |     5.76 | autimatic, Brehze, HexT, oSee, Walco |
|           54 |      815 | 2024-06-04 | Nouns            | L   | 0.917      | -            | -                | -                | -         |   -10.93 | autimatic, Brehze, HexT, oSee, Walco |
|           53 |     1110 | 2024-05-23 | Nouns            | L   | 0.837      | -            | -                | -                | -         |   -10.74 | autimatic, Brehze, HexT, oSee, Walco |
|           52 |     1127 | 2024-05-22 | Elevate          | L   | 0.829      | -            | -                | -                | -         |   -10.13 | autimatic, Brehze, HexT, oSee, Walco |
|           51 |     1132 | 2024-05-22 | Elevate          | L   | 0.829      | -            | -                | -                | -         |   -10.87 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     1155 | 2024-05-22 | Legacy           | W   | 0.827      | 0.384        | 0.178 (0.057)    | 0.572 (0.182)    | -         |    17.40 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     1178 | 2024-05-21 | Perseverance     | L   | 0.823      | -            | -                | -                | -         |   -19.50 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     1180 | 2024-05-21 | Perseverance     | W   | 0.822      | 0.477        | -                | 0.268 (0.105)    | -         |     6.18 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     1211 | 2024-05-20 | M80              | L   | 0.816      | -            | -                | -                | -         |    -4.00 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     1216 | 2024-05-20 | M80              | L   | 0.816      | -            | -                | -                | -         |    -4.16 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     1274 | 2024-05-18 | Nouns            | L   | 0.803      | -            | -                | -                | -         |   -12.90 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     1279 | 2024-05-18 | Party Astronauts | W   | 0.801      | 0.303        | 0.063 (0.015)    | 0.604 (0.147)    | -         |    12.57 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     1313 | 2024-05-17 | BOSS             | W   | 0.795      | -            | -                | -                | -         |     7.40 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     1381 | 2024-05-15 | LAG              | W   | 0.783      | 0.477        | -                | 0.417 (0.156)    | -         |     9.16 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     1389 | 2024-05-15 | LAG              | W   | 0.782      | 0.477        | -                | 0.417 (0.155)    | -         |     9.78 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     1434 | 2024-05-14 | Take Flyte       | W   | 0.776      | -            | -                | -                | -         |     5.43 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     1440 | 2024-05-14 | Take Flyte       | W   | 0.776      | -            | -                | -                | -         |     5.70 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     1504 | 2024-05-12 | Perseverance     | W   | 0.762      | -            | -                | -                | -         |     7.25 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     1506 | 2024-05-12 | Elevate          | W   | 0.762      | 0.270        | 0.042 (0.009)    | 0.583 (0.120)    | -         |    15.66 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     1536 | 2024-05-11 | Perseverance     | W   | 0.755      | -            | -                | -                | -         |     7.25 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     1538 | 2024-05-11 | BOSS             | W   | 0.754      | -            | -                | -                | -         |     9.52 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     1640 | 2024-05-06 | Party Astronauts | W   | 0.723      | 0.477        | 0.063 (0.022)    | 0.604 (0.208)    | -         |    14.59 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     1641 | 2024-05-06 | Party Astronauts | L   | 0.722      | -            | -                | -                | -         |    -8.18 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     1876 | 2024-04-25 | Wildcard         | L   | 0.649      | -            | -                | -                | -         |    -8.82 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     1878 | 2024-04-25 | Wildcard         | W   | 0.649      | 0.477        | 0.064 (0.020)    | 0.553 (0.171)    | -         |    11.93 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     2114 | 2024-04-17 | OMiT             | L   | 0.595      | -            | -                | -                | -         |   -12.10 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     2173 | 2024-04-15 | Mythic           | W   | 0.582      | -            | -                | -                | -         |     6.66 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     2174 | 2024-04-15 | Mythic           | W   | 0.582      | -            | -                | -                | -         |     6.99 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     2260 | 2024-04-10 | BOSS             | W   | 0.549      | -            | -                | -                | -         |     7.93 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     2265 | 2024-04-10 | BOSS             | L   | 0.549      | -            | -                | -                | -         |    -9.60 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     2319 | 2024-04-09 | Carpe Diem       | W   | 0.543      | -            | -                | -                | -         |     4.07 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     2322 | 2024-04-09 | Carpe Diem       | W   | 0.542      | -            | -                | -                | -         |     4.21 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     2622 | 2024-03-27 | Nouns            | W   | 0.457      | 0.477        | 0.087 (0.019)    | 0.566 (0.123)    | -         |     9.16 | autimatic, Brehze, HexT, oSee, Walco |
|           22 |     2627 | 2024-03-27 | Nouns            | L   | 0.456      | -            | -                | -                | -         |    -5.29 | autimatic, Brehze, HexT, oSee, Walco |
|           21 |     2674 | 2024-03-26 | MIGHT            | W   | 0.450      | -            | -                | -                | -         |     2.02 | autimatic, Brehze, HexT, oSee, Walco |
|           20 |     2679 | 2024-03-26 | MIGHT            | W   | 0.449      | -            | -                | -                | -         |     2.06 | autimatic, Brehze, HexT, oSee, Walco |
|           19 |     2845 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.376      | -            | -                | -                | -         |     4.88 | autimatic, Brehze, HexT, oSee, Walco |
|           18 |     2847 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.376      | -            | -                | -                | -         |    -7.12 | autimatic, Brehze, HexT, oSee, Walco |
|           17 |     2865 | 2024-03-14 | Limitless        | W   | 0.370      | -            | -                | -                | -         |     2.70 | autimatic, Brehze, HexT, oSee, Walco |
|           16 |     2870 | 2024-03-14 | Limitless        | W   | 0.369      | -            | -                | -                | -         |     2.76 | autimatic, Brehze, HexT, oSee, Walco |
|           15 |     2943 | 2024-03-12 | Carpe Diem       | L   | 0.356      | -            | -                | -                | -         |    -8.18 | autimatic, Brehze, HexT, oSee, Walco |
|           14 |     3198 | 2024-03-02 | MIBR             | L   | 0.288      | -            | -                | -                | -         |    -0.21 | Brehze, daps, FaNg, HexT, oSee       |
|           13 |     3217 | 2024-03-01 | Imperial         | L   | 0.282      | -            | -                | -                | -         |    -0.33 | Brehze, daps, FaNg, HexT, oSee       |
|           12 |     3323 | 2024-02-24 | Wildcard         | L   | 0.243      | -            | -                | -                | -         |    -3.15 | Brehze, daps, FaNg, HexT, oSee       |
|           11 |     3326 | 2024-02-24 | Limitless        | W   | 0.242      | -            | -                | -                | -         |     1.82 | Brehze, daps, FaNg, HexT, oSee       |
|           10 |     3332 | 2024-02-24 | Mythic           | W   | 0.242      | -            | -                | -                | -         |     3.42 | Brehze, daps, FaNg, HexT, oSee       |
|            9 |     3368 | 2024-02-22 | Party Astronauts | L   | 0.229      | -            | -                | -                | -         |    -2.63 | Brehze, daps, FaNg, HexT, oSee       |
|            8 |     3372 | 2024-02-22 | Wildcard         | W   | 0.229      | -            | -                | -                | -         |     4.27 | Brehze, daps, FaNg, HexT, oSee       |
|            7 |     3420 | 2024-02-20 | Party Astronauts | L   | 0.217      | -            | -                | -                | -         |    -2.51 | Brehze, daps, FaNg, HexT, oSee       |
|            6 |     3445 | 2024-02-19 | Party Astronauts | W   | 0.210      | -            | -                | -                | -         |     4.23 | Brehze, daps, FaNg, HexT, oSee       |
|            5 |     3447 | 2024-02-19 | Mythic           | W   | 0.209      | -            | -                | -                | -         |     3.04 | Brehze, daps, FaNg, HexT, oSee       |
|            4 |     3748 | 2024-02-03 | Elevate          | L   | 0.102      | -            | -                | -                | -         |    -0.81 | Brehze, daps, FaNg, HexT, oSee       |
|            3 |     3774 | 2024-02-02 | Party Astronauts | W   | 0.096      | -            | -                | -                | -         |     1.95 | Brehze, daps, FaNg, HexT, oSee       |
|            2 |     3778 | 2024-02-02 | Wildcard         | L   | 0.095      | -            | -                | -                | -         |    -1.20 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     3780 | 2024-02-02 | Party Astronauts | W   | 0.095      | -            | -                | -                | -         |     1.94 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,362.97)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.950 | $4,250.00      | $4,035.43       |
| 2024-05-18 |      0.803 | $1,000.00      | $802.90         |
| 2024-05-12 |      0.762 | $2,000.00      | $1,524.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
