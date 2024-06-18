### Roster Details<br />
Team Name: The MongolZ<br />
Roster: 910, bLitz, mzinho, Senzu, Techno<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [1]( ../standings_asia.md)<br />
Final Rank Value:  1819.5<br />
<br />
Final Rank Value (1819.5) = Starting Rank Value (1953.1) + Head To Head Adjustments (-133.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.994[<sup>1</sup>](#table2)
- Bounty Collected: 0.638[<sup>2</sup>](#table1)
- Opponent Network: 0.425[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.764<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1953.1
- 400 + ( ( 0.764 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1953.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |       56 | 2024-06-15 | Falcons           | L   | 1.000      | -            | -                | -                | -         |   -25.63 | 910, bLitz, mzinho, Senzu, Techno |
|           50 |       99 | 2024-06-14 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -29.51 | 910, bLitz, mzinho, Senzu, Techno |
|           49 |      110 | 2024-06-14 | Party Astronauts  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.28 | 910, bLitz, mzinho, Senzu, Techno |
|           48 |      241 | 2024-06-09 | Ninjas in Pyjamas | W   | 1.000      | 0.715        | 0.315 (0.225)    | 0.497 (0.356)    | 1 (1.000) |     6.53 | 910, bLitz, mzinho, Senzu, Techno |
|           47 |      319 | 2024-06-08 | Astralis          | W   | 1.000      | 0.715        | 0.533 (0.381)    | 0.501 (0.358)    | 1 (1.000) |    15.52 | 910, bLitz, mzinho, Senzu, Techno |
|           46 |      431 | 2024-06-06 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -16.21 | 910, bLitz, mzinho, Senzu, Techno |
|           45 |      445 | 2024-06-06 | Ninjas in Pyjamas | W   | 1.000      | 0.715        | 0.315 (0.225)    | 0.497 (0.356)    | 1 (1.000) |     6.18 | 910, bLitz, mzinho, Senzu, Techno |
|           44 |      463 | 2024-06-06 | HEROIC            | W   | 1.000      | 0.715        | 0.354 (0.253)    | 0.545 (0.390)    | 1 (1.000) |     9.04 | 910, bLitz, mzinho, Senzu, Techno |
|           43 |      498 | 2024-06-05 | ENCE              | W   | 1.000      | 0.715        | 0.229 (0.163)    | -                | 1 (1.000) |     1.86 | 910, bLitz, mzinho, Senzu, Techno |
|           42 |      510 | 2024-06-05 | Sashi             | W   | 1.000      | 0.715        | -                | 1.000 (0.715)    | 1 (1.000) |     1.16 | 910, bLitz, mzinho, Senzu, Techno |
|           41 |      592 | 2024-06-02 | BLEED             | W   | 1.000      | 0.500        | 0.347 (0.174)    | 0.946 (0.473)    | 1 (1.000) |     1.36 | 910, bLitz, mzinho, Senzu, Techno |
|           40 |      632 | 2024-06-01 | BLEED             | W   | 1.000      | 0.500        | 0.347 (0.174)    | 0.946 (0.473)    | 1 (1.000) |     1.21 | 910, bLitz, mzinho, Senzu, Techno |
|           39 |      711 | 2024-05-29 | Aurora            | W   | 1.000      | 0.500        | 0.526 (0.263)    | 0.874 (0.437)    | 1 (1.000) |     4.04 | 910, bLitz, mzinho, Senzu, Techno |
|           38 |      732 | 2024-05-28 | Gaimin Gladiators | W   | 1.000      | 0.500        | -                | 0.632 (0.316)    | -         |     0.65 | 910, bLitz, mzinho, Senzu, Techno |
|           37 |     1005 | 2024-05-18 | ATOX              | W   | 0.994      | -            | -                | -                | -         |     0.20 | 910, bLitz, mzinho, Senzu, Techno |
|           36 |     1041 | 2024-05-17 | Chinggis Warriors | W   | 0.986      | -            | -                | -                | -         |     0.06 | 910, bLitz, mzinho, Senzu, Techno |
|           35 |     1309 | 2024-05-08 | Virtus.pro        | L   | 0.930      | -            | -                | -                | -         |   -18.74 | 910, bLitz, mzinho, Senzu, Techno |
|           34 |     1520 | 2024-04-28 | Vitality          | L   | 0.861      | -            | -                | -                | -         |   -10.15 | 910, bLitz, mzinho, Senzu, Techno |
|           33 |     1597 | 2024-04-25 | G2                | W   | 0.841      | 0.889        | 0.756 (0.565)    | 0.508 (0.380)    | -         |    14.76 | 910, bLitz, mzinho, Senzu, Techno |
|           32 |     1615 | 2024-04-24 | Falcons           | W   | 0.835      | 0.889        | 0.381 (0.282)    | -                | -         |     4.93 | 910, bLitz, mzinho, Senzu, Techno |
|           31 |     1740 | 2024-04-19 | Rare Atom         | W   | 0.802      | -            | -                | -                | -         |     0.03 | 910, bLitz, mzinho, Senzu, Techno |
|           30 |     1790 | 2024-04-18 | TYLOO             | W   | 0.795      | -            | -                | -                | -         |     0.09 | 910, bLitz, mzinho, Senzu, Techno |
|           29 |     1800 | 2024-04-18 | Rare Atom         | W   | 0.794      | -            | -                | -                | -         |     0.03 | 910, bLitz, mzinho, Senzu, Techno |
|           28 |     2227 | 2024-04-03 | Lynn Vision       | W   | 0.695      | -            | -                | -                | -         |     0.51 | 910, bLitz, mzinho, Senzu, Techno |
|           27 |     2241 | 2024-04-03 | LYG               | W   | 0.693      | -            | -                | -                | -         |     0.05 | 910, bLitz, mzinho, Senzu, Techno |
|           26 |     2269 | 2024-04-02 | ATOX              | W   | 0.688      | -            | -                | -                | -         |     0.13 | 910, bLitz, mzinho, Senzu, Techno |
|           25 |     2273 | 2024-04-02 | LYG               | L   | 0.687      | -            | -                | -                | -         |   -21.60 | 910, bLitz, mzinho, Senzu, Techno |
|           24 |     2422 | 2024-03-22 | paiN              | L   | 0.616      | -            | -                | -                | -         |   -16.21 | 910, bLitz, mzinho, Senzu, Techno |
|           23 |     2444 | 2024-03-21 | Vitality          | L   | 0.609      | -            | -                | -                | -         |    -8.13 | 910, bLitz, mzinho, Senzu, Techno |
|           22 |     2455 | 2024-03-21 | Natus Vincere     | L   | 0.607      | -            | -                | -                | -         |    -8.90 | 910, bLitz, mzinho, Senzu, Techno |
|           21 |     2474 | 2024-03-20 | Legacy            | W   | 0.601      | -            | -                | -                | -         |     0.24 | 910, bLitz, mzinho, Senzu, Techno |
|           20 |     2491 | 2024-03-19 | Lynn Vision       | W   | 0.594      | -            | -                | -                | -         |     0.32 | 910, bLitz, mzinho, Senzu, Techno |
|           19 |     2497 | 2024-03-18 | AMKAL             | W   | 0.589      | -            | -                | -                | -         |     0.28 | 910, bLitz, mzinho, Senzu, Techno |
|           18 |     2520 | 2024-03-17 | Gaimin Gladiators | L   | 0.582      | -            | -                | -                | -         |   -18.01 | 910, bLitz, mzinho, Senzu, Techno |
|           17 |     2532 | 2024-03-17 | Eternal Fire      | L   | 0.581      | -            | -                | -                | -         |   -12.24 | 910, bLitz, mzinho, Senzu, Techno |
|           16 |     2965 | 2024-02-27 | Lynn Vision       | W   | 0.458      | -            | -                | -                | -         |     0.19 | 910, bLitz, mzinho, Senzu, Techno |
|           15 |     3001 | 2024-02-25 | FlyQuest          | W   | 0.446      | -            | -                | -                | -         |     0.61 | 910, bLitz, mzinho, Senzu, Techno |
|           14 |     3007 | 2024-02-25 | MAG               | W   | 0.445      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|           13 |     3491 | 2024-02-02 | ENCE              | L   | 0.289      | -            | -                | -                | -         |    -8.28 | 910, bLitz, mzinho, Senzu, Techno |
|           12 |     3531 | 2024-02-01 | Spirit            | L   | 0.281      | -            | -                | -                | -         |    -4.05 | 910, bLitz, mzinho, Senzu, Techno |
|           11 |     3542 | 2024-01-31 | FURIA             | W   | 0.276      | -            | -                | -                | -         |     1.44 | 910, bLitz, mzinho, Senzu, Techno |
|           10 |     3589 | 2024-01-28 | Lynn Vision       | W   | 0.254      | -            | -                | -                | -         |     0.11 | 910, bLitz, mzinho, Senzu, Techno |
|            9 |     3591 | 2024-01-28 | NKT               | W   | 0.253      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            8 |     3601 | 2024-01-27 | TYLOO             | L   | 0.248      | -            | -                | -                | -         |    -7.81 | 910, bLitz, mzinho, Senzu, Techno |
|            7 |     3619 | 2024-01-26 | TYLOO             | W   | 0.242      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            6 |     3626 | 2024-01-26 | The Huns          | W   | 0.240      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            5 |     3630 | 2024-01-26 | TYLOO             | W   | 0.240      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            4 |     3631 | 2024-01-25 | ACME              | W   | 0.239      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            3 |     3741 | 2024-01-21 | ATOX              | W   | 0.206      | -            | -                | -                | -         |     0.02 | 910, bLitz, mzinho, Senzu, Techno |
|            2 |     3832 | 2024-01-19 | MungYu            | W   | 0.194      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            1 |     3840 | 2024-01-19 | NKT               | W   | 0.193      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($296,641.43)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.99) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-09 |      1.000 | $200,000.00    | $200,000.00     |
| 2024-06-02 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      0.956 | $23,500.00     | $22,454.92      |
| 2024-03-31 |      0.676 | $20,000.00     | $13,526.23      |
| 2024-02-02 |      0.290 | $4,500.00      | $1,305.72       |
| 2024-01-28 |      0.254 | $25,000.00     | $6,354.55       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
