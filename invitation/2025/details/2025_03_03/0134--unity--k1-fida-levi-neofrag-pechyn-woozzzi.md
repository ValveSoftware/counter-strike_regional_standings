### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi<br />
Global Rank: [134](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [91]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  718.4<br />
<br />
Final Rank Value (718.4) = Starting Rank Value (778.1) + Head To Head Adjustments (-59.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.102[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.1
- 400 + ( ( 0.196 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 778.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      495 | 2025-02-08 | Iberian Soul      | L   | 1.000      | -            | -                | -                | -         |   -13.45 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           35 |      573 | 2025-02-05 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -13.27 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           34 |      604 | 2025-02-04 | Iberian Soul      | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.636 (0.091)    | 0 (0.000) |    17.30 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           33 |      674 | 2025-01-27 | Ninjas in Pyjamas | L   | 0.965      | -            | -                | -                | -         |   -22.30 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           32 |      678 | 2025-01-26 | FAVBET            | L   | 0.960      | -            | -                | -                | -         |   -12.53 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           31 |      806 | 2024-12-22 | 9INE              | L   | 0.726      | -            | -                | -                | -         |    -6.83 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           30 |      831 | 2024-12-19 | Insilio           | W   | 0.708      | 0.354        | -                | 0.439 (0.110)    | 0 (0.000) |     7.24 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           29 |      839 | 2024-12-19 | Illuminar         | W   | 0.706      | 0.354        | 0.007 (0.002)    | 0.311 (0.078)    | 0 (0.000) |    10.74 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           28 |      847 | 2024-12-18 | Insilio           | L   | 0.700      | -            | -                | -                | -         |   -14.93 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|           27 |     1198 | 2024-11-30 | Partizan          | L   | 0.581      | -            | -                | -                | -         |    -3.20 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           26 |     1271 | 2024-11-26 | Nexus             | L   | 0.554      | -            | -                | -                | -         |    -2.31 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           25 |     1301 | 2024-11-24 | ECLOT             | L   | 0.540      | -            | -                | -                | -         |    -3.20 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           24 |     1337 | 2024-11-23 | Sampi             | W   | 0.532      | 0.458        | 0.012 (0.003)    | 0.103 (0.025)    | 1 (0.532) |     8.57 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           23 |     1432 | 2024-11-18 | GamerLegion       | L   | 0.499      | -            | -                | -                | -         |    -0.32 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           22 |     1449 | 2024-11-17 | SAW               | L   | 0.492      | -            | -                | -                | -         |    -0.77 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           21 |     1459 | 2024-11-17 | BetBoom           | L   | 0.491      | -            | -                | -                | -         |    -3.60 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           20 |     2002 | 2024-10-24 | HOTU              | L   | 0.333      | -            | -                | -                | -         |    -6.86 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           19 |     2034 | 2024-10-21 | Johnny Speeds     | L   | 0.313      | -            | -                | -                | -         |    -3.54 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           18 |     2201 | 2024-10-14 | 500               | L   | 0.266      | -            | -                | -                | -         |    -2.17 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           17 |     2376 | 2024-10-07 | NAVI Junior       | L   | 0.219      | -            | -                | -                | -         |    -2.01 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           16 |     2378 | 2024-10-07 | 9INE              | W   | 0.218      | 0.143        | 0.011 (0.000)    | 0.273 (0.009)    | 0 (0.000) |     3.15 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           15 |     2403 | 2024-10-06 | Leo               | L   | 0.212      | -            | -                | -                | -         |    -3.49 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           14 |     2474 | 2024-10-04 | Preasy            | W   | 0.198      | 0.333        | 0.006 (0.000)    | 0.204 (0.013)    | 0 (0.000) |     2.40 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           13 |     2533 | 2024-10-02 | FAVBET            | W   | 0.187      | 0.143        | 0.029 (0.001)    | 0.671 (0.018)    | 0 (0.000) |     3.09 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           12 |     2552 | 2024-10-02 | Viperio           | W   | 0.185      | -            | -                | -                | -         |     1.78 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           11 |     2602 | 2024-10-01 | Partizan          | L   | 0.179      | -            | -                | -                | -         |    -0.97 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           10 |     2737 | 2024-09-27 | WildLotus         | L   | 0.153      | -            | -                | -                | -         |    -2.60 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            9 |     2900 | 2024-09-24 | Dark Cloud        | W   | 0.131      | 0.371        | 0.027 (0.001)    | 0.387 (0.019)    | -         |     1.87 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            8 |     2952 | 2024-09-22 | SINNERS           | W   | 0.120      | 0.346        | 0.026 (0.001)    | 0.503 (0.021)    | 1 (0.120) |     2.45 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            7 |     2973 | 2024-09-21 | SINNERS           | W   | 0.114      | 0.346        | 0.026 (0.001)    | 0.503 (0.020)    | 1 (0.114) |     2.34 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            6 |     3005 | 2024-09-20 | Sampi             | W   | 0.106      | 0.346        | 0.012 (0.000)    | -                | 1 (0.106) |     1.72 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            5 |     3012 | 2024-09-20 | ALTERNATE aTTaX   | L   | 0.105      | -            | -                | -                | -         |    -1.19 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            4 |     3233 | 2024-09-13 | Apogee            | L   | 0.059      | -            | -                | -                | -         |    -1.21 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            3 |     3272 | 2024-09-12 | ex-Enterprise     | L   | 0.051      | -            | -                | -                | -         |    -0.96 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            2 |     3392 | 2024-09-07 | PeeP              | L   | 0.020      | -            | -                | -                | -         |    -0.53 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|            1 |     3452 | 2024-09-05 | CPH Wolves        | L   | 0.007      | -            | -                | -                | -         |    -0.15 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,602.03)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.540 | $13,757.00     | $7,424.66       |
| 2024-10-08 |      0.225 | $1,000.00      | $224.67         |
| 2024-09-22 |      0.120 | $7,928.00      | $952.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
