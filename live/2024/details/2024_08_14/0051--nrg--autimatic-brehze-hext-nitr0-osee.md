### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, nitr0, oSee<br />
Global Rank: [51](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_14.md)<br />
Regional Rank: [14]( ../../standings_americas_2024_08_14.md)<br />
<br />
Final Rank Value:  1025.9<br />
<br />
Final Rank Value (1025.9) = Starting Rank Value (854.0) + Head To Head Adjustments (171.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.0
- 400 + ( ( 0.230 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 854.0


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
|           80 |       70 | 2024-08-12 | Akimbo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.99 | autimatic, Brehze, HexT, nitr0, oSee |
|           79 |      258 | 2024-08-06 | Revenge Nation   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.20 | autimatic, Brehze, HexT, nitr0, oSee |
|           78 |      263 | 2024-08-06 | Revenge Nation   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.46 | autimatic, Brehze, HexT, nitr0, oSee |
|           77 |      318 | 2024-08-04 | Elevate          | W   | 1.000      | 0.303        | 0.027 (0.008)    | 0.536 (0.162)    | 0 (0.000) |    11.92 | autimatic, Brehze, HexT, nitr0, oSee |
|           76 |      323 | 2024-08-04 | Wildcard         | W   | 1.000      | 0.303        | 0.052 (0.016)    | 0.515 (0.156)    | 0 (0.000) |    17.30 | autimatic, Brehze, HexT, nitr0, oSee |
|           75 |      357 | 2024-08-03 | BOSS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.06 | autimatic, Brehze, HexT, nitr0, oSee |
|           74 |      464 | 2024-07-31 | BOSS             | W   | 1.000      | 0.477        | 0.013 (0.006)    | 0.362 (0.173)    | 0 (0.000) |     8.64 | autimatic, Brehze, HexT, nitr0, oSee |
|           73 |      468 | 2024-07-31 | BOSS             | W   | 1.000      | 0.477        | -                | 0.362 (0.173)    | 0 (0.000) |     9.28 | autimatic, Brehze, HexT, nitr0, oSee |
|           72 |      512 | 2024-07-30 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -15.68 | autimatic, Brehze, HexT, nitr0, oSee |
|           71 |      517 | 2024-07-30 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -17.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           70 |      805 | 2024-07-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -15.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           69 |      809 | 2024-07-21 | Nouns            | W   | 1.000      | 0.303        | 0.053 (0.016)    | 0.549 (0.166)    | 0 (0.000) |    14.11 | autimatic, Brehze, HexT, nitr0, oSee |
|           68 |      835 | 2024-07-20 | BOSS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.32 | autimatic, Brehze, HexT, nitr0, oSee |
|           67 |      903 | 2024-07-18 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.439 (0.209)    | -         |     8.26 | autimatic, Brehze, HexT, nitr0, oSee |
|           66 |      907 | 2024-07-18 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.439 (0.209)    | -         |     8.86 | autimatic, Brehze, HexT, nitr0, oSee |
|           65 |      969 | 2024-07-17 | Mythic           | W   | 1.000      | 0.477        | -                | 0.311 (0.148)    | -         |     7.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           64 |      974 | 2024-07-17 | Mythic           | W   | 1.000      | -            | -                | -                | -         |     7.59 | autimatic, Brehze, HexT, nitr0, oSee |
|           63 |     1031 | 2024-07-16 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | -                | 0.373 (0.178)    | -         |     5.87 | autimatic, Brehze, HexT, nitr0, oSee |
|           62 |     1036 | 2024-07-16 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | -                | 0.373 (0.178)    | -         |     6.20 | autimatic, Brehze, HexT, nitr0, oSee |
|           61 |     1086 | 2024-07-15 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     7.59 | autimatic, Brehze, HexT, nitr0, oSee |
|           60 |     1089 | 2024-07-15 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     8.11 | autimatic, Brehze, HexT, nitr0, oSee |
|           59 |     1547 | 2024-06-09 | M80              | W   | 0.760      | 0.143        | 0.178 (0.019)    | -                | -         |    20.18 | autimatic, Brehze, HexT, oSee, Walco |
|           58 |     1609 | 2024-06-08 | Party Astronauts | W   | 0.753      | -            | -                | -                | -         |    14.09 | autimatic, Brehze, HexT, oSee, Walco |
|           57 |     1665 | 2024-06-07 | Party Astronauts | L   | 0.746      | -            | -                | -                | -         |    -9.59 | autimatic, Brehze, HexT, oSee, Walco |
|           56 |     1708 | 2024-06-06 | Party Astronauts | L   | 0.742      | -            | -                | -                | -         |   -10.58 | autimatic, Brehze, HexT, oSee, Walco |
|           55 |     1720 | 2024-06-06 | Wildcard         | W   | 0.740      | -            | -                | -                | -         |    13.61 | autimatic, Brehze, HexT, oSee, Walco |
|           54 |     1722 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.740      | -            | -                | -                | -         |     6.10 | autimatic, Brehze, HexT, oSee, Walco |
|           53 |     1743 | 2024-06-06 | Wildcard         | L   | 0.739      | -            | -                | -                | -         |    -9.41 | autimatic, Brehze, HexT, oSee, Walco |
|           52 |     1776 | 2024-06-05 | LAG              | W   | 0.735      | -            | -                | -                | -         |     9.21 | autimatic, Brehze, HexT, oSee, Walco |
|           51 |     1788 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.733      | -            | -                | -                | -         |     6.40 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     1826 | 2024-06-04 | Nouns            | L   | 0.729      | -            | -                | -                | -         |    -9.24 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     2121 | 2024-05-23 | Nouns            | L   | 0.649      | -            | -                | -                | -         |    -8.74 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     2138 | 2024-05-22 | Elevate          | L   | 0.642      | -            | -                | -                | -         |    -8.22 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     2143 | 2024-05-22 | Elevate          | L   | 0.641      | -            | -                | -                | -         |    -8.68 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     2166 | 2024-05-22 | Legacy           | W   | 0.639      | 0.384        | 0.114 (0.028)    | -                | -         |    11.44 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     2189 | 2024-05-21 | Phoenix          | L   | 0.635      | -            | -                | -                | -         |   -14.78 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     2191 | 2024-05-21 | Phoenix          | W   | 0.635      | -            | -                | -                | -         |     5.17 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     2222 | 2024-05-20 | M80              | L   | 0.628      | -            | -                | -                | -         |    -3.33 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     2227 | 2024-05-20 | M80              | L   | 0.628      | -            | -                | -                | -         |    -3.44 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     2285 | 2024-05-18 | Nouns            | L   | 0.615      | -            | -                | -                | -         |   -10.05 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     2290 | 2024-05-18 | Party Astronauts | W   | 0.614      | 0.303        | 0.038 (0.007)    | -                | -         |     9.44 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     2324 | 2024-05-17 | BOSS             | W   | 0.607      | -            | -                | -                | -         |     6.00 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     2392 | 2024-05-15 | LAG              | W   | 0.595      | -            | -                | -                | -         |     6.50 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     2400 | 2024-05-15 | LAG              | W   | 0.595      | -            | -                | -                | -         |     6.82 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     2445 | 2024-05-14 | Take Flyte       | W   | 0.588      | -            | -                | -                | -         |     4.58 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     2451 | 2024-05-14 | Take Flyte       | W   | 0.588      | -            | -                | -                | -         |     4.76 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     2515 | 2024-05-12 | Phoenix          | W   | 0.575      | -            | -                | -                | -         |     5.50 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     2517 | 2024-05-12 | Elevate          | W   | 0.574      | -            | -                | -                | -         |    11.13 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     2547 | 2024-05-11 | Phoenix          | W   | 0.567      | -            | -                | -                | -         |     5.45 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     2549 | 2024-05-11 | BOSS             | W   | 0.567      | -            | -                | -                | -         |     7.03 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     2651 | 2024-05-06 | Party Astronauts | W   | 0.535      | 0.477        | 0.038 (0.010)    | -                | -         |     9.96 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     2652 | 2024-05-06 | Party Astronauts | L   | 0.535      | -            | -                | -                | -         |    -7.00 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     2887 | 2024-04-25 | Wildcard         | L   | 0.462      | -            | -                | -                | -         |    -6.58 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     2889 | 2024-04-25 | Wildcard         | W   | 0.461      | 0.477        | 0.052 (0.011)    | -                | -         |     8.15 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     3125 | 2024-04-17 | Akimbo           | L   | 0.407      | -            | -                | -                | -         |    -8.99 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     3184 | 2024-04-15 | Mythic           | W   | 0.395      | -            | -                | -                | -         |     4.45 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     3185 | 2024-04-15 | Mythic           | W   | 0.394      | -            | -                | -                | -         |     4.59 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     3271 | 2024-04-10 | BOSS             | W   | 0.362      | -            | -                | -                | -         |     4.92 | autimatic, Brehze, HexT, oSee, Walco |
|           22 |     3276 | 2024-04-10 | BOSS             | L   | 0.361      | -            | -                | -                | -         |    -6.61 | autimatic, Brehze, HexT, oSee, Walco |
|           21 |     3330 | 2024-04-09 | Carpe Diem       | W   | 0.355      | -            | -                | -                | -         |     2.66 | autimatic, Brehze, HexT, oSee, Walco |
|           20 |     3333 | 2024-04-09 | Carpe Diem       | W   | 0.355      | -            | -                | -                | -         |     2.72 | autimatic, Brehze, HexT, oSee, Walco |
|           19 |     3633 | 2024-03-27 | Nouns            | W   | 0.269      | 0.477        | 0.053 (0.007)    | -                | -         |     4.93 | autimatic, Brehze, HexT, oSee, Walco |
|           18 |     3638 | 2024-03-27 | Nouns            | L   | 0.268      | -            | -                | -                | -         |    -3.59 | autimatic, Brehze, HexT, oSee, Walco |
|           17 |     3685 | 2024-03-26 | MIGHT            | W   | 0.262      | -            | -                | -                | -         |     1.15 | autimatic, Brehze, HexT, oSee, Walco |
|           16 |     3690 | 2024-03-26 | MIGHT            | W   | 0.262      | -            | -                | -                | -         |     1.16 | autimatic, Brehze, HexT, oSee, Walco |
|           15 |     3856 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.189      | -            | -                | -                | -         |     2.06 | autimatic, Brehze, HexT, oSee, Walco |
|           14 |     3858 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.188      | -            | -                | -                | -         |    -3.93 | autimatic, Brehze, HexT, oSee, Walco |
|           13 |     3876 | 2024-03-14 | Limitless        | W   | 0.182      | -            | -                | -                | -         |     1.32 | autimatic, Brehze, HexT, oSee, Walco |
|           12 |     3881 | 2024-03-14 | Limitless        | W   | 0.182      | -            | -                | -                | -         |     1.34 | autimatic, Brehze, HexT, oSee, Walco |
|           11 |     3954 | 2024-03-12 | Carpe Diem       | L   | 0.168      | -            | -                | -                | -         |    -3.94 | autimatic, Brehze, HexT, oSee, Walco |
|           10 |     4209 | 2024-03-02 | MIBR             | L   | 0.100      | -            | -                | -                | -         |    -0.16 | Brehze, daps, FaNg, HexT, oSee       |
|            9 |     4228 | 2024-03-01 | Imperial         | L   | 0.094      | -            | -                | -                | -         |    -0.42 | Brehze, daps, FaNg, HexT, oSee       |
|            8 |     4334 | 2024-02-24 | Wildcard         | L   | 0.055      | -            | -                | -                | -         |    -0.76 | Brehze, daps, FaNg, HexT, oSee       |
|            7 |     4337 | 2024-02-24 | Limitless        | W   | 0.054      | -            | -                | -                | -         |     0.40 | Brehze, daps, FaNg, HexT, oSee       |
|            6 |     4343 | 2024-02-24 | Mythic           | W   | 0.054      | -            | -                | -                | -         |     0.69 | Brehze, daps, FaNg, HexT, oSee       |
|            5 |     4379 | 2024-02-22 | Party Astronauts | L   | 0.041      | -            | -                | -                | -         |    -0.56 | Brehze, daps, FaNg, HexT, oSee       |
|            4 |     4383 | 2024-02-22 | Wildcard         | W   | 0.041      | -            | -                | -                | -         |     0.73 | Brehze, daps, FaNg, HexT, oSee       |
|            3 |     4431 | 2024-02-20 | Party Astronauts | L   | 0.029      | -            | -                | -                | -         |    -0.39 | Brehze, daps, FaNg, HexT, oSee       |
|            2 |     4456 | 2024-02-19 | Party Astronauts | W   | 0.023      | -            | -                | -                | -         |     0.41 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     4458 | 2024-02-19 | Mythic           | W   | 0.021      | -            | -                | -                | -         |     0.27 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,001.74)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-07-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      0.762 | $4,250.00      | $3,237.47       |
| 2024-05-18 |      0.615 | $1,000.00      | $615.14         |
| 2024-05-12 |      0.575 | $2,000.00      | $1,149.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
