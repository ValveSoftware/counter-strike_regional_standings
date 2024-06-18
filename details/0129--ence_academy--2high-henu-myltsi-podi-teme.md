### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, HENU, myltsi, podi, teme<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [129](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  771.5<br />
<br />
Final Rank Value (771.5) = Starting Rank Value (798.1) + Head To Head Adjustments (-26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 798.1
- 400 + ( ( 0.196 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 798.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1355 | 2024-05-06 | Permitta        | L   | 0.914      | -            | -                | -                | -         |    -7.82 | 2high, HENU, myltsi, podi, teme |
|           19 |     1366 | 2024-05-05 | Heimo           | L   | 0.909      | -            | -                | -                | -         |   -16.94 | 2high, HENU, myltsi, podi, teme |
|           18 |     1375 | 2024-05-05 | jefet           | W   | 0.908      | 0.306        | 0.002 (0.000)    | 0.031 (0.009)    | 0 (0.000) |     5.46 | 2high, HENU, myltsi, podi, teme |
|           17 |     1392 | 2024-05-04 | TMVG            | W   | 0.901      | 0.306        | 0.000 (0.000)    | 0.011 (0.003)    | 0 (0.000) |     4.44 | 2high, HENU, myltsi, podi, teme |
|           16 |     1410 | 2024-05-03 | Nexus           | W   | 0.894      | 0.435        | 0.012 (0.005)    | 0.397 (0.154)    | 0 (0.000) |    17.17 | 2high, HENU, myltsi, podi, teme |
|           15 |     1440 | 2024-05-01 | Enterprise      | L   | 0.883      | -            | -                | -                | -         |    -8.24 | 2high, HENU, myltsi, podi, teme |
|           14 |     1460 | 2024-05-01 | Sampi           | L   | 0.880      | -            | -                | -                | -         |    -6.16 | HENU, myltsi, podi, S1rva, teme |
|           13 |     1478 | 2024-04-30 | Endpoint        | L   | 0.874      | -            | -                | -                | -         |    -8.31 | HENU, myltsi, podi, S1rva, teme |
|           12 |     1488 | 2024-04-29 | RUSH B          | L   | 0.870      | -            | -                | -                | -         |   -10.78 | HENU, myltsi, podi, S1rva, teme |
|           11 |     1519 | 2024-04-28 | Heimo           | L   | 0.861      | -            | -                | -                | -         |   -17.83 | HENU, myltsi, podi, S1rva, teme |
|           10 |     1651 | 2024-04-22 | ALTERNATE aTTaX | L   | 0.821      | -            | -                | -                | -         |    -8.48 | HENU, myltsi, podi, S1rva, teme |
|            9 |     1698 | 2024-04-20 | SINNERS         | W   | 0.808      | 0.371        | 0.045 (0.014)    | 0.782 (0.234)    | 0 (0.000) |    21.68 | HENU, myltsi, podi, S1rva, teme |
|            8 |     1753 | 2024-04-19 | Viperio         | L   | 0.800      | -            | -                | -                | -         |   -18.11 | HENU, myltsi, podi, S1rva, teme |
|            7 |     1801 | 2024-04-18 | MOUZ NXT        | L   | 0.794      | -            | -                | -                | -         |    -4.54 | HENU, myltsi, podi, S1rva, teme |
|            6 |     1863 | 2024-04-16 | 1WIN            | L   | 0.782      | -            | -                | -                | -         |    -6.82 | HENU, myltsi, podi, S1rva, teme |
|            5 |     1882 | 2024-04-15 | Sampi           | W   | 0.775      | 0.371        | 0.045 (0.013)    | 0.837 (0.240)    | 0 (0.000) |    17.68 | HENU, myltsi, podi, S1rva, teme |
|            4 |     1885 | 2024-04-15 | Viperio         | W   | 0.774      | 0.143        | 0.003 (0.000)    | 0.056 (0.006)    | 0 (0.000) |     6.77 | HENU, myltsi, podi, S1rva, teme |
|            3 |     1958 | 2024-04-11 | Secret          | W   | 0.748      | 0.371        | 0.000 (0.000)    | 0.108 (0.030)    | 0 (0.000) |     5.46 | HENU, myltsi, podi, S1rva, teme |
|            2 |     3032 | 2024-02-24 | HAVU            | W   | 0.437      | 0.306        | 0.002 (0.000)    | 0.222 (0.030)    | 1 (0.437) |     6.43 | HENU, myltsi, podi, S1rva, teme |
|            1 |     3054 | 2024-02-24 | ex-sYnck        | W   | 0.434      | 0.306        | 0.000 (0.000)    | 0.077 (0.010)    | 1 (0.434) |     2.37 | HENU, myltsi, podi, S1rva, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,101.03)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      0.909 | $1,608.00      | $1,461.55       |
| 2024-02-24 |      0.437 | $3,748.00      | $1,639.48       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
